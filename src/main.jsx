import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "remixicon/fonts/remixicon.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import IsAuthenticate from "./utils/IsAuthenticate.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <IsAuthenticate>
        {" "}
        <App />{" "}
      </IsAuthenticate>
    ),
    children: [
      { path: "/", element: <Login /> },
      { path: "/login", element: <Login /> },
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
