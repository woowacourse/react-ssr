import React from "react";
import Header from "@src/client/components/Header";
import Container from "@src/client/components/Container";
import Footer from "@src/client/components/Footer";

function App({ movieList }) {
  return (
    <>
      <Header movie={movieList[0]} />
      <Container movieList={movieList} />
      <Footer />
    </>
  );
}

export default App;
