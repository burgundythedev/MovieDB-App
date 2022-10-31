import React, { useEffect, useState } from "react";
import WrapperMovieList from "../../UI/WrapperMovieList";
import DropDownSortList from "./DropDownSortList";
import "./MovieListSortBy.scss";
import MovieList from "./MovieList";
import ModalOverlay from "../../UI/ModalOverlay";
import ModalItem from "../ModalItem/ModalItem";

const sortMovieList = (movieList, sortValue) =>
  movieList.sort((a, b) => {
    if (sortValue === "a-z") {
      return a.title.localeCompare(b.title);
    }
    if (sortValue === "z-a") {
      return b.title.localeCompare(a.title);
    }
    if (sortValue === "newto") {
      return new Date(b.release_date) - new Date(a.release_date);
    }
    if (sortValue === "oldto") {
      return new Date(a.release_date) - new Date(b.release_date);
    }
    return 0;
  });

const MovieListSortBy = () => {
  const [movieList, setMovieList] = useState([]);
  const [infiniteItem, setInfiniteItem] = useState(1);
  const [selectSortValue, setSelectSortValue] = useState();
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
        const newMovieList = sortMovieList(
          [...movieList, ...data.results],
          selectSortValue
        );
        setMovieList(newMovieList);
      });
  }, [infiniteItem]);

  const sortHandler = (sortOptions) => {
    setSelectSortValue(sortOptions);
    const sortedMovieList = sortMovieList(movieList, sortOptions);
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
      <div className="sort-list">
        <DropDownSortList selected={selectSortValue} sortValue={sortHandler} />
      </div>
      <MovieList movieList={movieList} onShowModal={showModalHandler} />
    </WrapperMovieList>
  );
};

export default MovieListSortBy;
