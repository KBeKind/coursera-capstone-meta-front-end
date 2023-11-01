import React from "react";
import "./Highlights.css";
import MenuItem from "./MenuItem";

const Highlights = () => {
  return (
    <>
      <div id="highlights-top-row">
        <h2 className="highlight-top-row-items">Specials</h2>
        <button className="highlight-top-row-items">Online Menu</button>
      </div>
      <div id="highlights-bottom-row">
        <MenuItem></MenuItem>
        <MenuItem></MenuItem>
        <MenuItem></MenuItem>
      </div>
    </>
  );
};

export default Highlights;
