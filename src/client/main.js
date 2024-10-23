import React from "react";
import { hydrateRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const initialData = window.__INITIAL_DATA__ || [];
hydrateRoot(
  document.getElementById("root"),
  <BrowserRouter>
    <App initialData={initialData} />
  </BrowserRouter>
);
