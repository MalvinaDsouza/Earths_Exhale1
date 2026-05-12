import ReviewCard from "./ReviewCard";
import { FiPlay, FiChevronRight } from "react-icons/fi";

function Hero() {
  return (
    <div className="grid md:grid-cols-2 gap-10 mt-20 items-center">
      <div>
        <h1 className="text-5xl md:text-7xl font-bold">Earth’s Exhale</h1>

        <p className="text-gray-300 mt-5 max-w-xl">
          "Earth Exhale" symbolizes the purity and vitality of the Earth's
          natural environment and its essential role in sustaining life.
        </p>

        <div className="flex gap-8 mt-8 items-center">
          <button className="border px-8 py-3 rounded-xl">Buy Now</button>

          <div className="flex items-center gap-4">
            <button className="border rounded-full p-4">
              <FiPlay />
            </button>

            <p className="demo-font">Live Demo...</p>
          </div>
        </div>

        <div className="mt-12">
          <ReviewCard />
        </div>
      </div>

      <div
        className="
          glass
          w-[512px]
          h-[644px]
          rounded-[40px]
          p-8
          relative
          flex
          flex-col
        "
      >
        <img
          src="/images/c8eb5b1abede1308e0eaf899d1f7faae62a0c2f6 (1).png"
          alt="Plant"
          className="mx-auto h-80 mt-4"
        />

        <div className="mt-auto">
          <p className="text-gray-400 text-lg">Indoor Plant</p>

          <h2 className="text-3xl mt-2 font-semibold">Aglaonema Plant</h2>

          <button className="border px-8 py-3 rounded-xl mt-5">Buy Now</button>
        </div>

        <button
          className="
            absolute
            right-8
            bottom-24
            p-4
          "
        >
          <FiChevronRight size={35} />
        </button>

        <div
          className="
            absolute
            bottom-8
            left-1/2
            -translate-x-1/2
            flex
            gap-3
          "
        >
          <div className="w-3 h-3 bg-white rounded-full"></div>

          <div className="w-3 h-3 bg-white/40 rounded-full"></div>

          <div className="w-3 h-3 bg-white/40 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
