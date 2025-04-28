import React from "react";
import logo from "../assets/bd.png";

const Fotter = () => {
  return (
    <div className="min-h-screen  w-full bg-[#090214] pt-[4rem]  ">
        <div className="flex  flex-col gap-6 md:flex-row justify-center items-start border-t border-white/20 py-[4rem] px-[3vw]">
          <div className="w-full md:block flex flex-col items-center  justify-center md:w-[35%]   gap-6">
        <div className="leftlogo  w-[50vw] md:w-[20vw]  h-full flex items-center justify-center  md:justify-start  ">
          <img
            src={logo}
            className="md:h-[10vh] md:w-[14vw] w-[30vw]  object-contain"
            alt=""
          />
        </div>
        <div className="w-full text-center md:text-start text-white/80 text-[4vw] leading-5  md:text-[1.3vw]">
            <p>Transforming Ideas into Digital Excellence. Elevate your online presence with our innovative solutions and strategic digital services.</p>
        </div>
        <div className="w-full   flex flex-col items-center  justify-center md:block text-white/80  cursor-pointer py-2  md:py-6 ">
           <div className="flex gap-2  items-center"><i className="ri-mail-line"></i> <h1 className=" text-[3vw] md:text-[1.2vw] hover:text-[#FD7EC1]">info@buzzdigitalagency.com</h1></div>
           <div className="flex gap-2  items-center"><i className="ri-phone-fill"></i> <h1 className=" text-[3vw] md:text-[1.2vw] hover:text-[#FD7EC1]">(888) 009 4493</h1></div>
           <div className="flex gap-2  items-center"><i className="ri-focus-3-fill"></i> <h1 className=" text-[3vw] md:text-[1.2vw] hover:text-[#FD7EC1]">1535 west Loop s, ste  450, houston , Tx,  62720</h1></div>
        </div>
        <div className=" sociallink w-full flex justify-center md:justify-start gap-3 items-center">
            <div className="h-[7vh] w-[7vh] rounded-full bg-[#7458a1]/40 flex items-center  justify-center">
            <i className="ri-facebook-fill text-white  text-[4vw] md:text-[1.8vw]"></i>
            </div>
            <div className="h-[7vh] w-[7vh] rounded-full bg-[#7458a1]/40 flex items-center  justify-center">
            <i className="ri-instagram-fill text-white  text-[4vw] md:text-[1.8vw]"></i>
            </div>
            <div className="h-[7vh] w-[7vh] rounded-full bg-[#7458a1]/40 flex items-center  justify-center">
            <i className="ri-twitter-x-fill text-white  text-[4vw] md:text-[1.8vw]"></i>
            </div>
            <div className="h-[7vh] w-[7vh] rounded-full bg-[#7458a1]/40 flex items-center  justify-center">
            <i className="ri-google-fill text-white  text-[4vw] md:text-[1.8vw]"></i>
            </div>
            <div className="h-[7vh] w-[7vh] rounded-full bg-[#7458a1]/40 flex items-center  justify-center">
            <i className="ri-youtube-fill text-white  text-[4vw] md:text-[1.8vw]"></i>
            </div>
            <div className="h-[7vh] w-[7vh] rounded-full bg-[#7458a1]/40 flex items-center  justify-center">
            <i className="ri-linkedin-fill text-white  text-[4vw] md:text-[1.8vw]"></i>
            </div>
            <div className="h-[7vh] w-[7vh] rounded-full bg-[#7458a1]/40 flex items-center  justify-center">
            <i className="ri-tiktok-fill text-white  text-[4vw] md:text-[1.8vw]"></i>
            </div>


        </div>
        </div>

          <div className="w-full md:w-[70%] grid grid-cols-1 gap-y-4 md:grid-cols-3 pl-[3vw]  gap-x-8  ">
           <div className="text-white  w-full    ">
          <h3 className="text-xl font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-[#FD7EC1] cursor-pointer">Search Engine Optimization (SEO)</li>
            <li className="hover:text-[#FD7EC1] cursor-pointer">Pay-Per-Click Advertising (PPC)</li>
            <li className="hover:text-[#FD7EC1] cursor-pointer">Social Media Marketing</li>
            <li className="hover:text-[#FD7EC1] cursor-pointer">Content Marketing</li>
            <li className="hover:text-[#FD7EC1] cursor-pointer">Email Marketing</li>
            <li className="hover:text-[#FD7EC1] cursor-pointer">Web Design & Development</li>
            <li className="hover:text-[#FD7EC1] cursor-pointer">Conversion Rate Optimization (CRO)</li>
            <li className="hover:text-[#FD7EC1] cursor-pointer">Analytics & Reporting</li>
          </ul>
          </div>
          <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-2 gap-x-8 gap-y-4">

          <div className="text-white  w-full " >
          <h3 className="text-xl font-semibold mb-4">Industries</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-[#FD7EC1] cursor-pointer">B2B</li>
            <li className="hover:text-[#FD7EC1] cursor-pointer">Manufacturers</li>
            <li className="hover:text-[#FD7EC1] cursor-pointer">Fintech</li>
            <li className="hover:text-[#FD7EC1] cursor-pointer">Law</li>
            <li className="hover:text-[#FD7EC1] cursor-pointer">Real Estate</li>
            <li className="hover:text-[#FD7EC1] cursor-pointer">Construction</li>
            <li className="hover:text-[#FD7EC1] cursor-pointer">Technology</li>
          </ul>
          </div>
          <div className="text-white  w-full  " >
          <h3 className="text-xl font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-[#FD7EC1] cursor-pointer">Blog</li>
            <li className="hover:text-[#FD7EC1] cursor-pointer">eBooks & Whitepapers</li>
            <li className="hover:text-[#FD7EC1] cursor-pointer">Case Studies</li>
            <li className="hover:text-[#FD7EC1] cursor-pointer">FAQs</li>
            <li className="hover:text-[#FD7EC1] cursor-pointer">Audit</li>
            <li className="hover:text-[#FD7EC1] cursor-pointer">Contact Us</li>
          </ul>
          </div>
          </div>

           <div className=" text-white mt-10">
            <p className="text-xl font-semibold">Locations</p>
            <p className="text-gray-400 hover:text-[#FD7EC1] cursor-pointer">Houston</p>
           </div>   
        </div>
       
    
          
      </div>

      <div className="w-full  h-[15vh] border-t-[1px] border-white/20 text-white flex justify-center items-center  " >
      <div className="px-[3vw] flex justify-between items-center w-full h-full ">

      <h1 className="hover:text-[#FD7EC1] text-[2vw] md:text-[1.2vw]">Copyright © 2025 Buzz Digital Agency, All rights reserved.</h1>
         <div className="flex items-center gap-4 ">
            <h1 className="hover:text-[#FD7EC1]  text-[2vw] md:text-[1.2vw]">Terms and Services</h1>
            <h1 className="hover:text-[#FD7EC1] text-[2vw]   md:text-[1.2vw] pr-[3vw]">Privacy</h1>
         </div>
      </div>
      </div>
       

    </div>
  );
};

export default Fotter;
