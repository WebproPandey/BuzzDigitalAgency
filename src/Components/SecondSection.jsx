import React from "react";

const SecondSection = () => {
  return (
    <div className=" w-full  ">
      <div className="w-full h-full  flex items-center justify-center px-[3rem] bg-[#1C142A] pt-[10rem] pb-[2rem]  relative">
        <div
          className="w-full h-full bg-repeat bg-center bg-cover absolute top-0 opacity-[.4]"
          style={{
            backgroundImage:
              "url('https://buzzdigitalagency.com/wp-content/uploads/2024/12/bg_pattern.png')",
            backgroundRepeat: "repeat",
            backgroundSize: "auto",
          }}
        ></div>
        <div className="left w-[65%] min-h-screen   flex flex-col  items-center justify-center z-[9] group">
          <div className="h-screen w-full relative overflow-hidden rounded-lg flex items-end  justify-center ">
            <img
              className="h-full  w-full object-cover  absolute   "
              src="https://buzzdigitalagency.com/wp-content/uploads/2024/12/computer-screens-with-data.jpg"
              alt=""
            />
            <div className="info w-full h-full bg-[#1C142A]/70 group-hover:bg-[#1C142A]/10 text-white z-[99] px-[2rem] flex flex-col gap-4  py-[2rem] items-start  justify-end">
              <h1 className="text-[1.4vw] font-bold">Our Value</h1>
              <div className="text-[2.5vw] leading-none font-bold  ">
                Smart Designs, Sharp Results - Choose Buzz Digital Agency for
                Digital Excellence.
              </div>
              <div className="text-[1.5vw] font-medium leading-none">
                At Buzz Digital Agency, we deliver more than just marketing
                solutions; we create value through innovation, data-driven
                strategies, and tailored content that speaks directly to your
                target market. Our commitment to excellence ensures that every
                campaign not only meets but exceeds your expectations, driving
                growth and enhancing your brand’s digital presence.
              </div>
              <div className="button px-8 py-[10px] w-fit bg-gradient-to-r from-[#F77FC9] to-[#BC7CF6] hover:from-[#BC7CF6] hover:to-[#F77FC9] hover:shadow-xl transition-all duration-300 ease-in-out text-white border rounded-full uppercase font-medium">
                get Started
              </div>
            </div>
          </div>
        </div>
        <div className="right w-[35%] h-screen pl-[3rem]">
          <div className="w-full h-full flex flex-col gap-24">
            <div>
              <h1 className="text-[1.2vw] font-medium text-white py-[1.5vw]">
                Our Vision{" "}
              </h1>
              <p className="text-[1.2vw] font-medium text-white">
                {" "}
                To be the leading B2B marketing force behind the world’s most
                influential brands, transforming business challenges into
                opportunities for growth and innovation. We envision a future
                where our marketing expertise becomes a pivotal element in our
                clients' success, enabling them to thrive in an ever-evolving
                digital landscape.
              </p>
            </div>
            <div>
              <h1 className="text-[1.2vw] font-medium text-white py-[1.5vw]">
                Our Mission{" "}
              </h1>
              <p className="text-[1.2vw] font-medium text-white">
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
      <div className="bg-[#1C142A] w-full h-[30vh] flex justify-center  items-center">
        <div className="w-full h-[50%] border-r-[1px] flex flex-col items-center justify-center">
          <div className="text-white text-3xl font-bold">$10M+</div>
          <div className="text-white text-md">Revenue Generated</div>
        </div>
        <div className="w-full h-[50%] border-r-[1px] flex flex-col items-center justify-center">
          <div className="text-white text-3xl font-bold">3x</div>
          <div className="text-white text-md text-center">
            Avg ROI On Paid & Organic Campaigns
          </div>
        </div>
        <div className="w-full h-[50%] border-r-[1px] flex flex-col items-center justify-center">
          <div className="text-white text-3xl font-bold">120K+</div>
          <div className="text-white text-md">Qualified Leads Delivered</div>
        </div>
        <div className="w-full h-[50%] flex flex-col items-center justify-center">
          <div className="text-white text-3xl font-bold">100%</div>
          <div className="text-white text-md text-center">
            Traffic Growth Within 6 Months
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
