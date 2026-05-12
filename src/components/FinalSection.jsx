import { FaStar, FaStarHalfAlt } from "react-icons/fa";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function FinalSection() {
  const reviews = [
    {
      image: "/images/a5003c9c04bdc265d997eb88ecb49b2ed88c8428.png",
      name: "Shelly Russel",
      text: "Just got my hands on some absolutely awesome plants, and I couldn’t be happier!",
    },
    {
      image: "/images/8af347a65acb49fcb29cfac2ba705f2b27151f3f.jpg",
      name: "Lula Rolfson",
      text: "Each one has its own unique charm and personality, and they’ve already started brightening up my space. The vibrant colors and fresh greenery make such a huge difference in my home.",
    },
    {
      image: "/images/04f4a376d1869488dd43f1a5e57a36f5cdf73be4.png",
      name: "Carol Huels",
      text: "It's like bringing a little piece of nature indoors. Definitely worth the investment—my plant collection has never looked better!",
    },
  ];

  return (
    <section className="mt-40 px-8">
      <h2 className="text-5xl font-bold text-center mb-30">Customer Review</h2>

      <div className="grid md:grid-cols-3 gap-10">
        {reviews.map((item, index) => (
          <div
            key={index}
            className="
              bg-[#1B2316]
              rounded-[50px]
              border
              border-white/20
              p-8
              min-h-[300px]
              rounded-3xl
            "
          >
            <div className="flex gap-5 items-center">
              <img src={item.image} className="w-16 h-16 rounded-full" />

              <div>
                <h3 className="text-3xl font-semibold">{item.name}</h3>

                <div className="flex gap-1 text-yellow-400 mt-2">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfAlt />
                </div>
              </div>
            </div>

            <p className="text-gray-300 text-xl mt-10">{item.text}</p>
          </div>
        ))}
      </div>

      <h2 className="text-5xl font-bold text-center mt-32 mb-20">
        Our Best o2
      </h2>

      <div
        className="
          bg-[#1B2316]
          rounded-[77px]
          border-2
          border-white/20
          p-12
          relative
          flex
          items-center
          overflow-visible
        "
      >
        <img
          src="/images/c8eb5b1abede1308e0eaf899d1f7faae62a0c2f6 (1).png"
          className="
            h-[700px]
            -mt-30
            -ml-30
            z-70
          "
        />

        <div className="ml-10 max-w-[600px]">
          <h2 className="text-4xl font-bold leading-relaxed">
            We Have Small And Best O2 Plants Collection’s
          </h2>

          <p className="text-gray-300 text-xl mt-8 leading-relaxed">
            Oxygen-producing plants release oxygen into the atmosphere through
            photosynthesis.
            <br />
            <br />
            Many plants help filter pollutants and make the air cleaner.
          </p>

          <button
            className="
              border
              px-10
              py-4
              rounded-xl
              mt-8
            "
          >
            Explore
          </button>
        </div>

        <div
          className="
            absolute
            bottom-12
            right-12
            flex
            items-center
            gap-6
          "
        >
          <FiChevronLeft size={30} />

          <p className="text-xl">01/04</p>

          <FiChevronRight size={30} />
        </div>
      </div>

      <div className="flex justify-center gap-4 mt-16">
        <div className="w-4 h-4 bg-white rounded-full"></div>

        <div className="w-4 h-4 bg-white/40 rounded-full"></div>

        <div className="w-4 h-4 bg-white/40 rounded-full"></div>
      </div>
    </section>
  );
}

export default FinalSection;
