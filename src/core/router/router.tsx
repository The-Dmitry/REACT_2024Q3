import { createBrowserRouter } from "react-router-dom";
import { Details, Layout, NotFound } from "../../pages";
import ErrorBoundary from "../components/error-boundary/ErrorBoundary";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ErrorBoundary>
        <Layout />
      </ErrorBoundary>
    ),
    children: [
      {
        path: "/",
        element: <Details />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
