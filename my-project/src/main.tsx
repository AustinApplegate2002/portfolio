import React from "react";
import ReactDOM from "react-dom/client";
import Portfolio from "./components/portfolio";
import "./styles/styles.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  console.error("❌ Root element not found! Check index.html.");
} else {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <Portfolio />
    </React.StrictMode>
  );
}
