import { useState, useEffect } from "react";
import { FaDiscord, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi"; // Icons for menu toggle
import { FaSearch } from "react-icons/fa"; // Search icon
import { Link } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // State to toggle mobile menu
  const [search, setSearch] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="bg-cyan-950 py-6 px-8 text-white z-[9999]">
        <header className="pt-25 flex flex-col md:flex-row items-center justify-between">
          {/* Title and Tagline */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold text-cyan-400">Tech Pulse</h1>
            <p className="mt-1 text-xl text-gray-400">
              Stay updated with the latest tech trends and tutorials
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative flex items-center w-full md:w-1/3 mt-4 md:mt-0">
            <FaSearch className="absolute left-3 text-gray-400" />
            <input
              type="search"
              placeholder="Search articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-gray-900 text-white border-2 border-cyan-500 rounded-2xl py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>
        </header>

        {/* Navbar */}
        <nav
          className={`fixed top-0 left-1/2 transform -translate-x-1/2 flex justify-between items-center px-6 lg:px-16 py-4 transition-all duration-300 ${
            isScrolled
              ? "w-[80%] bg-cyan-950/80 backdrop-blur-md shadow-lg py-3 rounded-xl"
              : "w-full bg-cyan-950 py-6"
          } z-[9999]`}
        >
          {/* Logo */}
          <h1 className="text-2xl font-bold text-cyan-400">Tech Pulse</h1>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex flex-row gap-6 text-lg">
            <Link to="/"> <li className="cursor-pointer hover:text-cyan-300">Home</li></Link>
            <Link to="/articles"> <li className="cursor-pointer hover:text-cyan-300">Articles</li> </Link>
            <Link to="/tutorials"> <li className="cursor-pointer hover:text-cyan-300">Tutorials</li> </Link>
            <Link to="/news"> <li className="cursor-pointer hover:text-cyan-300">News</li> </Link>
          </ul>

          {/* Social Media Icons (Hidden on Mobile) */}
          <div className="hidden lg:flex gap-4">
            <FaInstagram className="cursor-pointer hover:text-cyan-300" />
            <FaTwitter className="cursor-pointer hover:text-cyan-300" />
            <FaDiscord className="cursor-pointer hover:text-cyan-300" />
            <FaWhatsapp className="cursor-pointer hover:text-cyan-300" />
          </div>

          {/* Sign Up Button (Visible on Desktop) */}
          <button className="hidden lg:block cursor-pointer uppercase bg-cyan-900 px-4 py-2 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#F44336,-0.5rem_-0.5rem_#00BCD4] transition">
            Sign up
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-white text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed top-0 left-0 h-screen w-2/3 bg-cyan-950 p-6 shadow-lg transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } z-[9999]`}
        >
          <button
            className="text-white text-2xl absolute top-4 right-4"
            onClick={() => setIsOpen(false)}
          >
            <FiX />
          </button>

          <ul className="flex flex-col gap-6 text-lg mt-10">
              <Link to="/"> <li className="cursor-pointer hover:text-cyan-300">Home</li></Link>
            <Link to="/articles"> <li className="cursor-pointer hover:text-cyan-300">Articles</li> </Link>
            <Link to="/tutorials"> <li className="cursor-pointer hover:text-cyan-300">Tutorials</li> </Link>
            <Link to="/news"> <li className="cursor-pointer hover:text-cyan-300">News</li> </Link>
          </ul>

          {/* Social Media Icons in Mobile Menu */}
          <div className="flex gap-4 mt-6">
            <FaInstagram className="cursor-pointer hover:text-cyan-300" />
            <FaTwitter className="cursor-pointer hover:text-cyan-300" />
            <FaDiscord className="cursor-pointer hover:text-cyan-300" />
            <FaWhatsapp className="cursor-pointer hover:text-cyan-300" />
          </div>

          {/* Sign Up Button in Mobile Menu */}
          <button className="mt-6 cursor-pointer uppercase bg-cyan-900 px-4 py-2 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#F44336,-0.5rem_-0.5rem_#00BCD4] transition">
            Sign up
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
