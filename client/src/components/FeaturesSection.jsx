import React from "react";
import { Box } from "@mui/material";

const features = [
  {
    title: "Document Analysis",
    description: "Automatically review and analyze legal documents for key clauses and risks.",
    iconColor: "text-blue-500",
    icon: {
      viewBox: "0 0 384 512",
      path: "M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zM64 72c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8V72zm0 64c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8v-16zm192.81 248H304c8.84 0 16 7.16 16 16s-7.16 16-16 16h-47.19c-16.45 0-31.27-9.14-38.64-23.86-2.95-5.92-8.09-6.52-10.17-6.52s-7.22.59-10.02 6.19l-7.67 15.34a15.986 15.986 0 0 1-14.31 8.84c-.38 0-.75-.02-1.14-.05-6.45-.45-12-4.75-14.03-10.89L144 354.59l-10.61 31.88c-5.89 17.66-22.38 29.53-41 29.53H80c-8.84 0-16-7.16-16-16s7.16-16 16-16h12.39c4.83 0 9.11-3.08 10.64-7.66l18.19-54.64c3.3-9.81 12.44-16.41 22.78-16.41s19.48 6.59 22.77 16.41l13.88 41.64c19.77-16.19 54.05-9.7 66 14.16 2.02 4.06 5.96 6.5 10.16 6.5zM377 105L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9z"
    }
  },
  {
    title: "Case Research",
    description: "Quickly find relevant case law and precedents with AI-powered search.",
    iconColor: "text-indigo-500",
    icon: {
      viewBox: "0 0 512 512",
      path: "M149.7 85.6c-1.2 0-2.5 0-3.7.1-33.9.8-75.5 10.7-127.3 33.7v243.4c60.8-28.8 106.7-37.1 144.2-33.1 13.7 1.4 26.3 4.5 37.9 8.6l-45.1-78.8c-8.6 3.5-17.9 5.5-27.7 5.5-40.21 0-73-32.8-73-73s32.79-73 73-73c40.2 0 73 32.8 73 73 0 24-11.7 45.3-29.7 58.7l57.3 100c6.2 3.2 12.1 6.7 17.9 10.2v-243c-23.2-17.7-50.2-30-86-32-3.5-.2-7.1-.3-10.8-.3zm212 0c-3.7 0-7.4.1-10.9.3-35.8 2-62.7 14.3-86 32v243c23.9-14.6 50.1-27.7 83.6-31.2 37.5-4 83.5 4.3 144.2 33.1V119.4c-51.7-23-93.3-32.9-127.2-33.7-1.3 0-2.5-.1-3.7-.1zM128 137c-30.48 0-55 24.5-55 55s24.52 55 55 55c30.5 0 55-24.5 55-55s-24.5-55-55-55zm2.3 13.9h2.8C109 169.1 98.32 193 99.73 221.1c-26.06-38.8 1.27-69.4 30.57-70.2zm13.1 196.5c-32 .3-71.8 9.8-124.7 36v42.5c60.8-28.8 106.7-37.1 144.2-33.1 18.6 2 34.9 6.9 49.8 13.3-4.7 6.1-9.3 13.3-13.9 21.7h53.3l-36-62.7c-16.6-8.3-34.3-14.6-55.1-16.8-5.6-.6-11.5-.9-17.6-.9zm220.9 0c-4.8.1-9.4.4-13.9.9-34 3.6-59.6 18-85.6 34.4v.3c-6.1-1.9-12.3-2.3-18.3-1.2l26.3 46H316c-6-8.2-11.8-15.4-17.7-21.6 15-6.5 31.4-11.4 50.1-13.4 37.5-4 83.5 4.3 144.2 33.1v-42.5c-53.1-26.3-93.1-35.9-125.2-36h-3.1z"
    }
  },
  {
    title: "Contract Automation",
    description: "Generate and customize legal contracts with smart templates.",
    iconColor: "text-emerald-500",
    icon: {
      viewBox: "0 0 576 512",
      path: "M218.17 424.14c-2.95-5.92-8.09-6.52-10.17-6.52s-7.22.59-10.02 6.19l-7.67 15.34c-6.37 12.78-25.03 11.37-29.48-2.09L144 386.59l-10.61 31.88c-5.89 17.66-22.38 29.53-41 29.53H80c-8.84 0-16-7.16-16-16s7.16-16 16-16h12.39c4.83 0 9.11-3.08 10.64-7.66l18.19-54.64c3.3-9.81 12.44-16.41 22.78-16.41s19.48 6.59 22.77 16.41l13.88 41.64c19.75-16.19 54.06-9.7 66 14.16 1.89 3.78 5.49 5.95 9.36 6.26v-82.12l128-127.09V160H248c-13.2 0-24-10.8-24-24V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24v-40l-128-.11c-16.12-.31-30.58-9.28-37.83-23.75zM384 121.9c0-6.3-2.5-12.4-7-16.9L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1zm-96 225.06V416h68.99l161.68-162.78-67.88-67.88L288 346.96zm280.54-179.63l-31.87-31.87c-9.94-9.94-26.07-9.94-36.01 0l-27.25 27.25 67.88 67.88 27.25-27.25c9.95-9.94 9.95-26.07 0-36.01z"
    }
  },
  {
    title: "Compliance Check",
    description: "Ensure documents meet current regulatory requirements automatically.",
    iconColor: "text-teal-500",
    icon: {
      viewBox: "0 0 512 512",
      path: "M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z"
    }
  },
  {
    title: "Legal Drafting",
    description: "Create precise legal documents with AI-assisted drafting tools.",
    iconColor: "text-amber-500",
    icon: {
      viewBox: "0 0 640 512",
      path: "M256 336h-.02c0-16.18 1.34-8.73-85.05-181.51-17.65-35.29-68.19-35.36-85.87 0C-2.06 328.75.02 320.33.02 336H0c0 44.18 57.31 80 128 80s128-35.82 128-80zM128 176l72 144H56l72-144zm511.98 160c0-16.18 1.34-8.73-85.05-181.51-17.65-35.29-68.19-35.36-85.87 0-87.12 174.26-85.04 165.84-85.04 181.51H384c0 44.18 57.31 80 128 80s128-35.82 128-80h-.02zM440 320l72-144 72 144H440zm88 128H352V153.25c23.51-10.29 41.16-31.48 46.39-57.25H528c8.84 0 16-7.16 16-16V48c0-8.84-7.16-16-16-16H383.64C369.04 12.68 346.09 0 320 0s-49.04 12.68-63.64 32H112c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h129.61c5.23 25.76 22.87 46.96 46.39 57.25V448H112c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h416c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"
    }
  },
  {
    title: "Client Intake",
    description: "Streamline client onboarding with automated forms and analysis.",
    iconColor: "text-pink-500",
    icon: {
      viewBox: "0 0 640 512",
      path: "M192 256c61.9 0 112-50.1 112-112S253.9 32 192 32 80 82.1 80 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C51.6 288 0 339.6 0 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zM480 256c53 0 96-43 96-96s-43-96-96-96-96 43-96 96 43 96 96 96zm48 32h-3.8c-13.9 4.8-28.6 8-44.2 8s-30.3-3.2-44.2-8H432c-20.4 0-39.2 5.9-55.7 15.4 24.4 26.3 39.7 61.2 39.7 99.8v38.4c0 2.2-.5 4.3-.6 6.4H592c26.5 0 48-21.5 48-48 0-61.9-50.1-112-112-112z"
    },
  },
];

const FeatureCard = ({ icon, title, description, iconColor }) => {
  return (
    <Box
      className="bg-white dark:bg-gray-800 p-3 sm:p-4 md:p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow"
      style={{ opacity: 1, transform: "none" }}
    >
      <Box className="text-lg sm:text-xl md:text-2xl mb-1 sm:mb-2 md:mb-3">
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox={icon.viewBox}
          className={`w-5 h-5 sm:w-6 sm:h-6 ${iconColor}`}
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d={icon.path}></path>
        </svg>
      </Box>
      <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-1">
        {title}
      </h3>
      <p className="text-xs text-gray-600 dark:text-gray-300">{description}</p>
    </Box>
  );
};

const FeaturesSection = () => {
  return (
    <Box
      id="features-section"
      className="py-10 md:py-16 px-4 md:px-8 lg:px-16 bg-gray-50 dark:bg-gray-900"
      style={{ opacity: 1 }}
    >
      <Box
        className="text-center mb-6 md:mb-12"
        style={{ opacity: 1, transform: "none" }}
      >
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 md:mb-3">
          Powerful Features
        </h2>
        <p className="text-xs sm:text-xs md:text-sm text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          NeuroBot offers a comprehensive suite of tools to enhance your writing
          experience
        </p>
      </Box>
      <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 md:gap-6">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            iconColor={feature.iconColor}
          />
        ))}
      </Box>
    </Box>
  );
};

export default FeaturesSection;
