import React from 'react'

function Bannertwo() {
  return (
    <div>
      <div className="container text-center" style={{ width: '75vw', marginTop: '3%' }}>
        <div className="row align-items-end" style={{ backgroundColor: 'yellowgreen' }}>
          <div className="col p-0">
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="Discount img/B2Cbanner1.jpg" className="d-block w-100" alt="Banner 3" />
                </div>
                <div className="carousel-item">
                  <img src="Discount img/B2Cbanner2.jpg" className="d-block w-100" alt="Banner 4" />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bannertwo