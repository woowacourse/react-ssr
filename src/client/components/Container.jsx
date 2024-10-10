import React from "react";

function Container({ children }) {
  return (
    <div className="container">
      <main>
        <section>
          <h2>지금 인기 있는 영화</h2>
          <ul className="thumbnail-list">{children}</ul>
        </section>
      </main>
    </div>
  );
}

export default Container;
