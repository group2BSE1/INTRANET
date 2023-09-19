import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import { FilesContextProvider } from "./context/FileContext";
import { AuthContextProvider } from "./context/AuthContext";
import { DocumentsContextProvider } from "./context/DocumentContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <DocumentsContextProvider>
        <FilesContextProvider>
          <App />
        </FilesContextProvider>
      </DocumentsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
