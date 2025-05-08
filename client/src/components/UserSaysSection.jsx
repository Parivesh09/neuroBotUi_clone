import { Box } from "@mui/material";
import React from "react";

const TestimonialCard = ({ name, title, image, quote }) => {
  return (
    <Box className="flex-shrink-0 w-64 sm:w-72 mx-2 sm:mx-3 bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-lg shadow-sm hover:scale-105 transition-all duration-300">
      <Box className="flex items-center mb-2 sm:mb-3">
        <img
          alt={name}
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full mr-2 sm:mr-3"
          src={image}
        />
        <Box>
          <h4 className="text-xs sm:text-sm font-semibold">{name}</h4>
          <p className="text-xxs sm:text-xs text-gray-500 dark:text-gray-400">
            {title}
          </p>
        </Box>
      </Box>
      <p className="text-xs text-gray-600 dark:text-gray-300">"{quote}"</p>
    </Box>
  );
};

const UserSaysSection = () => {
  // data/testimonials.js
  const testimonials = [
    {
      name: "Alex Johnson",
      title: "Content Creator",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      quote:
        "NeuroBot has revolutionized my writing process. It's like having an AI assistant that understands exactly what I need.",
    },
    {
      name: "Sarah Williams",
      title: "Marketing Director",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      quote:
        "Our team's productivity increased by 40% after implementing NeuroBot for content creation.",
    },
    {
      name: "Michael Chen",
      title: "Software Engineer",
      image: "https://randomuser.me/api/portraits/men/67.jpg",
      quote:
        "The code documentation feature saves me hours every week. Highly recommended for developers!",
    },
    {
      name: "Emma Davis",
      title: "University Professor",
      image: "https://randomuser.me/api/portraits/women/63.jpg",
      quote:
        "My students' writing quality improved dramatically after I recommended NeuroBot.",
    },
    {
      name: "James Wilson",
      title: "Journalist",
      image: "https://randomuser.me/api/portraits/men/86.jpg",
      quote:
        "The fastest and most accurate writing assistant I've ever used for news articles.",
    },
    {
      name: "Olivia Martinez",
      title: "Blogger",
      image: "https://randomuser.me/api/portraits/women/28.jpg",
      quote:
        "I can now produce twice as much content in half the time thanks to NeuroBot.",
    },
  ];

  return (
    <Box className="py-10 md:py-14 px-4 md:px-8 lg:px-16 overflow-hidden">
      <Box className="text-center mb-6 md:mb-10">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 md:mb-3">
          What Our Users Say
        </h2>
        <p className="text-xs text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Trusted by thousands of users worldwide
        </p>
      </Box>

      <Box className="relative">
        <Box className="absolute left-0 top-0 bottom-0 w-12 sm:w-16 bg-gradient-to-r from-gray-50 dark:from-gray-900 to-transparent z-10"></Box>
        <Box className="absolute right-0 top-0 bottom-0 w-12 sm:w-16 bg-gradient-to-l from-gray-50 dark:from-gray-900 to-transparent z-10"></Box>

        {/* Scrolling Container */}
        <Box className="overflow-hidden">
          <Box className="flex animate-marquee w-max">
            {[...testimonials, ...testimonials].map((t, index) => (
              <TestimonialCard
                key={index}
                name={t.name}
                title={t.title}
                image={t.image}
                quote={t.quote}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default UserSaysSection;
