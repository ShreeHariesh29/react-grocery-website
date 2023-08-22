import React from 'react'

function BestSellers() {
  return (
    <div>
        <div className='mx-[11%]'>
        <div style={{ height: '50px', boxShadow: '0px 1px 0px rgba(193, 191, 191, 0.795)', marginTop: '30px' }}>
        <h2 className='text-[40px] font-semibold ' style={{ textAlign: 'center' }}>Best Sellers</h2>
        </div>
        </div>

    <div
      id="carouselExampleone"
      className="carousel slide"
      style={{ marginLeft: '10%', marginRight: '10%', marginTop: '10px' }}
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div style={{ display: 'flex' }}>
            {/* Repeat the following block for each item */}
            <div className="col" style={{ width: '222px' }}>
              <div className="card shadow-sm">
                <img
                  src="Best Seller/one.jpeg"
                  alt="Fresho Eggs - Regular"
                />
                <div className="card-body">
                  <h3 className="fs-6 text-body-tertiary">Fresho</h3>
                  <h3 className="fs-6 text-body-secondary">
                    Fresho Farm Eggs - Regular, Medium, 6 pcs
                  </h3>
                  <h3 className="fs-6 text-body-emphasis">MRP: Rs. 47</h3>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <div type="button" className="btn btn-sm btn-outline-secondary">
                        View
                      </div>
                      <div type="button" className="btn btn-sm btn-warning flex bg-yellow-300">
                        <img src="Best Seller/cart icon.png" style={{ width: '20px' }} alt="Cart Icon" />
                        ADD
                      </div>
                    </div>
                    <small className="text-body-secondary"></small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col" style={{ width: '222px' }}>
              <div className="card shadow-sm">
                <img
                  src="Best Seller/two.jpeg"
                  alt="Fresho Eggs - Regular"
                />
                <div className="card-body">
                  <h3 className="fs-6 text-body-tertiary">Fresho</h3>
                  <h3 className="fs-6 text-body-secondary">
                    Fresho Farm Eggs - Regular, Medium, 6 pcs
                  </h3>
                  <h3 className="fs-6 text-body-emphasis">MRP: Rs. 47</h3>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <div type="button" className="btn btn-sm btn-outline-secondary">
                        View
                      </div>
                      <div  type="button" className="btn btn-sm btn-warning flex bg-yellow-300 ">
                        <img src="Best Seller/cart icon.png" style={{ width: '20px' }} alt="Cart Icon" />
                        ADD
                      </div>
                    </div>
                    <small className="text-body-secondary"></small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col" style={{ width: '222px' }}>
              <div className="card shadow-sm">
                <img
                  src="Best Seller/three.jpeg"
                  alt="Fresho Eggs - Regular"
                />
                <div className="card-body">
                  <h3 className="fs-6 text-body-tertiary">Fresho</h3>
                  <h3 className="fs-6 text-body-secondary">
                    Fresho Farm Eggs - Regular, Medium, 6 pcs
                  </h3>
                  <h3 className="fs-6 text-body-emphasis">MRP: Rs. 47</h3>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <div type="button" className="btn btn-sm btn-outline-secondary">
                        View
                      </div>
                      <div type="button" className="btn btn-sm btn-warning flex bg-yellow-300">
                        <img src="Best Seller/cart icon.png" style={{ width: '20px' }} alt="Cart Icon" />
                        ADD
                      </div>
                    </div>
                    <small className="text-body-secondary"></small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col" style={{ width: '222px' }}>
              <div className="card shadow-sm">
                <img
                  src="Best Seller/four.jpeg"
                  alt="Fresho Eggs - Regular"
                />
                <div className="card-body">
                  <h3 className="fs-6 text-body-tertiary">Fresho</h3>
                  <h3 className="fs-6 text-body-secondary">
                    Fresho Farm Eggs - Regular, Medium, 6 pcs
                  </h3>
                  <h3 className="fs-6 text-body-emphasis">MRP: Rs. 47</h3>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <div type="button" className="btn btn-sm btn-outline-secondary">
                        View
                      </div>
                      <div type="button" className="btn btn-sm btn-warning flex bg-yellow-300">
                        <img src="Best Seller/cart icon.png" style={{ width: '20px' }} alt="Cart Icon" />
                        ADD
                      </div>
                    </div>
                    <small className="text-body-secondary"></small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col" style={{ width: '222px' }}>
              <div className="card shadow-sm">
                <img
                  src="Best Seller/five.jpeg"
                  alt="Fresho Eggs - Regular"
                />
                <div className="card-body">
                  <h3 className="fs-6 text-body-tertiary">Fresho</h3>
                  <h3 className="fs-6 text-body-secondary">
                    Fresho Farm Eggs - Regular, Medium, 6 pcs
                  </h3>
                  <h3 className="fs-6 text-body-emphasis">MRP: Rs. 47</h3>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <div type="button" className="btn btn-sm btn-outline-secondary">
                        View
                      </div>
                      <div type="button" className="btn btn-sm btn-warning flex bg-yellow-300">
                        <img src="Best Seller/cart icon.png" style={{ width: '20px' }} alt="Cart Icon" />
                        ADD
                      </div>
                    </div>
                    <small className="text-body-secondary"></small>
                  </div>
                </div>
              </div>
            </div>
            {/* Repeat the block above for other items */}
          </div>
        </div>
        {/* Repeat the above carousel-item block for each item */}
        <div className="carousel-item active">
          <div style={{ display: 'flex' }}>
            {/* Repeat the following block for each item */}
            <div className="col" style={{ width: '222px' }}>
              <div className="card shadow-sm">
                <img
                  src="Best Seller/six.jpeg"
                  alt="Fresho Eggs - Regular"
                />
                <div className="card-body">
                  <h3 className="fs-6 text-body-tertiary">Fresho</h3>
                  <h3 className="fs-6 text-body-secondary">
                    Fresho Farm Eggs - Regular, Medium, 6 pcs
                  </h3>
                  <h3 className="fs-6 text-body-emphasis">MRP: Rs. 47</h3>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <div type="button" className="btn btn-sm btn-outline-secondary">
                        View
                      </div>
                      <div type="button" className="btn btn-sm btn-warning flex bg-yellow-300">
                        <img src="Best Seller/cart icon.png" style={{ width: '20px' }} alt="Cart Icon" />
                        ADD
                      </div>
                    </div>
                    <small className="text-body-secondary"></small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col" style={{ width: '222px' }}>
              <div className="card shadow-sm">
                <img
                  src="Best Seller/seven.jpeg"
                  alt="Fresho Eggs - Regular"
                />
                <div className="card-body">
                  <h3 className="fs-6 text-body-tertiary">Fresho</h3>
                  <h3 className="fs-6 text-body-secondary">
                    Fresho Farm Eggs - Regular, Medium, 6 pcs
                  </h3>
                  <h3 className="fs-6 text-body-emphasis">MRP: Rs. 47</h3>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <div type="button" className="btn btn-sm btn-outline-secondary">
                        View
                      </div>
                      <div type="button" className="btn btn-sm btn-warning flex bg-yellow-300">
                        <img src="Best Seller/cart icon.png" style={{ width: '20px' }} alt="Cart Icon" />
                        ADD
                      </div>
                    </div>
                    <small className="text-body-secondary"></small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col" style={{ width: '222px' }}>
              <div className="card shadow-sm">
                <img
                  src="Best Seller/eight.jpeg"
                  alt="Fresho Eggs - Regular"
                />
                <div className="card-body">
                  <h3 className="fs-6 text-body-tertiary">Fresho</h3>
                  <h3 className="fs-6 text-body-secondary">
                    Fresho Farm Eggs - Regular, Medium, 6 pcs
                  </h3>
                  <h3 className="fs-6 text-body-emphasis">MRP: Rs. 47</h3>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <div type="button" className="btn btn-sm btn-outline-secondary">
                        View
                      </div>
                      <div type="button" className="btn btn-sm btn-warning flex bg-yellow-300">
                        <img src="Best Seller/cart icon.png" style={{ width: '20px' }} alt="Cart Icon" />
                        ADD
                      </div>
                    </div>
                    <small className="text-body-secondary"></small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col" style={{ width: '222px' }}>
              <div className="card shadow-sm">
                <img
                  src="Best Seller/nine.jpeg"
                  alt="Fresho Eggs - Regular"
                />
                <div className="card-body">
                  <h3 className="fs-6 text-body-tertiary">Fresho</h3>
                  <h3 className="fs-6 text-body-secondary">
                    Fresho Farm Eggs - Regular, Medium, 6 pcs
                  </h3>
                  <h3 className="fs-6 text-body-emphasis">MRP: Rs. 47</h3>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <div type="button" className="btn btn-sm btn-outline-secondary">
                        View
                      </div>
                      <div type="button" className="btn btn-sm btn-warning flex bg-yellow-300">
                        <img src="Best Seller/cart icon.png" style={{ width: '20px' }} alt="Cart Icon" />
                        ADD
                      </div>
                    </div>
                    <small className="text-body-secondary"></small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col" style={{ width: '222px' }}>
              <div className="card shadow-sm">
                <img
                  src="Best Seller/ten.jpeg"
                  alt="Fresho Eggs - Regular"
                />
                <div className="card-body">
                  <h3 className="fs-6 text-body-tertiary">Fresho</h3>
                  <h3 className="fs-6 text-body-secondary">
                    Fresho Farm Eggs - Regular, Medium, 6 pcs
                  </h3>
                  <h3 className="fs-6 text-body-emphasis">MRP: Rs. 47</h3>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <div type="button" className="btn btn-sm btn-outline-secondary">
                        View
                      </div>
                      <div type="button" className="btn btn-sm btn-warning flex bg-yellow-300">
                        <img src="Best Seller/cart icon.png" style={{ width: '20px' }} alt="Cart Icon" />
                        ADD
                      </div>
                    </div>
                    <small className="text-body-secondary"></small>
                  </div>
                </div>
              </div>
            </div>
            {/* Repeat the block above for other items */}
          </div>
        </div>
      
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleone"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon bg-black" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleone"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon bg-black " aria-hidden="true" ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>

    </div>
  )
}

export default BestSellers