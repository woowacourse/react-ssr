import React from "react";

import { hydrateRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router";

hydrateRoot(document.getElementById("root"), <RouterProvider router={router} />);
