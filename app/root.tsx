import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'
import Header from './core/components/header/Header'
import FavoriteProvider from './core/components/favorite-provider/FavoriteProvider'
import ThemeProvider from './core/components/theme-provider/ThemeProvider'
import FavoriteControl from './core/components/favorite-control/FavoriteControl'
import './index.css'

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <FavoriteProvider>
        <Header />
        <Outlet />
        <FavoriteControl />
      </FavoriteProvider>
    </ThemeProvider>
  )
}
