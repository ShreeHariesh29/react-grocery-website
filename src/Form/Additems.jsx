import React from 'react'

function Additems() {
  return (
    <div>
        <form className="product-form" onSubmit={onSubmitForm}>
                  
                  <div className="form-group mb-4">
                    <input
                      type="file"
                      placeholder="product image"
                      name="imgfile"
                      className="form-control"
                      value={productInpt.imgfile}
                      onChange={onInptHandler}
                    />
                  </div>
                  <div className="form-group mb-4">
                    <input
                      type="text"
                      placeholder="product title"
                      name="title"
                      className="form-control"
                      value={productInpt.title}
                      onChange={onInptHandler}
                    />
                  </div>
                  <div className="form-group mb-4">
                    <input
                      type="text"
                      placeholder="product price"
                      name="price"
                      className="form-control"
                      value={productInpt.price}
                      onChange={onInptHandler}
                    />
                  </div>
                  <div className="form-group mb-4">
                    <textarea
                      name="description"
                      className="form-control"
                      placeholder="Description"
                      value={productInpt.description}
                      onChange={onInptHandler}
                    ></textarea>
                  </div>

                  <div className="form-group mb-4">
                  
                    <button type="submit" className="btn btn-primary ms-0">
                      Add product
                    </button>
                    
                  </div>
                </form>
    </div>
  )
}

export default Additems