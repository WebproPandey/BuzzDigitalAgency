import React from "react";

const servicesData = [
  {
    icon: "/icons/web-design-icon.svg",
    title: "Web Design & Development",
    description:
      "Create a powerful online presence with a visually stunning, user-friendly website that drives conversions.",
  },
  {
    icon: "/icons/social-media-icon.svg",
    title: "Social Media Marketing",
    description:
      "Expand your brand’s reach and boost engagement with a compelling social media presence.",
  },
  {
    icon: "/icons/content-marketing-icon.svg",
    title: "Content Marketing",
    description:
      "Engage, inform, and convert your audience with high-quality, relevant content.",
  },
  {
    icon: "/icons/seo-icon.svg",
    title: "Search Engine Optimization",
    description:
      "Improve your visibility and attract more qualified traffic through proven SEO strategies.",
  },
  {
    icon: "/icons/branding-icon.svg",
    title: "Branding & Strategy",
    description:
      "Craft a memorable brand identity and strategy that resonates with your target audience.",
  },
  {
    icon: "/icons/paid-ads-icon.svg",
    title: "Paid Advertising",
    description:
      "Maximize your ROI with targeted paid campaigns across Google, Facebook, Instagram, and more.",
  },
];

const ServicesSection = () => {
  return (
    <div className="w-full bg-[#0F0520] px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {servicesData.map((service, index) => (
        <div
          key={index}
          className="p-3 rounded-2xl bg-[#0F0520] border border-[#4F485A] hover:border-[#9b59b6] hover:shadow-[0_0_15px_#9b59b6] transition-all duration-300"
        >
          <div className="bg-[#322A3E] rounded-2xl p-8 flex flex-col items-start justify-between border border-[#50495A] text-left h-full">
            {/* Icon */}
            <img src={service.icon} alt={service.title} className="h-10 mb-6" />

            {/* Title */}
            <h3 className="text-xl font-bold text-white mb-4">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 text-sm mb-8">
              {service.description}
            </p>

            {/* Button */}
            <button className="relative overflow-hidden px-5 py-[7px] w-fit bg-gradient-to-r from-[#F77FC9] to-[#BC7CF6] hover:from-[#BC7CF6] hover:to-[#F77FC9] hover:shadow-[0_0_20px_#ffffff] transition-all duration-300 ease-in-out text-white rounded-full uppercase font-medium">
  <span className="absolute inset-0 bg-[#F6D2F1] opacity-0 hover:opacity-10 blur-sm pointer-events-none transition-all duration-300" />
  LEARN MORE
</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesSection;