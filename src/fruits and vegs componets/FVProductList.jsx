import React from 'react';
import carticon from './fruits and vegetables/cart icon.png'
import FV1 from './fruits and vegetables/10000204_16-fresho-tomato-local.jpeg'
import FV2 from './fruits and vegetables/1202331_1-usa-pear-green-imported.jpeg'
import FV3 from './fruits and vegetables/10000149_14-fresho-onion.jpeg'
import FV4 from './fruits and vegetables/fresho-potato-onekg.jpg'
import FV5 from './fruits and vegetables/fresho-carrot-local-500gm.jpg'
import FV6 from './fruits and vegetables/50000512_9-fresho-chilli-green-organically-grown.jpeg'
import FV7 from './fruits and vegetables/10000813_2-gopalan-organic-snake-gourd.jpeg'
import FV8 from './fruits and vegetables/10000105_16-fresho-curry-leaves.jpeg'
import FV9 from './fruits and vegetables/40023480_3-fresho-ginger-organically-grown.jpeg'
import FV10 from './fruits and vegetables/40104709-2_1-fresho-apple-red-delicious-premium.jpeg'
import FV11 from './fruits and vegetables/fresho-coriander-leaves.jpg'
import FV12 from './fruits and vegetables/10000115_15-fresho-garlic.jpeg'
import FV13 from './fruits and vegetables/10000025_24-fresho-banana-robusta.jpeg'
import FV14 from './fruits and vegetables/40117518_1-fresho-orange-imported-b-grade.jpeg'
import FV15 from './fruits and vegetables/40097808_2-fresho-pomegranate-peeled.jpeg'
import FV16 from './fruits and vegetables/1221868_1-fresho-tender-coconut.jpeg'
import FV17 from './fruits and vegetables/50000461_5-fresho-beans-french-ring-organically-grown.jpeg'
import FV18 from './fruits and vegetables/30000480_21-fresho-grapes-red-globe.jpeg'
import FV19 from './fruits and vegetables/40163718_11-fresho-frozen-green-peas.jpeg'
import FV20 from './fruits and vegetables/40119402_5-fresho-pineapple-chunks-single-serve.jpeg'

function FVProductList() {
  return (
    <div>
      
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4" style={{ marginTop: '20px' }}>
        {/* ... */}
        {/* Replace each 'style' attribute with corresponding inline style object */}
        <div className="col" id="bankone" style={{ width: '200px' }}>
          <div className="card shadow-sm">
            <img src={FV1} alt="Fresho Tomato - Local" />
            <div className="card-body">
              <h3 className="fs-6 text-body-tertiary">Fresho</h3>
              <h3 className="fs-6 text-body-secondary">Fresho Tomato - Local, 250 g</h3>
              <h3 className="fs-6 text-body-emphasis">MRP: Rs. 22.25</h3>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" style={{height: '35px'}} className="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" className=" flex btn btn-sm btn-warning"><img src={carticon} style={{ width: '20px' }} />ADD</button>
                </div>
                <small className="text-body-secondary"></small>
              </div>
            </div>
          </div>
        </div>
        <div className="col" id="bankone" style={{ width: '200px' }}>
          <div className="card shadow-sm">
            <img src={FV2} alt="USA Pear Green - Imported" />
            <div className="card-body">
              <h3 className="fs-6 text-body-tertiary">USA</h3>
              <h3 className="fs-6 text-body-secondary">USA Pear - Green, Imported, 3x2 pcs</h3>
              <h3 className="fs-6 text-body-emphasis">MRP: Rs. 220.49</h3>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" style={{height: '35px'}} className="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" className=" flex btn btn-sm btn-warning"><img src={carticon} style={{ width: '20px' }} />ADD</button>
                </div>
                <small className="text-body-secondary"></small>
              </div>
            </div>
          </div>
        </div>
        <div className="col" id="bankone" style={{ width: '200px' }}>
          <div className="card shadow-sm">
            <img src={FV3} alt="Fresho Onion" />
            <div className="card-body">
              <h3 className="fs-6 text-body-tertiary">Fresho</h3>
              <h3 className="fs-6 text-body-secondary">Fresho Onion (Loose), 5 kg</h3>
              <h3 className="fs-6 text-body-emphasis">MRP: Rs. 156</h3>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" style={{height: '35px'}} className="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" className=" flex btn btn-sm btn-warning"><img src={carticon} style={{ width: '20px' }} />ADD</button>
                </div>
                <small className="text-body-secondary"></small>
              </div>
            </div>
          </div>
        </div>
        <div className="col" id="bankone" style={{ width: '200px' }}>
          <div className="card shadow-sm">
            <img src={FV4} alt="Fresho Potato" />
            <div className="card-body">
              <h3 className="fs-6 text-body-tertiary">Fresho</h3>
              <h3 className="fs-6 text-body-secondary">Fresho Potato, Organic, 1 kg</h3>
              <h3 className="fs-6 text-body-emphasis">MRP: Rs. 36.33</h3>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" style={{height: '35px'}} className="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" className=" flex btn btn-sm btn-warning"><img src={carticon} style={{ width: '20px' }} />ADD</button>
                </div>
                <small className="text-body-secondary"></small>
              </div>
            </div>
          </div>
        </div>
        <div className="col" id="bankone" style={{ width: '200px' }}>
          <div className="card shadow-sm">
            <img src={FV5} alt="Fresho Carrot - Local" />
            <div className="card-body">
              <h3 className="fs-6 text-body-tertiary">Fresho</h3>
              <h3 className="fs-6 text-body-secondary">Fresho Carrot - Orange, 500 g</h3>
              <h3 className="fs-6 text-body-emphasis">MRP: Rs. 28</h3>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" style={{height: '35px'}} className="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" className=" flex btn btn-sm btn-warning"><img src={carticon} style={{ width: '20px' }} />ADD</button>
                </div>
                <small className="text-body-secondary"></small>
              </div>
            </div>
          </div>
        </div>
        <div className="col" id="bankone" style={{ width: '200px' }}>
          <div className="card shadow-sm">
            <img src={FV6} alt="Fresho Chilli - Green" />
            <div className="card-body">
              <h3 className="fs-6 text-body-tertiary">Fresho</h3>
              <h3 className="fs-6 text-body-secondary">Fresho Chilli - Green, 200 g</h3>
              <h3 className="fs-6 text-body-emphasis">MRP: Rs. 21</h3>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" style={{height: '35px'}} className="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" className=" flex btn btn-sm btn-warning"><img src={carticon} style={{ width: '20px' }} />ADD</button>
                </div>
                <small className="text-body-secondary"></small>
              </div>
            </div>
          </div>
        </div>
        <div className="col" id="bankone" style={{ width: '200px' }}>
          <div className="card shadow-sm">
            <img src={FV7} alt="Gopalan Organic Snake Gourd" />
            <div className="card-body">
              <h3 className="fs-6 text-body-tertiary">Gopalan Organic</h3>
              <h3 className="fs-6 text-body-secondary">Gopalan Organic Snake Gourd, 1 kg</h3>
              <h3 className="fs-6 text-body-emphasis">MRP: Rs. 67.12</h3>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" style={{height: '35px'}} className="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" className=" flex btn btn-sm btn-warning"><img src={carticon} style={{ width: '20px' }} />ADD</button>
                </div>
                <small className="text-body-secondary"></small>
              </div>
            </div>
          </div>
        </div>
        <div className="col" id="bankone" style={{ width: '200px' }}>
          <div className="card shadow-sm">
            <img src={FV8} alt="Fresho Curry Leaves" />
            <div className="card-body">
              <h3 className="fs-6 text-body-tertiary">Fresho</h3>
              <h3 className="fs-6 text-body-secondary">Fresho Curry Leaves, 300 g</h3>
              <h3 className="fs-6 text-body-emphasis">MRP: Rs. 25.50</h3>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" style={{height: '35px'}} className="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" className=" flex btn btn-sm btn-warning"><img src={carticon} style={{ width: '20px' }} />ADD</button>
                </div>
                <small className="text-body-secondary"></small>
              </div>
            </div>
          </div>
        </div>
        <div className="col" id="bankone" style={{ width: '200px' }}>
          <div className="card shadow-sm">
            <img src={FV9} alt="Fresho Ginger - Organic" />
            <div className="card-body">
              <h3 className="fs-6 text-body-tertiary">Fresho</h3>
              <h3 className="fs-6 text-body-secondary">Fresho Ginger - Organic, 100 g</h3>
              <h3 className="fs-6 text-body-emphasis">MRP: Rs. 36</h3>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button"style={{height: '35px'}} className="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" className=" flex btn btn-sm btn-warning"><img src={carticon} style={{ width: '20px' }} />ADD</button>
                </div>
                <small className="text-body-secondary"></small>
              </div>
            </div>
          </div>
        </div>
        <div className="col" id="bankone" style={{ width: '200px' }}>
          <div className="card shadow-sm">
            <img src={FV10} alt="Fresho Apple - Red" />
            <div className="card-body">
              <h3 className="fs-6 text-body-tertiary">Fresho</h3>
              <h3 className="fs-6 text-body-secondary">Fresho Apple - Red, Regular, 4 pcs</h3>
              <h3 className="fs-6 text-body-emphasis">MRP: Rs. 214.03</h3>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" style={{height: '35px'}} className="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" className=" flex btn btn-sm btn-warning"><img src={carticon} style={{ width: '20px' }} />ADD</button>
                </div>
                <small className="text-body-secondary"></small>
              </div>
            </div>
          </div>
        </div>
        <div className="col" id="bankone" style={{ width: '200px' }}>
          <div className="card shadow-sm">
            <img src={FV11} alt="Fresho Coriander Leaves" />
            <div className="card-body">
              <h3 className="fs-6 text-body-tertiary">Fresho</h3>
              <h3 className="fs-6 text-body-secondary">Fresho Coriander Leaves, 300 g</h3>
              <h3 className="fs-6 text-body-emphasis">MRP: Rs. 25.50</h3>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" style={{height: '35px'}} className="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" className=" flex btn btn-sm btn-warning"><img src={carticon} style={{ width: '20px' }} />ADD</button>
                </div>
                <small className="text-body-secondary"></small>
              </div>
            </div>
          </div>
        </div>
        <div className="col" id="bankone" style={{ width: '200px' }}>
          <div className="card shadow-sm">
            <img src={FV12} alt="Fresho Garlic" />
            <div className="card-body">
              <h3 className="fs-6 text-body-tertiary">Fresho</h3>
              <h3 className="fs-6 text-body-secondary">Fresho Garlic - Organic, 100 g</h3>
              <h3 className="fs-6 text-body-emphasis">MRP: Rs. 27</h3>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" style={{height: '35px'}} className="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" className=" flex btn btn-sm btn-warning"><img src={carticon} style={{ width: '20px' }} />ADD</button>
                </div>
                <small className="text-body-secondary"></small>
              </div>
            </div>
          </div>
        </div>
        <div className="col" id="bankone" style={{ width: '200px' }}>
          <div className="card shadow-sm">
            <img src={FV13} alt="Fresho Banana -Robusta" />
            <div className="card-body">
              <h3 className="fs-6 text-body-tertiary">Fresho</h3>
              <h3 className="fs-6 text-body-secondary">Fresho Banana - Robusta, 1000 g</h3>
              <h3 className="fs-6 text-body-emphasis">MRP: Rs. 28</h3>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" style={{height: '35px'}} className="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" className=" flex btn btn-sm btn-warning"><img src={carticon} style={{ width: '20px' }} />ADD</button>
                </div>
                <small className="text-body-secondary"></small>
              </div>
            </div>
          </div>
        </div>
        <div className="col" id="bankone" style={{ width: '200px' }}>
          <div className="card shadow-sm">
            <img src={FV14} alt="Fresho Orange - Imported" />
            <div className="card-body">
              <h3 className="fs-6 text-body-tertiary">Fresho</h3>
              <h3 className="fs-6 text-body-secondary">Fresho Orange - Imported, 6 pcs</h3>
              <h3 className="fs-6 text-body-emphasis">MRP: Rs. 208</h3>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" style={{height: '35px'}} className="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" className=" flex btn btn-sm btn-warning"><img src={carticon} style={{ width: '20px' }} />ADD</button>
                </div>
                <small className="text-body-secondary"></small>
              </div>
            </div>
          </div>
        </div>
        <div className="col" id="bankone" style={{ width: '200px' }}>
          <div className="card shadow-sm">
            <img src={FV15} alt="Fresho Pomegranate - Peeled" />
            <div className="card-body">
              <h3 className="fs-6 text-body-tertiary">Fresho</h3>
              <h3 className="fs-6 text-body-secondary">Fresho Pomegranate-200 g</h3>
              <h3 className="fs-6 text-body-emphasis">MRP: Rs. 109.92</h3>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" style={{height: '35px'}} className="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" className=" flex btn btn-sm btn-warning"><img src={carticon} style={{ width: '20px' }} />ADD</button>
                </div>
                <small className="text-body-secondary"></small>
              </div>
            </div>
          </div>
        </div>
        <div className="col" id="bankone" style={{ width: '200px' }}>
          <div className="card shadow-sm">
            <img src={FV16} alt="Fresho Tender Coconut" />
            <div className="card-body">
              <h3 className="fs-6 text-body-tertiary">Fresho</h3>
              <h3 className="fs-6 text-body-secondary">Fresho Tender Coconut, 5 pcs</h3>
              <h3 className="fs-6 text-body-emphasis">MRP: Rs. 245</h3>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" style={{height: '35px'}} className="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" className=" flex btn btn-sm btn-warning"><img src={carticon} style={{ width: '20px' }} />ADD</button>
                </div>
                <small className="text-body-secondary"></small>
              </div>
            </div>
          </div>
        </div>
        <div className="col" id="bankone" style={{ width: '200px' }}>
          <div className="card shadow-sm">
            <img src={FV17} alt="Fresho Beans - Organic" />
            <div className="card-body">
              <h3 className="fs-6 text-body-tertiary">Fresho</h3>
              <h3 className="fs-6 text-body-secondary">Fresho Beans - Organic, 250 g</h3>
              <h3 className="fs-6 text-body-emphasis">MRP: Rs. 25</h3>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" style={{height: '35px'}} className="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" className=" flex btn btn-sm btn-warning"><img src={carticon} style={{ width: '20px' }} />ADD</button>
                </div>
                <small className="text-body-secondary"></small>
              </div>
            </div>
          </div>
        </div>
        <div className="col" id="bankone" style={{ width: '200px' }}>
          <div className="card shadow-sm">
            <img src={FV18} alt="Fresho Grapes - Red Globe" />
            <div className="card-body">
              <h3 className="fs-6 text-body-tertiary">Fresho</h3>
              <h3 className="fs-6 text-body-secondary">Fresho Grapes - Red Globe, 1 kg</h3>
              <h3 className="fs-6 text-body-emphasis">MRP: Rs. 371</h3>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" style={{height: '35px'}} className="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" className=" flex btn btn-sm btn-warning"><img src={carticon} style={{ width: '20px' }} />ADD</button>
                </div>
                <small className="text-body-secondary"></small>
              </div>
            </div>
          </div>
        </div>
        <div className="col" id="bankone" style={{ width: '200px' }}>
          <div className="card shadow-sm">
            <img src={FV19} alt="Fresho Frozen Green Peas" />
            <div className="card-body">
              <h3 className="fs-6 text-body-tertiary">Fresho</h3>
              <h3 className="fs-6 text-body-secondary">Fresho Frozen Green Peas</h3>
              <h3 className="fs-6 text-body-emphasis">MRP: Rs. 330</h3>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" style={{height: '35px'}} className="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" className=" flex btn btn-sm btn-warning"><img src={carticon} style={{ width: '20px' }} />ADD</button>
                </div>
                <small className="text-body-secondary"></small>
              </div>
            </div>
          </div>
        </div>
        <div className="col" id="bankone" style={{ width: '200px' }}>
          <div className="card shadow-sm">
            <img src={FV20} alt="Fresho Pineapple Chunks" />
            <div className="card-body">
              <h3 className="fs-6 text-body-tertiary">Fresho</h3>
              <h3 className="fs-6 text-body-secondary">Fresho Pineapple - Chunks, 80 g</h3>
              <h3 className="fs-6 text-body-emphasis">MRP: Rs. 42</h3>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" style={{height: '35px'}} className="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" className=" flex btn btn-sm btn-warning"><img src={carticon} style={{ width: '20px' }} />ADD</button>
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

export default FVProductList;
