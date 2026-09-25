import { screen } from "@testing-library/react";
import Contact from "features/portfolio/Contact";
import { renderWithProviders } from "test-utils";

import { icons } from "./contactIcons";

describe("Contact", () => {
  it("renders a tile with external link for every contact channel", () => {
    renderWithProviders(<Contact id="contact" />);

    for (const icon of icons) {
      const tile = screen.getByRole("link", { name: new RegExp(icon.name) });
      const isExternal = !icon.link.startsWith("mailto:");
      expect(tile).toHaveAttribute("href", icon.link);
      expect(tile.getAttribute("target")).toBe(isExternal ? "_blank" : null);
      expect(tile.getAttribute("rel")).toBe(
        isExternal ? "noopener noreferrer" : null
      );
    }
  });
});
