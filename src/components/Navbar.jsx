import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { IoPerson } from "react-icons/io5";

const Navbar = () => {
  
  const [open, setOpen] = useState(false); // for mobile menu

  return (
    <nav className="px-3 py-3">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 h-8 px-4 md:h-8">
          <img src="/logo.svg" alt="Learnify Logo" className="h-full w-auto"  />
        </div>


        {/* Desktop Links */}

        <ul className="hidden md:flex gap-6">
          <li>
            <a href="/" className={`text-base font-semibold hover:text-sky-600 hover:border-b-2 border-sky-500 ${window.location.pathname === "/" ? "text-sky-600 border-b-2 border-sky-500" : ""}`}>Home</a>
          </li>

          <li>
            <a href="/dashboard" className={`text-base font-semibold hover:text-sky-600 hover:border-b-2 border-sky-500 ${window.location.pathname === "/dashboard" ? "text-sky-600 border-b-2 border-sky-500" : ""}`}>Dashboard</a>
          </li>

          <li>
            <a href="/mylearning" className={`text-base font-semibold hover:text-sky-600 hover:border-b-2 border-sky-500 ${window.location.pathname === "/learning" ? "text-sky-600 border-b-2 border-sky-500" : ""}`}>My Learning</a>
          </li>

          <li>
            <a href="/certificate" className={`text-base font-semibold hover:text-sky-600 hover:border-b-2 border-sky-500 ${window.location.pathname === "/certificates" ? "text-sky-600 border-b-2 border-sky-500" : ""}`}>Certificates</a>
          </li>
</ul>


        {/* User Icon & Mobile Menu Button */}
        <div className="flex items-center gap-4">
          <IoPerson size={28} className="text-black" />
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <X size={28} /> : <Menu size={28}/>}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="flex flex-col gap-4 mt-4 md:hidden">
          <li>
            <a href="/" className={`text-base font-semibold hover:text-sky-600 hover:border-b-2 border-sky-500 ${window.location.pathname === "/" ? "text-sky-600 border-b-2 border-sky-500" : ""}`}>Home</a>
          </li>

          <li>
            <a href="/dashboard" className={`text-base font-semibold hover:text-sky-600 hover:border-b-2 border-sky-500 ${window.location.pathname === "/dashboard" ? "text-sky-600 border-b-2 border-sky-500" : ""}`}>Dashboard</a>
          </li>

          <li>
            <a href="/mylearning" className={`text-base font-semibold hover:text-sky-600 hover:border-b-2 border-sky-500 ${window.location.pathname === "/learning" ? "text-sky-600 border-b-2 border-sky-500" : ""}`}>My Learning</a>
          </li>

          <li>
            <a href="/certificate" className={`text-base font-semibold hover:text-sky-600 hover:border-b-2 border-sky-500 ${window.location.pathname === "/certificates" ? "text-sky-600 border-b-2 border-sky-500" : ""}`}>Certificates</a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
