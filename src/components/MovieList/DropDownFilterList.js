import React from "react";
import { genresMap } from "../../UI/exportConst";
import "./DropDownFilterList.scss";

const DropDownSortList = (props) => {
  const handlerFilterValue = (event) => {
    const genreId = genresMap[event.target.value];
    if (!genreId) {
      return;
    }
    props.filterValue(genreId);
  };
  return (
    <div className="dropdown-filter" id="movie">
      <label htmlFor="movie">Filter By:</label>
      <select name="movie" className="movie" onChange={handlerFilterValue}>
        <optgroup label="Genre">
          <option value="choose">Choose</option>
          <option value="Comedy">Comedy</option>
          <option value="Action">Action</option>
          <option value="Thriller">Thriller</option>
          <option value="Horror">Horror</option>
        </optgroup>
      </select>
    </div>
  );
};
export default DropDownSortList;
