import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";

import Navigation from "./common/Navigation";
import { menuItems } from "./common/Navigation/menuItems";
import About from "./features/portfolio/About";
import Contact from "./features/portfolio/Contact";
import Footer from "./features/portfolio/Footer";
import Home from "./features/portfolio/Home";
import Projects from "./features/portfolio/Projects";
import { Main, StarField } from "./GlobalStyles";
import { selectLanguage } from "./slices/languageSlice";
import { themes } from "./themes";

const stars = Array.from({ length: 60 }).map(() => ({
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  delay: `${Math.random() * 3}s`,
  size: Math.random() > 0.7 ? "3px" : "2px",
}));

const App = () => {
  const language = useSelector(selectLanguage);

  return (
    <ThemeProvider theme={themes}>
      <StarField>
        {stars.map((star, i) => (
          <span
            key={i}
            style={{
              left: star.left,
              top: star.top,
              animationDelay: star.delay,
              width: star.size,
              height: star.size,
            }}
          />
        ))}
      </StarField>
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
