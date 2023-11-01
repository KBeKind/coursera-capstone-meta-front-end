import React from "react";
import "./MenuItem.css";

const MenuItem = () => {
  return (
    <div id="menu-items-container">
      MenuItem
      <img className="menu-item-meal-image" src="/meal1.jpg"></img>
      <div className="menu-item-meal-top-row">
        <h5>NameofDish</h5>
        <span>price</span>
      </div>
      <p>
        lafjsdlfjads lkfjasdl kfjaldsfjlad sjfladsjf ldasjflad sjf;lsadjflad
        sjflad sjfladsjfla sdjfladsjlfad sjlfadsjlfj adslfjadsl;fjad slfjadsl
      </p>
      <p id="menu-item-meal-delivery-link">ORDER FOR DELIVERY</p>
    </div>
  );
};

export default MenuItem;
