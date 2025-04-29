import React, { useRef, useEffect } from "react";
import video from "../assets/video.mp4";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"

const HeroSection = () => {
  const buttonref = useRef(null);
  const headingRefs = useRef(null);
  const paragraphRef = useRef(null);
  const heroBottom = useRef(null);
  const heroBottompera = useRef(null);
  const imageRefs = useRef([]);

  const leftRefs = useRef(null);
  const rightRef = useRef(null);
  const leftimageRef = useRef(null);
  const herosectionRef = useRef(null)

  useEffect(() => {
    var tl = gsap.timeline();
    tl.fromTo(
      buttonref.current,
      { opacity: 0, y: -40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      }
    );
    tl.fromTo(
      headingRefs.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      },
      "a"
    );

    tl.fromTo(
      heroBottom.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      },
      "a"
    );
    tl.fromTo(
      heroBottompera.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      },
      "b"
    );
    tl.fromTo(
      paragraphRef.current,
      { opacity: 0, y: -40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      },
      "b"
    );
    imageRefs.current.forEach((el, index) => {
      tl.fromTo(
        el,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        }
      );
    });
  }, []);


  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: herosectionRef.current,
        start: "30% 70%",
        end: "30% 30%",
        toggleActions: "play none none reverse",
        // markers: true,
      },
    });

    tl.fromTo(
      leftRefs.current,
      { opacity: 0, x: -200 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
      }
    )
  

    tl.fromTo(
      rightRef.current,
      { opacity: 0, x:200 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
      },
      "a"
    );

    tl.fromTo(
      leftimageRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        ease: "power3.out",
      }
    )
   
  }, []);

  return (
    <div className="min-h-screen w-full ">
      <div className="heroTop relative h-[90vh] w-full  ">
        <video
          className="absolute top-0 left-0 w-full h-full object-contain pointer-events-none"
          src={video}
        ></video>

        <div className="relative z-10 flex gap-4 leading-none flex-col items-center md:justify-center pt-10  h-[80vh]  ">
          <div
            ref={buttonref}
            className="text-white text-[3vw] md:text-[1.1vw] rounded-full border  px-6  py-2 font-medium uppercase "
          >
            Welcome to Buzz Digital Agency
          </div>
          <div
            ref={headingRefs}
            className="heading flex leading-none flex-col  items-center  justify-center"
          >
            <div className="text-[7vw] md:text-[4.8vw] text-white  font-bold  ">
              Premiere B2B
            </div>
            <div className="text-[7vw] md:text-[4.8vw] text-white  font-bold  ">
              Marketing Agency
            </div>
          </div>
          <div ref={paragraphRef} className="mt-2 w-[85%] md:w-[50%] leading-5">
            <p className="text-white text-[3.5vw]  md:text-[1.3vw]">
              Finding the right partner to boost your brand’s digital presence
              can be daunting. That’s where Buzz Digital Agency comes in. As a
              top-tier B2B Digital Marketing Agency, we specialize in creating
              tailored marketing strategies that connect businesses with their
              ideal clients, driving growth and delivering measurable results.
            </p>
          </div>
        </div>
      </div>

      <div className="heroBottom  w-full bg-[#1C142A] relative  pb-[10rem]">
        <div
          ref={heroBottom}
          className="businessesPartner absolute z-[99] -top-[15%] md:-top-[18%] px-[6vw]  md:px-[8vw]  flex  flex-col  gap-9 justify-center items-center w-[95%] left-1/2 -translate-x-1/2 h-[60vh] md:h-[70vh] bg-[#1C142A] border rounded-lg"
        >
          <div className="h-1/2  w-[20%] absolute z-[88] bg-[radial-gradient(closest-side,_#B47CFD,_#FF7FC2)] rounded-full blur-[50px] "></div>
          <div
            ref={heroBottompera}
            className="w-full md:w-[50%] text-[6vw] md:text-[2.6vw] text-center text-white font-bold leading-none"
          >
            Join over 200+ businesses to elevate your digital presence.
          </div>

          <div className="flex items-center  justify-between w-full">
            <img
              ref={(el) => (imageRefs.current[0] = el)}
              className="md:h-[10vh] md:w-[10vw] w-[15vw] opacity-[0.4] hover:opacity-[1]"
              src="https://buzzdigitalagency.com/wp-content/uploads/2024/12/Maxx-Builders-Logo-White-e1733760584705-1536x1267.webp"
              alt=""
            />
            <img
              ref={(el) => (imageRefs.current[1] = el)}
              className="md:h-[10vh] md:w-[10vw] w-[15vw]  opacity-[0.4] hover:opacity-[1] z-[99]"
              src="https://buzzdigitalagency.com/wp-content/uploads/2024/12/White-logo-ZT-Payments-e1733760879519.png"
              alt=""
            />
            <img
              ref={(el) => (imageRefs.current[2] = el)}
              className="md:h-[10vh] md:w-[10vw] w-[15vw]  opacity-[0.4] hover:opacity-[1]"
              src="https://buzzdigitalagency.com/wp-content/uploads/2024/12/Maxx-Designers-Logo-White-e1733760752710-1536x1112.webp"
              alt=""
            />
          </div>
          <div className="flex items-center  justify-around w-full  md:mt-10">
            <img
              ref={(el) => (imageRefs.current[3] = el)}
              className="md:h-[10vh] md:w-[14vw] w-[22vw] h-[10vh] opacity-[0.4] hover:opacity-[1]"
              src="https://buzzdigitalagency.com/wp-content/uploads/2024/12/White-1-1536x376.webp"
              alt=""
            />
            <img
              ref={(el) => (imageRefs.current[4] = el)}
              className="md:h-[14vh] md:w-[10vw] w-[15vw] opacity-[0.4] hover:opacity-[1]"
              src="https://buzzdigitalagency.com/wp-content/uploads/2024/12/White.webp"
              alt=""
            />
          </div>
        </div>

        <div ref={herosectionRef} className="w-full  ">
          <div className=" full flex-col gap-10 md:gap-0 md:flex-row flex justify-center  items-center   pt-[12rem] md:pt-[25rem]  px-[4vw] ">
            <div ref={leftRefs}  className="md:h-screen h-[50vh] w-full md:w-1/2 p-4 border-[1px] rounded-lg  overflow-hidden ">
              <img
               ref={leftimageRef}
                className="h-full  w-full object-cover rounded-lg "
                src="https://buzzdigitalagency.com/wp-content/uploads/2024/12/im-so-glad-i-found-you-shot-of-two-coworkers-talking-while-using-a-digital-tablet--1536x1025.jpg"
                alt=""
              />
            </div>
            <div ref={rightRef} className="about h-screen  w-full  md:w-1/2 pl-0 md:pl-[4rem] flex flex-col gap-3  ">
              <div className="text-[2.6vw] md:text-[1.2vw] text-[#FD7EC1]  font-bold  uppercase">
                Who We Are at Buzz Digital Agency
              </div>
              <div className="text-[8vw] md:text-[3.4vw] text-white leading-none  font-bold">
                Unleash Your Potential in the Digital Realm with Buzz Digital
                Agency.
              </div>
              <div className="text-white text-[3.6vw] md:text-[1.2vw] font-medium flex flex-col gap-2 py-6">
                <p>
                  Welcome to Buzz Digital Agency, where your business growth is
                  powered by precision and creativity. As a premier B2B
                  marketing agency, we specialize in transforming your digital
                  landscape. Founded on the pillars of innovation, expertise,
                  and unwavering commitment, our team consists of seasoned
                  marketers, strategic thinkers, and creative enthusiasts
                  dedicated to elevating your brand.
                </p>

                <p>
                  At Buzz Digital Agency, we believe in building partnerships,
                  not just client lists. We’re committed to transparency,
                  collaboration, and results-driven strategies. Our approach is
                  simple: we listen to your needs, understand your market, and
                  tailor our services to ensure maximum impact and ROI.
                </p>

                <p>
                  Trust us to be the catalyst for your digital success. Let’s
                  create something remarkable together.
                </p>
              </div>
              <div className="button w-full  md:px-8 md:py-[10px] py-[8px] text-center md:w-fit bg-gradient-to-r from-[#F77FC9] to-[#BC7CF6] hover:from-[#BC7CF6] hover:to-[#F77FC9] hover:shadow-xl transition-all duration-300 ease-in-out text-white border rounded-full uppercase font-medium">
                get Started
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
