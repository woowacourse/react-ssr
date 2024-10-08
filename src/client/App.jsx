import React from "react";
import Home from "./components/Home";

function App({ initialData }) {
  return (
    <div>
      <Home movies={initialData.movies} />
    </div>
  );
}

export default App;
