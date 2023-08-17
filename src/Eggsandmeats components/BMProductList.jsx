import React from 'react';
import carticon from './eggs and meat/cart icon.png'
import BM1 from './eggs and meat/281204_8-fresho-eggs-regular (1).jpeg'
import BM2 from './eggs and meat/Meatzza-Chicken-Hot-Spicy-Seekh-Kabab-500g_image1.jpg'
import BM3 from './eggs and meat/40094160-2_1-fresho-country-desi-eggs-small-antibiotic-residue-free.jpeg'
import BM4 from './eggs and meat/10000942_8-fresho-mutton-shoulder-boneless.jpeg'
import BM5 from './eggs and meat/40197948_1-fresho-mutton-raw-lamb-rack.jpeg'
import BM6 from './eggs and meat/40186084_4-fresho-frozen-prawns-large.jpeg'
import BM7 from './eggs and meat/40048878_2-fresho-basa-fish-fillet.jpeg'
import BM8 from './eggs and meat/40249725_1-fresho-dry-fish-nathli-anchovies-big-salted-cut-cleanedfor-accompaniment-with-meals.jpeg'
import BM9 from './eggs and meat/meatzza-mutton-seekh-kabab-500g.jpg'
import BM10 from './eggs and meat/laCarneMuttonSeekhKebab500gm-768x768.jpg'
import BM11 from './eggs and meat/10000911_13-fresho-chicken-leg-with-skin.jpeg'
import BM12 from './eggs and meat/10000925_7-fresho-chicken-mixed-boneless.jpeg'
import BM13 from './eggs and meat/40049537_7-meatzza-chicken-jumbo-hot-dog.jpeg'
import BM14 from './eggs and meat/la-carne-chicken-tandoori-tikka-500g.jpg'
import BM15 from './eggs and meat/40038379_9-fresho-farm-eggs-brown-medium-antibiotic-residue-free.jpeg'
import BM16 from './eggs and meat/40094162_5-fresho-duck-eggs-large-antibiotic-residue-free.jpeg'
import BM17 from './eggs and meat/40249727_1-fresho-dry-fish-shark-cubes-ready-to-cook-protein-rich-for-curries-snacks.jpeg'
import BM18 from './eggs and meat/40093229_2-fresho-saral-puti-fish.jpeg'
import BM19 from './eggs and meat/10000922_10-fresho-chicken-wings-with-skin.jpeg'
import BM20 from './eggs and meat/40201002_2-meatzza-krispy-fried-chicken.jpeg'

function BMProductList() {
  return (
    <div>
      
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4" style={{ marginTop: '20px' }}>
        {/* ... */}
        {/* Replace each 'style' attribute with corresponding inline style object */}
        <div className="col" id="bankone" style={{ width: '200px' }}>
          <div className="card shadow-sm">
            <img src={BM1} alt="Fresho Eggs - Regular" />
            <div className="card-body">
              <h3 className="fs-6 text-body-tertiary">Fresho</h3>
              <h3 className="fs-6 text-body-secondary">Fresho Farm Eggs - Regular, Medium, 6 pcs</h3>
              <h3 className="fs-6 text-body-emphasis">MRP: Rs. 47</h3>
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
            <img src={BM2} alt="Meatzza Chicken Hot Spicy Seekh Kabab" />
            <div className="card-body">
              <h3 className="fs-6 text-body-tertiary">Meatzza</h3>
              <h3 className="fs-6 text-body-secondary">Meatzza Chicken Hot & Spicy Seekh Kabab 500g</h3>
              <h3 className="fs-6 text-body-emphasis">MRP: Rs. 335.00</h3>
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
            <img src={BM3} alt="Fresho Country Desi Eggs" />
            <div className="card-body">
              <h3 className="fs-6 text-body-tertiary">Fresho</h3>
              <h3 className="fs-6 text-body-secondary">Fresho Country (Desi) Eggs - Small, Residue-Free, 6 pcs</h3>
              <h3 className="fs-6 text-body-emphasis">MRP: Rs. 96</h3>
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
            <img src={BM4} alt="Fresho Eggs - Regular" />
            <div className="card-body">
              <h3 className="fs-6 text-body-tertiary">Fresho</h3>
              <h3 className="fs-6 text-body-secondary">Fresho Mutton Shoulder - Boneless, 8 To 12 pcs, 500 g</h3>
              <h3 className="fs-6 text-body-emphasis">MRP: Rs. 1949</h3>
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
            <img src={BM5} alt="Fresho Mutton Raw Lamb Rack" />
            <div className="card-body">
              <h3 className="fs-6 text-body-tertiary">Fresho</h3>
              <h3 className="fs-6 text-body-secondary">Fresho Mutton Raw Lamb Rack, Residue-Free, 500 g</h3>
              <h3 className="fs-6 text-body-emphasis">MRP: Rs. 1130</h3>
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
            <img src={BM6} alt="Fresho Frozen Prawns - Large" />
            <div className="card-body">
              <h3 className="fs-6 text-body-tertiary">Fresho</h3>
              <h3 className="fs-6 text-body-secondary">Fresho Frozen Prawns - Large, 250 g (Pouch)</h3>
              <h3 className="fs-6 text-body-emphasis">MRP: Rs. 320</h3>
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
            <img src={BM7} alt="Fresho Basa Fish Fillet" />
            <div className="card-body">
              <h3 className="fs-6 text-body-tertiary">Fresho</h3>
              <h3 className="fs-6 text-body-secondary">Fresho Basa Fish Fillet - 4 To 5 pcs, 1 kg</h3>
              <h3 className="fs-6 text-body-emphasis">MRP: Rs. 805</h3>
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
            <img src={BM8} alt="Fresho Dry Fish - Nathli" />
            <div className="card-body">
              <h3 className="fs-6 text-body-tertiary">Fresho</h3>
              <h3 className="fs-6 text-body-secondary">Fresho Dry Fish Nathli/Anchovies- 80 g</h3>
              <h3 className="fs-6 text-body-emphasis">MRP: Rs. 150</h3>
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
            <img src={BM9} alt="Meatzza Mutton Seekh Kabab" />
            <div className="card-body">
              <h3 className="fs-6 text-body-tertiary">Meatzza</h3>
              <h3 className="fs-6 text-body-secondary">Meatzza Mutton Seekh Kebab-500 g</h3>
              <h3 className="fs-6 text-body-emphasis">MRP: Rs. 550.00</h3>
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
            <img src={BM10} alt="La Carne Mutton Seekh Kabab" />
            <div className="card-body">
              <h3 className="fs-6 text-body-tertiary">La Carne</h3>
              <h3 className="fs-6 text-body-secondary">La Carne Mutton Seekh Kebab 500g</h3>
              <h3 className="fs-6 text-body-emphasis">MRP: Rs. 500</h3>
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
            <img src={BM11} alt="Fresho Chicken Leg with Skin" />
            <div className="card-body">
              <h3 className="fs-6 text-body-tertiary">Fresho</h3>
              <h3 className="fs-6 text-body-secondary">Fresho Chicken Leg - With Skin, 250 g</h3>
              <h3 className="fs-6 text-body-emphasis">MRP: Rs. 129</h3>
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
            <img src={BM12} alt="Fresho Chicken Mixed - Boneless" />
            <div className="card-body">
              <h3 className="fs-6 text-body-tertiary">Fresho</h3>
              <h3 className="fs-6 text-body-secondary">Fresho Chicken Mixed Boneless, 250 g</h3>
              <h3 className="fs-6 text-body-emphasis">MRP: Rs. 285</h3>
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
            <img src={BM13} alt="Meatzza Chicken Jumbo Hot Dog" />
            <div className="card-body">
              <h3 className="fs-6 text-body-tertiary">Meatzza</h3>
              <h3 className="fs-6 text-body-secondary">Meatzza Chicken Jumbo Hot Dog, 500g</h3>
              <h3 className="fs-6 text-body-emphasis">MRP: Rs. 328.50</h3>
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
            <img src={BM14} alt="La Carne Chicken Tandoori Tikka" />
            <div className="card-body">
              <h3 className="fs-6 text-body-tertiary">La Carne</h3>
              <h3 className="fs-6 text-body-secondary">La Carne Chicken Tandoori Tikka - 500g</h3>
              <h3 className="fs-6 text-body-emphasis">MRP: Rs. 375.00</h3>
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
            <img src={BM15} alt="Fresho Farm Eggs - Brown" />
            <div className="card-body">
              <h3 className="fs-6 text-body-tertiary">Fresho</h3>
              <h3 className="fs-6 text-body-secondary">Fresho Farm Eggs - Brown, 6 pcs</h3>
              <h3 className="fs-6 text-body-emphasis">MRP: Rs. 100</h3>
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
            <img src={BM16} alt="Fresho Duck Eggs" />
            <div className="card-body">
              <h3 className="fs-6 text-body-tertiary">Fresho</h3>
              <h3 className="fs-6 text-body-secondary">Fresho Duck Eggs - Large, Antibiotic Residue-Free, 6 pcs</h3>
              <h3 className="fs-6 text-body-emphasis">MRP: Rs. 129</h3>
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
            <img src={BM17} alt="Fresho Dry Fish - Shark Cubes" />
            <div className="card-body">
              <h3 className="fs-6 text-body-tertiary">Fresho</h3>
              <h3 className="fs-6 text-body-secondary">Fresho Dry Fish Shark Cubes - Ready To Cook, 80 g</h3>
              <h3 className="fs-6 text-body-emphasis">MRP: Rs. 110</h3>
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
            <img src={BM18} alt="Fresho Kolkata/Bengali Saral Puti Fish" />
            <div className="card-body">
              <h3 className="fs-6 text-body-tertiary">Fresho</h3>
              <h3 className="fs-6 text-body-secondary">Fresho Kolkata Saral Puti Fish - Whole Uncleaned, 500 g</h3>
              <h3 className="fs-6 text-body-emphasis">MRP: Rs. 779</h3>
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
            <img src={BM19} alt="Fresho Chicken Wings with Skin" />
            <div className="card-body">
              <h3 className="fs-6 text-body-tertiary">Fresho</h3>
              <h3 className="fs-6 text-body-secondary">Fresho Chicken Wings - With Skin, Residue-Free, 8-10 Pcs, 500 g</h3>
              <h3 className="fs-6 text-body-emphasis">MRP: Rs. 311</h3>
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
            <img src={BM20} alt="Meatzza Krispy Fried Chicken" />
            <div className="card-body">
              <h3 className="fs-6 text-body-tertiary">Meatzza</h3>
              <h3 className="fs-6 text-body-secondary">Meatzza Krispy Fried Chicken - Net Weight 500g</h3>
              <h3 className="fs-6 text-body-emphasis">MRP: Rs. 345.00</h3>
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

export default BMProductList;
