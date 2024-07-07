import { useState } from "react";

import PosterImage from "./poster-image";
import MovieTileModal from "./movie-modal";

import { MovieResponse } from "./types";

const MovieCard = (props: MovieResponse) => {
  const { title, poster_path: path } = props
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="movie-card" onClick={() => setIsModalOpen(true)}>
        <PosterImage imgSrc={path} title={title} />
        <div className="movie-desc">
          <div className="title">{title}</div>
          <div className="details">View Details</div>
        </div>
      </div>
      {isModalOpen && <MovieTileModal closeModal={() => setIsModalOpen(false)} {...props} />}
    </>
  );
};

export default MovieCard;
