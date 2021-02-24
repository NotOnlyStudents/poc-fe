import Head from 'next/head'


const name = 'EmporioLambda'
export const siteTitle = 'EmporioLambda'

export default function Layout({children}: {
  children: React.ReactNode
}) {
  return (
    <>
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Emporio Lambda"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header>
        <img src="./images/logoEmporioLambda.png" />
      </header>
    </div>
      {children}
      </>
  )
}