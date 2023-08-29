import React from 'react'
import FVSideBar from '../fruits and vegs componets/FVSidebar'
import FVProductList from '../fruits and vegs componets/FVProductList'
import FVData from '../fruits and vegs componets/FVData'

function FruitsandVegs() {
  return (
    <div className='flex mx-[11%]'>
        <div>
          <FVSideBar />
        
        </div>
        <div >
        <FVProductList />
        </div>
    </div>
  )
}

export default FruitsandVegs