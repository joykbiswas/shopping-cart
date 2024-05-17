import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Router/router.jsx";
import { MyContextProvider } from "./Component/Context/ContextProduct.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MyContextProvider>
    <RouterProvider router={router} />
    </MyContextProvider>
  </React.StrictMode>
);
