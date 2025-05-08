import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useTheme,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqs = [
  {
    question: "What makes NeuroBot different from other AI writing assistants?",
    answer:
      "NeuroBot combines advanced natural language processing with legal domain expertise to provide contextually relevant and accurate assistance for legal professionals.",
  },
  {
    question: "How does NeuroBot ensure the quality of its outputs?",
    answer:
      "Our AI is trained on extensive legal datasets and undergoes regular validation by legal experts to maintain high accuracy and relevance.",
  },
  {
    question: "Can NeuroBot help with academic writing?",
    answer:
      "Yes, NeuroBot is particularly effective for academic legal writing, helping with research, citations, and maintaining academic standards.",
  },
  {
    question: "Is my data secure when using NeuroBot?",
    answer:
      "Absolutely. We implement enterprise-grade security measures including end-to-end encryption and strict access controls to protect your data.",
  },
  {
    question: "How often is NeuroBot updated with new features?",
    answer:
      "We release regular updates to improve functionality and add new features based on user feedback and technological advancements.",
  },
  {
    question: "Can I use NeuroBot for team collaboration?",
    answer:
      "Yes, NeuroBot supports team collaboration with features like shared workspaces and real-time editing capabilities.",
  },
  {
    question: "Does NeuroBot support multiple languages?",
    answer:
      "Currently, NeuroBot primarily supports English, with plans to expand language support in future updates.",
  },
];

const FAQSection = () => {
  const [expanded, setExpanded] = useState(false);
  const theme = useTheme();

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box
      id="faq"
      className="py-10 md:py-14 px-4 md:px-8 lg:px-16 bg-gray-50 dark:bg-gray-900"
      sx={{
        backgroundColor: theme.palette.mode === "dark" ? "#111827" : "#F9FAFB",
        opacity: 1,
      }}
    >
      <Box
        textAlign="center"
        mb={{ xs: 3, md: 5 }}
        sx={{ opacity: 1, transform: "none" }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={{ xs: 2, md: 3 }}
        >
          Frequently Asked Questions
        </Typography>
        <Typography
          className="text-gray-600 dark:text-gray-300"
          sx={{
            fontSize: "0.75rem",
            maxWidth: "40rem",
            mx: "auto",
          }}
        >
          Get answers about NeuroBot's advanced capabilities
        </Typography>
      </Box>

      <Box maxWidth="55rem" mx="auto">
        {faqs.map((faq, index) => (
          <Accordion
            key={index}
            className="bg-gray-50 border border-gray-200 dark:border-gray-700 dark:bg-gray-700 dark:bg-opacity-50"
            expanded={expanded === index}
            onChange={handleChange(index)}
            sx={{
              borderRadius: "0.5rem !important",
              mb: 1.5,
              "&::before": { display: "none" },
              boxShadow: "none",
              opacity: 1,
              transform: "none",
              padding: "0.5rem",
            }}
          >
            <AccordionSummary
              className="text-gray-600 dark:text-gray-300"
              expandIcon={
                <Typography
                  sx={{
                    color: "#10B981",
                    fontSize: { xs: "1.25rem", sm: "1.5rem" },
                    fontWeight: 300,
                    transform: "none",
                  }}
                >
                  +
                </Typography>
              }
              aria-controls={`faq-answer-${index}`}
              id={`faq-header-${index}`}
              sx={{
                px: { xs: 1.5, sm: 2 },
                py: { xs: 0, sm: 0.5 },
              }}
            >
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: { xs: "0.75rem", sm: "0.875rem" },
                }}
              >
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              className="text-gray-600 dark:text-gray-300"
              sx={{
                px: { xs: 3, sm: 4 },
                py: 1,
                pt: 0,
                fontSize: "0.875rem",
              }}
            >
              {faq.answer}
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>

      <Box textAlign="center" mt={{ xs: 6, md: 10 }} sx={{ opacity: 1 }}>
        <Typography
          sx={{
            fontSize: { xs: "0.625rem", sm: "0.75rem" },
            color: theme.palette.mode === "dark" ? "#9CA3AF" : "#6B7280",
            mb: { xs: 2, sm: 3 },
          }}
        >
          Still have questions?
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#10B981",
            fontSize: { xs: "0.75rem", sm: "0.75rem" },
            px: { xs: 3, sm: 4 },
            py: { xs: 1.5, sm: 2 },
            borderRadius: "0.5rem",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#059669",
            },
          }}
        >
          Contact Support
        </Button>
      </Box>
    </Box>
  );
};

export default FAQSection;
