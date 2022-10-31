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
        setMovies(data.results);
      });
  };

  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <div className="card">
      <TopTenList topMovies={movies} />
    </div>
  );
};

export default TopTenSlider;
