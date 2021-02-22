import { useState, useEffect } from 'react';
import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from 'components/layout'
import utilStyles from 'styles/utils.module.css'
import { GetServerSideProps } from "next"
import Amplify from "@aws-amplify/core"
import Auth, { CognitoUser } from "@aws-amplify/auth"
import { withSSRContext } from 'aws-amplify'
import { AmplifyAuthenticator, AmplifySignUp, AmplifySignIn, AmplifySignOut } from '@aws-amplify/ui-react'
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components'

import CheckoutButton from "components/CheckoutButton"

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

Auth.configure({
  oauth: {
    domain: process.env.IDP_DOMAIN,
    scope: ["email", "openid"],
    // Where users get sent after logging in.
    // This has to be set to be the full URL of the /token page.
    redirectSignIn: process.env.REDIRECT_SIGN_IN,
    // Where users are sent after they sign out.
    redirectSignOut: process.env.REDIRECT_SIGN_OUT,
    responseType: "token"
  }
});

export default function Home() {
  const [authState, setAuthState] = useState<AuthState>();
  const [user, setUser] = useState<object | undefined>();

  useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      console.log(nextAuthState, authData);
      setAuthState(nextAuthState);
      setUser(authData);
    });
  }, []);

  return (
    <Layout>
      <Head>
        <title>Chart - {siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <ul>
          <li>
            <div>
              <h2>Bread</h2>            
              <h3>$10.00</h3>
              <p>Quantity: 2</p>
            </div>
          </li>
        </ul>        
        { authState === AuthState.SignedIn && user ? (
          <>
            <Link href={"/checkout"}>
              <a>Checkout</a>
            </Link>
            <AmplifySignOut />
          </>
        ) : (
            <AmplifyAuthenticator usernameAlias={"email"}>
              <AmplifySignUp
                slot="sign-up"
                usernameAlias="email"
                formFields={[
                  { type: "email" },
                  { type: "password" }
                ]}
              />
              <AmplifySignIn slot="sign-in" usernameAlias="email" />
            </AmplifyAuthenticator>
        )}
      </section>
    </Layout>
  )
}

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const { Auth } = withSSRContext(context)
//   try {
//     const user: CognitoUser = await Auth.currentAuthenticatedUser();

//     return {
//       props: {
//         authenticated: true,
//         username: user.getUsername()
//       }
//     }
//   } catch (err) {
//     return {
//       props: {
//         authenticated: false
//       }
//     }
//   }
// }