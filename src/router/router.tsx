import { createBrowserRouter } from 'react-router-dom'
import { Controlled, Layout, Uncontrolled } from '@pages/index'

export const enum Routes {
  MAIN = '/',
  CONTROLLED = 'controlled',
  UNCONTROLLED = 'uncontrolled',
}

const router = createBrowserRouter([
  {
    path: Routes.MAIN,
    element: <Layout />,
    children: [
      {
        path: Routes.CONTROLLED,
        element: <Controlled />,
      },
      {
        path: Routes.UNCONTROLLED,
        element: <Uncontrolled />,
      },
    ],
  },
])

export default router
