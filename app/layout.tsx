import Header from '@core/components/header/Header'
import ThemeProvider from '@core/components/theme-provider/ThemeProvider'
import FavoriteProvider from '@core/components/favorite-provider/FavoriteProvider'
import FavoriteControl from '@core/components/favorite-control/FavoriteControl'
import '../src/index.css'

export const metadata = {
  title: 'Star Wars Next.js',
  description: 'Next.Js App Router',
}

interface Props {
  children: React.ReactNode
  people: React.ReactNode
  details: React.ReactNode
}

export default function RootLayout({ children, people, details }: Props) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <FavoriteProvider>
            <Header />
            <div className="wrapper">
              {people}
              {details}
              {children}
            </div>
            <FavoriteControl />
          </FavoriteProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
