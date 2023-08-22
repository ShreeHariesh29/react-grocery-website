import React from 'react'

function Footer() {
  return (
        <div id="footer" className=' mr-[10%] ml-[10%] flex ' >
            <div style={{ paddingLeft: '10%', paddingTop: '50px' }}>
                <div style={{ color: 'rgb(176, 173, 173)', fontFamily: 'Arial, Helvetica, sans-serif' }}>
                    <h4 style={{ color: '#84C225', fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif", fontSize: '30px' }}>Help</h4>
                    <p className='py-2' style={{ fontSize: '18px' }}>About us</p>
                    <p className='py-2'  style={{ fontSize: '18px' }}>In News</p>
                    <p className='py-2'  style={{ fontSize: '18px' }}>Green Bigbasket</p>
                    <p className='py-2'  style={{ fontSize: '18px' }}>Privacy and police</p>
                    <p className='py-2'  style={{ fontSize: '18px' }}>Affiliate</p>
                    <p className='py-2'  style={{ fontSize: '18px' }}>Terms and Conditions</p>
                    <p className='py-2'  style={{ fontSize: '18px' }}>bb Instant</p>
                    <p className='py-2'  style={{ fontSize: '18px' }}>bb Daily</p>
                    <p className='py-2'  style={{ fontSize: '18px' }}>bb Blog</p>
                    <p className='py-2'  style={{ fontSize: '18px' }}>bb now</p>
                </div>
            </div>
            <div style={{ paddingLeft: '10%', paddingTop: '50px' }}>
                <div style={{ color: 'rgb(176, 173, 173)', fontFamily: 'Arial, Helvetica, sans-serif' }}>
                    <h4 style={{ color: '#84C225', fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif", fontSize: '30px' }}>Help</h4>
                    <p className='py-2'  style={{ fontSize: '18px' }}>FAQs</p>
                    <p className='py-2'  style={{ fontSize: '18px' }}>Contact Us</p>
                    <p className='py-2' style={{ fontSize: '18px' }}>bb Wallet FAQs</p>
                    <p className='py-2'  style={{ fontSize: '18px' }}>bb Wallet T&Cs</p>
                    <p className='py-2'  style={{ fontSize: '18px' }}>Vendor Connect</p>
                </div>
            </div>
            <div className='block' style={{ paddingLeft: '10%', paddingTop: '50px' }}>
                <div style={{ color: 'rgb(176, 173, 173)', fontFamily: 'Arial, Helvetica, sans-serif' }}>
                    <h4 style={{ color: '#84C225', fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif", fontSize: '30px' }}>Download our App</h4>
                    <a href="https://play.google.com/store/search?q=bigbasket&c=apps&hl=en-IN"><div className="mt-4" style={{ width: '200px', height: '50px', padding: '0px', borderRadius: '10px' }}><img id="bankone" style={{ width: '200px', height: '60px' }} src="Banners/Google-Play-Button.jpg" alt="" /></div></a>
                    <a href="https://apps.apple.com/in/app/bigbasket-bbnow-grocery-app/id660683603"><div className="mt-4" style={{ width: '200px', height: '50px', padding: '0px', borderRadius: '10px', marginTop: '20px' }}><img id="bankone" style={{ width: '200px', height: '60px' }} src="Banners/app store but" alt="" /></div></a>
                </div>
            </div>
            <div style={{ paddingLeft: '10%', paddingTop: '50px' }}>
                <h1 style={{ color: '#84C225', fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif", fontSize: '30px' }}> Get Social With Us</h1>
                {/* Add social media icons here */}
            </div>
        </div>

  )
}

export default Footer