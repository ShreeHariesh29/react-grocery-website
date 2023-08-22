import React from 'react'
import Bankoffers from '../Home components/Bankoffers'
import Banner from '../Home components/Banner'
import Categorybutton from '../Home components/Categorybutton'
import DiscountBanner from '../Home components/DiscountBanner'
import BestSellers from '../Home components/BestSellers'
import Topoffers from '../Home components/Topoffers'


function Home() {
  return (
    <div>
      
      <Banner />
      <Categorybutton />
      <DiscountBanner />
      <Bankoffers />
      <BestSellers />
      <Topoffers />
        
    </div>
    
  )
}

export default Home