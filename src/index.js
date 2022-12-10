import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./services/queryClient";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import EcommerceContextProvider from "./context/EcommerceContext";
import ScrollToTop from "./hooks/ScrollToTopOnPageChange";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <AuthContextProvider>
        <EcommerceContextProvider>
          <ScrollToTop />
          <App />
        </EcommerceContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </QueryClientProvider>
);
