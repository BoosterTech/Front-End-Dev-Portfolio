import Navigation from "./common/Navigation";
import Home from "./features/portfolio/Home";
import About from "./features/portfolio/About";
import Contact from "./features/portfolio/Contact";
import Projects from "./features/portfolio/Projects";
import Footer from "./features/portfolio/Footer";
import { Main } from "./GlobalStyles";
import { ScrollWatcher } from "./common/ScrollWatcher/styled";
import { useSelector } from "react-redux";
import { selectIsLanguageEnglish } from "./common/languageSlice";
import { ThemeProvider } from "styled-components";
import { themeEnglish, themePolish } from "./themes";

const App = () => {
  const isLanguageEnglish = useSelector(selectIsLanguageEnglish);

  return (
    <ThemeProvider theme={isLanguageEnglish ? themeEnglish : themePolish}>
      <Navigation />
      <ScrollWatcher />
      <Main>
        <Home />
        <About />
        <Projects />
        <Contact />
      </Main>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
