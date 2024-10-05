import React, { useEffect } from "react";

export default function Movies({ initData }) {
  console.log(initData);
  useEffect(() => {
    console.log("hydrate");
  }, []);
  return <div>movies</div>;
}
