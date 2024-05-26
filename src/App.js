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
import { menuItems } from "./common/Navigation/menuItems";

const App = () => {
  const language = useSelector(selectLanguage);

  return (
    <ThemeProvider theme={themes}>
      <Navigation />
      <ScrollWatcher />
      <Main>
        <Home id={menuItems[language][0].toLowerCase()} />
        <About id={menuItems[language][1].toLowerCase()} />
        <Projects id={menuItems[language][2].toLowerCase()} />
        <Contact id={menuItems[language][3].toLowerCase()} />
      </Main>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
