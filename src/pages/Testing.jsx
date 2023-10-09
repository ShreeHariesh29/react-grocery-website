import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Testing() {
  
  const [products, setProducts] = useState([]);
  const [adduser, setAddUser] = useState(false);

  const toggleModel = () =>{
    setAddUser(!adduser)
  }

  useEffect(() => {
    axios.get('http://localhost:1336/getdata')
    .then(products => setProducts(products.data))
    .catch(err => console.log(err))
  }, []);

  return (
    <div>
      
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-col-lg-6 " style={{ marginTop: '20px' }}>
        {/* ... */}
      {/* Replace each 'style' attribute with corresponding inline style object */}
      { products.map(products => (
          <div key={products._id}>
        <div className="col transition duration-100 hover:shadow-2xl " id="bankone" style={{ width: '200px' }}>
          <div className="card shadow-sm">
            <img src={products.productimg} alt="Fresho Eggs - Regular" />
            <div className="card-body space-y-1">
              <h3 className="fs-6 text-body-tertiary">{products.productbrand}</h3>
              <h3 className="fs-6 text-body-secondary">{products.productname}</h3>
              <h3 className="fs-6 text-body-emphasis">{products.productprice}</h3>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" style={{height: '28px'}} className="btn btn-sm btn-outline-secondary">{products.butone}</button>
                  <button type="button" className=" flex btn btn-sm bg-yellow-300 hover:bg-yellow-100 btn-warning h-7"><img src={products.cart} style={{ width: '20px' }} />ADD</button>
                </div>
                <small className="text-body-secondary"></small>
              </div>
            </div>
          </div>
        </div>
        </div>
        ))}


        {/* ... Repeat this structure for other products */}
      </div>
      <div className='btn ' onClick={toggleModel} >
        click here
      </div>

      {adduser && (
        <div class="adduser">
        <div>hello world</div>
        </div>
      )}
      

      
    </div>
  );
}

export default Testing;

