import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./Pages/HomePage.jsx";
import AnimePage from "./Pages/AnimePage.jsx";
import VideoPage from "./Pages/VideoPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/anime/:animeId",
    element: <AnimePage />,
  },
  {
    path: "/anime/:animeId/:order",
    element: <VideoPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
