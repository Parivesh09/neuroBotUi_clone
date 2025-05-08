import React from "react";
import { Box } from "@mui/material";

const ReadyToTransformSEction = () => {
  return (
    <section
      className="py-10 px-4 md:px-8 bg-emerald-500 text-white text-center"
      style={{ opacity: 1 }}
    >
      <h2
        className="text-xl md:text-2xl font-bold mb-3"
        style={{ opacity: 1, transform: "none" }}
      >
        Ready to Transform Your Writing?
      </h2>
      <p
        className="text-xs md:text-sm mb-4 max-w-2xl mx-auto"
        style={{ opacity: 1, transform: "none" }}
      >
        Join thousands of users who are already enhancing their writing with
        NeuroBot
      </p>
      <Box
        className="inline-block"
        tabindex="0"
        style={{ opacity: 1, transform: "none" }}
      >
        <a
          className="px-4 py-1.5 md:px-6 md:py-2 text-xs md:text-sm bg-white text-emerald-500 rounded-md font-medium"
          href="/sign-up"
          data-discover="true"
        >
          Get Started for Free
        </a>
      </Box>
    </section>
  );
};

export default ReadyToTransformSEction;
