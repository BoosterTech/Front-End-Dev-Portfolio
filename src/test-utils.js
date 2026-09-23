import { render } from "@testing-library/react";
import { ContactVisibilityProvider } from "common/ContactVisibilityProvider";
import { LanguageProvider } from "common/LanguageProvider";
import { ThemeModeProvider } from "common/ThemeModeProvider";
import React from "react";
import { ThemeProvider } from "styled-components";
import { themes } from "themes";

const AllProviders = ({
  children,
  initialLanguage,
  initialIsContactVisible,
  initialIsDark,
}) => (
  <LanguageProvider initialLanguage={initialLanguage}>
    <ContactVisibilityProvider
      initialIsContactVisible={initialIsContactVisible}
    >
      <ThemeModeProvider initialIsDark={initialIsDark}>
        <ThemeProvider theme={themes}>{children}</ThemeProvider>
      </ThemeModeProvider>
    </ContactVisibilityProvider>
  </LanguageProvider>
);

export const renderWithProviders = (
  component,
  { initialLanguage, initialIsContactVisible, initialIsDark, ...options } = {}
) =>
  render(component, {
    wrapper: ({ children }) => (
      <AllProviders
        initialLanguage={initialLanguage}
        initialIsContactVisible={initialIsContactVisible}
        initialIsDark={initialIsDark}
      >
        {children}
      </AllProviders>
    ),
    ...options,
  });
