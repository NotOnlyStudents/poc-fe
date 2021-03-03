import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from 'react';
import { GetServerSideProps } from "next"
import { CognitoUser } from "@aws-amplify/auth"
import { withSSRContext } from 'aws-amplify'
import { AmplifySignOut } from '@aws-amplify/ui-react'
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components'

import Layout, { siteTitle } from 'components/layout'
import CheckoutButton from "components/CheckoutButton"
import CartItem from "components/CartItem"
import { useAuthContext } from "context/authContext"
import Cart from "types/Cart"
import Product from "types/Product";
import { useCart } from "lib/useCart"

export default function Home({
  _authState,
  _username
}: {
  _authState: AuthState,
  _username: string | undefined
}) {
  const { authState, username, setAuthState, setUsername} = useAuthContext();
  const { cart } = useCart(username);

  useEffect(() => {
    setAuthState(_authState);
    setUsername(_username);

    return onAuthUIStateChange((nextAuthState: AuthState) => {      
      if (nextAuthState === AuthState.SignedOut) {
        setAuthState(nextAuthState);
        setUsername(undefined);
      }
    });
  }, []);

  const priceSum = (cart: Cart): number => {
    let totalPrice = 0;
    for (const product of cart.products) {
      totalPrice += product.price;
    }
    return totalPrice;
  }

  const priceFormatter = (price: number): string => {
    const priceString = price.toString();
    return price === 0 ? "€0.00" : "€".concat(
      priceString.substring(0, priceString.length - 2),
      ".",
      priceString.substr(priceString.length - 2, 2)
    ); 
  }

  return (
    <Layout>
      <Head>
        <title>Cart - {siteTitle}</title>
      </Head>
      <div>
        <div className="container md:mx-auto mt-10">
          <div className="md:flex rounded-b-xl md:rounded-xl shadow-lg border my-10">
            <div className="md:w-3/4 md:rounded-xl px-3 md:px-10 py-5 md:py-10">
              <div className="flex justify-between border-b pb-5 md:pb-8">
                <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                <h2 className="font-semibold text-2xl">{cart ? cart.products.length : 0} Items</h2>
              </div>
              <div className="flex mt-5 md:mt-10 mb-5">
                <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
              </div>
              {cart ? (
                cart.products.map((product: Product) => {
                  return (
                    <CartItem 
                      key={product.name}
                      product={product}
                      priceFormatter={priceFormatter}
                    />
                  )
                })
              ) : (
                <h2 className="font-semibold mt:10 md:mt-20 text-center text-2xl text-gray-300">
                  Empty cart
                </h2>
              )}
              {/* <a href="#" className="flex font-semibold text-indigo-600 text-sm mt-10">
                <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512">
                  <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                </svg>
                Continue Shopping
              </a> */}
            </div>
            <div id="summary" className="md:w-1/4 rounded-b-xl md:rounded-r-xl px-3 md:px-8 py-5 md:py-10 bg-gray-100">
              <h1 className="font-semibold text-2xl border-b pb-5 md:pb-8">Order Summary</h1>
              <div className="flex justify-between mt-3 md:mt-10 mb-3 md:mb-5">
                <span className="font-semibold text-sm uppercase">Items {cart ? cart.products.length : 0}</span>
                <span className="font-semibold text-sm">{cart ? priceFormatter(priceSum(cart)) : priceFormatter(0)}</span>
              </div>
              <div className="border-t md:mt-8">
                <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                  <span>Total cost</span>
                  <span>{cart ? priceFormatter(priceSum(cart)) : priceFormatter(0)}</span>
                </div>
                {authState === AuthState.SignedIn && username ? (
                  <>
                    <CheckoutButton cartID={username} />
                    <AmplifySignOut />
                  </>
                ) : (
                  <Link href="/authenticator">
                    <button className="bg-indigo-500 font-semibold hover:bg-opacity-80 active:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
                      Login to checkout
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
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
        _username: user.getUsername()
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
