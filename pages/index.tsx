import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from 'react';
import { GetServerSideProps } from "next"
import { CognitoUser } from "@aws-amplify/auth"
import { withSSRContext } from 'aws-amplify'
import { AmplifySignOut } from '@aws-amplify/ui-react'
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components'

import Layout, { siteTitle } from 'components/layout'
import utilStyles from 'styles/utils.module.css'
import { AuthContext, useAuthContext } from "context/authContext";
import CheckoutButton from "components/CheckoutButton"

export default function Home({
  _authState,
  _user
}: {
  _authState: AuthState,
  _user: string | undefined
}) {
  const { authState, user, setAuthState, setUser} = useAuthContext();

  useEffect(() => {
    setAuthState(_authState);
    setUser(_user ? JSON.parse(_user) : undefined);

    return onAuthUIStateChange((nextAuthState: AuthState, authData: CognitoUser) => {
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
        {authState === AuthState.SignedIn && user ? (
          <>
            <CheckoutButton />
            <AmplifySignOut />
          </>
        ) : (
            <Link href="/login">
              <a>Login to checkout</a>
            </Link>
          )}
      </section>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { Auth } = withSSRContext(context);
  try {
    const user: CognitoUser = await Auth.currentAuthenticatedUser();

    return {
      props: {
        _authState: AuthState.SignedIn,
        _user: JSON.stringify(user)
      }
    }
  } catch (err) {
    return {
      props: {
        _authState: AuthState.SignedOut
      }
    }
  }
}
