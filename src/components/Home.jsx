// src/components/Home.jsx
import React from "react";
// import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="min-h-screen flex items-center bg-gray-50 px-6 py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column: Text */}
        <div className="text-left space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
            Hi, I'm <br />
            <span className="text-blue-600">Daniel Egwuatu</span>
          </h1>

          <div className="space-y-2">
            <p className="text-2xl text-gray-700 font-medium">
              Engineering Student & Embedded Systems Developer
            </p>
            <p className="text-lg text-gray-600 max-w-xl">
              Building the future at the intersection of hardware and software.
              Founder of HezTec, specializing in IoT, PCB design, and scalable
              web solutions.
            </p>
          </div>

          <div className="flex gap-4 pt-4">
            {/* <Link 
              to="/projects" 
              className="px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-xl shadow-md hover:bg-blue-700 transition"
            >
              Explore My Work
            </Link>
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-white text-blue-600 text-lg font-semibold rounded-xl border-2 border-blue-100 hover:bg-blue-50 transition"
            >
              Contact Me
            </Link> */}
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="flex flex-col items-center md:items-end">
          <img
            src="/dan.jpeg"
            alt="Daniel Egwuatu"
            className="w-80 h-80 md:w-96 md:h-96 rounded-full object-cover object-top shadow-2xl border-8 border-white"
          />
          <div className="flex gap-6 mt-6 text-gray-600">
            <a
              href="https://github.com/egwuatudaniel"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-600"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/egwuatudaniel"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-600"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
