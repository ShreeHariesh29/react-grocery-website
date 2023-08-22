import React from 'react'

function Bankoffers() {
  return (
    <div className='mx-[11%]'>
        <div style={{ height: '50px', boxShadow: '0px 1px 0px rgba(193, 191, 191, 0.795)', marginTop: '30px' }}>
        <h2 className='text-[40px] font-semibold ' style={{ textAlign: 'center' }}>Best Offers</h2>
        </div>
        <div className='flex w-[100%] justify-between ' style={{ marginTop: '20px', flexShrink: 'inherit' }}>
            <img id="bankone" style={{ transition: 'box-shadow .3s', width: '25%' }} src="images/kotak poster.webp" alt="" />
            <img style={{ width: '25%' }} src="images/indus poster.webp" alt="" />
            <img style={{ width: '25%' }} src="images/one card poster.webp" alt="" />
            <img style={{ width: '25%' }} src="images/deutsche bank poster.webp" alt="" />
        </div>
    </div>
  )
}

export default Bankoffers