import React from 'react'
import { Link } from 'react-router-dom'
function Categorybutton() {
  return (
    <div className='mx-[11%]'>
        
            <div className="container d-flex justify-content-between" style={{ marginTop: '30px' }}>
                <Link to='eggs'>
                <div className="btn" style={{ backgroundColor: '#E8E8E8', width: '200px', height: '70px', fontSize: '20px', fontWeight: '700', textAlign: 'center' }}>
                        EGGS, MEAT <br /> AND FISH
                    </div>
                </Link>
                   
                
                <div className="btn" style={{ padding: '0px', width: '200px', height: '70px', backgroundColor: '#1B0F2E', paddingTop: '3px' }}>
                    <img style={{ width: '200px' }} src="images/neupass icon.webp" alt="" />
                </div>
                <a href="fruitsvegetables.html">
                    <div className="btn" style={{ backgroundColor: '#4C6020', width: '200px', height: '70px', fontSize: '20px', fontWeight: '700', color: 'white' }}>
                        FRUITS AND <br /> VEGETABLES
                    </div>
                </a>
                <div className="btn" style={{ backgroundColor: '#E8E8E8', width: '200px', height: '70px', fontSize: '20px', fontWeight: '700' }}>
                    BUY MORE SAVE <br /> MORE
                </div>
                <div className="btn" style={{ backgroundColor: '#E8E8E8', width: '200px', height: '70px', fontSize: '20px', fontWeight: '700' }}>
                    DEALS OF THE <br /> WEEK
                </div>
                <div className="btn" style={{ backgroundColor: '#E8E8E8', width: '200px', height: '70px', fontSize: '20px', fontWeight: '700', textAlign: 'center', paddingTop: '15px' }}>
                    COMBO STORE
                </div>
            </div>
    </div>

  )
}

export default Categorybutton