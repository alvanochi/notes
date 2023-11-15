import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Pages/App.jsx";
import "./index.css";
import AllItemContextProvider from "./Hooks/DataNotesContext.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./Pages/404.jsx";
import DetailNotes from "./Pages/DetailNotes.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/notes/:id",
    element: <DetailNotes />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AllItemContextProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </AllItemContextProvider>
);
