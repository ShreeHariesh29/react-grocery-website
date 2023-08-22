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
        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-2  row-cols-lg-6'>
        {FVData.Productcard.map((item, index)=>{
          return(
            <FVProductList title={item.title} sub={item.sub} price={item.price} but={item.but} img={item.img} fvimg={item.fvimg} key={index} />
          )
        })}
        </div>
    </div>
  )
}

export default FruitsandVegs