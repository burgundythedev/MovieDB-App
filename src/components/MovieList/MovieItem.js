import React from "react";
import { BASE_IMG_URL } from "../../UI/exportConst";
import "./MovieItem.scss";
import Button from "../../UI/Button";

const MovieItem = (props) => {
  return (
    <li className="movie-item">
      <h3>{props.releaseDate}</h3>
      <img src={BASE_IMG_URL + props.image} alt="poster-movie" />
      <Button onClick={props.onDisplay} />
    </li>
  );
};

export default MovieItem;
