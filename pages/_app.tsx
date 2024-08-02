import ThemeProvider from '@core/components/theme-provider/ThemeProvider'
import '../src/index.css'
import Layout from '@core/components/layout/Layout'
import FavoriteProvider from '@core/components/favorite-provider/FavoriteProvider'
import FavoriteControl from '@core/components/favorite-control/FavoriteControl'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Star Wars NextJs</title>
      </Head>
      <ThemeProvider>
        <FavoriteProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <FavoriteControl />
        </FavoriteProvider>
      </ThemeProvider>
    </>
  )
}
