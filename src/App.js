import Navigation from "./common/Navigation";
import Home from "./features/portfolio/Home";
import About from "./features/portfolio/About";
import Contact from "./features/portfolio/Contact";
import Projects from "./features/portfolio/Projects";
import Footer from "./features/portfolio/Footer";
import { Main } from "./GlobalStyles";
import { ScrollWatcher } from "./features/portfolio/ScrollWatcher/styled";

const App = () => {
  return (
    <>
      <Navigation />
      <ScrollWatcher/>
      <Main>
        <Home />
        <About />
        <Projects />
        <Contact />
      </Main>
      <Footer />
    </>
  );
};

export default App;
