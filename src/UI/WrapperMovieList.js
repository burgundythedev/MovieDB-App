import React from "react";
import "./WrapperMovieList.scss";

const WrapperMovieList = (props) => {
  return <div className="card-movie-list">{props.children}</div>;
};

export default WrapperMovieList;
