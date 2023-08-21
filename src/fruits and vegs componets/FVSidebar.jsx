import React from 'react';

function FVSideBar() {
  return (
    <div>
      
      <div style={{ display: 'flex', marginLeft: '10%', marginRight: '10%' }}>
        <div className="container d-flex">
          <div className="flex-shrink-0 p-3" style={{ width: '280px' }}>
            <a
              href="/"
              className="d-flex align-items-center pb-3 mb-3 link-body-emphasis text-decoration-none border-bottom"
            >
              <svg className="bi pe-none me-2" width="30" height="24">
                <use xlinkHref="#bootstrap"></use>
              </svg>
            </a>
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
                      <a
                        href="#"
                        className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                      >
                        <input type="checkbox" />
                        Fresh Fruits
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                      >
                        <input type="checkbox" />
                        Fresh Vegetables
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                      >
                        <input type="checkbox" />
                        Herbs & Seasonings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                      >
                        <input type="checkbox" />
                        Cuts & Sprouts
                      </a>
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
                      <a
                        href="#"
                        className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                      >
                        <input type="checkbox" />
                        Rs.21 to Rs.50
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                      >
                        <input type="checkbox" />
                        Rs.51 to Rs.100
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                      >
                        <input type="checkbox" />
                        Rs.101 to Rs.200
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                      >
                        <input type="checkbox" />
                        Rs.201 to Rs.500
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                      >
                        <input type="checkbox" />
                        More than 501
                      </a>
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
                      <a
                        href="#"
                        className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                      >
                        <input type="checkbox" />
                        India
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                      >
                        <input type="checkbox" />
                        Australia
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                      >
                        <input type="checkbox" />
                        USA
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                      >
                        <input type="checkbox" />
                        Italy
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                      >
                        <input type="checkbox" />
                        New Zealand
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                      >
                        <input type="checkbox" />
                        Thailand
                      </a>
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
                      <a
                        href="#"
                        className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                      >
                        <input type="checkbox" />
                        Fresho
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                      >
                        <input type="checkbox" />
                        Gopalan Organic
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                      >
                        <input type="checkbox" />
                        USA
                      </a>
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
