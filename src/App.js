import React from "react";
import Header from "./components/Header/Header";
import MovieListSortBy from "./components/MovieList/MovieListSortBy";
import TopTenSlider from "./components/Top10/TopTenSlider";

function App() {
  return (
    <React.Fragment>
      <Header />
      <TopTenSlider />
      <MovieListSortBy />
    </React.Fragment>
  );
}

export default App;
