import React from "react";
import "./DropDownSortList.scss";

const DropDownSortList = (props) => {
  const handlerFilterValue = (event) => {
    props.filterValue(event.target.value);
  };
  return (
    <div className="dropdown">
      <label htmlFor="movie">Filter By:</label>
      <select name="movie" className="movie" onChange={handlerFilterValue}>
        <optgroup label="Genre">
          <option value="choose">Choose</option>
          <option value="comedy">Comedy</option>
          <option value="action">Action</option>
          <option value="thriller">Thriller</option>
          <option value="">Horror</option>
        </optgroup>
      </select>
    </div>
  );
};
export default DropDownSortList;
