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
                   
                <a href="https://www.tatadigital.com/v2/homepage?nc=b-cp-hp-sec3&b_t=cp_hp_sec3&b_camp=hp_topstrip_m_250723_02png&t_from_ban=7444565&t_pos=2&t_ch=desktop&_branch_match_id=1196292102327812629&utm_source=bb&utm_campaign=bb_homepage_20220329&utm_medium=website&_branch_referrer=H4sIAAAAAAAAAy2LQQrDIBAAf5ObMRhtoCD9QNtLH7CsmzRKoi5x%2F0899DTMwEQRbnetz1SOUVBwTXsSPEeqWS%2Bf5NLzhe8aHoV8UMQqsmobzUMA8cQQGf5KmNl3lcpNrsSQwbhpMTNMhss%2BCHyvmiFg8Yu11t1cT1ybN50U%2Fbq1o78%2FHG75KZEAAAA%3D">
                <div className="btn" style={{ padding: '0px', width: '200px', height: '70px', backgroundColor: '#1B0F2E', paddingTop: '3px' }}>
                    <img style={{ width: '200px' }} src="images/neupass icon.webp" alt="" />
                </div>
                </a>
                
                <Link to="fruits">
                <div className="btn" style={{ backgroundColor: '#4C6020', width: '200px', height: '70px', fontSize: '20px', fontWeight: '700', color: 'white' }}>
                        FRUITS AND <br /> VEGETABLES
                    </div>
                </Link>
                    
                <Link to="discount">
                <div className="btn" style={{ backgroundColor: '#E8E8E8', width: '200px', height: '70px', fontSize: '20px', fontWeight: '700' }}>
                    BUY MORE SAVE <br /> MORE
                </div>
                </Link>
                
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