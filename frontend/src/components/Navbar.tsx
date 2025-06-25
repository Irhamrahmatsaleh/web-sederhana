import { useState } from "react";
import { FaHome, FaRocket, FaInfoCircle, FaCrown, FaUserAlt, FaUserPlus, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white/80 backdrop-blur-lg shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-8 py-3">
        {/* Logo JW */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-emerald-400 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-2xl font-extrabold text-white tracking-widest">JW</span>
          </div>
          <span className="ml-2 text-xl font-bold text-indigo-700">JustWeb</span>
        </div>
        {/* Hamburger menu for mobile */}
        <button
          className="sm:hidden p-2"
          onClick={() => setOpen(!open)}
        >
          <FaBars size={24} />
        </button>
        {/* Menu */}
        <div className={`flex-col sm:flex-row flex w-full sm:w-auto absolute sm:static top-16 left-0 bg-white/95 sm:bg-transparent shadow-md sm:shadow-none transition-all duration-200 ${open ? 'flex' : 'hidden sm:flex'} sm:items-center sm:justify-between sm:gap-8`}>
          {/* Menu utama kiri */}
          <ul className="flex flex-col sm:flex-row gap-2 sm:gap-4 sm:mr-8">
            <li>
              <a href="#" className="flex items-center gap-1 text-lg font-medium text-gray-700 hover:text-indigo-600 px-4 py-2 sm:px-2">
                <FaHome className="mb-1" /> Beranda
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-1 text-lg font-medium text-gray-700 hover:text-emerald-600 px-4 py-2 sm:px-2">
                <FaRocket className="mb-1" /> Fitur
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-1 text-lg font-medium text-gray-700 hover:text-fuchsia-600 px-4 py-2 sm:px-2">
                <FaCrown className="mb-1" /> Premium
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-1 text-lg font-medium text-gray-700 hover:text-sky-600 px-4 py-2 sm:px-2">
                <FaInfoCircle className="mb-1" /> Tentang
              </a>
            </li>
          </ul>
          {/* Login & Register kanan */}
          <ul className="flex flex-col sm:flex-row gap-2 sm:gap-2 sm:ml-8 sm:items-center">
            <li>
              <a
                href="https://wa.me/+6281364573630" target="_blank"
                className="flex items-center gap-1 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-emerald-400 text-white font-semibold shadow-md hover:scale-105 transition"
              >
                <FaUserAlt /> Login
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/+6281364573630" target="_blank"
                className="flex items-center gap-1 px-4 py-2 rounded-full bg-gradient-to-r from-fuchsia-500 to-emerald-400 text-white font-semibold shadow-md hover:scale-105 transition"
              >
                <FaUserPlus /> Register
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
