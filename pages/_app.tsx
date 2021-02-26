import { AppProps } from 'next/app'
import { AuthContextProvider } from 'context/authContext'
import { Amplify, Auth } from 'aws-amplify'

import 'styles/global.css'

Amplify.configure({
  Auth: {
    region: process.env.USER_POOL_REGION,
    userPoolId: process.env.USER_POOL_ID,
    userPoolWebClientId: process.env.USER_POOL_CLIENT_ID,

    // Configuration for cookie storage
    // see https://aws-amplify.github.io/docs/js/authentication
    cookieStorage: {
      // REQUIRED - Cookie domain
      // This should be the subdomain in production as
      // the cookie should only be present for the current site
      domain: process.env.AUTH_COOKIE_DOMAIN,
      // OPTIONAL - Cookie path
      path: "/",
      // OPTIONAL - Cookie expiration in days
      expires: 7,
      // OPTIONAL - Cookie secure flag
      // Either true or false, indicating whether the cookie
      // transmission requires a secure protocol (https).
      // The cookie should be set to secure in production.
      secure: false,
    }
  },
  ssr: true
});

// Auth.configure({
//   oauth: {
//     domain: process.env.IDP_DOMAIN,
//     scope: ["email", "openid"],
//     // Where users get sent after logging in.
//     // This has to be set to be the full URL of the /token page.
//     redirectSignIn: process.env.REDIRECT_SIGN_IN,
//     // Where users are sent after they sign out.
//     redirectSignOut: process.env.REDIRECT_SIGN_OUT,
//     responseType: "token"
//   }
// });

export default function App({ Component, pageProps }: AppProps) {
  return(
    <AuthContextProvider>
      <Component {...pageProps} />
    </AuthContextProvider>    
  );
}