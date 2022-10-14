import React from "react";
import "./TopTenItem.scss";
import { BASE_IMG_URL } from "../../UI/exportConst";

const TopTenItem = (props) => {
  return (
    <div>
      <li className="item-list">
        <img src={BASE_IMG_URL + props.image} alt="poster-movie" />
        <div className="rate">
          <span class="emoji">&#x1F37F;</span>
          <h2> Rate:{props.rate}</h2>
        </div>
      </li>
    </div>
  );
};

export default TopTenItem;
