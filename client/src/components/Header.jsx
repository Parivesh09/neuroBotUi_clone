import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
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
  Menu,
  MenuItem,
} from "@mui/material";
import { motion } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const location = useLocation().pathname;
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };


  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { label: "Chat", href: "/chat" },
    { label: "Features", href: "/" },
    { label: "FAQ", href: "/" },
    { label: "Contact Us", href: "/" },
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} component={Link} to={item.href}>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <header className="w-full px-4 py-[0.8rem] flex justify-between items-center sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700 transition-colors duration-200">
      <Box className="w-full flex justify-between items-center md:hidden">
        <Link className="text-lg font-bold text-gray-900 dark:text-white" to="/">
          NeuroBot
        </Link>
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
        <Link className="text-xl font-bold text-gray-900 dark:text-white" to="/">
          NeuroBot
        </Link>
        <Box className="flex items-center gap-8">
          <nav className="flex items-center gap-6">
            {location === "/chat"? [] : navItems.map((item) => (
              <Box key={item.label} tabIndex="0">
                <Link
                  className="text-gray-700 dark:text-gray-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors px-2 py-1 rounded-md relative group"
                  to={item.href}
                >
                  {item.label}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-emerald-500 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </Box>
            ))}
          </nav>
          <Box className="relative">
            <button
              onClick={handleMenuOpen}
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
      {/* <Menu
        id="user-menu"
        anchorEl={anchorEl}
        open={isMenuOpen}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem onClick={() => alert("Login clicked")}>Login</MenuItem>
        <MenuItem onClick={() => alert("Sign Up clicked")}>Sign Up</MenuItem>
      </Menu> */}
    </header>
  );
};

export default Header;
