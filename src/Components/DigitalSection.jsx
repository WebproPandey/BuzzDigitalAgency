import React from "react";

const DigitalSection = () => {
  return (
    <div
      className="w-full py-20 px-8 flex flex-col items-center justify-center text-center bg-center bg-cover"
      style={{
        backgroundImage:
          "radial-gradient(circle at center, rgba(128,0,255,0.3) 0%, rgba(28,19,43,1) 40%, rgba(28,19,43,1) 60%)",
        backgroundColor: "#0F0520",
      }}
    >
      {/* Small heading */}
      <p className="text-pink-400 text-sm font-semibold tracking-widest mb-4">
        WHO WE SERVE
      </p>

      {/* Main heading */}
      <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
        B2B Digital Marketing Solutions
        <br className="hidden md:block" /> Tailored for You
      </h2>
    </div>
  );
};

export default DigitalSection;