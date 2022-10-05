import React, { useEffect, useState } from "react";
import WrapperMovieList from "../../UI/WrapperMovieList";
import DropDownSortList from "./DropDownSortList";
import DropDownFilterList from "./DropDownFilterList";
import "./MovieListSortBy.scss";
import MovieList from "./MovieList";

const MovieListSortBy = () => {
  const [movieList, setMovieList] = useState([]);
  const [infiniteItem, setInfiniteItem] = useState(1);
  const [selectSortFilter, setSelectSortFilter] = useState();

  const sortFilterSelected = (filterOptions) => {
    setSelectSortFilter(filterOptions);
    // console.log(sortChoice);
    const findIdGenre = movieList.find(
      (elementById) => elementById.genre_ids[0]
    );
    console.log(findIdGenre);
  };
  const sortValueSelected = (sortOptions) => {
    setSelectSortFilter(sortOptions);
    console.log(sortOptions);
    const sortedMovieList = movieList.sort((a, b) => {
      if (sortOptions === "a-z") {
        return a.title.localeCompare(b.title);
      }
      if (sortOptions === "z-a") {
        return b.title.localeCompare(a.title);
      }
      if (sortOptions === "newto") {
        return new Date(b.release_date) - new Date(a.release_date);
      }
      if (sortOptions === "oldto") {
        return new Date(a.release_date) - new Date(b.release_date);
      }
      return 0;
    });
    setMovieList(sortedMovieList);
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=9e6097a7454dac67a03753fbec2f1c4f&language=en-US&page=${infiniteItem}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMovieList((prev) => [...prev, ...data.results]);
      });
  }, [infiniteItem]);

  const handleScroll = () => {
    // console.log("Height:", document.documentElement.scrollHeight);
    // console.log("Top:", document.documentElement.scrollTop);
    // console.log("Window:", window.innerHeight);

    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setInfiniteItem((prev) => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  console.log(movieList);
  return (
    <WrapperMovieList>
      <div className="sort-filter-list">
        <DropDownSortList sortValue={sortValueSelected} />
        <DropDownFilterList filterValue={sortFilterSelected} />
      </div>
      <MovieList movieList={movieList} />
    </WrapperMovieList>
  );
};

export default MovieListSortBy;
