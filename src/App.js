import React from "react";
import Header from "./components/Header/Header";
import MovieListSortBy from "./components/MovieList/MovieListSortBy";
import TopTenSlider from "./components/Top10/TopTenSlider";
import Card from "./UI/Card";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Card>
        <TopTenSlider />
      </Card>
      <MovieListSortBy />
      <Footer />
    </React.Fragment>
  );
}

export default App;
