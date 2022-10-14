import React from "react";
import { BASE_IMG_URL } from "../../UI/exportConst";
import "./ModalItem.scss";

const ModalItem = (props) => {
  const movieEl = props.movieData.filter((movie) => movie.id === props.id)[0];

  if (!movieEl) {
    return <p>Element not found !</p>;
  }
  return (
    <div>
      <div className="modal-item" key={movieEl.id}>
        <h1>{movieEl.title}</h1>
        <img src={BASE_IMG_URL + movieEl.poster_path} alt="poster-movie" />
        <h2> &#x1F5F3;&#xFE0F;{movieEl.vote_average}/10</h2>
        <h3>{movieEl.overview}</h3>
        <button className="modal-button" onClick={props.onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ModalItem;
