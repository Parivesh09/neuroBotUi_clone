import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Box,
  Container,
  useTheme,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { motion } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { label: "Chat", href: "/chat" },
    { label: "Features", href: "#features" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact Us", href: "#contact" },
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} component="a" href={item.href}>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <header className="w-full px-4 py-[0.8rem] flex justify-between items-center sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700 transition-colors duration-200">
      <Box className="w-full flex justify-between items-center md:hidden">
        <a className="text-lg font-bold text-gray-900 dark:text-white" href="/">
          NeuroBot
        </a>
        <Box className="flex items-center gap-2">
          <Box className="relative">
            <button
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-700 dark:text-gray-300"
              aria-label="User menu"
            >
              <PersonIcon />
            </button>
          </Box>
          <button
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-700 dark:text-gray-300"
            aria-label="Toggle menu"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </button>
        </Box>
      </Box>
      <Box className="hidden md:flex w-full px-4 items-center justify-between">
        <a className="text-xl font-bold text-gray-900 dark:text-white" href="/">
          NeuroBot
        </a>
        <Box className="flex items-center gap-8">
          <nav className="flex items-center gap-6">
            {navItems.map((item) => (
              <Box key={item.label} tabIndex="0">
                <a
                  className="text-gray-700 dark:text-gray-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors px-2 py-1 rounded-md relative group"
                  href={item.href}
                >
                  {item.label}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-emerald-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              </Box>
            ))}
          </nav>
          <Box className="relative">
            <button
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-700 dark:text-gray-300"
              aria-label="User menu"
            >
              <PersonIcon />
            </button>
          </Box>
        </Box>
      </Box>
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 240,
            bgcolor: "background.paper",
          },
        }}
      >
        {drawer}
      </Drawer>
    </header>
  );
};

export default Header;
