import { createBrowserRouter } from "react-router-dom";
import React from "react";
import Home from "../components/Home";
import Modal from "../components/Modal";

const initialData = window.__INITIAL_DATA__;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home initialData={initialData} />,
    index: true,
    children: [
      {
        path: `detail/:id`,
        element: <Modal initialData={initialData} />,
      },
    ],
  },
]);

export default router;
