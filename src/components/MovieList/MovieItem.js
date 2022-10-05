import React from "react";
import { BASE_IMG_URL } from "../../UI/exportConst";

import "./MovieItem.scss";

const MovieItem = (props) => {
  return (
    <li className="movie-item">
      <h1>{props.title}</h1>
      <img src={BASE_IMG_URL + props.image} alt="poster-movie" />
      <h3>{props.releaseDate}</h3>
      <h3>{props.genre}</h3>
    </li>
  );
};

export default MovieItem;
