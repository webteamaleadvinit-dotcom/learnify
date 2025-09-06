// src/components/Navbar.jsx
import React from "react";
import { useState } from "react";
import { UserCircle } from "lucide-react";

const Navbar = () => {
  const [active, setActive] = useState("Home");

  const links = ["Home", "Dashboard", "My learning", "Certificates"];

  return (
    <nav className="bg-blue-500 px-6 py-4 flex items-center justify-between squared-b-lg shadow-md">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img
          src="/logo.svg"  // replace with your logo path
          alt="Learnify Logo"
          className="h-30 w-30"
        />
        {/* <span className="text-black font-semibold text-lg">Learnify</span> */}
      </div>

      {/* Links */}
      <ul className="flex gap-6">
        {links.map((link) => (
          <li key={link}>
            <button
              onClick={() => setActive(link)}
              className={`${
                active === link
                  ? "bg-white text-blue-500 font-semibold px-4 py-1 rounded-full"
                  : "text-black hover:text-gray-200"
              } transition`}
            >
              {link}
            </button>
          </li>
        ))}
      </ul>

      {/* User icon */}
      <div className="text-black">
        <UserCircle size={28} />
      </div>
    </nav>
  );
};

export default Navbar;



