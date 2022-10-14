import React from "react";
import "./TopTenList.scss";
import TopTenItem from "./TopTenItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings } from "../../UI/exportConst";
const ToptenList = (props) => {
  return (
    <div className="slider">
      <h1 className="theme">Top Ten Rated Movies</h1>
      <Slider {...settings}>
        {props.topMovies.slice(0, 10).map((item, index) => {
          return (
            <TopTenItem
              key={index}
              title={item.title}
              image={item.poster_path}
              rate={item.vote_average}
            />
          );
        })}
      </Slider>
    </div>
  );
};

export default ToptenList;
