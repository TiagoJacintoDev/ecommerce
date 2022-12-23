import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { QueryProvider } from "./services/queryClient";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import EcommerceContextProvider from "./context/EcommerceContext";
import ScrollToTop from "./hooks/ScrollToTopOnPageChange";
import { ComposedComponents } from "./components/elements/ComposedComponents";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <ComposedComponents
      components={[
        AuthContextProvider,
        QueryProvider,
        EcommerceContextProvider,
        BrowserRouter,
      ]}
    >
      <ScrollToTop />
      <App />
    </ComposedComponents>
  </>
);
