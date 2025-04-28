import React from 'react'

const Sucess = () => {
  return (
    <div className="w-full min-h-[80vh] py-20 bg-[#05010D] relative overflow-hidden flex flex-col items-center justify-center">
      
      {/* Background Layer */}
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          backgroundImage: "url('https://buzzdigitalagency.com/wp-content/uploads/2024/12/bg_pattern.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
          opacity: 0.2,
          zIndex: 1,
        }}
      ></div>

      {/* Content Layer */}
      <div className="relative z-10 w-full max-w-7xl px-4 md:px-8 text-white flex flex-col items-center text-center">
        <h2 className="text-2xl md:text-4xl font-semibold">
          Trusted Partner for Digital Marketing Success
        </h2>
        <p className="mt-4 max-w-3xl text-sm md:text-lg">
          Proudly recognized as a trusted partner, we deliver proven digital marketing solutions that help businesses grow.
        </p>

        <div className="w-full max-w-2xl mt-8 flex items-center justify-center p-6 md:p-9 rounded-lg bg-[#191420]">
          <img
            className="w-40 md:w-64 grayscale cursor-pointer hover:grayscale-0 transition-all duration-300"
            src="https://buzzdigitalagency.com/wp-content/uploads/2025/02/Verified-Agency-v2.png"
            alt="Verified Agency"
          />
        </div>
      </div>
    </div>
  )
}

export default Sucess;