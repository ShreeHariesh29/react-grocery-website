import React from 'react'

function Kictchen() {
  return (
    <div>
      <div className="container">
        <div className="row text-center mt-4">
          <div className="col-12">
            <div className="head-content">
              <h2 className="display-3" style={{ fontSize: '24px' }}>Kitchen & Dining Essentials</h2>
            </div>
            <hr />
          </div>
        </div>
      </div>

      <div className="container text-center" style={{ width: '75vw' }}>
        <div className="row mt-3">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="card">
              <img src="Discount img/Kitchen1.webp" className="" alt="..." style={{ backgroundColor: '#FEF8E8' }} />
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="card">
              <img src="Discount img/Kitchen2.webp"  className="" alt="..." style={{ backgroundColor: '#FEF8E8' }} />
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="card">
              <img src="Discount img/Kitchen3.webp"  className="" alt="..." style={{ backgroundColor: '#FEF8E8' }} />
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="card">
              <img src="Discount img/Kitchen4.webp"  className="" alt="..." style={{ backgroundColor: '#FEF8E8' }} />
            </div>
          </div>
         
        </div>

      </div>
    </div>
  )
}

export default Kictchen