import React, { useState } from "react";

const Hero = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="overflow-x-hidden bg-gray-50 h-screen flex items-center">
      <section className="w-full">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="px-6 text-lg text-gray-600">
              Personalized AI Health Assistant, made for Everyone
            </h1>
            <p className="mt-5 text-4xl font-bold text-amber-950 sm:text-5xl lg:text-6xl">
             <i> Let's make <br /> Feeling Good <br /> Your </i> <br />
              <span className="relative inline-flex">
                <span className="bg-gradient-to-r from-[#44BCFF] via-[#09ee61] to-[#00ffff] blur-lg filter opacity-30 w-full h-full absolute inset-0"></span>
                <span className="relative"> <i> New Normal</i> </span>
              </span>
            </p>
            <div className="px-8 mt-9 sm:flex sm:space-x-5">
              <a
                href="#"
                className="inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white bg-gray-900 rounded-xl hover:bg-gray-600 sm:w-auto"
              >
               <i> Get some help </i>
              </a>
              <a
                href=""
                className="inline-flex items-center justify-center w-full px-6 py-3 mt-4 text-lg font-bold text-gray-900 border-2 border-gray-400 rounded-xl sm:w-auto sm:mt-0 hover:bg-gray-900 hover:text-white"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                  stroke="currentColor"
                >
                  <path
                    d="M8.18003 13.4261C6.8586 14.3918 5 13.448 5 11.8113V5.43865C5 3.80198 6.8586 2.85821 8.18003 3.82387L12.5403 7.01022C13.6336 7.80916 13.6336 9.44084 12.5403 10.2398L8.18003 13.4261Z"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Explore our features
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
