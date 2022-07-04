import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ProductsProvider } from "./context/ProductsContext";
import { FasterCartProvider } from "./context/FasterCartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FasterCartProvider>
      <ProductsProvider>
        <Router>
          <App />
        </Router>
      </ProductsProvider>
    </FasterCartProvider>
  </React.StrictMode>
);

reportWebVitals();
