import { render, screen } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import App from "./App";
import store from "./slices/store";
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
    <Provider store={store}>
      <ThemeProvider theme={themes}>{component}</ThemeProvider>
    </Provider>
  );
};

test("renders the welcome label without crashing", () => {
  renderWithProviders(<App />);
  const welcomeLabel = screen.getByText(/welcome to my portfolio/i);
  expect(welcomeLabel).toBeInTheDocument();
});
