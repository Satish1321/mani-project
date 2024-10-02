import React from "react";
import "./RestaurantCard.css";
import { IMG_CDN } from "../../utils/const";

const RestaurantCard=({card})=>{

    const {id,name,cloudinaryImageId,cuisines,avgRating,costForTwo}=card;

    
    
    
    return(
        <div className="restaurant-card">

            <img src={IMG_CDN+cloudinaryImageId} className="res-img"></img>
            <h3>{name}</h3>
            <h6>{cuisines.join(", ")}</h6>
            <div className="res-rating">
                <h4 className="rating">{avgRating}</h4>
                <h4>{avgRating} km</h4>
                <h4>{costForTwo}</h4>
            </div>
            

           
        </div>
    )
}

export default RestaurantCard;