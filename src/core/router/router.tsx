import { createBrowserRouter } from 'react-router-dom'
import { Details, Layout, NotFound } from '../../pages'
import ErrorBoundary from '../components/error-boundary/ErrorBoundary'

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
