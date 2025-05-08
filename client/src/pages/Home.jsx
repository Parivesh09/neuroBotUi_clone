import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import SecuritySection from "../components/SecuritySection";
import FAQSection from "../components/FAQSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import LegalassistsWorksSection from "../components/LegalassistsWorksSection";
import UserSaysSection from "../components/UserSaysSection";
import ReadyToTransformSEction from "../components/ReadyToTransformSEction";

const Home = () => {
  return (
    <Box className="min-h-screen bg-white">
      <Header />
      <main className="flex flex-col">
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
    </Box>
  );
};

export default Home; 