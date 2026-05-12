import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer
      className="
        mt-24
        px-6
        py-14
        bg-gradient-to-r
        from-[#0d1b0d]
        to-[#12210f]
      "
    >
      <div className="grid md:grid-cols-3 gap-10">
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <img
              src="/images/5e88b52117aa40baa6a96e43b5c4e57858edaa47.png"
              alt="logo"
              className="w-12 h-12 object-contain"
            />

            <h2 className="text-2xl font-semibold">FloraVision.</h2>
          </div>

          <p className="text-sm text-gray-300 leading-7 max-w-[340px] font-normal">
            From lush indoor greens to vibrant outdoor blooms, our plants are
            crafted to elevate your living environment.
          </p>

          <div className="flex gap-5 pt-2 text-lg">
            <FaFacebookF className="cursor-pointer hover:text-green-400 transition" />

            <FaTwitter className="cursor-pointer hover:text-green-400 transition" />

            <FaLinkedinIn className="cursor-pointer hover:text-green-400 transition" />
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-5">Quick Links</h3>

          <ul className="space-y-3 text-sm text-gray-300 font-normal underline">
            <li className="hover:text-green-400 cursor-pointer transition">
              Home
            </li>

            <li className="hover:text-green-400 cursor-pointer transition">
              Types Of Plants
            </li>

            <li className="hover:text-green-400 cursor-pointer transition">
              Contact
            </li>

            <li className="hover:text-green-400 cursor-pointer transition">
              Privacy
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-5">For Every Update</h3>

          <div
            className="
              flex
              border
              border-white
              rounded-lg
              overflow-hidden
              h-[48px]
              max-w-[340px]
            "
          >
            <input
              type="email"
              placeholder="Enter Email"
              className="
                flex-1
                bg-transparent
                px-4
                text-sm
                font-normal
                outline-none
              "
            />

            <button
              className="
                bg-white
                text-black
                px-5
                text-xs
                font-medium
                hover:bg-green-400
                transition
              "
            >
              SUBSCRIBE
            </button>
          </div>

          <p className="text-sm text-gray-400 mt-12 font-normal">
            FloraVision © all rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
