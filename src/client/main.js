import React from "react";
import { hydrateRoot } from "react-dom/client";
import routes from "../common/routes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const initialData = window.__INITIAL_DATA__ || null;

const router = createBrowserRouter(routes, {
  hydrationData: { loaderData: initialData },
});

hydrateRoot(document.getElementById("root"), <RouterProvider router={router} />);
