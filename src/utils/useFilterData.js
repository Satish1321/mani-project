import React from "react";

const useFilterData=(searchText,allRestaurantsData)=>{

    return (
        allRestaurantsData.filter((restaurant)=>(restaurant?.info?.name?.toLowerCase().includes(searchText.toLowerCase())))
    )
}

export default useFilterData;