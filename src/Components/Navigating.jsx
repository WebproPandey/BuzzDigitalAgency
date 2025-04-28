// Cards.jsx
import React from "react";
import Logo from "../assets/Boost.png";
import Mobile from "../assets/mobile_app.png";
const Navigating = () => {
  return (
    <div className=" bg-[#0F0520] px-[3vw] md:p-10 flex flex-col items-center">
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-7xl">
        <div className="flex flex-col gap-8 flex-[3]">
          <div className="flex flex-col md:flex-row  gap-6">
            <div className="flex-[3] bg-gradient-to-br from-[#14062C] via-[#270957] to-[#30096C] text-white px-8 py-16 rounded-xl shadow-md">
              <h2 className="text-2xl font-bold mb-4 text-[#B47CFD]">
                Timely and Transparent Communication
              </h2>
              <p className="text-[17px] font-semibold mb-6 text-gray-300">
                Buzz Digital Agency ensures clear, timely communication, keeping
                you confidently informed throughout your digital journey. Our
                commitment to transparency strengthens client relationships.
              </p>
              <button className="bg-purple-400  text-white font-semibold px-6 py-2 hover:bg-white hover:text-black rounded-full shadow-sm hover:shadow-md transition">
                GET STARTED
              </button>
            </div>

            <div className="flex-[2] bg-[#2B2338]  text-white  rounded-xl shadow-md flex flex-col justify-between">
              <div className="w-52 p-3 px-1">
                <h2 className="text-2xl font-bold p-6 mb-1 text-white">
                  Boost Traffic & Sales
                </h2>
                <p className="text-[14px] pl-3 text-gray-300 z-[99]">
                  Increase your online visibility and sales with Buzz Digital
                  Agency's expert digital marketing strategies.
                </p>
              </div>
              <div className="flex justify-center relative h-[40vh] md:h-fit ">
                <img
                  className=" md:w-96 w-full  rounded-xl  absolute bottom-0 z-[88] md:h-[31vw]"
                  src={Logo}
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row  gap-6">
            <div
              className="flex-[2] bg-[#140925] text-white p-9 rounded-xl shadow-md"
              style={{
                backgroundImage:
                  "url('https://buzzdigitalagency.com/wp-content/uploads/2024/12/bg_pattern.png')",
                backgroundRepeat: "repeat",
                backgroundSize: "auto",
              }}
            >
              <h2 className="text-2xl font-bold mb-4 text-purple-300">
                Responsive and Scalable Solutions
              </h2>
              <p className="text-sm mb-6 text-gray-300">
                Our designs are crafted to perform seamlessly across all
                devices, ensuring maximum reach and impact for your digital
                presence.
              </p>
              <button className="bg-purple-400  text-white font-semibold px-6 py-2 hover:bg-white hover:text-black rounded-full shadow-sm hover:shadow-md transition">
                GET STARTED
              </button>
            </div>

            <div className="flex-[3] flex items-center justify-between bg-gradient-to-br from-[#A16DE6] to-[#522F82] text-white px-6 py-8 rounded-xl shadow-md relative overflow-hidden">
              <div className="max-w-[46%]">
                <h2 className="text-md md:text-2xl font-bold mb-4 leading-5 text-purple-300">
                  Responsive and Scalable Solutions
                </h2>
                <p className="text-sm mb-6 font-medium text-gray-300">
                  Our solutions are tailored to adapt and scale with your
                  business needs. Buzz Digital Agency offers flexible digital
                  strategies to meet market demands and support your growth.
                </p>
                <button className="bg-purple-400 text-white font-semibold px-6 py-2 hover:bg-white hover:text-black rounded-full shadow-sm hover:shadow-md transition">
                  GET STARTED
                </button>
              </div>

              {/* Right Image Section */}
              <div className="w-[10vw]">
                <img
                  className="w-full md:h-72  h-full object-contain absolute top-24 left-36 md:left-28 "
                  src={Mobile}
                  alt="Mobile Illustration"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 flex-[1] justify-center items-center">
          <div className="bg-gradient-to-b from-[#B97CF8] to-[#EB7ED3] text-white p-10 rounded-xl shadow-md w-full flex flex-col items-center justify-center h-full">
            <div className="text-5xl mb-4">📞</div> 
            <h2 className="text-2xl font-bold mb-4 text-center">
              Premium Support
            </h2>
            <p className="text-lg font-semibold text-center">
              Experience exceptional support with Buzz Digital Agency. Contact
              us for expert advice and real-time assistance, ensuring your
              journey is smooth.
            </p>
            <button className="bg-black mt-6  text-white font-semibold px-6 py-2 hover:bg-white hover:text-black rounded-full shadow-sm hover:shadow-md transition">
              GET STARTED
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigating;
