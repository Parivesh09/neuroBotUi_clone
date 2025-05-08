import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";

const ContactSection = () => {
  return (
    <Box className="py-12 md:py-16 px-4 md:px-8 lg:px-16">
      <Box
        className="text-center mb-8 md:mb-12"
        sx={{ opacity: 1, transform: "none" }}
      >
        <Typography
          variant="h2"
          className="text-2xl md:text-3xl font-bold mb-3 md:mb-4"
        >
          Get In Touch
        </Typography>
        <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Have questions about NeuroBot? Our team is here to help you.
        </p>
      </Box>
      <Box className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
        <Box className="space-y-4 md:space-y-6">
          <Typography
            variant="h3"
            className="text-lg md:text-xl font-semibold mb-4 md:mb-6"
            sx={{ opacity: 1 }}
          >
            Contact Information
          </Typography>
          <Box
            className="flex items-start p-4 md:p-5 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow"
            sx={{ opacity: 1, transform: "none" }}
          >
            <Box className="p-2 md:p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-full mr-3 md:mr-4 text-emerald-600 dark:text-emerald-400">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="w-5 h-5 md:w-6 md:h-6 text-emerald-500"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </Box>
            <Box>
              <h4 className="font-medium text-base md:text-lg mb-1">Email</h4>
              <p className="text-emerald-600 dark:text-emerald-400 text-sm md:text-base font-medium">
                support@neurobot.ai
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-xs md:text-sm mt-1">
                Our friendly team is here to help.
              </p>
            </Box>
          </Box>
          <Box
            className="flex items-start p-4 md:p-5 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow"
            sx={{ opacity: 1, transform: "none" }}
          >
            <Box className="p-2 md:p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-full mr-3 md:mr-4 text-emerald-600 dark:text-emerald-400">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="w-5 h-5 md:w-6 md:h-6 text-emerald-500"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </Box>
            <Box>
              <h4 className="font-medium text-base md:text-lg mb-1">Office</h4>
              <p className="text-emerald-600 dark:text-emerald-400 text-sm md:text-base font-medium">
                123 Innovation Street, San Francisco, CA 94107
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-xs md:text-sm mt-1">
                Come say hello at our headquarters.
              </p>
            </Box>
          </Box>
          <Box
            className="flex items-start p-4 md:p-5 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow"
            sx={{ opacity: 1, transform: "none" }}
          >
            <Box className="p-2 md:p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-full mr-3 md:mr-4 text-emerald-600 dark:text-emerald-400">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="w-5 h-5 md:w-6 md:h-6 text-emerald-500"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </Box>
            <Box>
              <h4 className="font-medium text-base md:text-lg mb-1">Phone</h4>
              <p className="text-emerald-600 dark:text-emerald-400 text-sm md:text-base font-medium">
                +1 (555) 123-4567
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-xs md:text-sm mt-1">
                Mon-Fri from 8am to 5pm PST.
              </p>
            </Box>
          </Box>
          <Box
            className="mt-6 md:mt-8 p-4 md:p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm"
            sx={{ opacity: 1, transform: "translateY(20px)" }}
          >
            <h4 className="font-medium text-base md:text-lg mb-2 md:mb-3">
              Business Hours
            </h4>
            <ul className="space-y-1 md:space-y-2 text-xs md:text-sm text-gray-600 dark:text-gray-300">
              <li className="flex justify-between">
                <span>Monday - Friday:</span>
                <span>9:00 AM - 5:00 PM PST</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span>10:00 AM - 2:00 PM PST</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span>Closed</span>
              </li>
            </ul>
          </Box>
        </Box>
        <Box
          className="bg-white dark:bg-gray-800 p-4 md:p-6 lg:p-8 rounded-lg shadow-sm"
          sx={{ opacity: 1, transform: "none" }}
        >
          <Typography
            variant="h5"
            className="text-lg md:text-xl font-semibold mb-4 md:mb-6"
          >
            Send us a message
          </Typography>
          <form className="space-y-3 md:space-y-5">
            <Box>
              <label
                for="name"
                className="block text-xs md:text-sm font-medium mb-1 text-gray-700 dark:text-gray-300"
              >
                Name
              </label>
              <input
                id="name"
                required=""
                className="w-full p-2 md:p-3 text-sm md:text-base border border-gray-300 dark:border-gray-600 rounded-lg bg-transparent focus:outline-none dark:text-white"
                placeholder="Your name"
                type="text"
                value=""
                name="name"
              />
            </Box>
            <Box>
              <label
                for="email"
                className="block text-xs md:text-sm font-medium mb-1 text-gray-700 dark:text-gray-300"
              >
                Email
              </label>
              <input
                id="email"
                required=""
                className="w-full p-2 md:p-3 text-sm md:text-base border border-gray-300 dark:border-gray-600 rounded-lg bg-transparent focus:outline-none dark:text-white"
                placeholder="your@email.com"
                type="email"
                value=""
                name="email"
              />
            </Box>
            <Box>
              <label
                for="subject"
                className="block text-xs md:text-sm font-medium mb-1 text-gray-700 dark:text-gray-300"
              >
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                className="w-full p-2 md:p-3 text-sm md:text-base border border-gray-300 dark:border-gray-600 rounded-lg bg-transparent focus:outline-none dark:text-white"
              >
                <option className="dark:bg-gray-700" value="General Inquiry">
                  General Inquiry
                </option>
                <option className="dark:bg-gray-700" value="Technical Support">
                  Technical Support
                </option>
                <option className="dark:bg-gray-700" value="Feature Request">
                  Feature Request
                </option>
                <option className="dark:bg-gray-700" value="Others">
                  Others
                </option>
              </select>
            </Box>
            <Box>
              <label
                for="message"
                className="block text-xs md:text-sm font-medium mb-1 text-gray-700 dark:text-gray-300"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required=""
                className="w-full p-2 md:p-3 text-sm md:text-base border border-gray-300 dark:border-gray-600 rounded-lg bg-transparent focus:outline-none dark:text-white"
                placeholder="How can we help you?"
              ></textarea>
            </Box>
            <button
              type="submit"
              className="w-full py-2 md:py-3 px-4 md:px-6 text-sm md:text-base bg-emerald-500 text-white rounded-lg font-medium transition-colors disabled:bg-emerald-400"
              tabindex="0"
              sx={{ transform: "none" }}
            >
              Send Message
            </button>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactSection;
