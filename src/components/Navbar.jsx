import React, { useState } from "react";
import { UserCircle, Menu, X } from "lucide-react";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [open, setOpen] = useState(false); // for mobile menu

  const links = ["Home", "Dashboard", "My learning", "Certificates"];

  return (
    <nav className="bg-blue-500 px-3 py-3 shadow-md">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 h-8 px-4 md:h-8">
          <img src="/logo.svg" alt="Learnify Logo" className="h-full w-auto"  />
        </div>


        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6">
          {links.map((link) => (
            <li key={link}>
              <button
                onClick={() => setActive(link)}
                className={`${
                  active === link
                    ? "bg-white text-blue-500 font-semibold px-4 py-1 rounded-full "
                    : "text-black hover:text-gray-200 "
                } transition`}
              >
                {link}
              </button>
            </li>
          ))}
        </ul>

        {/* User Icon & Mobile Menu Button */}
        <div className="flex items-center gap-4">
          <UserCircle size={28} className="text-black" />
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <X size={28} className="text-white" /> : <Menu size={28} className="text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="flex flex-col gap-4 mt-4 md:hidden">
          {links.map((link) => (
            <li key={link}>
              <button
                onClick={() => {
                  setActive(link);
                  setOpen(false); // close menu on click
                }}
                className={`${
                  active === link
                    ? "bg-white text-blue-500 font-semibold px-4 py-1 rounded-full"
                    : "text-white hover:text-gray-200"
                } transition w-full text-left`}
              >
                {link}
              </button>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
