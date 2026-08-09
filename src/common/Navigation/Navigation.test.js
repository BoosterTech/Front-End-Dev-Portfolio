import { act, screen } from "@testing-library/react";
import Navigation from "common/Navigation";
import { menuItems } from "common/Navigation/menuItems";
import { setContactVisibility } from "slices/generalSlice";
import { setLanguage } from "slices/languageSlice";
import store from "slices/store";
import { renderWithProviders } from "test-utils";

beforeEach(() => {
  store.dispatch(setLanguage("English"));
});

describe("Navigation", () => {
  it("renders English menu items by default", () => {
    window.innerWidth = 1200;
    renderWithProviders(<Navigation />);

    for (const item of menuItems.English) {
      expect(screen.getByText(item.name)).toBeInTheDocument();
    }
  });

  it("renders Polish menu items after switching language", () => {
    window.innerWidth = 1200;
    renderWithProviders(<Navigation />);

    act(() => {
      store.dispatch(setLanguage("Polish"));
    });

    for (const item of menuItems.Polish) {
      expect(screen.getByText(item.name)).toBeInTheDocument();
    }
  });

  it("renders Spanish menu items after switching language", () => {
    window.innerWidth = 1200;
    renderWithProviders(<Navigation />);

    act(() => {
      store.dispatch(setLanguage("Spanish"));
    });

    for (const item of menuItems.Spanish) {
      expect(screen.getByText(item.name)).toBeInTheDocument();
    }
  });

  it("highlights the contact item when contact is visible", () => {
    window.innerWidth = 1200;
    renderWithProviders(<Navigation />);

    const contactLabel = menuItems.English[menuItems.English.length - 1].name;
    // eslint-disable-next-line testing-library/no-node-access
    const contactLink = screen.getByText(contactLabel).parentElement;

    expect(contactLink).not.toHaveClass("active");

    act(() => {
      store.dispatch(setContactVisibility(true));
    });

    expect(contactLink).toHaveClass("active");
  });
});
