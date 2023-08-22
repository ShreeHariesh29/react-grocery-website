import React from 'react'

function Topoffers() {
  return (
    <div>
    <div style={{ height: '50px', boxShadow: '0px 1px 0px rgba(193, 191, 191, 0.795)', marginTop: '30px', marginLeft: '10%', marginRight: '10%' }}>
      <h2 className='text-[40px] font-semibold ' style={{ textAlign: 'center' }}>Top Offers</h2>
    </div>
    <div className="container text-center" style={{ width: '75vw' }}>
      <div className="row mt-3" style={{ justifyContent: 'space-around' }}>
        <div className="col-lg-2 w-[25%]">
          <div className="card">
            <img id="bankone" src="images/top1.webp" className=" flex justify-between " alt="..." style={{ backgroundColor: 'FEF8E8' }} />
          </div>
        </div>
        <div className="col-lg-2 w-[25%]">
          <div className="card">
            <img id="bankone" src="images/top2.webp" className=" flex justify-between " alt="..." style={{ backgroundColor: 'FEF8E8' }} />
          </div>
        </div>
        <div className="col-lg-2 w-[25%]">
          <div className="card">
            <img id="bankone" src="images/top3.webp" className=" flex justify-between " alt="..." style={{ backgroundColor: 'FEF8E8' }} />
          </div>
        </div>
        <div className="col-lg-2 w-[25%] ">
          <div className="card">
            <img id="bankone" src="images/top4.webp" className=" flex justify-between " alt="..." style={{ backgroundColor: 'FEF8E8' }} />
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Topoffers