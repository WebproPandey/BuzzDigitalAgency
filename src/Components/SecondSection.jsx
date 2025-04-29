import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const SecondSection = () => {
  const leftRefs = useRef(null);
  const rightTopRef = useRef(null);
  const rightbottomRef = useRef(null);
  const sectionRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        end: "top 30%",
        toggleActions: "play none none reverse",
      },
    });

    tl.fromTo(
      leftRefs.current,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
      }
    );
    tl.fromTo(
      rightTopRef.current,
      { opacity: 0, y: -300 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      },
      "a"
    );
    tl.fromTo(
      rightbottomRef.current,
      { opacity: 0, y: 200 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      }
    );
  }, []);

  useEffect(() => {
    const counters = gsap.utils.toArray(statsRef.current.querySelectorAll(".count-num"));
  
    counters.forEach((counter) => {
      const targetValue = +counter.getAttribute("data-target");
      gsap.fromTo(counter,
        { innerText: 0 },
        {
          innerText: targetValue,
          duration: 2,
          ease: "power3.out",
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
            once: true,
          },
          onUpdate: function () {
            counter.innerText = Math.floor(counter.innerText);
          },
        }
      );
    });
  }, []);
  

  return (
    <div ref={sectionRef} className=" w-full  ">
      <div className="w-full h-full  flex flex-col  md:flex-row items-center justify-center px-[4vw] md:px-[3rem] bg-[#1C142A] pt-[6rem] md:pt-[10rem] pb-[2rem]  relative">
        <div
          className="w-full h-full bg-repeat bg-center bg-cover absolute top-0 opacity-[.4]"
          style={{
            backgroundImage:
              "url('https://buzzdigitalagency.com/wp-content/uploads/2024/12/bg_pattern.png')",
            backgroundRepeat: "repeat",
            backgroundSize: "auto",
          }}
        ></div>

        <div
          ref={leftRefs}
          className="left w-full md:w-[65%] min-h-screen   flex flex-col  items-center justify-center z-[9] group"
        >
          <div className="h-screen w-full relative overflow-hidden rounded-lg flex items-end  justify-center ">
            <img
              className="h-full  w-full object-cover  absolute   "
              src="https://buzzdigitalagency.com/wp-content/uploads/2024/12/computer-screens-with-data.jpg"
              alt=""
            />
            <div className="info w-full h-full  bg-[#1C142A]/70 group-hover:bg-[#1C142A]/10 text-white z-[99] px-[1.5rem] md:px-[2rem] flex flex-col gap-4  py-[2rem] items-start justify-start  md:justify-end">
              <h1 className="text-[3vw] md:text-[1.4vw] font-bold text-[#FD7EC1]">
                Our Value
              </h1>
              <div className="text-[6vw] md:text-[2.5vw] leading-none font-bold  ">
                Smart Designs, Sharp Results - Choose Buzz Digital Agency for
                Digital Excellence.
              </div>
              <div className="text-[4vw] md:text-[1.5vw] font-normal  md:font-medium md:leading-none">
                At Buzz Digital Agency, we deliver more than just marketing
                solutions; we create value through innovation, data-driven
                strategies, and tailored content that speaks directly to your
                target market. Our commitment to excellence ensures that every
                campaign not only meets but exceeds your expectations, driving
                growth and enhancing your brand’s digital presence.
              </div>
              <div className="button px-8 md:py-[10px] py-[8px] text-center w-fit bg-gradient-to-r from-[#F77FC9] to-[#BC7CF6] hover:from-[#BC7CF6] hover:to-[#F77FC9] hover:shadow-xl transition-all duration-300 ease-in-out text-white border rounded-full uppercase font-medium">
                get Started
              </div>
            </div>
          </div>
        </div>
        <div className="right w-full md:w-[35%] h-screen md:pl-[2rem]">
          <div className="w-full h-full flex flex-col gap-6 md:gap-20">
            <div
              ref={rightTopRef}
              className="bg-[#B47CFD] rounded-md p-5 md:p-2 "
            >
              <h1 className="text-[3vw] md:text-[1.2vw] font-medium text-white py-[1.5vw]">
                Our Vision
              </h1>
              <p className="text-[3.5vw] md:text-[1.2vw] font-medium text-white">
                To be the leading B2B marketing force behind the world’s most
                influential brands, transforming business challenges into
                opportunities for growth and innovation. We envision a future
                where our marketing expertise becomes a pivotal element in our
                clients' success, enabling them to thrive in an ever-evolving
                digital landscape.
              </p>
            </div>
            <div
              ref={rightbottomRef}
              className="bg-[#ff7fc2] rounded-md p-5 md:p-2"
            >
              <h1 className="text-[3vw] md:text-[1.2vw] font-medium text-white py-[1.5vw]">
                Our Mission
              </h1>
              <p className="text-[3.5vw] md:text-[1.2vw] font-medium text-white">
                Our mission is to empower businesses with exceptional digital
                marketing strategies that foster significant and sustainable
                growth. Through close collaboration, we aim to understand each
                client's unique challenges and opportunities, crafting bespoke
                solutions that amplify their voice in the marketplace. We're
                dedicated to not just reaching, but also surpassing, the goals
                we set together with our clients.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        ref={statsRef}
        className="bg-[linear-gradient(135deg,_#B47CFD,_#FF7FC2)] w-full h-[40vh] md:h-[30vh] grid grid-cols-2 md:grid-cols-4 place-items-center p-4 md:p-0"
      >
        <div className="w-full h-full border-white/20 md:h-[50%] border-b-[1px] md:border-b-0 border-r-[1px] flex flex-col items-center justify-center">
          <div className="text-white text-[3.6vw] font-bold">
            $
            <span className="count-num" data-target="10">
              0
            </span>
            M+
          </div>
          <div className="text-white text-md font-medium uppercase">
            Revenue Generated
          </div>
        </div>
        <div className="w-full h-full border-white/20 md:h-[50%] md:border-r-[1px] md:border-l-[1px] flex flex-col items-center justify-center">
          <div className="text-white text-[3.6vw] font-bold">
            <span className="count-num" data-target="3">
              0
            </span>
            X
          </div>
          <div className="text-white text-md font-medium uppercase text-center">
            Avg ROI On Paid & Organic Campaigns
          </div>
        </div>
        <div className="w-full h-full border-white/20 md:h-[50%] md:border-r-[1px] flex flex-col items-center justify-center">
          <div className="text-white text-[3.6vw] font-bold">
            <span className="count-num" data-target="120">
              0
            </span>
            K+
          </div>{" "}
          <div className="text-white text-md font-medium uppercase">
            Qualified Leads Delivered
          </div>
        </div>
        <div className="w-full h-full border-white/20 md:h-[50%] border-t-[1px] border-l-[1px] md:border-none flex flex-col items-center justify-center">
          <div className="text-white text-[3.6vw] font-bold">
            <span className="count-num" data-target="100">
              0
            </span>
            %
          </div>{" "}
          <div className="text-white text-md font-medium uppercase text-center">
            Traffic Growth Within 6 Months
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
