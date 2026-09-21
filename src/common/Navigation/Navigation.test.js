import { screen, within } from "@testing-library/react";
import Navigation from "common/Navigation";
import { menuItems } from "common/Navigation/menuItems";
import { renderWithProviders } from "test-utils";

const desktopMenu = () => within(screen.getByTestId("desktop-menu"));
const mobileMenu = () => within(screen.getByTestId("mobile-menu"));

const mockMatchMedia = (matches) => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
};

describe("Navigation", () => {
  it("renders English menu items by default", () => {
    renderWithProviders(<Navigation />);

    for (const item of menuItems.English) {
      expect(desktopMenu().getByText(item.name)).toBeInTheDocument();
    }
  });

  it("renders Polish menu items with Polish initial language", () => {
    renderWithProviders(<Navigation />, { initialLanguage: "Polish" });

    for (const item of menuItems.Polish) {
      expect(desktopMenu().getByText(item.name)).toBeInTheDocument();
    }
  });

  it("renders Spanish menu items with Spanish initial language", () => {
    renderWithProviders(<Navigation />, { initialLanguage: "Spanish" });

    for (const item of menuItems.Spanish) {
      expect(desktopMenu().getByText(item.name)).toBeInTheDocument();
    }
  });

  it("highlights the contact item when contact is visible", () => {
    renderWithProviders(<Navigation />, { initialIsContactVisible: true });

    const contactSlug = menuItems.English[menuItems.English.length - 1].slug;
    const contactLink = desktopMenu().getByTestId(`nav-link-${contactSlug}`);

    expect(contactLink).toHaveClass("active");
  });

  it("renders icons instead of text in compact mode", () => {
    mockMatchMedia(true);
    renderWithProviders(<Navigation />);

    for (const item of menuItems.English) {
      expect(desktopMenu().queryByText(item.name)).not.toBeInTheDocument();
      expect(mobileMenu().getByText(item.name)).toBeInTheDocument();
    }
  });
});
