import React from "react";
import { Box } from "@mui/material";


const HeroSection = () => {
  return (
    <Box
      className="py-12 px-4 md:px-8 lg:px-16 flex flex-col md:flex-row items-center justify-between"
      style={{ opacity: 1 }}
    >
      <Box className="md:w-1/2 mb-8 md:mb-0" style={{ opacity: 1, transform: "none" }}>
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          {" "}
          Transform Your Legal Practice with{" "}
          <span className="text-emerald-500">AI</span>
        </h1>
        <p className="text-xs sm:text-sm md:text-base mb-6 text-gray-600 dark:text-gray-300">
          {" "}
          LexTech Pro empowers legal professionals with cutting-edge tools for
          document analysis, case research, and contract automation - all in one
          secure platform.
        </p>
        <Box className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
          <a
            className="px-5 py-2.5 sm:px-6 sm:py-3 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 transition-colors text-center font-medium text-xs sm:text-sm"
            href="/chat"
            data-discover="true"
          >
            Request Demo
          </a>
          <a
            className="px-5 py-2.5 sm:px-6 sm:py-3 border border-emerald-500 text-emerald-500 rounded-md hover:bg-emerald-50 dark:hover:bg-gray-700 transition-colors text-center font-medium text-xs sm:text-sm"
            href="/#features-section"
            data-discover="true"
          >
            Explore Features
          </a>
        </Box>
      </Box>
      <Box
        className="md:w-1/2 flex justify-center"
        style={{ opacity: 1, transform: "none" }}
      >
        <Box className="relative w-full max-w-md">
          <Box
            className="bg-gradient-to-br from-emerald-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 sm:p-8 shadow-lg overflow-hidden"
            style={{ opacity: 1, transform: "none" }}
          >
            <Box className="relative h-56 sm:h-64">
              <Box
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-emerald-500 dark:text-emerald-400"
                style={{ transform: "scale(1.03431)" }}
              >
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="sm:w-20 sm:h-20"
                  height="60"
                  width="60"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                  <rect x="9" y="9" width="6" height="6"></rect>
                  <line x1="9" y1="1" x2="9" y2="4"></line>
                  <line x1="15" y1="1" x2="15" y2="4"></line>
                  <line x1="9" y1="20" x2="9" y2="23"></line>
                  <line x1="15" y1="20" x2="15" y2="23"></line>
                  <line x1="20" y1="9" x2="23" y2="9"></line>
                  <line x1="20" y1="14" x2="23" y2="14"></line>
                  <line x1="1" y1="9" x2="4" y2="9"></line>
                  <line x1="1" y1="14" x2="4" y2="14"></line>
                </svg>
              </Box>
              <Box className="mt-4 sm:mt-6 space-y-2 sm:space-y-3">
                <Box
                  className="flex items-center text-gray-700 dark:text-gray-300"
                  style={{ opacity: 1, transform: "none" }}
                >
                  <Box className="mr-2 sm:mr-3 p-1.5 sm:p-2 bg-emerald-100 dark:bg-emerald-800 rounded-full">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="text-emerald-500 w-3 h-3 sm:w-4 sm:h-4"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                    </svg>
                  </Box>
                  <span className="text-xxs sm:text-xs md:text-sm">
                    Instant AI-powered responses
                  </span>{" "}
                </Box>
                <Box
                  className="flex items-center text-gray-700 dark:text-gray-300"
                  style={{ opacity: 1, transform: "none" }}
                >
                  <Box className="mr-2 sm:mr-3 p-1.5 sm:p-2 bg-blue-100 dark:bg-blue-800 rounded-full">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="text-blue-600 w-3 h-3 sm:w-4 sm:h-4"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                  </Box>
                  <span className="text-xxs sm:text-xs md:text-sm">
                    Automated document analysis
                  </span>
                </Box>
                <Box
                  className="flex items-center text-gray-700 dark:text-gray-300"
                  style={{ opacity: 1, transform: "none" }}
                >
                  <Box className="mr-2 sm:mr-3 p-1.5 sm:p-2 bg-purple-100 dark:bg-purple-800 rounded-full">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="text-indigo-600 w-3 h-3 sm:w-4 sm:h-4"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                  </Box>
                  <span className="text-xxs sm:text-xs md:text-sm">
                    Intelligent case research
                  </span>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            className="absolute -bottom-5 -right-5 bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-lg shadow-lg"
            style={{ opacity: 1, transform: "none" }}
          >
            <p className="text-xxs sm:text-xs font-medium">Powered by:</p>{" "}
            <p className="text-xxs text-emerald-500 font-bold">
              Neural Processing Engine
            </p>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
