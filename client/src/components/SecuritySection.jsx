import React from "react";
import { Box, Typography, Grid, Paper, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import SecurityIcon from "@mui/icons-material/Security";
import LockIcon from "@mui/icons-material/Lock";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ShieldIcon from "@mui/icons-material/Shield";

const securityFeatures = [
  {
    icon: (
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 448 512"
        className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"></path>
      </svg>
    ),
    title: "End-to-End Encryption",
    description:
      "Your data is encrypted at rest and in transit using industry-standard protocols.",
  },
  {
    icon: (
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 512 512"
        className="w-5 h-5 sm:w-6 sm:h-6 text-purple-500"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M256.438 25.78l-41.75 127.19 41.625 30 42.093-30.22-41.97-126.97zm-90.157 91.064c-16.33 0-29.374 13.043-29.374 29.375 0 16.33 13.044 29.374 29.375 29.374 16.333 0 29.345-13.044 29.345-29.375 0-16.333-13.012-29.376-29.344-29.376zm179.97.375c-16.332 0-29.375 13.042-29.375 29.374 0 16.33 13.043 29.344 29.375 29.344s29.375-13.013 29.375-29.344c0-16.332-13.043-29.375-29.375-29.375zM207.5 170.843c-5.795 9.65-14.895 17.124-25.688 20.844L197.595 241l2.062 6.438-5.47 3.968-49.06 35.813c5.772 7.404 9.438 16.525 10.06 26.436l59.658.28 6.75.033 2.094 6.405L243 379.188c4.37-1.32 8.996-2.032 13.78-2.032 4.652 0 9.145.69 13.408 1.938l19.5-58.97 2.093-6.405 6.75-.033 56.72-.156c.83-10.39 5.006-19.848 11.438-27.342l-48.032-35.22L313.22 247l2.092-6.406 15.625-48.5c-10.945-3.71-20.17-11.247-26-21.03l-43.187 31.03-5.47 3.906-5.467-3.906-43.313-31.25zm-44.375 23.78l-140.188.657 108.157 79 46.625-34-14.595-45.655zm186.53.25l-14.5 45.032 46.876 34.344c.24-.117.48-.23.72-.344l107.188-78.625-140.282-.405zm-242.405 92.44c-16.332-.002-29.375 13.042-29.375 29.373 0 16.332 13.043 29.375 29.375 29.375s29.375-13.043 29.375-29.375c0-16.33-13.043-29.375-29.375-29.375zm295.875.686c-16.332 0-29.375 13.043-29.375 29.375s13.043 29.375 29.375 29.375 29.375-13.043 29.375-29.375S419.457 288 403.125 288zm-46.594 44.22l-51.217.124-18.344 55.47 113.78 81.78-44.22-137.375zm-200.5.124l-43.905 137.25 113.906-82.188-18-54.812-52-.25zm100.75 63.5c-16.33 0-29.374 13.043-29.374 29.375 0 16.33 13.044 29.374 29.375 29.374 16.333 0 29.376-13.044 29.376-29.375 0-16.333-13.043-29.376-29.375-29.376z"></path>
      </svg>
    ),
    title: "Secure Authentication",
    description:
      "Multi-factor authentication and role-based access control for enhanced security.",
  },
  {
    icon: (
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 640 512"
        className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-500"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M622.3 271.1l-115.2-45c-4.1-1.6-12.6-3.7-22.2 0l-115.2 45c-10.7 4.2-17.7 14-17.7 24.9 0 111.6 68.7 188.8 132.9 213.9 9.6 3.7 18 1.6 22.2 0C558.4 489.9 640 420.5 640 296c0-10.9-7-20.7-17.7-24.9zM496 462.4V273.3l95.5 37.3c-5.6 87.1-60.9 135.4-95.5 151.8zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm96 40c0-2.5.8-4.8 1.1-7.2-2.5-.1-4.9-.8-7.5-.8h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c6.8 0 13.3-1.5 19.2-4-54-42.9-99.2-116.7-99.2-212z"></path>
      </svg>
    ),
    title: "Compliance Certified",
    description:
      "Meets industry standards including GDPR, HIPAA, and SOC 2 compliance.",
  },
  {
    icon: (
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 512 512"
        className="w-5 h-5 sm:w-6 sm:h-6 text-amber-500"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M504 255.531c.253 136.64-111.18 248.372-247.82 248.468-59.015.042-113.223-20.53-155.822-54.911-11.077-8.94-11.905-25.541-1.839-35.607l11.267-11.267c8.609-8.609 22.353-9.551 31.891-1.984C173.062 425.135 212.781 440 256 440c101.705 0 184-82.311 184-184 0-101.705-82.311-184-184-184-48.814 0-93.149 18.969-126.068 49.932l50.754 50.754c10.08 10.08 2.941 27.314-11.313 27.314H24c-8.837 0-16-7.163-16-16V38.627c0-14.254 17.234-21.393 27.314-11.314l49.372 49.372C129.209 34.136 189.552 8 256 8c136.81 0 247.747 110.78 248 247.531zm-180.912 78.784l9.823-12.63c8.138-10.463 6.253-25.542-4.21-33.679L288 256.349V152c0-13.255-10.745-24-24-24h-16c-13.255 0-24 10.745-24 24v135.651l65.409 50.874c10.463 8.137 25.541 6.253 33.679-4.21z"></path>
      </svg>
    ),
    title: "Regular Audits",
    description:
      "Continuous security monitoring and regular penetration testing.",
  },
];

const complianceData = [
  {
    label: "SOC2",
    icon: (
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 512 512"
        className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z"></path>
      </svg>
    ),
  },
  {
    label: "GDPR",
    icon: (
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 640 512"
        className="w-5 h-5 sm:w-6 sm:h-6 text-purple-500"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M224 256A128 128 0 1 0 96 128a128 128 0 0 0 128 128zm96 64a63.08 63.08 0 0 1 8.1-30.5c-4.8-.5-9.5-1.5-14.5-1.5h-16.7a174.08 174.08 0 0 1-145.8 0h-16.7A134.43 134.43 0 0 0 0 422.4V464a48 48 0 0 0 48 48h280.9a63.54 63.54 0 0 1-8.9-32zm288-32h-32v-80a80 80 0 0 0-160 0v80h-32a32 32 0 0 0-32 32v160a32 32 0 0 0 32 32h224a32 32 0 0 0 32-32V320a32 32 0 0 0-32-32zM496 432a32 32 0 1 1 32-32 32 32 0 0 1-32 32zm32-144h-64v-80a32 32 0 0 1 64 0z"></path>
      </svg>
    ),
  },
  {
    label: "HIPAA",
    icon: (
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 448 512"
        className="w-5 h-5 sm:w-6 sm:h-6 text-red-500"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M448 492v20H0v-20c0-6.627 5.373-12 12-12h20V120c0-13.255 10.745-24 24-24h88V24c0-13.255 10.745-24 24-24h112c13.255 0 24 10.745 24 24v72h88c13.255 0 24 10.745 24 24v360h20c6.627 0 12 5.373 12 12zM308 192h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12zm-168 64h40c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12zm104 128h-40c-6.627 0-12 5.373-12 12v84h64v-84c0-6.627-5.373-12-12-12zm64-96h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12zm-116 12c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12v-40zM182 96h26v26a6 6 0 0 0 6 6h20a6 6 0 0 0 6-6V96h26a6 6 0 0 0 6-6V70a6 6 0 0 0-6-6h-26V38a6 6 0 0 0-6-6h-20a6 6 0 0 0-6 6v26h-26a6 6 0 0 0-6 6v20a6 6 0 0 0 6 6z"></path>
      </svg>
    ),
  },
  {
    label: "ISO 27001",
    icon: (
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 448 512"
        className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-500"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M224 0C100.3 0 0 100.3 0 224s100.3 224 224 224 224-100.3 224-224S347.7 0 224 0zm0 384c-88.4 0-160-71.6-160-160S135.6 64 224 64s160 71.6 160 160-71.6 160-160 160zm80-192
        c0 13.3-10.7 24-24 24s-24-10.7-24-24V96c0-13.3 10.7-24 24-24s24 10.7 24 24v96zm0 128c0 13.3-10.7 24-24 24s-24-10.7-24-24v-96c0-13.3 10.7-24 24-24s24 10.7 24 24v96z"></path>
      </svg>
    ),    
  },
  {
    label: "CMMC",
    icon: (
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 640 512"
        className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M320 0c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32zm0 128c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32s32-14.3 32-32V160c0-17.7-14.3-32-32-32zm0 128c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32s32-14.3 32-32v-64c0-17.7-14.3-32-32-32zm0 128c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32s32-14.3 32-32v-64c0-17.7-14.3-32-32-32z"></path>
      </svg>
    ),
  }
];

const ComplianceBadge = ({ icon, title }) => {
  return (
    <Box
      className="bg-white dark:bg-gray-800 h-10 md:h-12 w-20 md:w-28 flex flex-col items-center justify-center rounded-md shadow-sm px-2 py-1 md:px-3 md:py-2 border border-gray-100 dark:border-gray-700"
      tabIndex="0"
    >
      <Box className="text-base md:text-lg mb-0.5">
        {icon}
      </Box>
      <Box className="text-xxs sm:text-xs font-medium">{title}</Box>
    </Box>
  );
};

const SecurityFeatureCard = ({ icon, title, description }) => {
  const theme = useTheme();

  return (
    <Box
      className="bg-white dark:bg-gray-800 p-3 md:p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-start"
      style={{ opacity: 1, transform: "none" }}
    >
      <Box className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full mr-3 flex-shrink-0">
        {icon}
      </Box>
      <Box>
        <Typography className="font-semibold text-sm sm:text-base mb-1 text-gray-900 dark:text-white">
          {title}
        </Typography>
        <p className="text-xs text-gray-600 dark:text-gray-300">
          {description}
        </p>
      </Box>
    </Box>
  );
};

const SecuritySection = () => {
  return (
    <section className="py-8 md:py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="text-center mb-6 md:mb-10"
          style={{ opacity: 1, transform: "none" }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 md:mb-3 text-gray-900 dark:text-white">
            Legal-Grade Security &amp; Trust
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Protecting sensitive client data with enterprise-grade security
            measures designed specifically for legal professionals.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
          <div
            className="relative rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700"
            style={{ opacity: 1, transform: "none" }}
          >
            <img
              alt="A lawyer reviewing secure digital documents on a tablet with lock icon overlay"
              className="w-full h-auto object-cover"
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=2070&amp;q=80"
              style={{ minHeight: "280px" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end p-3 md:p-4">
              <p className="text-white text-xxs sm:text-xs font-medium">
                All documents protected with bank-level security and
                attorney-client privilege safeguards
              </p>
            </div>
          </div>
          <div className="space-y-3 md:space-y-4">
            {securityFeatures.map((feature, index) => (
              <SecurityFeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
        <div
          className="mt-6 md:mt-12 text-center"
          style={{ opacity: 1, transform: "none" }}
        >
          <h4 className="text-xxs sm:text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3 md:mb-4">
            Trusted Compliance Certifications
          </h4>
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {complianceData.map((item, index) => (
              <ComplianceBadge
                key={index}
                icon={item.icon}
                title={item.label}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
