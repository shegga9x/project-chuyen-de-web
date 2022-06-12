import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

const nextAuthOptions = (req, res) => {
  return {
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET,
        profileUrl: "https://www.googleapis.com/oauth2/v1/userinfo?alt=json",
        profile: async (profile) => {
          //bước này lấy được profile account google và mình tùy chỉnh theo ý mình
          // => gọi api check user ở bước này là oke lun

          const accountGoogleRequest = {
            id: profile.id,
            providerId: profile.id,
            name: profile.name,
            firstName: profile.family_name,
            lastName: profile.given_name,
            email: profile.email,
            imgUrl: profile.picture,
          };

          // gọi api check user, không cần dữ liệu trả về
          await axios.post("http://localhost:4000/api/accounts/check-user-login-google", accountGoogleRequest).catch(
            e => {
              console.log(e)
              const errorMessage = e.response === undefined ? 'error connect' : 'e.response.data.message'
              accountGoogleRequest.error = errorMessage;
            }
          )

          console.log("profile google")

          //console.log(accountGoogleRequest);

          return {
            ...accountGoogleRequest,
          };
        },
      }),
      GithubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
        profile: async (profile) => {
          console.log(profile)
          const accountGithubRequest = { id: profile.id, providerId: profile.id, name: profile.login, email: profile.email, imgUrl: profile.avatar_url };
          // gọi api check user, không cần dữ liệu trả về
          await axios.post("http://localhost:4000/api/accounts/check-user-login-github", accountGithubRequest).catch(
            e => {
              console.log(e)
              const errorMessage = e.response === undefined ? 'error connect' : 'e.response.data.message'
              accountGithubRequest.error = errorMessage;
            }
          )

          //console.log('profile github')

          //console.log(accountGithubRequest);

          return {
            ...accountGithubRequest,
          };
        },
      }),
      FacebookProvider({
        clientId: process.env.FACEBOOK_ID,
        clientSecret: process.env.FACEBOOK_SECRET,
        profile: async (profile) => {
          const accountFacebookRequest = { id: profile.id, providerId: profile.id, name: profile.name, email: profile.email, imgUrl: profile.picture.data.url };
          // gọi api check user, không cần dữ liệu trả về
          await axios.post("http://localhost:4000/api/accounts/check-user-login-facebook", accountFacebookRequest).catch(
            e => {
              console.log(e)
              const errorMessage = e.response === undefined ? 'error connect' : 'e.response.data.message'
              accountFacebookRequest.error = errorMessage;
            }
          )

          console.log('profile facebook')

          //console.log(accountFacebookRequest);

          return {
            ...accountFacebookRequest,
          };
        },
      }),
      CredentialsProvider({
        name: "Credentials",
        authorize: async (credentials) => {
          try {
            const response = await axios.post(
              "http://localhost:4000/api/accounts/authenticate",
              {
                password: credentials.password,
                email: credentials.email,
              }
            );

            if (response) {
              // //console.log('----user----')
              // //console.log(user)
              const name =
                response.data.firstName && response.data.lastName
                  ? `${response.data.firstName} ${response.data.lastName}`
                  : `${response.data.email}`;
              return {
                id: response.data.idAccount,
                name: name,
                email: response.data.email,
              };
            }
          } catch (e) {
            console.log(e);
            const errorMessage = e.response === undefined ? 'system error' : e.response.data.message
            // Redirecting to the login page with error message in the URL
            throw new Error(errorMessage)
          }
        },
      }),
    ],
    session: {
      jwt: true,
      maxAge: 60 * 30,
      updateAge: 60 * 30,
    },
    jwt: {
      secret: "asdcvbtjhm",
      maxAge: 60 * 30,
    },
    callbacks: {
      async jwt(token, user, account) {
        // có thể lấy jwt ở đây
        // chỉ chạy lúc đăng nhập
        if (account) {
          console.log('----user----')
          console.log(user)
          if (user.error !== undefined) {
            throw new Error(user.error + '&email=' + user.email);
          }
          if (account.provider === 'google') {
            const userGetFormApi = await axios.post('http://localhost:4000/api/accounts/authenticate-google-with-jwt', { ...user }, { withCredentials: true })
              .catch(e => {
                const errorMessage = e.response.data.message
                throw new Error(errorMessage + '&email=' + account.email)
              })
            const name = (userGetFormApi.data.firstName && userGetFormApi.data.lastName) ? `${userGetFormApi.data.firstName} ${userGetFormApi.data.lastName}` : `${userGetFormApi.data.email}`
            user = { id: userGetFormApi.data.idAccount, name: name, email: userGetFormApi.data.email };
          } else if (account.provider === 'github') {
            const userGetFormApi = await axios.post('http://localhost:4000/api/accounts/authenticate-github-with-jwt', { ...user }, { withCredentials: true })
              .catch(e => {
                const errorMessage = e.response.data.message
                throw new Error(errorMessage + '&email=' + account.email)
              })
            user = { id: userGetFormApi.data.idAccount, name: userGetFormApi.name, email: userGetFormApi.data.email };
          } else if (account.provider === 'facebook') {
            const userGetFormApi = await axios.post('http://localhost:4000/api/accounts/authenticate-facebook-with-jwt', { ...user }, { withCredentials: true })
              .catch(e => {
                const errorMessage = e.response.data.message
                throw new Error(errorMessage + '&email=' + account.email)
              })
            user = { id: userGetFormApi.data.idAccount, name: userGetFormApi.name, email: userGetFormApi.data.email };
          }
        }

        // chỉ chạy lúc đăng nhập
        if (user) {
          token.id = user.id
        }

        return token;
      },
      async session(session, token) {
        // có thể lấy jwt ở đây
        // chạy lại mỗi request
        //console.log(token)
        session.user.id = token.id;
        // //console.log(session.user);
        return session;
      },
    },
    pages: {
      error: "/account", // Changing the error redirect page to home page
    },
  };
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (req, res) => {
  return NextAuth(req, res, nextAuthOptions(req, res));
};
