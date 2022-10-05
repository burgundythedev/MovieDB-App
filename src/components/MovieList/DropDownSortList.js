import React from "react";
import "./DropDownSortList.scss";

const DropDownSortList = (props) => {
  const handlerFilterValue = (event) => {
    props.sortValue(event.target.value);
  };
  return (
    <div className="dropdown">
      <label htmlFor="movie">Sort By:</label>
      <select name="movie" className="movie" onChange={handlerFilterValue}>
        <optgroup label="Alphetical Order">
          <option value="choose">Choose</option>
          <option value="a-z">A to Z</option>
          <option value="z-a">Z to A</option>
        </optgroup>
        <optgroup label="Years">
          <option value="newto">Newest to Oldest</option>
          <option value="oldto">Oldest to Newest</option>
        </optgroup>
      </select>
    </div>
  );
};
export default DropDownSortList;
