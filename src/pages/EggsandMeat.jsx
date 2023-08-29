import React from 'react'
import BMSideBar from '../Eggsandmeats components/BMSideBar'
import BMProductList from '../Eggsandmeats components/BMProductList'
import EggsMeatData from '../Eggsandmeats components/EggsMeatData'

function EggsandMeat() {
  return (
    <div className='flex mx-[11%]'>
      <div>
      <BMSideBar />
      </div>
        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-6'>
        {EggsMeatData.Productlist.map((item, index) =>{
            return(
              <BMProductList title={item.title} sub={item.sub} price={item.price} but={item.but} img={item.img} mainimg={item.mainimg} key={index} />
            )
          })}
        </div>
       
        
        
    </div>
    
  )
}

export default EggsandMeat