import React, { useState } from 'react';
import MovieItem from './MovieItem';
import MovieDetailModal from './MovieDetailModal';

const Container = ({ movieItems }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className='container'>
      <main>
        <section>
          <h2>지금 인기 있는 영화</h2>
          <ul className='thumbnail-list'>
            {movieItems.map((movieItem) => {
              return (
                <MovieItem
                  key={movieItem.id}
                  movieItem={movieItem}
                  handleModal={handleModal}
                />
              );
            })}
          </ul>
          {isModalOpen && <MovieDetailModal handleModal={handleModal} />}
        </section>
      </main>
    </div>
  );
};

export default Container;
