import Head from 'next/head'
import Link from 'next/link'
// import Date from '../components/date'
import Layout, { siteTitle } from 'components/layout'
import utilStyles from 'styles/utils.module.css'
// import { getSortedPostsData } from '../lib/posts'
import { GetStaticProps } from 'next'
import Amplify from "@aws-amplify/core";
import Auth from "@aws-amplify/auth";
import { AmplifySignIn, withAuthenticator } from '@aws-amplify/ui-react'

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
    },
  }
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
  },
});

export default function Home({
  allPostsData
}: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) {
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
        <Link href={'/purchase'}>
          <a>Purchase</a>
        </Link>
      </section>
      {/* <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2> */}
        {/* <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br /> */}
              {/* <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small> */}
            {/* </li>
          ))}
        </ul> */}
      {/* </section> */}
    </Layout>
  )
}

// export const getStaticProps: GetStaticProps = async () => {
//   const allPostsData = getSortedPostsData()
//   return {
//     props: {
//       allPostsData
//     }
//   }
// }