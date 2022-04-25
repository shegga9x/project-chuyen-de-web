import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import GithubProvider from 'next-auth/providers/github'
import CredentialsProvider from "next-auth/providers/credentials";
import axios from 'axios'

async function refreshAccessToken() {
  try {
    // Get a new set of tokens with a refreshToken
    const user = await axios.post('http://localhost:4000/accounts/refresh-token', {}, { withCredentials: true });
    return {
      expireToken: user.data.expireToken,
      refreshToken: user.data.refreshToken,
      id: user.data.idAccount
    }
  } catch (error) {
    return {
      error: "RefreshAccessTokenError",
    }
  }
}

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),
    CredentialsProvider({
      name: 'Credentials',
      authorize: async (credentials) => {
        try {
          const user = await axios.post('http://localhost:4000/accounts/authenticate',
            {
              password: credentials.password,
              email: credentials.email
            },
            {
              headers: {
                accept: '*/*',
                'Content-Type': 'application/json'
              }
            })

          if (user) {
            console.log('----user----')
            console.log(user)
            const name = (user.data.firstName && user.data.lastName) ? `${user.data.firstName} ${user.data.lastName}` : `${user.data.email}`
            return { id: user.data.idAccount, name: name, email: user.data.email, jwtToken: user.data.jwtToken, refreshToken: user.data.refreshToken, expireToken: user.data.expireToken };
          }
        } catch (e) {
          const errorMessage = e.response.data.message
          // Redirecting to the login page with error message in the URL
          // throw new Error(errorMessage + '&email=' + credentials.email)
          alert(errorMessage);
        }
      }
    })
  ],
  session: {
    jwt: true,
    maxAge: 60 * 30,
    updateAge: 60 * 30
  },
  jwt: {
    secret: 'asdcvbtjhm',
    maxAge: 60 * 30
  },
  callbacks: {
    async jwt(token, user) {
      // có thể lấy jwt ở đây

      if (user) {
        if (user.jwtToken !== undefined) {
          token.jwtToken = user.jwtToken
          token.refreshToken = user.refreshToken
          token.expireToken = user.expireToken
        }
        token.id = user.id
      }

      // // If accessTokenExpiry is 24 hours, we have to refresh token before 24 hours pass.
      // const shouldRefreshTime = Math.round((token.expireToken - 60 * 60 * 1000) - Date.now());

      // // If the token is still valid, just return it.
      // if (shouldRefreshTime > 0) {
      //   return token;
      // }

      // // If the call arrives after 23 hours have passed, we allow to refresh the token.
      // token = refreshAccessToken();
      return token;
    },
    async session(session, token) {

      // có thể lấy jwt ở đây
      if (token.jwtToken !== undefined) {
        session.user.jwtToken = token.jwtToken
        // Here we pass accessToken to the client to be used in authentication with your API
        session.user.refreshToken = token.refreshToken;
        session.user.accessTokenExpiry = token.expireToken;
        session.error = token.error;
      }

      session.user.id = token.id
      return session
    }
  },
  pages: {
    error: '/' // Changing the error redirect page to home page
  }
})
