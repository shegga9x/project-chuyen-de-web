import { Provider } from "next-auth/client";
// import { useState } from 'react';
// import RefreshTokenHandler from '../components/refreshTokenHandler/refreshTokenHandler';
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

const MyApp = ({ Component, pageProps: { session, ...pageProps } }) => {
  return (
    <Provider session={session}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
