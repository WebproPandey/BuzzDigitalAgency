import React from 'react'
import logo from "../assets/bd.png"

const Navbar = () => {
  return (
    <div className='w-full h-[18vh]  border-gray-200 sticky top-0 left-0 z-[9999] flex justify-between px-10 bg-transparent '>
    <div className='line w-full bottom-0 left-0 absolute px-10'>
      <div className=' h-[0.1rem] w-full  bg-gray-100/20'></div>
    </div>

        <div className='leftlogo w-[20vw]  h-full flex items-center  justify-start  '>
            <img src={logo} className='h-[10vh]  w-[14vw] object-contain' alt="" />
        </div>
        
        <div className='rightside w-fit   flex items-center justify-end gap-8'>
            <div className='text-white text-[1.2vw] font-medium flex gap-2 cursor-pointer'>About </div>
            <div className='text-white text-[1.2vw] font-medium flex gap-2 cursor-pointer'>Services <div><i className="ri-arrow-down-s-line text-base "></i></div> </div>
            <div className='text-white text-[1.2vw] font-medium flex gap-2 cursor-pointer'>Industries <div><i className="ri-arrow-down-s-line text-base "></i></div> </div>
            <div className='text-white text-[1.2vw] font-medium flex gap-2 cursor-pointer'>Case Studis </div>
            <div className='text-white text-[1.2vw] font-medium flex gap-2 cursor-pointer'>Blog </div>
            <div className='text-white text-[1.2vw] font-medium flex gap-2 cursor-pointer'>Resources <div><i className="ri-arrow-down-s-line text-base "></i></div> </div>
            <div className="button px-8 py-[6px] text-white border bg-gradient-to-r from-[#F77FC9] to-[#BC7CF6]  hover:from-[#BC7CF6] hover:to-[#F77FC9] hover:shadow-xl transition-all duration-300 ease-in-out rounded-full uppercase font-medium">get Started</div>
        </div>
    </div>
  )
}

export default Navbar