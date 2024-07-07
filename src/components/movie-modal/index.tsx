import "./modal.css";

import { MovieResponse } from "../types";

type ModalProps = {
  closeModal: () => void;
}

const MovieTileModal = ({ closeModal, ...rest }: ModalProps) => {
  const { original_title: title, overview, popularity } = rest as MovieResponse || {};

  return (
    <>
      <div className="modal movie-tile-modal">
        <button className="modal-cross" onClick={closeModal}>
          X
        </button>
        <div className="modal-title">
          <div>{title}</div>
          <div className="modal-rate">Rating: {popularity}</div>
        </div>
        <div className="movie-overview">{overview}</div>
      </div>
      <div className="modal-backdrop" onClick={closeModal} />
    </>
  );
};

export default MovieTileModal;
