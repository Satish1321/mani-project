import React from "react";
import "./Shimmer.css";

const BodyShimmer = () => {
    return (
        <div className="body-shimmer">
            {/* Shimmer for the search bar */}
            <div className="search-bar-shimmer">
                <div className="shimmer-input"></div>
                
            </div>
            
            {/* Shimmer for the restaurant cards */}
            <div className="restaurant-cards-container-shimmer">
                {Array.from({ length: 8 }).map((_, index) => (
                    <div className="restaurant-card-shimmer" key={index}>
                        <div className="shimmer-img"></div>
                        <div className="shimmer-text">
                            <div className="shimmer-title"></div>
                            <div className="shimmer-subtitle"></div>
                            <div className="shimmer-details"></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BodyShimmer;
