import { useState } from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import AboutSection from "./components/AboutSection";
import WorkSection from "./components/WorkSection";
import ExperienceSection from "./components/ExperienceSection";
import NowSection from "./components/NowSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import MouseCursor from "./components/MouseCursor";

export default function Portfolio() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="font-sans bg-neutral-900">
      <MouseCursor />

      <Header navOpen={navOpen} setNavOpen={setNavOpen} />

      <Navigation navOpen={navOpen} setNavOpen={setNavOpen} />

      <main>
        <AboutSection />
        <WorkSection />
        <ExperienceSection />
        <NowSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
