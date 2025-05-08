import React from "react";
import { Box, Typography } from "@mui/material";

const LegalassistsWorksSection = () => {
  return (
    <section
      className="py-10 md:py-14 px-4 md:px-8 lg:px-16 bg-gray-50 dark:bg-gray-900"
      style={{ opacity: 1 }}
    >
      <Box
        className="text-center mb-6 md:mb-10"
        style={{ opacity: 1, transform: "none" }}
      >
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 md:mb-3">
          How LegalAssist Works
        </h2>
        <p className="text-xs text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Transform your legal workflow in just a few simple steps
        </p>
      </Box>
      <Box className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-5 md:gap-6">
        <Box
          className="flex flex-col items-center text-center"
          style={{ opacity: 1, transform: "none" }}
        >
          <Box
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center text-sm sm:text-base font-bold mb-2 sm:mb-3"
            tabindex="0"
          >
            1
          </Box>
          <Typography className="text-sm sm:text-base md:text-lg font-semibold mb-1">
            Document Upload
          </Typography>
          <p className="text-xs text-gray-600 dark:text-gray-300">
            Securely upload your legal documents in seconds
          </p>
        </Box>
        <Box
          className="flex flex-col items-center text-center"
          style={{ opacity: 1, transform: "none" }}
        >
          <Box
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center text-sm sm:text-base font-bold mb-2 sm:mb-3"
            tabindex="0"
          >
            2
          </Box>
          <Typography className="text-sm sm:text-base md:text-lg font-semibold mb-1">
            AI Analysis
          </Typography>
          <p className="text-xs text-gray-600 dark:text-gray-300">
            Our advanced algorithms review and process your documents
          </p>
        </Box>
        <Box
          className="flex flex-col items-center text-center"
          style={{ opacity: 1, transform: "none" }}
        >
          <Box
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center text-sm sm:text-base font-bold mb-2 sm:mb-3"
            tabindex="0"
          >
            3
          </Box>
          <Typography className="text-sm sm:text-base md:text-lg font-semibold mb-1">
            Expert Insights
          </Typography>
          <p className="text-xs text-gray-600 dark:text-gray-300">
            Receive comprehensive legal analysis and recommendations
          </p>
        </Box>
      </Box>
    </section>
  );
};

export default LegalassistsWorksSection;
