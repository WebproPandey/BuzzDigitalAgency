import React, { useEffect, useRef } from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Sucess = () => {

    const headingone = useRef(null);
    const headingtwo = useRef(null);
    const image = useRef(null);
    const Sucess = useRef(null);
    
    
      useEffect(() => {
    
        var tl = gsap.timeline({
          scrollTrigger: {
            trigger: Sucess.current,
            start: "10% 80%",
            end: "10% 60%",
            toggleActions: "play none none none",
            // markers:true,
          },
        })
    
        tl.fromTo(
          headingone.current,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
          }
        )
        tl.fromTo(
          headingtwo.current,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
          }
        )
        tl.fromTo(
          image.current,
          {
            opacity: 0,
            rotate: -30,
            transformOrigin: "100% 50%",
            x: -50,
          },
          {
            opacity: 1,
            rotate: 0,
            x: 0,
            duration: 0.2,
            ease: "power3.out",
          }
        )
        
        
    
    
      },[])
    




  return (
    <div
     ref={Sucess}
    className="w-full min-h-[80vh] py-20 bg-[#05010D] relative overflow-hidden flex flex-col items-center justify-center">
      
      {/* Background Layer */}
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          backgroundImage: "url('https://buzzdigitalagency.com/wp-content/uploads/2024/12/bg_pattern.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
          opacity: 0.2,
          zIndex: 1,
        }}
      ></div>

      {/* Content Layer */}
      <div className="relative z-10 w-full max-w-7xl px-4 md:px-8 text-white flex flex-col items-center text-center">
        <h2
         ref={headingone}
        className="text-2xl md:text-4xl font-semibold">
          Trusted Partner for Digital Marketing Success
        </h2>
        <p 
         ref={headingtwo}
        className="mt-4 max-w-3xl text-sm md:text-lg">
          Proudly recognized as a trusted partner, we deliver proven digital marketing solutions that help businesses grow.
        </p>

        <div className="w-full max-w-2xl mt-8 flex items-center justify-center p-6 md:p-9 rounded-lg bg-[#191420]">
          <img
           ref={image}
            className="w-40 md:w-64 grayscale cursor-pointer hover:grayscale-0 transition-all duration-300"
            src="https://buzzdigitalagency.com/wp-content/uploads/2025/02/Verified-Agency-v2.png"
            alt="Verified Agency"
          />
        </div>
      </div>
    </div>
  )
}

export default Sucess;