import ThemeProvider from '@core/components/theme-provider/ThemeProvider'
import '../src/index.css'
import Layout from '@core/components/layout/Layout'

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}
