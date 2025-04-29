import React, { useEffect, useRef } from 'react';

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Excellence = () => {
   
  const headingone = useRef(null);
  const headingtwo = useRef(null);
  const pera = useRef(null);
  const Excellence = useRef(null);
  
  
    useEffect(() => {
  
      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: Excellence.current,
          start: "30% 80%",
          end: "30% 60%",
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
        pera.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        }
      )
      
      
  
  
    },[])
  

  return (
    <section 
    ref={Excellence}
      className="relative min-h-screen md:h-[86vh] bg-cover bg-center flex items-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/flagged/photo-1564445476463-7833c341e914?q=80&w=1468&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 md:px-12 py-12 flex items-center justify-start">
        <div className="max-w-5xl bg-[#2A2236] bg-opacity-80 border-l border-r border-t border-gray-500 md:mt-60 md:w-[60vw] rounded-l-lg rounded-r-lg rounded-t-lg  p-6 md:p-16">
          <h1
           ref={headingone}
          className="text-2xl md:text-4xl font-bold text-white leading-tight">
            Pioneering Digital Excellence:
          </h1>
          <h1 
           ref={headingtwo}
          className="text-2xl md:text-4xl font-bold text-white mb-6 leading-tight">
            Discover the Buzz Digital Agency Advantage.
          </h1>
          <p 
           ref={pera}
          className="text-white text-sm md:text-lg font-medium leading-relaxed">
            Unlock your business’s full potential with Buzz Digital Agency, where innovation meets actionable results.
            We blend cutting-edge technology with strategic insight to propel your brand into the digital forefront.
            Let us guide you through a transformative journey, optimizing every touchpoint to maximize your online
            presence and business success.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Excellence;