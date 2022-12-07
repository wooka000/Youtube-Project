import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import NotFound from "./pages/NotFound";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import VideoDetail from "./pages/VideoDetail";
import Videos from "./pages/Videos";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElemen: <NotFound />,
    childeren: [
      { index: true, element: <Videos /> },
      { path: "videos", element: <Videos /> },
      { path: "videos/:keyword", element: <Videos /> },
      { path: "videos/:keyword/:videoId", element: <VideoDetail /> },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
