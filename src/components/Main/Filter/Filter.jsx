import React from "react";
import "./filter.css";
import { FaHome, FaFilter, FaSearch, FaArrowDown } from "react-icons/fa";

function Filter() {
  return (
    <div>
      <div className="top_details">
        <div>
          <FaHome className="top_details_icon" />
        </div>
        <div>
          <div className="search_area">
            <form action="" className="search_form">
              <input
                className="search_input"
                type="text"
                placeholder="Search by Match..."
              />
              <FaSearch className="seacrh-icon top_details_icon" />
            </form>
            <div className="filter_icon">
              <FaFilter className="top_details_icon" /> Filter{" "}
              <FaArrowDown className="top_details_icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
