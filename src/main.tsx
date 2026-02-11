import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import "./index.css";
import Layout from "./components/layout";

const Home = lazy(() => import("./pages/home"));
const ContactUs = lazy(() => import("./pages/contact-us"));
const NotFound = lazy(() => import("./pages/not-found"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Suspense fallback={<Gatherer />}>
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>
);

function Gatherer() {
  return (
    <div className="grid place-items-center space-y-3">
      <p>Chargement en cours...</p>
    </div>
  );
}
