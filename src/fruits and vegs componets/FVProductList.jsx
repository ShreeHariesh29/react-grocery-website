import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';


function FVProductList(pros) {
  const [products, setProducts] = useState([]);
  const [isLoad, setLoad] = useState(false);

  const fetchData = async () => {
    try{
      const response = await axios.get('http://localhost:1336/getdata')
      setLoad(true)
      console.log(response.data)
      setProducts(response.data)
    }
    catch(err) {
      setLoad(true)
      console.log(err)
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      
    <div className=" row row-cols-1 row-cols-sm-2 row-cols-md-4 row-col-lg-6 " style={{ marginTop: '20px' }}>
      {/* ... */}
    {/* Replace each 'style' attribute with corresponding inline style object */}
    {isLoad && products.map(products => (
        <div key={products._id}>
      <div className="mt-3 col transition duration-100 hover:shadow-2xl " id="bankone" style={{ width: '200px' }}>
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
  </div>
   
  );
}

export default FVProductList;
