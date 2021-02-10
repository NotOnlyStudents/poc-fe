import Head from 'next/head'
import Link from 'next/link'
// import Date from '../components/date'
import Layout, { siteTitle } from 'components/layout'
import utilStyles from 'styles/utils.module.css'
// import { getSortedPostsData } from '../lib/posts'
import { GetStaticProps } from 'next'
import Amplify from 'aws-amplify'
import { AmplifySignIn, withAuthenticator } from '@aws-amplify/ui-react'

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