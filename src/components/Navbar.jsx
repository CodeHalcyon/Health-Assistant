import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
const Navbar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>

      <header className="py-4 md:py-6">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex-shrink-0">
              <NavLink
                to="/"
                title=""
                className="flex rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
              >
                <img
                  className="w-auto h-8"
                  src="/images/logo.png"
                  alt="Logo"
                />
              </NavLink>
            </div>

            <div className="flex lg:hidden">
              <button
                type="button"
                className="text-gray-900"
                onClick={() => setExpanded(!expanded)}
                aria-expanded={expanded}
              >
                {expanded ? (
                  <svg
                    className="w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>

            <div className="hidden lg:flex lg:ml-16 lg:items-center lg:justify-center lg:space-x-10 xl:space-x-16">
              <NavLink
                to="/workout"
                className="text-base font-medium text-gray-900 transition-all duration-200 rounded hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
              >
                Workout
              </NavLink>
              <NavLink
                to="/diet-plan"
                className="text-base font-medium text-gray-900 transition-all duration-200 rounded hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
              >
                Diet plan
              </NavLink>
              <NavLink
                to="/dashboard"
                className="text-base font-medium text-gray-900 transition-all duration-200 rounded hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
              >
                Dashboard
              </NavLink>
              
            </div>

            <div className="hidden lg:ml-auto lg:flex lg:items-center lg:space-x-10">
              <NavLink
                to="/signin"
                className="text-base font-medium text-gray-900 transition-all duration-200 rounded hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
              >
                Sign In
              </NavLink>
              <NavLink
                to="/signup"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-bold text-white bg-gray-900 border border-transparent rounded-xl hover:bg-gray-600 focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              >
                Sign up
              </NavLink>
            </div>
          </div>

          {expanded && (
            <nav>
              <div className="px-1 py-8">
                <div className="grid gap-y-7">
                  <NavLink
                    to="/workout"
                    className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 rounded-xl hover:bg-gray-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                  >
                    Workout
                  </NavLink>
                  <NavLink
                    to="/diet-plan"
                    className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 rounded-xl hover:bg-gray-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                  >
                    Diet plan
                  </NavLink>
                  <NavLink
                    to="/dashboard"
                    className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 rounded-xl hover:bg-gray-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                  >
                    Dashboard
                  </NavLink>
                  
                  <NavLink
                    to="/signin"
                    className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 rounded-xl hover:bg-gray-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 text-center"
                  >
                    Sign in
                  </NavLink>
                  <NavLink
                    to="/signup"
                    className="inline-flex items-center justify-center px-6 py-3 text-base font-bold text-white bg-gray-900 rounded-xl hover:bg-gray-600 focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  >
                    Sign up
                  </NavLink>
                </div>
              </div>
            </nav>
          )}
        </div>
      </header>

    </>
  );
};

export default Navbar;