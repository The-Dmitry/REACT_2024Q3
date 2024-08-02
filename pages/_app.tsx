import ThemeProvider from '@core/components/theme-provider/ThemeProvider'
import '../src/index.css'
import Layout from '@core/components/layout/Layout'
import FavoriteProvider from '@core/components/favorite-provider/FavoriteProvider'
import FavoriteControl from '@core/components/favorite-control/FavoriteControl'

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <FavoriteProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <FavoriteControl />
      </FavoriteProvider>
    </ThemeProvider>
  )
}
