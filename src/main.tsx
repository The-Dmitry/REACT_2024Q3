import React from 'react'
import ReactDOM from 'react-dom/client'
import router from './core/router/router.tsx'
import ThemeProvider from './core/components/theme-provider/ThemeProvider.tsx'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { store } from './redux/store.ts'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
)
