import { FiSearch, FiShoppingBag, FiMenu, FiChevronDown } from "react-icons/fi";

function Navbar() {
  return (
    <nav className="flex justify-between items-center">
      <div className="flex items-center gap-3">
        <img
          src="/images/5e88b52117aa40baa6a96e43b5c4e57858edaa47.png"
          alt="Logo"
          className="w-12 h-12 object-contain"
        />

        <h1 className="text-2xl font-bold">FloraVision.</h1>
      </div>

      <ul className="hidden md:flex gap-10 nav-font">
        <li>Home</li>
        <li className="flex items-center gap-1 cursor-pointer">
          Plants Type
          <FiChevronDown className="text-lg" />
        </li>
        <li>More</li>
        <li>Contact</li>
      </ul>

      <div className="flex gap-5 text-xl">
        <FiSearch />
        <FiShoppingBag />
        <FiMenu />
      </div>
    </nav>
  );
}

export default Navbar;
