import React from 'react';

function BMProductList(props) {
  return (
    <div>
      
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4  " style={{ marginTop: '20px' }}>
        {/* ... */}
        {/* Replace each 'style' attribute with corresponding inline style object */}
        <div className="col transition duration-100 hover:shadow-2xl " id="bankone" style={{ width: '200px' }}>
          <div className="card shadow-sm">
            <img src={props.mainimg} alt="Fresho Eggs - Regular" />
            <div className="card-body space-y-1">
              <h3 className="fs-6 text-body-tertiary">{props.title}</h3>
              <h3 className="fs-6 text-body-secondary">{props.sub}</h3>
              <h3 className="fs-6 text-body-emphasis">{props.price}</h3>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" style={{height: '28px'}} className="btn btn-sm btn-outline-secondary">{props.but}</button>
                  <button type="button" className=" flex btn btn-sm bg-yellow-300 hover:bg-yellow-100 btn-warning h-7"><img src={props.img} style={{ width: '20px' }} />ADD</button>
                </div>
                <small className="text-body-secondary"></small>
              </div>
            </div>
          </div>
        </div>


        {/* ... Repeat this structure for other products */}
      </div>
    </div>
  );
}

export default BMProductList;