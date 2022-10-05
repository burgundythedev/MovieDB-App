import React, { useState, useEffect } from "react";
import { BASE_URL_T10M } from "../../UI/exportConst";
import "./TopTenSlider.scss";
import TopTenList from "./TopTenList";

const TopTenSlider = () => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = () => {
    fetch(BASE_URL_T10M)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log(data.results);
        setMovies(data.results);
      });
  };

  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <div className="card">
      <h1 className="theme">Top Ten Rated Movies</h1>
      <TopTenList topMovies={movies} />
    </div>
  );
};

export default TopTenSlider;
