import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";
import Cookies from 'cookies'

const nextAuthOptions = (req, res) => {
  const cookiesSetter = new Cookies(req, res)

  return {
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET,
        profileUrl: "https://www.googleapis.com/oauth2/v1/userinfo?alt=json",
        profile: async (profile) => {
          const accountGoogleRequest = { id: profile.id, providerId: profile.id, name: profile.name, firstName: profile.family_name, lastName: profile.given_name, email: profile.email, imgUrl: profile.picture, };
          const response = await axios.post(process.env.BE_AUTH + "authenticate-google-with-jwt", accountGoogleRequest).
            catch(error => { throw new Error(error.response.data.message); });
          const cookies = response.headers['set-cookie']
          cookiesSetter.set(cookies)
          if (response) {
            const name = response.data.firstName && response.data.lastName
              ? `${response.data.firstName} ${response.data.lastName}` : `${response.data.email}`;
            return { jwt: response.data.jwtToken, id: response.data.idAccount, name: name, email: response.data.email, role: response.data.role };
          }
        },
      }),
      GithubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
        profile: async (profile) => {
          const accountGithubRequest = { id: profile.id, providerId: profile.id, name: profile.login, email: profile.email, imgUrl: profile.avatar_url };
          const response = await axios.post(process.env.BE_AUTH + "authenticate-github-with-jwt", accountGithubRequest)
            .catch(error => { throw new Error(error.response.data.message); });
          const cookies = response.headers['set-cookie']
          cookiesSetter.set(cookies)
          if (response) {
            const name = response.data.firstName && response.data.lastName ? `${response.data.firstName} ${response.data.lastName}` : `${response.data.email}`;
            return { jwt: response.data.jwtToken, id: response.data.idAccount, name: name, email: response.data.email, role: response.data.role };
          }
        },
      }),
      FacebookProvider({
        clientId: process.env.FACEBOOK_ID,
        clientSecret: process.env.FACEBOOK_SECRET,
        profile: async (profile) => {
          const accountFacebookRequest = { id: profile.id, providerId: profile.id, name: profile.name, email: profile.email, imgUrl: profile.picture.data.url };
          const response = await axios.post(process.env.BE_AUTH + "authenticate-facebook-with-jwt", accountFacebookRequest)
            .catch(error => { throw new Error(error.response.data.message); });
          if (response) {
            const name = response.data.firstName && response.data.lastName
              ? `${response.data.firstName} ${response.data.lastName}` : `${response.data.email}`;
            return { jwt: response.data.jwtToken, id: response.data.idAccount, name: name, email: response.data.email, role: response.data.role };
          }
        },
      }),
      CredentialsProvider({
        name: "Credentials",
        authorize: async (credentials) => {
          const response = await axios.post(process.env.BE_AUTH + "authenticate", { password: credentials.password, email: credentials.email })
            .catch(error => { throw new Error(error.response.data.message); });
          const cookies = response.headers['set-cookie']
          cookiesSetter.set(cookies)
          if (response) {
            const name = response.data.firstName && response.data.lastName
              ? `${response.data.firstName} ${response.data.lastName}` : `${response.data.email}`;
            return { jwt: response.data.jwtToken, id: response.data.idAccount, name: name, email: response.data.email, role: response.data.role };
          }
        },
      }),
    ],
    session: { maxAge: process.env.jwtRefreshExpirationMs },
    callbacks: {
      async jwt(token, user) {
        if (user) {
          return { jwtExpires: Date.now() + parseInt(process.env.jwtExpirationMs), ...user }
        }
        if (Date.now() < token.jwtExpires) {
          return token
        }
        return refreshAccessToken(token, cookiesSetter)
      },
      async session(session, token) {
        session.user = token
        return session;
      },
      redirect: async (url, baseUrl) => {
        return Promise.resolve(url)
      }
    },
    pages: {
      signIn: '/account',
      error: '/account',
    },
  };
};

async function refreshAccessToken(token, cookiesSetter) {
  try {
    const response = await axios.post(process.env.BE_AUTH + "refresh-token", {}, {
      headers: { Cookie: "refreshToken=" + cookiesSetter.get('refreshToken') + ";" }
    });
    const cookies = response.headers['set-cookie']
    cookiesSetter.set(cookies)
    return {
      ...token,
      id: response.data.idAccount,
      jwtExpires: Date.now() + parseInt(process.env.jwtExpirationMs),
      jwt: response.data.jwtToken,
    }
  } catch (error) {
    throw new Error("Refresh Token error");
  }
}
export default (req, res) => {
  return NextAuth(req, res, nextAuthOptions(req, res));
};
