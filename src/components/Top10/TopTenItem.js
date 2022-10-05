import React from "react";
import "./TopTenItem.scss";
import { BASE_IMG_URL } from "../../UI/exportConst";

const TopTenItem = (props) => {
  return (
    <div>
      <li className="item-list">
        <h1>{props.title}</h1>
        <img src={BASE_IMG_URL + props.image} alt="poster-movie" />
        <div className="rate">
          <h2>{props.rate}</h2>
        </div>
      </li>
    </div>
  );
};

export default TopTenItem;
