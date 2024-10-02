import React, { useState } from "react";
import "./Accordion.css";
import AccordionBody from "../AccordionBody/AccordionBody";

const Accordion=({acc})=>{
    
    const [accordion,setAccordion]=useState(acc);

    const [accState,setAccState]=useState(false);


    function accordionHandle(){
       
        setAccState(!accState);
    }
    
   return(
    <>
   
    <h3 className="accordion-title" onClick={accordionHandle}>{accordion?.card?.card?.title}</h3>
    { accState && <AccordionBody accinfo={accordion?.card?.card?.itemCards}/>}

    </>
   )

    
}

export default Accordion;