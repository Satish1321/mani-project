import React from "react";
import "./AccordionBody.css";
import { useState } from "react";
import { IMG_CDN } from "../../utils/const";

const AccordionBody=({accinfo})=>{
    // console.log(accinfo);
    const [accordionInfo, setAccordionInfo]=useState(accinfo);

    return(
        <>
            {
                accordionInfo.map((accordion)=>{
                console.log(accordion);

                  return (  
                    
                <div className="accordion-body">
                  
                    <div className="left">
                            <h2>{accordion?.card?.info?.name}</h2>
                            <h4>₹ {accordion?.card?.info?.price/100}</h4>
                            <p>{accordion?.card?.info?.description}</p>
                    </div>

                <div className="right">

                  <img src={IMG_CDN+accordion?.card?.info?.imageId} className="acc-img"></img>
                  <button>ADD</button>

                </div>
                 
                  
                  </div>
 
                  )
                })
            }
        </>
    )
}
export default AccordionBody;