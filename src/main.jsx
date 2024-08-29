import "./index.css";
import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home.jsx";
import * as ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import SobreNos from "./components/SobreNos.jsx";
import Ajuda from "./components/Ajuda.jsx";

const router = createBrowserRouter([
  {
    path: "/",

    element: <App />,

    children: [
      { path: "/", element: <Home /> },
      { path: "SobreNos", element: <SobreNos /> },
      { path: "Ajuda", element: <Ajuda /> },
      <Link to={"/"}>Home</Link>,
      <Link to={"/SobreNos"}>SobreNos</Link>,
      <Link to={"/Ajuda"}>Ajuda</Link>,
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
