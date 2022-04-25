import { Provider } from 'next-auth/client';
// import { useState } from 'react';
// import RefreshTokenHandler from '../components/refreshTokenHandler/refreshTokenHandler';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false


const MyApp = ({ Component, pageProps }) => {
  // const [interval, setInterval] = useState(0);
  return (
    <Provider session={pageProps.session}>
      {/* refetchInterval={interval} */}
      <Component {...pageProps} />
      {/* <RefreshTokenHandler setInterval={setInterval} /> */}
    </Provider>
  )
}

export default MyApp
