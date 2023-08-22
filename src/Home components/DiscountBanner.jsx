import React from 'react'
import { Link } from 'react-router-dom'
function DiscountBanner() {
  return (
    <div className='mx-[11%]'>
    <Link to="discount">
    <img style={{ width: '100%', marginTop: '20px' }} src="Discount img/Mainbanner.jpg" alt="" />
    </Link>
    
    
</div>
  )
}

export default DiscountBanner