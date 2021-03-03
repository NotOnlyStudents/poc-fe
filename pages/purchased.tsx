import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from 'react';
import { CognitoUser } from "@aws-amplify/auth"
import { withSSRContext } from 'aws-amplify'
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components'

import Layout, { siteTitle } from 'components/layout'
import { useAuthContext } from "context/authContext"
import utilStyles from 'styles/utils.module.css'
import Cart from 'types/Cart'

export default function Purchased({
  _authState,
  _username
}: {
  _authState: AuthState,
  _username: string | undefined
}) {
  const { setAuthState, setUsername } = useAuthContext();

  useEffect(() => {
    setAuthState(_authState);
    setUsername(_username);
  }, []);

  return (
    <Layout>
      <Head>
        <title>Purchase - {siteTitle}</title>
      </Head>
      <h1 className={utilStyles.heading2Xl}>Purchased!</h1>
      <Link href="/">
        <button className="flex font-semibold text-indigo-600 active:text-indigo-500 hover:text-indigo-900 text-sm">
          <svg className="fill-current mr-2 w-4" viewBox="0 0 448 512">
            <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
          </svg>
          Return to cart
        </button>
      </Link>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { Auth } = withSSRContext(context);

  try {
    const user: CognitoUser = await Auth.currentAuthenticatedUser();
    const _username: string = user.getUsername();

    const response = await fetch(`${process.env.API_BASE_URL}/dev/empty-cart/${_username}`, { method: 'PATCH' });
    const _data = await response.json();
    
    return {
      props: {
        _authState: AuthState.SignedIn,
        _username
      }
    }
  } catch (err) {
    return {
      props: {
        _authState: AuthState.SignedIn
      }
    }
  }  
}