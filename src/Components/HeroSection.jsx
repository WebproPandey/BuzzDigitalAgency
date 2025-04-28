import React from "react";
import video from "../assets/videoplayback.mp4";

const HeroSection = () => {
  return (
    <div className="min-h-screen w-full ">
      <div className="heroTop relative h-[90vh] w-full  ">
        <iframe
          className="absolute top-0 left-0 w-full h-full object-contain pointer-events-none"
          src={video}
          title="YouTube video"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>

        <div className="relative z-10 flex gap-4 leading-none flex-col items-center justify-center pt-10 h-[80vh]  ">
          <div className="text-white text-[1.1vw] rounded-full border  px-6  py-2 font-medium uppercase ">
            {" "}
            Welcome to Buzz Digital Agency
          </div>
          <div className="heading flex leading-none flex-col  items-center  justify-center">
            <div className="text-[4.8vw] text-white  font-bold  ">
              Premiere B2B
            </div>
            <div className="text-[4.8vw] text-white  font-bold  ">
              Marketing Agency
            </div>
          </div>
          <div className="mt-5 w-[50%] leading-5">
            <p className="text-white text-[1.3vw]">
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
        <div className="businessesPartner absolute z-[99]  -top-[20%]  px-[8vw]  flex  flex-col  gap-9 justify-center items-center w-[95%] left-1/2 -translate-x-1/2 h-[70vh] bg-[#1C142A] border rounded-lg">
          <div className="w-[50%] text-[2.6vw] text-center text-white font-bold leading-none">
            Join over 200+ businesses to elevate your digital presence.
          </div>

          <div className="flex items-center  justify-between w-full">
            <img
              className="h-[10vh] w-[10vw] opacity-[0.4] hover:opacity-[1]"
              src="https://buzzdigitalagency.com/wp-content/uploads/2024/12/Maxx-Builders-Logo-White-e1733760584705-1536x1267.webp"
              alt=""
            />
            <img
              className="h-[10vh] w-[10vw] opacity-[0.4] hover:opacity-[1]"
              src="https://buzzdigitalagency.com/wp-content/uploads/2024/12/White-logo-ZT-Payments-e1733760879519.png"
              alt=""
            />
            <img
              className="h-[10vh] w-[10vw] opacity-[0.4] hover:opacity-[1]"
              src="https://buzzdigitalagency.com/wp-content/uploads/2024/12/Maxx-Designers-Logo-White-e1733760752710-1536x1112.webp"
              alt=""
            />
          </div>
          <div className="flex items-center  justify-around w-full mt-10">
            <img
              className="h-[10vh] w-[14vw] opacity-[0.4] hover:opacity-[1]"
              src="https://buzzdigitalagency.com/wp-content/uploads/2024/12/White-1-1536x376.webp"
              alt=""
            />
            <img
              className="h-[14vh] w-[10vw] opacity-[0.4] hover:opacity-[1]"
              src="https://buzzdigitalagency.com/wp-content/uploads/2024/12/White.webp"
              alt=""
            />
          </div>
        </div>
        <div className="w-full  ">
          <div className=" full  flex justify-center  items-center   pt-[25rem]  px-[4vw] ">
            <div className="h-screen w-1/2 p-4 border-[1px] rounded-lg  overflow-hidden ">
              <img
                className="h-full  w-full object-cover rounded-lg "
                src="https://buzzdigitalagency.com/wp-content/uploads/2024/12/im-so-glad-i-found-you-shot-of-two-coworkers-talking-while-using-a-digital-tablet--1536x1025.jpg"
                alt=""
              />
            </div>
            <div className="about h-screen  w-1/2 pl-[4rem] flex flex-col gap-3  ">
              <div className="text-[1.2vw] text-white  font-bold  uppercase">
                Who We Are at Buzz Digital Agency
              </div>
              <div className="text-[3.4vw] text-white leading-none  font-bold">
                Unleash Your Potential in the Digital Realm with Buzz Digital
                Agency.
              </div>
              <div className="text-white text-[1.2vw] font-medium flex flex-col gap-2 py-6">
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
              <div className="button px-8 py-[10px] w-fit bg-gradient-to-r from-[#F77FC9] to-[#BC7CF6] hover:from-[#BC7CF6] hover:to-[#F77FC9] hover:shadow-xl transition-all duration-300 ease-in-out text-white border rounded-full uppercase font-medium">get Started</div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
