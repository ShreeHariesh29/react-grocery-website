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

function FVProductList(pros) {
  return (
    <div>
      
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 " style={{ marginTop: '20px' }}>
        {/* ... */}
        {/* Replace each 'style' attribute with corresponding inline style object */}
        <div className=" transition duration-100 hover:shadow-2xl" id="bankone" style={{ width: '200px' }}>
          <div className="card shadow-sm">
            <img src={pros.fvimg} alt="Fresho Tomato - Local" />
            <div className="card-body space-y-1">
              <h3 className="fs-6 text-body-tertiary">{pros.title}</h3>
              <h3 className="fs-6 text-body-secondary">{pros.sub}</h3>
              <h3 className="fs-6 text-body-emphasis">{pros.price}</h3>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" style={{height: '28px'}} className="btn btn-sm btn-outline-secondary">{pros.but}</button>
                  <button type="button" className=" flex btn btn-sm bg-yellow-300 hover:bg-yellow-100 btn-warning h-7"><img src={pros.img} style={{ width: '20px' }} />ADD</button>
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
