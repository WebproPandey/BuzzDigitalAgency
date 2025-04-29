import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/bd.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const [openMenuIndex, setOpenMenuIndex] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState(null);
  const navbarRef = useRef(null);
  const menuRefs = useRef([]);
  const buttonRef = useRef(null);
  const logoRef = useRef(null);

  const menuItems = [
    { title: "About", links: [] },
    {
      title: "Services",
      links: [
        "Analytics & Reporting",
        "Content Marketing",
        "Conversion Rate Optimization (CRO)",
        "Email Marketing",
        "Pay-Per-Click Advertising",
        "Search Engine Optimization",
        "Social Media Marketing",
        "Web Design & Development",
      ],
    },
    {
      title: "Industries",
      links: [
        "B2B",
        "Manufacturers",
        "Fintech",
        "Law",
        "Technology",
        "Real Estate",
      ],
    },
    { title: "Case Studies", links: [] },
    { title: "Blog", links: [] },
    { title: "Resources", links: ["eBooks & whitePaper", "FAQs", "Audit"] },
  ];

  const handleMenuClick = (index) => {
    setOpenMenuIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleBlur = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setOpenMenuIndex(null);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setOpenMobileSubmenu(null);
  };

  const toggleMobileSubmenu = (index) => {
    setOpenMobileSubmenu((prevIndex) => (prevIndex === index ? null : index));
  };

  useEffect(() => {
    let ctx = gsap.context(() => {
      // ✅ Navbar background scroll trigger
      gsap.to(navbarRef.current, {
        backgroundColor: "#1C142A",
        scrollTrigger: {
          trigger: navbarRef.current,
          start: "top top",
          scrub: true,
        },
      });
  
      const tl = gsap.timeline();
  
      // Animate logo
      tl.from(logoRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.8,
        ease: "power2.out",
      });
      tl.from(
        buttonRef.current,
        {
          opacity: 0,
          y: -20,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.6" 
      );
  
      menuRefs.current.forEach((el, index) => {
        tl.from(
          el,
          {
            opacity: 0,
            y: -20,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.5" // <-- menu items overlap karte huye animate honge
        );
      });
  
    
    });
  
    return () => ctx.revert();
  }, []);
  

  return (
    <div
      ref={navbarRef}
      className="md:h-[18vh] h-[15vh] border-gray-200 sticky top-0 left-0 z-[9999] flex justify-between md:px-10 px-[4vw] py-[2vw] bg-transparent"
    >
      <div className="line w-full bottom-0 left-0 absolute md:px-10">
        <div className="h-[0.1rem] w-full bg-gray-100/20"></div>
      </div>

      {/* Logo */}
      <div ref={logoRef} className="leftlogo md:w-[20vw] h-full flex items-end justify-start">
        <img
          src={logo}
          className="md:h-[10vh] md:w-[14vw] w-[30vw] object-contain"
          alt="Logo"
        />
      </div>

      {/* Desktop Navbar */}
      <div className="rightside w-fit md:flex items-center justify-end gap-8 relative hidden">
        {menuItems.map((item, index) => (
          <div
            key={index}
            tabIndex={0}
            onBlur={handleBlur}
            ref={(el) => (menuRefs.current[index] = el)}
            className="relative outline-none"
          >
            <div
              className={`text-[1.2vw] font-medium flex gap-2 cursor-pointer items-center ${
                openMenuIndex === index ? "text-[#FD7EC1]" : "text-white"
              }`}
              onClick={() => handleMenuClick(index)}
            >
              {item.title}
              {item.links.length > 0 && (
                <i className="ri-arrow-down-s-line text-base"></i>
              )}
            </div>

            {/* Desktop Dropdown */}
            {item.links.length > 0 && openMenuIndex === index && (
              <div className="absolute top-full left-0 mt-2 bg-[#1C142A] text-white shadow-md rounded-md py-2 z-[999] w-[20vw]">
                {item.links.map((link, idx) => (
                  <div
                    key={idx}
                    className="px-4 py-2 hover:text-[#FD7EC1] hover:bg-white font-bold cursor-pointer"
                    tabIndex={0}
                  >
                    {link}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        <div
          ref={buttonRef}
          className="button px-8 py-[6px] text-white border bg-gradient-to-r from-[#F77FC9] to-[#BC7CF6] hover:from-[#BC7CF6] hover:to-[#F77FC9] hover:shadow-xl transition-all duration-300 ease-in-out rounded-full uppercase font-medium"
        >
          Get Started
        </div>
      </div>

      {/* Mobile Menu Icon */}
      <div className="h-full flex items-end justify-end  relative md:hidden">
        <div className="cursor-pointer" onClick={toggleMobileMenu}>
          <i
            className={`text-[6vw] text-white ${
              isMobileMenuOpen ? "ri-close-line" : "ri-menu-line"
            }`}
          ></i>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div className="fixed top-[15vh] left-0 w-full bg-[#1C142A] overflow-hidden transition-all duration-[5s] ease-in-out z-[9999]">
          <div className="flex flex-col py-4">
            {menuItems.map((item, index) => (
              <div key={index} className="border-b border-gray-600 px-6 py-1">
                <div
                  className="flex justify-between items-center  text-white text-base font-semibold cursor-pointer"
                  onClick={() => toggleMobileSubmenu(index)}
                >
                  <span>{item.title}</span>
                  {item.links.length > 0 && (
                    <i
                      className={`text-xl ${
                        openMobileSubmenu === index
                          ? "ri-arrow-up-s-line"
                          : "ri-arrow-down-s-line"
                      }`}
                    ></i>
                  )}
                </div>

                {/* Mobile Submenu */}
                {item.links.length > 0 && openMobileSubmenu === index && (
                  <div className="flex flex-col mt-2 ml-4">
                    {item.links.map((link, idx) => (
                      <div
                        key={idx}
                        className="text-white text-base py-2 hover:text-[#FD7EC1] cursor-pointer"
                      >
                        {link}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
