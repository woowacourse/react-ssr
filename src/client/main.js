import React from "react";
import { hydrateRoot } from "react-dom/client";
import App from "./App";

const initialData = window.__INITIAL_DATA__ || [];

hydrateRoot(document.getElementById("root"), <App bestMovie={initialData[0]} movies={initialData} />);