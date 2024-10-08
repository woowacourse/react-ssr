import MovieItem from "./base/MovieItem";

function Container(children) {
  return (
    <div className="container">
      <main>
        <section>
          <h2>지금 인기 있는 영화</h2>
          {children}
        </section>
      </main>
    </div>
  );
}

export default Container;
