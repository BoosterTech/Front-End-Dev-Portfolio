import { LazyMotion } from "framer-motion";
import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";

import App from "./App";
import { ContactVisibilityProvider } from "./common/ContactVisibilityProvider";
import { LanguageProvider } from "./common/LanguageProvider";
import { GlobalStyles } from "./GlobalStyles";
import { themes } from "./themes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LanguageProvider>
      <ContactVisibilityProvider>
        <ThemeProvider theme={themes}>
          <GlobalStyles />
          <LazyMotion
            features={() => import("framer-motion").then((mod) => mod.domMax)}
          >
            <App />
          </LazyMotion>
        </ThemeProvider>
      </ContactVisibilityProvider>
    </LanguageProvider>
  </React.StrictMode>
);
