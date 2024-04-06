import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div className=' mx-[11%] ' >
        <div className='flex '>
            <Link to="/">
            <div className='flex-none w-[100%] '>
            <img className='w-[220px] h-[100px]' src="images/HeaderLogo.png" alt="" />
             </div>
            </Link>
        <div className='flex-1 w-[80%]  '>
            <div className='block '>
            <div className='flex justify-end text-slate-500    w-[100%] ' >
                <p className='px-2'>1234567891</p>
                <p className='px-2'>Chennai</p>
                <p className='px-2'>login/Register</p>
            </div>
            <div className=' mt-[15px] flex justify-between'  >
                <div className='flex w-[80%]'>
                <input className='w-[70%] h-[40px] mt-[15px] ml-[30px] border-solid border-2 border-gray-300 ' type="text" placeholder='Search your Category '   />
                <button className='h-[40px] w-[45px] bg-green mt-[15px] p-[7px] bg-lime-400 '><img className='w-[28px] ' src="images/search icon.png" alt="" /></button>
                </div>
                <div className='flex bg-zinc-300 p-2'>
                    <img className='w-[40px]' src="images/cart icon.png" alt="" />
                    <span className='font-bold block '>My Basket <br /> 0 items</span>
                </div>
            </div>
            </div>
        </div>
        
    </div>
    <div>
        <div className='w-[100%] border-solid border-1 border-gray-300 m-0'>
            <button className=' w-[18%] h-[50px] text-[20px]  text-white font-bold  bg-lime-500 ' >Shop By Category</button>
            <button className='w-[10%]  text-[20px] h-[50px] '>Filters</button>
        </div>
    </div>
        

    </div>
        
        
  )
}

export default Header