import { render, screen } from "@testing-library/react";
import { ContactVisibilityProvider } from "common/ContactVisibilityProvider";
import { LanguageProvider } from "common/LanguageProvider";
import { ThemeModeProvider } from "common/ThemeModeProvider";
import React from "react";
import { ThemeProvider } from "styled-components";

import App from "./App";
import { GlobalStyles } from "./GlobalStyles";
import { themes } from "./themes";

beforeEach(() => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
});

const renderWithProviders = (component) => {
  return render(
    <LanguageProvider>
      <ContactVisibilityProvider>
        <ThemeModeProvider>
          <ThemeProvider theme={themes}>
            <GlobalStyles />
            {component}
          </ThemeProvider>
        </ThemeModeProvider>
      </ContactVisibilityProvider>
    </LanguageProvider>
  );
};

test("renders the welcome label without crashing", () => {
  renderWithProviders(<App />);
  const welcomeLabel = screen.getByText(/welcome to my portfolio/i);
  expect(welcomeLabel).toBeInTheDocument();
});
