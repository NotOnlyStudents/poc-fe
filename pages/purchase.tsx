import Head from 'next/head'
import Layout, { siteTitle } from 'components/layout'
import utilStyles from 'styles/utils.module.css'
import { withAuthenticator } from '@aws-amplify/ui-react'

function Purchase() {
  return (
    <Layout>
      <Head>
        <title>Purchase - {siteTitle}</title>
      </Head>
      <h1 className={utilStyles.heading2Xl}>Purchased!</h1>
    </Layout>
  )
}

export default withAuthenticator(Purchase);
