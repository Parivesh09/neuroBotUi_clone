import { ThemeProvider, useTheme } from "./context/ThemeContext";
import { IconButton, Tooltip } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Chat from "./pages/Chat";

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <Tooltip
      title={isDarkMode ? "Light Mode" : "Dark Mode"}
      placement="top"
      arrow
      sx={{
        "& .MuiTooltip-tooltip": {
          backgroundColor: "rgb(17,24,39)",
          color: "white",
        },
        "& .MuiTooltip-arrow": {
          color: "rgb(17,24,39)",
        },
      }}
    >
      <IconButton
        onClick={toggleTheme}
        color="inherit"
        sx={{
          position: "fixed",
          bottom: 20,
          right: 20,
          bgcolor: "action.hover",
          boxShadow: 3,
          "&:hover": {
            bgcolor: "action.hover",
          },
        }}
      >
        {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Tooltip>
  );
};

function AppContent() {
  const location = useLocation();
  const showFooter = location.pathname !== "/chat";

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
      {showFooter && <Footer />}
      <ThemeToggle />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;
