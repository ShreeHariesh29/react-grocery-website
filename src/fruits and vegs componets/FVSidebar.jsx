import React from 'react';

function FVSideBar() {
  return (
    <div>
      
      <div style={{ display: 'flex', marginLeft: '10%', marginRight: '10%' }}>
        <div className="container d-flex">
          <div className="flex-shrink-0 p-3" style={{ width: '280px' }}>
     
              <svg className="bi pe-none me-2" width="30" height="24">
                <use xlinkHref="#bootstrap"></use>
              </svg>
            
            <ul className="list-unstyled ps-0">
              <li className="mb-1">
                <button
                  style={{ textDecoration: 'underline' }}
                  className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#home-collapse"
                  aria-expanded="true"
                >
                  Category
                </button>
                <div>
                  <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                    <li>
                      
                        <input type="checkbox" />
                        Fresh Fruits
                    </li>
                    <li>
                      
                      
                        <input type="checkbox" />
                        Fresh Vegetables
                      
                    </li>
                    <li>
                      
                      
                        <input type="checkbox" />
                        Herbs & Seasonings
                      
                    </li>
                    <li>
                      
                      
                        <input type="checkbox" />
                        Cuts & Sprouts
                      
                    </li>
                    {/* Other category items */}
                  </ul>
                </div>
              </li>
              <li className="mb-1">
                <button
                  style={{ textDecoration: 'underline' }}
                  className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#dashboard-collapse"
                  aria-expanded="false"
                >
                  Price
                </button>
                <div>
                  <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                    <li>
                      
                      
                        <input type="checkbox" />
                        Rs.21 to Rs.50
                      
                    </li>
                    <li>
                      
                      
                        <input type="checkbox" />
                        Rs.51 to Rs.100
                      
                    </li>
                    <li>
                      
                      
                        <input type="checkbox" />
                        Rs.101 to Rs.200
                      
                    </li>
                    <li>
                      
                      
                        <input type="checkbox" />
                        Rs.201 to Rs.500
                      
                    </li>
                    <li>
                      
                      
                        <input type="checkbox" />
                        More than 501
                      
                    </li>
                    {/* Other price range items */}
                  </ul>
                </div>
              </li>
              <li className="mb-1">
                <button
                  style={{ textDecoration: 'underline' }}
                  className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#home-collapse"
                  aria-expanded="true"
                >
                  Country of Origin
                </button>
                <div>
                  <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                    <li>
                      
                      
                        <input type="checkbox" />
                        India
                      
                    </li>
                    <li>
                      
                      
                        <input type="checkbox" />
                        Australia
                      
                    </li>
                    <li>
                      
                      
                        <input type="checkbox" />
                        USA
                      
                    </li>
                    <li>
                      
                      
                        <input type="checkbox" />
                        Italy
                      
                    </li>
                    <li>
                      
                      
                        <input type="checkbox" />
                        New Zealand
                      
                    </li>
                    <li>
                      
                      
                        <input type="checkbox" />
                        Thailand
                      
                    </li>
                    {/* Other category items */}
                  </ul>
                </div>
              </li>
              <li className="mb-1">
                <button
                  style={{ textDecoration: 'underline' }}
                  className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#home-collapse"
                  aria-expanded="true"
                >
                  Brand
                </button>
                <div>
                  <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                    <li>
                      
                      
                        <input type="checkbox" />
                        Fresho
                      
                    </li>
                    <li>
                      
                      
                        <input type="checkbox" />
                        Gopalan Organic
                      
                    </li>
                    <li>
                      
                      
                        <input type="checkbox" />
                        USA
                      
                    </li>
                    {/* Other category items */}
                  </ul>
                </div>
              </li>
              {/* Other sections */}
              <li className="border-top my-3"></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FVSideBar;
