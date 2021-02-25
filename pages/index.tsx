import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react';
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
  _user
}: {
  _authState: AuthState,
  _user: string | undefined
}) {
  const { authState, user, setAuthState, setUser} = useAuthContext();
  const { cart } = useCart(1);

  useEffect(() => {
    setAuthState(_authState);
    setUser(_user ? JSON.parse(_user) : undefined);

    return onAuthUIStateChange((nextAuthState: AuthState, authData: CognitoUser) => {
      setAuthState(nextAuthState);
      setUser(authData);
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
    return "€".concat(
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
      <div className="bg-gray-100">
        <div className="container mx-auto mt-10">
          <div className="flex shadow-md my-10">
            <div id="main" className="w-3/4 bg-white px-10 py-10">
              <div className="flex justify-between border-b pb-8">
                <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                <h2 className="font-semibold text-2xl">{cart ? cart.products.length : null} Items</h2>
              </div>
              <div className="flex mt-10 mb-5">
                <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
              </div>
              {cart ? (
                cart.products.map((product: Product) => {
                  return <CartItem 
                    key={product.name}
                    product={product}
                    priceFormatter={priceFormatter}
                  />
                })
              ) : null}
              {/* <a href="#" className="flex font-semibold text-indigo-600 text-sm mt-10">
                <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512">
                  <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                </svg>
                Continue Shopping
              </a> */}
            </div>
            <div id="summary" className="w-1/4 px-8 py-10">
              <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
              <div className="flex justify-between mt-10 mb-5">
                <span className="font-semibold text-sm uppercase">Items {cart ? cart.products.length : null}</span>
                <span className="font-semibold text-sm">{cart ? priceFormatter(priceSum(cart)) : null}</span>
              </div>
              <div className="border-t mt-8">
                <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                  <span>Total cost</span>
                  <span>{cart ? priceFormatter(priceSum(cart)) : null}</span>
                </div>
                {authState === AuthState.SignedIn && user ? (
                  <>
                    <CheckoutButton />
                    <AmplifySignOut />
                  </>
                ) : (
                  <Link href="/login">
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
