import { screen } from "@testing-library/react";
import Navigation from "common/Navigation";
import { menuItems } from "common/Navigation/menuItems";
import { renderWithProviders } from "test-utils";

describe("Navigation", () => {
  it("renders English menu items by default", () => {
    window.innerWidth = 1200;
    renderWithProviders(<Navigation />);

    for (const item of menuItems.English) {
      expect(screen.getByText(item.name)).toBeInTheDocument();
    }
  });

  it("renders Polish menu items with Polish initial language", () => {
    window.innerWidth = 1200;
    renderWithProviders(<Navigation />, { initialLanguage: "Polish" });

    for (const item of menuItems.Polish) {
      expect(screen.getByText(item.name)).toBeInTheDocument();
    }
  });

  it("renders Spanish menu items with Spanish initial language", () => {
    window.innerWidth = 1200;
    renderWithProviders(<Navigation />, { initialLanguage: "Spanish" });

    for (const item of menuItems.Spanish) {
      expect(screen.getByText(item.name)).toBeInTheDocument();
    }
  });

  it("highlights the contact item when contact is visible", () => {
    window.innerWidth = 1200;
    renderWithProviders(<Navigation />, { initialIsContactVisible: true });

    const contactLabel = menuItems.English[menuItems.English.length - 1].name;
    // eslint-disable-next-line testing-library/no-node-access
    const contactLink = screen.getByText(contactLabel).parentElement;

    expect(contactLink).toHaveClass("active");
  });

  it("renders icons instead of text in compact mode", () => {
    window.matchMedia = jest.fn().mockImplementation((query) => ({
      matches: true,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }));

    renderWithProviders(<Navigation />);

    for (const item of menuItems.English) {
      expect(screen.queryByText(item.name)).not.toBeInTheDocument();
    }
  });
});
