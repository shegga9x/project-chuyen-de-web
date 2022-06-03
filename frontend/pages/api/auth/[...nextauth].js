import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import GithubProvider from 'next-auth/providers/github'
import CredentialsProvider from "next-auth/providers/credentials";
import axios from 'axios'

const nextAuthOptions = (req, res) => {
  return {
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET,
        profileUrl: 'https://www.googleapis.com/oauth2/v1/userinfo?alt=json',
        profile: async (profile) => {
          //bước này lấy được profile account google và mình tùy chỉnh theo ý mình
          // => gọi api check user ở bước này là oke lun

          const accountGoogleRequest = { id: profile.id, providerId: profile.id, name: profile.name, firstName: profile.family_name, lastName: profile.given_name, email: profile.email, imgUrl: profile.picture };

          // gọi api check user, không cần dữ liệu trả về
          await axios.post("http://localhost:4000/api/accounts/check-user-login-google", accountGoogleRequest).
            catch(e => {
              const errorMessage = e.response.data.message
              // Redirecting to the login page with error message in the URL
              throw new Error(errorMessage + '&email=' + credentials.email)
            })

          console.log("---account----")

          console.log(accountGoogleRequest);

          return {
            ...accountGoogleRequest
          }
        }
      }),
      GithubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET
      }),
      CredentialsProvider({
        name: 'Credentials',
        authorize: async (credentials) => {
          try {
            const response = await axios.post('http://localhost:4000/api/accounts/authenticate',
              {
                password: credentials.password,
                email: credentials.email
              })

            if (response) {
              // console.log('----user----')
              // console.log(user)
              const name = (response.data.firstName && response.data.lastName) ? `${response.data.firstName} ${response.data.lastName}` : `${response.data.email}`
              return { id: response.data.idAccount, name: name, email: response.data.email, jwtToken: response.data.jwtToken, refreshToken: response.data.refreshToken };
            }
          } catch (e) {
            const errorMessage = e.response.data.message
            // Redirecting to the login page with error message in the URL
            throw new Error(errorMessage + '&email=' + credentials.email)
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
      async jwt(token, user, account) {
        let firstTime = false;
        // có thể lấy jwt ở đây
        // chỉ chạy lúc đăng nhập
        if (account) {
          firstTime = true;
          console.log('----account----')
          console.log(account.provider)
          if (account.provider === 'google') {
            //bước này khi đã nhận được user trả về từ api check user
            //gọi pt login with jwt ở đây
            const userGetFormApi = await axios.post('http://localhost:4000/api/accounts/authenticate-with-jwt', { ...user }, { withCredentials: true })
              .catch(e => {
                const errorMessage = e.response.data.message
                // Redirecting to the login page with error message in the URL
                throw new Error(errorMessage + '&email=' + credentials.email)
              })
            // console.log("----userGetFormApi----")
            // console.log(userGetFormApi)
            const name = (userGetFormApi.data.firstName && userGetFormApi.data.lastName) ? `${userGetFormApi.data.firstName} ${userGetFormApi.data.lastName}` : `${userGetFormApi.data.email}`
            user = { id: userGetFormApi.data.idAccount, name: name, email: userGetFormApi.data.email, jwtToken: userGetFormApi.data.jwtToken, refreshToken: userGetFormApi.data.refreshToken};
          }
        }

        // chỉ chạy lúc đăng nhập
        if (user) {
          firstTime = true;
          if (user.jwtToken !== undefined) {
            token.jwtToken = user.jwtToken
            token.refreshToken = user.refreshToken
            // token.expireToken = user.expireToken
          }
          token.id = user.id
        }

        // chạy refresh token ở đây
        // if (firstTime == false) {
        //   let shouldRefreshTime = (new Date().getTime() / 1000) - (new Date(token.expireToken).getTime() / 1000);
        //   if (shouldRefreshTime > 30) {
        //     let account = await axios.post("http://localhost:4000/api/accounts/refresh-token", token.refreshToken, { headers: { 'Content-Type': 'text/plain' } })
        //     if (account) {
        //       token.jwtToken = account.data.jwtToken;
        //       token.refreshToken = account.data.refreshToken;
        //       token.expireToken = new Date();
        //     }
        //   }
        // }

        return token;
      },
      async session(session, token) {
        // có thể lấy jwt ở đây
        // chạy lại mỗi request
        console.log(token)
        if (token.jwtToken !== undefined) {
          session.user.jwtToken = token.jwtToken;
          session.user.refreshToken = token.refreshToken;
          session.user.expireToken = token.expireToken;
        }
        session.user.id = token.id
        // console.log(session.user);
        return session
      }
    },
    pages: {
      error: '/account' // Changing the error redirect page to home page
    }
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (req, res) => {
  return NextAuth(req, res, nextAuthOptions(req, res))
}


