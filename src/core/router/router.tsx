import { createBrowserRouter } from 'react-router-dom'
import { Layout, Details, NotFound } from '@pages/index'
import ErrorBoundary from '@core/components/error-boundary/ErrorBoundary'

export const routes = [
  {
    path: '/',
    element: (
      <ErrorBoundary>
        <Layout />
      </ErrorBoundary>
    ),
    children: [
      {
        path: '/',
        element: <Details />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]

const router = createBrowserRouter(routes)

export default router
