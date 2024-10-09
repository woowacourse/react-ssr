import React from "react";
import Header from "./components/Header";
import Container from "./components/Container";
import Footer from "./components/Footer";

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
