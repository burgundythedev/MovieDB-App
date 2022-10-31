export const REACT_APP_API_KEY = "9e6097a7454dac67a03753fbec2f1c4f";
export const BASE_IMG_URL = "https://image.tmdb.org/t/p/w200/";
export const BASE_URL_T10M =
  "https://api.themoviedb.org/3/movie/top_rated?api_key=9e6097a7454dac67a03753fbec2f1c4f&language=en-US&page=1";
export const REACT_APP_MOVIE_API_KEY = "9e6097a7454dac67a03753fbec2f1c4f";

export const genresMap = {
  Action: 28,
  Comedy: 35,
  Horror: 27,
  Thriller: 58,
};
export const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 2,
  autoplay: true,
  speed: 7000,
  autoplaySpeed: 2000,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 1079,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: true,
      },
    },
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

// const filterMovieList = (movieList, filterValue) =>
//   movieList.filter((movie) =>
//     movie.genre_ids.reduce((acc, curr) => acc || curr === filterValue, false)
//   );
// const filterHandler = (filterOptions) => {
//   setSelectFilterValue(filterOptions);
//   const filteredMovieList = filterMovieList(movieList, filterOptions);
//   setMovieList(filteredMovieList);
//   console.log(filteredMovieList);
// };

/* <DropDownFilterList
          selected={selectFilterValue}
          filterValue={filterHandler}
        /> */

// const handlerFilterValue = (event) => {
//   const genreId = genresMap[event.target.value];
//   if (!genreId) {
//     return;
//   }
//   props.filterValue(genreId);
// };
