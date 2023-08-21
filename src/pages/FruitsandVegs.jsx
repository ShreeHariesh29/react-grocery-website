import React from 'react'
import FVSideBar from '../fruits and vegs componets/FVSidebar'
import FVProductList from '../fruits and vegs componets/FVProductList'
function FruitsandVegs() {
  return (
    <div className='flex mx-[11%]'>
        <FVSideBar />
        <FVProductList />
    </div>
  )
}

export default FruitsandVegs