import React from "react";
import "./Body.css";
import { useState,useEffect } from "react";
import { IMG_CDN, RESTAURANT_API } from "../../utils/const";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import useFilterData from "../../utils/useFilterData";
import { Link } from "react-router-dom";
import Shimmer from "../Shimmer/Shimmer";

const Body=()=>{

    const [allRestaurantData,setAllRestaurantData]=useState(null);
    const [filteredRestaurants,setFilteredRestaurants]=useState(null);

    const [searchText,setSearchText]=useState("");
    

    async function getRestaurantData(){
        const data=await fetch(RESTAURANT_API);
        const json=await data.json();
        const Data=json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setAllRestaurantData(Data);
        setFilteredRestaurants(Data);
        // console.log(Data);
    }

    useEffect(()=>{
       getRestaurantData();
    },[]);
     
    
    
    return  allRestaurantData===null ? (<Shimmer/>) :  (
        <div className="body">
            <div className="search-bar">
                <input type="text" 
                placeholder="Search a restaurant you want..." 
                value={searchText}
                onChange={(e)=>{
                    setSearchText(e.target.value);
                   

                }}>   
                </input>

                <button onClick={()=>{
                    const filteredData=useFilterData(searchText,allRestaurantData);
                    setFilteredRestaurants(filteredData);
                }}>Search</button>
            </div>

            

            
            <div className="restaurant-cards-containter">
               
           

                     { 
                        //The conditional rendering
                        
                        
                        filteredRestaurants.map((restaurant)=>{

                           return ( 
                            <Link to={"/restaurant/"+restaurant?.info?.id} key={restaurant?.info?.id} className="res-card">
                            <RestaurantCard card={restaurant?.info}/>
                           </Link>)
                        }
                    )
                        
                     }

            </div>
            
        </div>
    )
}

export default Body;
