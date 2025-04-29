import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const servicesData = [
  {
    icon:<i className="ri-layout-4-line text-[8vw] md:text-[3vw]  text-white"></i>,
    title: "Web Design & Development",
    description:
      "Create a powerful online presence with a visually stunning, user-friendly website that drives conversions.",
  },
  {
    icon:<i className="ri-share-line text-[8vw] md:text-[3vw]  text-white"></i>,
    title: "Social Media Marketing",
    description:
      "Expand your brand’s reach and boost engagement with a compelling social media presence.",
  },
  {
    icon:<i className="ri-article-line text-[8vw] md:text-[3vw]  text-white"></i>,
    title: "Content Marketing",
    description:
      "Engage, inform, and convert your audience with high-quality, relevant content.",
  },
  {
    icon:<i className="ri-search-line text-[8vw] md:text-[3vw]  text-white"></i>,
    title: "Search Engine Optimization",
    description:
      "Improve your visibility and attract more qualified traffic through proven SEO strategies.",
  },
  {
    icon:<i className="ri-paint-brush-line text-[8vw] md:text-[3vw]  text-white"></i>,
    title: "Branding & Strategy",
    description:
      "Craft a memorable brand identity and strategy that resonates with your target audience.",
  },
  {
    icon:<i className="ri-advertisement-line text-[8vw] md:text-[3vw]  text-white"></i>,
    title: "Paid Advertising",
    description:
      "Maximize your ROI with targeted paid campaigns across Google, Facebook, Instagram, and more.",
  },
];

const ServicesSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const cards = containerRef.current.querySelectorAll(".service-card");

    gsap.fromTo(
      cards,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none none",
          // markers: true, // Uncomment for debugging
        },
      }
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full bg-[#0F0520] px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {servicesData.map((service, index) => (
        <div
          key={index}
          className="service-card opacity-0 p-3 rounded-2xl bg-[#0F0520] border border-[#4F485A] hover:border-[#9b59b6] hover:shadow-[0_0_15px_#9b59b6] transition-all duration-300"
        >
          <div className="relative rounded-2xl overflow-hidden h-[350px] w-full bg-[#322A3E] border border-[#50495A] flex flex-col items-start justify-between text-left">
            <div
              className="absolute h-full w-full"
              style={{
                backgroundImage:
                  "url('https://buzzdigitalagency.com/wp-content/uploads/2024/12/bg_pattern.png')",
                backgroundRepeat: "repeat",
                backgroundSize: "auto",
              }}
            />
            <div className="absolute h-full w-full z-10 bg-gradient-to-b from-transparent to-[#322A3E]/90 backdrop-blur-[2px]" />
            <div className="relative z-20 p-4 flex flex-col justify-center items-start h-full">
              <div>
                {service.icon}
              </div>
              <h3 className="text-[5vw] md:text-[1.9vw] font-bold text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-400 text-[4vw] mb-8 md:text-[1.3vw]">
                {service.description}
              </p>
              <button className="relative overflow-hidden px-5 py-[7px] w-fit bg-gradient-to-r from-[#F77FC9] to-[#BC7CF6] hover:from-[#BC7CF6] hover:to-[#F77FC9] hover:shadow-[0_0_20px_#ffffff] transition-all duration-300 ease-in-out text-white rounded-full uppercase font-medium">
                <span className="absolute inset-0 bg-[#F6D2F1] opacity-0 hover:opacity-10 blur-sm pointer-events-none transition-all duration-300" />
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesSection;
