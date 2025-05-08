import { ThemeProvider, useTheme } from "./context/ThemeContext";
import { IconButton, Tooltip } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import SecuritySection from "./components/SecuritySection";
import FAQSection from "./components/FAQSection";
import ContactSection from "./components/ContactSection";
import LegalassistsWorksSection from "./components/LegalassistsWorksSection";
import UserSaysSection from "./components/UserSaysSection";
import ReadyToTransformSEction from "./components/ReadyToTransformSEction";
import Footer from "./components/Footer";

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

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
        <Header />
        <main>
          <HeroSection />
          <FeaturesSection />
          <SecuritySection />
          <LegalassistsWorksSection />
          <UserSaysSection />
          <FAQSection />
          <ContactSection />
          <ReadyToTransformSEction />
          <Footer />
        </main>
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
}

export default App;
