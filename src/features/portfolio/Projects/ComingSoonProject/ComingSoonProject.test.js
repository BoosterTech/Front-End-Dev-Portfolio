import { fireEvent, screen } from "@testing-library/react";
import ComingSoonProject from "features/portfolio/Projects/ComingSoonProject";
import { renderWithProviders } from "test-utils";

describe("ComingSoonProject", () => {
  const baseProps = {
    title: "Awesome Project",
    imageURL: "main-image.png",
    description: "<p>An awesome project coming soon.</p>",
  };

  it("renders title, description, and coming soon tag", () => {
    renderWithProviders(<ComingSoonProject {...baseProps} />);

    expect(screen.getByText("Awesome Project")).toBeInTheDocument();
    expect(screen.getByText("Coming Soon")).toBeInTheDocument();
    expect(screen.getByText("An awesome project coming soon.")).toBeInTheDocument();
  });

  it("does not render arrow buttons when there is only one image", () => {
    renderWithProviders(<ComingSoonProject {...baseProps} />);

    expect(screen.queryByLabelText("Previous image")).not.toBeInTheDocument();
    expect(screen.queryByLabelText("Next image")).not.toBeInTheDocument();
  });

  it("renders arrow buttons when there are multiple images", () => {
    renderWithProviders(
      <ComingSoonProject {...baseProps} extraImageURL="extra-image.png" />
    );

    expect(screen.getByLabelText("Previous image")).toBeInTheDocument();
    expect(screen.getByLabelText("Next image")).toBeInTheDocument();
  });

  it("opens fullscreen overlay when image is clicked", () => {
    renderWithProviders(<ComingSoonProject {...baseProps} />);

    const image = screen.getByAltText("Awesome Project screenshot");
    fireEvent.click(image);

    expect(screen.getByAltText("Awesome Project fullscreen")).toBeInTheDocument();
    expect(screen.getByLabelText("Close fullscreen")).toBeInTheDocument();
  });

  it("closes fullscreen when close button is clicked", () => {
    renderWithProviders(<ComingSoonProject {...baseProps} />);

    fireEvent.click(screen.getByAltText("Awesome Project screenshot"));
    fireEvent.click(screen.getByLabelText("Close fullscreen"));

    expect(screen.queryByAltText("Awesome Project fullscreen")).not.toBeInTheDocument();
  });
});
