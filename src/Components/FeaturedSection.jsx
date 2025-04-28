import React from "react";
const cardData = [
  {
    title: "Search Engine Optimization",
    subtitle: "Investment Firm",
    client: "Investment Firm",
    date: "May 2023 - Nov 2023",
    budget: "$195,000",
    imageUrl:
      "https://buzzdigitalagency.com/wp-content/uploads/2024/12/group-asian-business-people-meeting-about-business-plan-2048x1297.jpg",
    challenge:
      "Our objective was to enhance our online presence and establish ourselves as thought leaders in the investment sector.",
    outcome:
      "The collaboration led to a 45% increase in organic web traffic and a significant rise in the firm’s search engine rankings.",
  },
  {
    title: "Web Design & Development",
    subtitle: "Commercial Architect Firm",
    client: "Architect Firm",
    date: "May 2023 - Nov 2023",
    budget: "$200,000",
    imageUrl: "https://buzzdigitalagency.com/wp-content/uploads/2024/12/high-angle-coworkers-planning-together-office-1536x1024.webp",
    challenge: "Our aim was to showcase our portfolio more effectively online and improve our search engine rankings.",
    outcome: "The collaboration resulted in a 50% increase in website traffic, improved search engine rankings for key architectural terms, and a marked increase in client inquiries and engagement.",
  },
  {
   
    title: " Email Marketing",
    subtitle: "Development Company",
    client: "Development Company",
    date: "July 2023 - Jan 2024",
    budget: "$210,000",
    imageUrl: "https://buzzdigitalagency.com/wp-content/uploads/2024/12/construction-activity-dubai-downtown-dubai-uae-dubai-is-most-populous-city-emirate-united-arab-emirates-1536x1024.webp",
    challenge: "Our goal was to increase our online visibility and improve our engagement with potential clients and partners.",
    outcome: "The collaboration led to a 55% increase in organic web traffic and a 40% rise in email engagement, resulting in increased inquiries and strengthened industry relationships.",
  },
  {
    title:"Content Marketing",
    subtitle:"Engineering Firm",
    client:"Engineering Firm",
    date: "June 2023 - Dec 2023",
    budget: "$180,000",
    imageUrl:"https://buzzdigitalagency.com/wp-content/uploads/2024/12/architecture-engineer-desktop-1536x1024.webp",
    challenge: "Our goal was to increase our online visibility and improve our engagement with potential clients and partners.",
    outcome: "The collaboration led to a 55% increase in organic web traffic and a 40% rise in email engagement, resulting in increased inquiries and strengthened industry relationships.",
  },
  {
    title:"Email Marketing",
    subtitle:"Real Estate",
    client:"Real Estate",
    date: "Feb 2023 - Aug 2023",
    budget: "$220,000",
    imageUrl:"https://buzzdigitalagency.com/wp-content/uploads/2024/12/villa-house-model-key-drawing-retro-desktop-real-estate-sale-concept-1536x1024.webp",
    challenge: " Our objective was to strengthen our online presence and investor communications in a competitive digital landscape.",
    outcome: "The collaboration resulted in a 50% increase in website traffic, enhanced social media engagement by 35%, and a rise in qualified investor leads, boosting our market presence.",
  },
  {
    title:"Web Design & Development",
    subtitle:"Commercial Construction",
    client:"Commercial Construction",
    date: "April 2023 - Oct 2023",
    budget: "$175,000",
    imageUrl:"https://buzzdigitalagency.com/wp-content/uploads/2024/12/villa-house-model-key-drawing-retro-desktop-real-estate-sale-concept-1536x1024.webp",
    challenge: " We aimed to showcase our projects more effectively online and improve our search engine rankings to attract new client.",
    outcome: "The partnership led to a 60% increase in website traffic, enhanced search engine rankings for key construction terms, and a substantial increase in online project inquiries and client engagement.",
  },

];

const FeaturedSection = () => {
  return (
    <div className=" w-full bg-[#090214]">
      <div className="w-full flex flex-col justify-center  h-[40vh] items-center">
        <div className="w-[55%] text-center text-white">
          <h1 className="text-[1.2vw] text-[#FD7EC1]">Featured Project</h1>
          <div className="w-full py-5 leading-none font-bold text-[2.5vw]">
            Unleashing the Power of Innovation and Creativity.
          </div>
        </div>
      </div>
      <div className="w-full grid grid-cols-3 gap-x-8 gap-y-8 px-[3rem]">
        {cardData.map((item, index) => (
          <div
            key={index}
            className="Card w-full group rounded-md h-[90vh] border-[1px] overflow-hidden relative"
          >
            {/* Heading */}
            <div className="heading bg-gradient-to-r from-[#403552] to-[#090214] w-full h-[15vh] px-[2vw] flex flex-col justify-center">
              <div className="text-[#FD7EC1] text-[1.2vw] uppercase font-bold">
                {item.title}
              </div>
              <div className="text-[1.9vw] text-white font-medium">{item.subtitle}</div>
            </div>

            {/* Image */}
            <div className="h-full w-full">
              <img
                src={item.imageUrl}
                className="h-full w-full filter grayscale object-cover group-hover:grayscale-0 transition-all duration-500"
                alt=""
              />
            </div>

            {/* About Info */}
            <div className="aboutinfo absolute bottom-[-40%] w-full h-[60vh] bg-[#090214]/30 group-hover:bottom-0 transition-all duration-500 ease-in-out p-4">
              <div className="grid grid-cols-2 gap-y-2 py-2">
                <div>
                  <h1 className="text-[#FD7EC1] font-medium">Client</h1>
                  <h1 className="text-white text-[1.2vw] font-medium tracking-tighter">
                    {item.client}
                  </h1>
                </div>
                <div>
                  <h1 className="text-[#FD7EC1]">Date</h1>
                  <h1 className="text-white text-[1.2vw] font-medium">
                    {item.date}
                  </h1>
                </div>
                <div>
                  <h1 className="text-[#FD7EC1]">Budget</h1>
                  <h1 className="text-white text-[1.2vw] font-medium">
                    {item.budget}
                  </h1>
                </div>
              </div>

              <div className="w-full border-t border-white/20 text-white/80 py-4 flex flex-col gap-4">
                <p>
                  <strong>The Challenge:</strong> {item.challenge}
                </p>
                <p>
                  <strong>The Outcome:</strong> {item.outcome}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedSection;
