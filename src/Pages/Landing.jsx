// src/Pages/Landing.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Readytotranform from "../components/Readytotranform";

const Landing = () => {
  return (
    <div>
      {/* Navbar at the top */}
      <Navbar />

      {/* Other sections or hero can go here */}

      {/* CTA Section */}
      <Readytotranform />
    </div>
  );
};

export default Landing;
