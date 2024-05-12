import Navigation from "./common/Navigation";
import Home from "./features/portfolio/Home";
import About from "./features/portfolio/About";
import Contact from "./features/portfolio/Contact";
import Projects from "./features/portfolio/Projects";
import Footer from "./features/portfolio/Footer";
import { Main } from "./GlobalStyles";
import { ScrollWatcher } from "./common/ScrollWatcher/styled";
import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import { selectLanguage } from "./Redux/languageSlice";
import { themes } from "./themes";

const App = () => {
  const languageState = useSelector(selectLanguage);

  return (
    <ThemeProvider theme={themes[languageState]}>
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
