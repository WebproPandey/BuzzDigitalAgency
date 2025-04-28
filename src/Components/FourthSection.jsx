import React from "react";

const FourthSection = () => {
  return (
    <div className=" w-full  ">
      <div className="w-full h-full flex flex-col gap-10 items-end justify-center pt-[3rem] md:pt-[5rem] pb-[2rem] relative bg-gradient-to-t from-[#090214] to-[#050012]">
        <div
          className="w-full h-full bg-repeat bg-center bg-cover absolute top-0 opacity-[.4]"
          style={{
            backgroundImage:
              "url('https://buzzdigitalagency.com/wp-content/uploads/2024/12/bg_pattern.png')",
            backgroundRepeat: "repeat",
            backgroundSize: "auto",
          }}
        ></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t z-[88] from-[#090214] via-[#090214cc] to-transparent opacity-100"></div>


        <div className="top w-full md:w-[50%] h-fit px-[4vw] md:pr-[7rem] z-[99] ">
          <div className="w-full h-full flex flex-col ">
            <div className="flex flex-col gap-10">
              <h1 className="text-[6vw] md:text-[3vw] leading-none font-medium text-white md:py-[1.5vw]">
                Experience the magic of Buzz Digital Agency. Contact us to
                discuss your project.
              </h1>
              <p className="text-[3.5vw] md:text-[1.2vw] font-medium text-white">
                At Buzz Digital Agency, we combine expert strategy with
                cutting-edge technology to deliver outstanding results. Our
                dedicated team excels in every facet of digital marketing,
                evidenced by our high success rates across services.
              </p>
              <div className="button px-8 py-[10px] w-fit bg-gradient-to-r from-[#F77FC9] to-[#BC7CF6] hover:from-[#BC7CF6] hover:to-[#F77FC9] hover:shadow-xl transition-all duration-300 ease-in-out text-white border rounded-full uppercase font-medium">
                get Started
              </div>
            </div>
          </div>
        </div>
        <div className="bottom w-full md:w-[55%]  mt-[3rem]   flex flex-col z-[99] items-center justify-center  group">
          <div className="h-[50vh] md:h-screen w-full relative overflow-hidden  flex items-end  justify-center ">
            <img
              className="h-full  w-full object-cover  absolute   "
              src="https://buzzdigitalagency.com/wp-content/uploads/2024/12/shot-of-two-young-workers-using-a-digital-tablet-in-a-modern-office-1536x1025.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className=" bg-[#090214] flex  flex-col w-full   justify-evenly  items-center">
        <div className="w-full flex flex-col justify-center  h-[30vh] md:h-[40vh]  items-center">
          <div className="w-full md:w-[55%] text-center  text-white">
            <h1 className="text-[3vw] md:text-[1.2vw] text-[#FD7EC1]">How it Works</h1>
            <div className="w-full py-5 leading-none font-bold text-center text-[6vw] md:text-[2.5vw]">
              Unlock Astonishing Results with Just 4 Simple Steps!
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1  gap-y-4 md:grid-cols-4 place-items-center  w-full md:h-[70vh] pb-[5rem] px-[4vw] ">
        <div className="w-full h-full md:px-[2vw] border-white/20 border md:border-r-[1px] md:border-t-0 md:border-b-0 md:border-l-0 rounded-md md:rounded-none flex gap-3 flex-col items-center justify-start px-4 py-6">
        <div className="text-white text-3xl flex  justify-center items-center bg-[#FF7EC2] h-[10vh] w-[10vh] rounded-full">
              <i className=" ri-chat-3-line"></i>
            </div>
            <div className="text-white text-[4vw]  font-medium md:text-[1.7vw]">Get Started</div>
            <div className="text-white text-center ">
              <p className="text-[3.3vw] md:text-[1.2vw]">
                Begin your journey to digital excellence by filling out our
                contact form. Provide us with as much information as possible
                about your project needs and business goals.
              </p>
            </div>
          </div>
          <div className="w-full h-full px-4 py-6 md:px-[2vw] border-white/20 border md:border-r-[1px] md:border-t-0 md:border-b-0 md:border-l-0 rounded-md md:rounded-none flex flex-col items-center justify-start">
            <div className="text-white ttext-3xl flex  justify-center items-center bg-[#FF7EC2] h-[10vh] w-[10vh] rounded-full">
              <i className="ri-customer-service-line"></i>
            </div>
            <div className="text-white text-[4vw]  font-medium md:text-[1.7vw]">Schedule a Call</div>
            <div className="text-white text-center ">
              <p className="text-[3.3vw] md:text-[1.2vw]">
                Once we receive your inquiry, our team will review the details
                and contact you to schedule a consultation call. This allows us
                to better understand your vision and discuss potential
                strategies tailored to your objectives.
              </p>
            </div>
          </div>
          <div className="w-full h-full  px-4 py-6 md:px-[2vw] border-white/20  border md:border-r-[1px] md:border-t-0 md:border-b-0 md:border-l-0 rounded-md md:rounded-none flex flex-col items-center justify-start">
            <div className="text-white text-3xl flex  justify-center items-center bg-[#FF7EC2] h-[10vh] w-[10vh] rounded-full">
              <i className="ri-stack-line"></i>
            </div>
            <div className="text-white  text-[4vw]  font-medium md:text-[1.7vw]">Receive Your Proposal</div>
            <div className="text-white text-center ">
              <p className="text-[3.3vw] md:text-[1.2vw]">
                After our discussion, we'll craft a detailed proposal outlining
                how we can help you achieve your digital marketing goals. Our
                proposal will include customized strategies, expected outcomes,
                and clear steps on how we'll move forward together.
              </p>
            </div>
          </div>
          <div className="w-full h-full   px-4 py-6 md:px-[2vw] border-white/20 border md:border-none rounded-md md:rounded-none flex flex-col items-center justify-start">
            <div className="text-white text-3xl flex  justify-center items-center bg-[#FF7EC2] h-[10vh] w-[10vh] rounded-full">
              <i className="ri-pages-line"></i>
            </div>
            <div className="text-white  text-[4vw]  font-medium  md:text-[1.7vw]">Partnership Begins</div>
            <div className="text-white text-center ">
              <p className="text-[3.3vw] md:text-[1.2vw]">
                With your approval, we’ll kick off your project, leveraging our
                expertise to boost your brand’s digital presence and drive
                meaningful results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
