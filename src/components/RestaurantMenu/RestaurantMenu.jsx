import React, { useEffect } from "react";
import "./RestaurantMenu.css"
import { useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN, RESTAURANT_MENU_API } from "../../utils/const";
import Shimmer from "../Shimmer/Shimmer"
import Accordion from "../Accordion/Accordion";
import AccordionShimmer from "../AccordionShimmer/AccordionShimmer";

const RestaurantMenu=()=>{
   
    const {resId} =useParams();
    
    const [restaurantMenu,setRestaurantMenu]=useState(null);

    const [accordionList,setAccordionList]=useState(null);

    

    async function getRestaurantMenuData(){
        const data=await fetch(RESTAURANT_MENU_API+resId);
        const json=await data?.json();
        const Data=json?.data?.cards[2]?.card?.card?.info;
        const Data2=json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((c)=>c?.card?.card['@type']==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
        // console.log(Data2);
        setAccordionList(Data2);
        setRestaurantMenu(Data);
       // console.log(Data);
    }
    useEffect(()=>{
        getRestaurantMenuData();

    },[])

    
    return(
        <div className="restaurant-menu">
            
            <div className="menu-overview">
                <img src={IMG_CDN+restaurantMenu?.cloudinaryImageId}/>

                <div className="menu-elements">
                    {
                        console.log(restaurantMenu)
                    }
                    <div className="res-details">
                    <h1>{restaurantMenu?.name}</h1>
                    <h6>{restaurantMenu?.cuisines.join(", ")}</h6>
                    </div>
                    <div className="res-ratings">
                    <h4 className="ratings">{restaurantMenu?.avgRating}</h4>
                    
                    <h4>{restaurantMenu?.avgRating} km </h4>
                    
                     < h4>₹{restaurantMenu?.costForTwo/100}</h4>
                     
            </div>

                </div>

            </div>

            <div className="accordion-list">
                {
                  accordionList===null ? (<AccordionShimmer/>) :(  accordionList.map((accordion)=>{
                           
                        return <Accordion acc={accordion} key={accordion?.card?.card?.title}/>
                    })
                )
                }
            
            </div>
           
            
        </div>
    )
}
export default RestaurantMenu;