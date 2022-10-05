import React from "react";
import MovieItem from "./MovieItem";
import "./MovieList.scss";

const MovieList = (props) => {
  return (
    <ul className="movie-list">
      {props.movieList.map((movie, index) => {
        return (
          <MovieItem
            key={index}
            title={movie.title}
            image={movie.poster_path}
            releaseDate={movie.release_date}
            genre={JSON.stringify(movie.genre_ids[0])}
          />
        );
      })}
    </ul>
  );
};

export default MovieList;
