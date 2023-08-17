import React from "react";
import FVSidebar from "../fruits and vegs componets/FVSidebar";
import FVProductList from "../fruits and vegs componets/FVProductList";

function FruitsandVegs() {
  return (
    <div className="flex mx-[11%]"> 
        
        <FVSidebar/>
        <FVProductList/>

    </div>
  )
}

export default FruitsandVegs