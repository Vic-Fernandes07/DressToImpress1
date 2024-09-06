import "./index.css";
import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home.jsx";
import * as ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import SobreNos from "./components/SobreNos.jsx";
import Ajuda from "./components/Ajuda.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

const router = createBrowserRouter([
  {
    path: "/",

    element: <App />,

    children: [
      { path: "/", element: <Home /> },
      { path: "SobreNos", element: <SobreNos /> },
      { path: "Ajuda", element: <Ajuda /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
