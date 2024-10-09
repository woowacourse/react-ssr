import React, { Suspense } from "react";
import { hydrateRoot } from "react-dom/client";
import App from "./App";

const initialData =
  typeof window !== "undefined" ? window.__INITIAL_DATA__ || {} : {};

hydrateRoot(
  document.getElementById("root"),
  <Suspense>
    <div id="root">
      <App popularMovies={initialData} />
    </div>
  </Suspense>
);
