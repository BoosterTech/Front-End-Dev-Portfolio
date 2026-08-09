import { render } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import store from "slices/store";
import { ThemeProvider } from "styled-components";
import { themes } from "themes";

export const renderWithProviders = (component) =>
  render(
    <Provider store={store}>
      <ThemeProvider theme={themes}>{component}</ThemeProvider>
    </Provider>
  );
