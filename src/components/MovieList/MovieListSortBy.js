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
      // (movie) => filterOptions.id === movie.genre_ids[0]
      (movie) =>
        movie.genre_ids.reduce(
          (acc, curr) => acc || curr === filterOptions.id,
          false
        )
    );
    //prevState ? //Index nesting ?
    setMovieList(filteredMovieList);
    console.log({ filteredMovieList, movieList });
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
        <DropDownSortList sortValue={sortValueSelected} />
        <DropDownFilterList filterValue={sortFilterSelected} />
      </div>
      <MovieList movieList={movieList} onShowModal={showModalHandler} />
    </WrapperMovieList>
  );
};

export default MovieListSortBy;
