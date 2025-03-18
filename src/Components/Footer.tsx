import { FaDiscord, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-cyan-950 text-white py-10 px-8 mt-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo & Branding */}
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h1 className="text-3xl font-bold text-cyan-400">Tech Pulse</h1>
          <p className="text-gray-400">Your go-to source for tech trends & tutorials</p>
        </div>

        {/* Quick Links */}
        <ul className="flex flex-wrap justify-center gap-6 text-lg">
          <Link to="/" className="hover:text-cyan-300">Home</Link>
          <Link to="/articles" className="hover:text-cyan-300">Articles</Link>
          <Link to="/tutorials" className="hover:text-cyan-300">Tutorials</Link>
          <Link to="/news" className="hover:text-cyan-300">News</Link>
        </ul>

        {/* Social Icons */}
        <div className="flex gap-6 mt-6 md:mt-0">
          <FaInstagram className="cursor-pointer hover:text-cyan-300 text-2xl" />
          <FaTwitter className="cursor-pointer hover:text-cyan-300 text-2xl" />
          <FaDiscord className="cursor-pointer hover:text-cyan-300 text-2xl" />
          <FaWhatsapp className="cursor-pointer hover:text-cyan-300 text-2xl" />
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm mt-8">
        © {new Date().getFullYear()} Tech Pulse. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
