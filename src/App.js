import { useLanguage } from "common/LanguageProvider";
import { useEffect } from "react";

import LaunchIntro from "./common/LaunchIntro";
import Main from "./common/Main";
import Navigation from "./common/Navigation";
import { menuItems } from "./common/Navigation/menuItems";
import StarField from "./common/StarField";
import About from "./features/portfolio/About";
import Contact from "./features/portfolio/Contact";
import Footer from "./features/portfolio/Footer";
import Home from "./features/portfolio/Home";
import Projects from "./features/portfolio/Projects";

const App = () => {
  const { language } = useLanguage();

  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (!id) return undefined;
    const scroll = () => document.getElementById(id)?.scrollIntoView();
    if (document.readyState === "complete") scroll();
    else window.addEventListener("load", scroll, { once: true });
    return () => window.removeEventListener("load", scroll);
  }, []);

  return (
    <>
      <LaunchIntro />
      <StarField />
      <Navigation />
      <Main>
        <Home id={menuItems[language][0].slug} />
        <About id={menuItems[language][1].slug} />
        <Projects id={menuItems[language][2].slug} />
        <Contact id={menuItems[language][3].slug} />
      </Main>
      <Footer />
    </>
  );
};

export default App;
