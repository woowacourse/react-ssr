import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { hydrateRoot } from "react-dom/client";
import { routes } from "../server/routes/routes";

const router = createBrowserRouter(routes);

hydrateRoot(
  document.getElementById("root"),
  <RouterProvider router={router} />
);
