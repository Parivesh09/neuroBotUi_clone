import React from "react";
import ChatSidebarHeader from "./ChatSidebarHeader";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HistoryIcon from "@mui/icons-material/History";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { useTheme } from "../context/ThemeContext";

const Section = ({ title, icon, items, isdefaultExpanded }) => {
  const isDarkMode = useTheme().isDarkMode;

  return (
    <Accordion
      sx={{
        backgroundColor: "transparent !important",
      }}
      defaultExpanded={isdefaultExpanded}
      elevation={0}
    >
      <AccordionSummary
        expandIcon={
          <ExpandMoreIcon sx={{ color: isDarkMode ? "white" : "black" }} />
        }
      >
        <ListItemIcon sx={{ color: isDarkMode ? "white" : "black" }}>
          {icon}
        </ListItemIcon>
        <Typography
          variant="subtitle1"
          sx={{ color: isDarkMode ? "white" : "black" }}
        >
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ padding: 0 }}>
        <List dense>
          {Object.entries(items).map(([group, entries]) => (
            <Box key={group}>
              {group && (
                <Typography
                  variant="caption"
                  color="textSecondary"
                  sx={{
                    px: 1,
                    fontFamily: "Merriweather",
                    fontSize: "12px",
                    color: isDarkMode ? "white" : "black",
                  }}
                >
                  {group}
                </Typography>
              )}
              {entries.map((text, i) => (
                <ListItem
                  key={i}
                  button
                  sx={{
                    borderRadius: 1,
                    px: 2,
                    py: 1,
                    cursor: "pointer",
                    "&:hover": {
                      backgroundColor: isDarkMode
                        ? "rgba(255, 255, 255, 0.1)"
                        : "rgba(0, 0, 0, 0.1)",
                    },
                    color: isDarkMode ? "white" : "black",
                  }}
                >
                  <ListItemText
                    primary={
                      <div className="flex items-center gap-2">
                        {icon}
                        {text}
                      </div>
                    }
                    sx={{
                      justifyContent: "start",
                      alignItems: "center",
                      paddingLeft: 2,
                      display: "flex",
                      fontFamily: "Merriweather",
                      fontSize: "12px",
                    }}
                    primaryTypographyProps={{
                      noWrap: true,
                    }}
                  />
                </ListItem>
              ))}
            </Box>
          ))}
        </List>
      </AccordionDetails>
    </Accordion>
  );
};

const ChatSidebar = () => {
  return (
    <>
      <Box className="w-full h-[calc(100vh-80px)] overflow-y-auto scrollbar-hide bg-light-sidebar dark:bg-dark-sidebar border-r border-gray-200 dark:border-gray-700 flex flex-col">
        <ChatSidebarHeader />
        <Box class="flex-1 h-full max-h-[calc(100vh-150px)] px-2 py-2 overflow-y-auto [&::-webkit-scrollbar]:w-0">
          <Section
            isdefaultExpanded={true}
            title="History"
            icon={<HistoryIcon />}
            items={{
              Today: ["Dark Light Mode Toggle"],
              Yesterday: ["Black book project summary"],
              "Previous 7 Days": [
                "Event Details Examples",
                "Lecture course field missing",
                "Next.js Course Description",
                "React Login and Product API",
              ],
              "Previous 30 Days": ["Fixing TypeScript Undefined Error"],
            }}
          />

          <Section
            title="Recent Uploads"
            icon={<CloudUploadIcon />}
            items={{
              "": [
                "Project Proposal.pdf",
                "Research Data.xlsx",
                "Meeting Notes.docx",
              ],
            }}
          />

          <Section
            title="In Progress"
            icon={<WbSunnyIcon />}
            items={{
              "": ["Thesis Draft", "Code Review"],
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default ChatSidebar;
