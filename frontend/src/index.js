import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import { FilesContextProvider } from "./context/FileContext";
import { AuthContextProvider } from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <FilesContextProvider>
        <App />
      </FilesContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
