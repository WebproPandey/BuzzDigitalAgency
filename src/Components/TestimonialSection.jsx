import { useState } from "react";

const testimonials = [
  {
    name: "Harris",
    date: "Feb 17, 2025",
    review: "This is the most Comprehensive Professional, and positive experience for a Layman into the Marketing Genius of Buzz Digital Agency. They will propel you...",
    rating: 5,
  },
  {
    name: "Edwin Sanders",
    date: "Jan 20, 2025",
    review: "This is the most Comprehensive Professional, and positive experience for a Layman into the Marketing Genius of Buzz Digital Agency. They will propel you...",
    rating: 5,
  },
  {
    name: "Giulia Avoltini",
    date: "Dec 03, 2024",
    review: "Buzz Digital Agency exceeded my expectations! Their team is professional, creative, and dedicated to delivering results. From strategy to execution...",
    rating: 5,
  },
  {
    name: "Louice",
    date: "Jun 08, 2024",
    review: "We have been working with Buzz Digital Agency for our commercial real estate company, and their services have been nothing short of exceptional. From ... More!",
    rating: 5,
  },
  {
    name: "Louice",
    date: "Jun 08, 2024",
    review: "We have been working with Buzz Digital Agency for our commercial real estate company, and their services have been nothing short of exceptional. From ... More!",
    rating: 5,
  },
];

export default function TestimonialSection() {
  const [page, setPage] = useState(0);
  const testimonialsPerPage = 3;
  const pages = Math.ceil(testimonials.length / testimonialsPerPage);

  const handleNext = () => setPage((prev) => (prev + 1) % pages);
  const handlePrev = () => setPage((prev) => (prev - 1 + pages) % pages);

  const displayedTestimonials = testimonials.slice(
    page * testimonialsPerPage,
    page * testimonialsPerPage + testimonialsPerPage
  );

  return (
    <section className="bg-[#26152F] py-16 px-4 md:px-8 text-center text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 border-b-2 border-white pb-8 mb-8">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">Client Feedback & Reviews</h2>
        <p className="text-sm md:text-base text-left mb-8 font-semibold">
          <span className="text-yellow-400 text-xl md:text-2xl px-1 mr-2 border-r-2 border-white">5.00 ★</span> 5 reviews
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          {displayedTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="border-2 border-white rounded-2xl shadow-lg p-6 flex flex-col justify-between h-full bg-[#2f1d39]"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center text-yellow-400">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.787 1.402 8.168L12 18.896l-7.336 3.87 1.402-8.168L.132 9.211l8.2-1.193z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs md:text-sm text-gray-300">
                  {testimonial.date}
                </span>
              </div>
              <p className="text-left text-sm md:text-base text-gray-100 mb-4">
                {testimonial.review}
              </p>
              <div className="flex items-center gap-2 mt-auto">
                <div className="bg-purple-700 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold uppercase">
                  {testimonial.name.charAt(0)}
                </div>
                <span className="font-semibold">{testimonial.name}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-4">
          <button
            onClick={handlePrev}
            className="bg-white text-black font-semibold py-2 px-4 rounded hover:bg-gray-300 transition"
          >
            Prev
          </button>
          <div className="flex gap-2">
            {Array.from({ length: pages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={`w-3 h-3 rounded-full ${
                  page === i ? "bg-yellow-400" : "bg-gray-500"
                }`}
              />
            ))}
          </div>
          <button
            onClick={handleNext}
            className="bg-white text-black font-semibold py-2 px-4 rounded hover:bg-gray-300 transition"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}