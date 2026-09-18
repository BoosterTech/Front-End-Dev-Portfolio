import { screen } from "@testing-library/react";
import RichText from "common/RichText";
import { renderWithProviders } from "test-utils";

describe("RichText", () => {
  it("renders HTML content", () => {
    renderWithProviders(<RichText html="<p>Hello <strong>world</strong></p>" />);

    expect(screen.getByText("world")).toBeInTheDocument();
    expect(screen.getByText("world").tagName).toBe("STRONG");
  });

  it("applies className", () => {
    const { container } = renderWithProviders(
      <RichText html="<p>Test</p>" className="custom-class" />
    );

    expect(container.firstChild).toHaveClass("custom-class");
  });
});
