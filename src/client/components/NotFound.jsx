import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <p>404 not found</p>
      <Link to="/">
        <button>return to home</button>
      </Link>
    </div>
  );
}
