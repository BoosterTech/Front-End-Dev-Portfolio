import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";

import Main from "./common/Main";
import Navigation from "./common/Navigation";
import { menuItems } from "./common/Navigation/menuItems";
import StarField from "./common/StarField";
import About from "./features/portfolio/About";
import Contact from "./features/portfolio/Contact";
import Footer from "./features/portfolio/Footer";
import Home from "./features/portfolio/Home";
import Projects from "./features/portfolio/Projects";
import { selectLanguage } from "./slices/languageSlice";
import { themes } from "./themes";

const App = () => {
  const language = useSelector(selectLanguage);

  return (
    <ThemeProvider theme={themes}>
      <StarField />
      <Navigation />
      <Main>
        <Home id={menuItems[language][0].name.toLowerCase()} />
        <About id={menuItems[language][1].name.toLowerCase()} />
        <Projects id={menuItems[language][2].name.toLowerCase()} />
        <Contact id={menuItems[language][3].name.toLowerCase()} />
      </Main>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
