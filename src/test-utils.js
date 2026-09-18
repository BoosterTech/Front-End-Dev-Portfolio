import { render } from "@testing-library/react";
import { ContactVisibilityProvider } from "common/ContactVisibilityProvider";
import { LanguageProvider } from "common/LanguageProvider";
import React from "react";
import { ThemeProvider } from "styled-components";
import { themes } from "themes";

const AllProviders = ({
  children,
  initialLanguage,
  initialIsContactVisible,
}) => (
  <LanguageProvider initialLanguage={initialLanguage}>
    <ContactVisibilityProvider initialIsContactVisible={initialIsContactVisible}>
      <ThemeProvider theme={themes}>{children}</ThemeProvider>
    </ContactVisibilityProvider>
  </LanguageProvider>
);

export const renderWithProviders = (
  component,
  { initialLanguage, initialIsContactVisible, ...options } = {}
) =>
  render(component, {
    wrapper: ({ children }) => (
      <AllProviders
        initialLanguage={initialLanguage}
        initialIsContactVisible={initialIsContactVisible}
      >
        {children}
      </AllProviders>
    ),
    ...options,
  });
