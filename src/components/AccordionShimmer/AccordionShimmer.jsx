import React from "react";
import "./AccordionShimmer.css";

const AccordionShimmer = () => {
  return (
    <div className="accordion-shimmer">
      <div className="accordion-shimmer-item">
        <div className="shimmer-heading"></div>
        <div className="shimmer-content">
          <div className="shimmer-img"></div>
          <div className="shimmer-details">
            <div className="shimmer-text"></div>
            <div className="shimmer-text"></div>
          </div>
        </div>
      </div>
      <div className="accordion-shimmer-item">
        <div className="shimmer-heading"></div>
        <div className="shimmer-content">
          <div className="shimmer-img"></div>
          <div className="shimmer-details">
            <div className="shimmer-text"></div>
            <div className="shimmer-text"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionShimmer;
