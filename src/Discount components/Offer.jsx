import React from 'react'

function Offer() {
  return (
    <div>
      <div className="container d-flex justify-content-between">
      </div>
      <div className="row text-center mt-4">
        <div className="col-12">
          <div className="head-content">
            <h2 className="display-3" style={{ fontSize: '24px' }}>View all Offers
              <button type="button" className="btn"
                style={{ 
                  '--bs-btn-padding-y': '.25rem',
                  '--bs-btn-padding-x': '.5rem',
                  '--bs-btn-font-size': '.75rem',
                  float: 'right',
                  width: '10%',
                  backgroundColor: '#85C224'
                }}>
                View All
              </button>
            </h2>
          </div>
          <hr />
        </div>
      </div>
    </div>
  )
}

export default Offer