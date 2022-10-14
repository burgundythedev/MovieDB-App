import React, { useEffect, useState } from "react";
import WrapperMovieList from "../../UI/WrapperMovieList";
import DropDownSortList from "./DropDownSortList";
import DropDownFilterList from "./DropDownFilterList";
import "./MovieListSortBy.scss";
import MovieList from "./MovieList";
import ModalOverlay from "../../UI/ModalOverlay";
import ModalItem from "../ModalItem/ModalItem";

const MovieListSortBy = (props) => {
  const [movieList, setMovieList] = useState([]);
  const [infiniteItem, setInfiniteItem] = useState(1);
  const [selectSortFilter, setSelectSortFilter] = useState();
  const [modalMovieId, setModalMovieId] = useState();
  const [modalDisplay, setModalDisplay] = useState(false);
  const [showMovieList, setShowMovieList] = useState(true);
  const showListHandler = () => {
    setShowMovieList(false);
  };
  const hideListHandler = () => {
    setShowMovieList(true);
  };
  const showModalHandler = (id) => {
    setModalMovieId(id);
    setModalDisplay(true);
  };
  const hideModalHandler = () => {
    setModalDisplay(false);
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

  const sortFilterSelected = (filterOptions) => {
    setSelectSortFilter(filterOptions);
    const filteredMovieList = movieList.filter(
      (movie) => movie.genre_ids[0] === filterOptions.id
    );
    setMovieList(filteredMovieList);
  };

  const sortValueSelected = (sortOptions) => {
    setSelectSortFilter(sortOptions);
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

  // regler le link fetch .env

  const handleScroll = () => {
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
      {modalDisplay && (
        <ModalOverlay onClose={hideModalHandler}>
          <ModalItem
            id={modalMovieId}
            movieData={movieList}
            onClose={hideModalHandler}
          />
        </ModalOverlay>
      )}
      <div className="sort-filter-list">
        <button className="button-list" onClick={showListHandler}>
          Movie List
        </button>
        <button className="button-list" onClick={hideListHandler}>
          Hide List
        </button>
        <DropDownSortList sortValue={sortValueSelected} />
        <DropDownFilterList filterValue={sortFilterSelected} />
      </div>
      {!showMovieList && (
        <MovieList movieList={movieList} onShowModal={showModalHandler} />
      )}
    </WrapperMovieList>
  );
};

export default MovieListSortBy;
