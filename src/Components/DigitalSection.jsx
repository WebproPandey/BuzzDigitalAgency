import React, { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const DigitalSection = () => {

  const headingone = useRef(null);
  const headingtwo = useRef(null);
  const DigitalSection = useRef(null);


  useEffect(() => {

    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: DigitalSection.current,
        start: "top 80%",
        end: "top 60%",
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
    );
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
    
    


  },[])

  return (
    <div
      ref={DigitalSection}
      className="w-full py-20 px-8 flex flex-col items-center justify-center text-center bg-center bg-cover"
      style={{
        backgroundImage:
          "radial-gradient(circle at center, rgba(128,0,255,0.3) 0%, rgba(28,19,43,1) 40%, rgba(28,19,43,1) 60%)",
        backgroundColor: "#0F0520",
      }}
    >
      {/* Small heading */}
      <p 
       ref={headingone}
      className="text-pink-400 text-sm font-semibold tracking-widest mb-4">
        WHO WE SERVE
      </p>

      {/* Main heading */}
      <h2 
        ref={headingtwo}
      className="text-3xl md:text-5xl font-bold text-white leading-tight">
        B2B Digital Marketing Solutions
        <br className="hidden md:block" /> Tailored for You
      </h2>
    </div>
  );
};

export default DigitalSection;