import React from "react";
import Testemonial from "./Testemonial";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <>
      <h3 id="testimonials-header">Testimonials</h3>
      <div id="testimonials-container">
        <Testemonial></Testemonial>
        <Testemonial></Testemonial>
        <Testemonial></Testemonial>
        <Testemonial></Testemonial>
      </div>
    </>
  );
};

export default Testimonials;
