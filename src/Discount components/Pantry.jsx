import React from 'react'

function Pantry() {
  return (
    <div>
      <div className="container">
        <div className="row text-center mt-4">
          <div className="col-12">
            <div className="head-content">
              <h2 className="display-3" style={{ fontSize: '24px' }}>Pantry Essentials</h2>
            </div>
            <hr />
          </div>
        </div>
      </div>

      <div className="container text-center" style={{ width: '75vw' }}>
        <div className="row mt-3">
          <div className="col-lg-2 col-md-4 col-sm-4">
            <div className="card">
              <img src="Discount img/pantry1.webp" className="" alt="..." style={{ backgroundColor: '#FEF8E8' }} />
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-4">
            <div className="card">
              <img src="Discount img/pantry2.webp" className="" alt="..." style={{ backgroundColor: '#FEF8E8' }} />
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-4">
            <div className="card">
              <img src="Discount img/pantry3.webp" className="" alt="..." style={{ backgroundColor: '#FEF8E8' }} />
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-4">
            <div className="card">
              <img src="Discount img/pantry4.webp" className="" alt="..." style={{ backgroundColor: '#FEF8E8' }} />
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-4">
            <div className="card">
              <img src="Discount img/pantry5.webp" className="" alt="..." style={{ backgroundColor: '#FEF8E8' }} />
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-4">
            <div className="card">
              <img src="Discount img/pantry6.webp" className="" alt="..." style={{ backgroundColor: '#FEF8E8' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pantry