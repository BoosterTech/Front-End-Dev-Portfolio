import { fireEvent, screen } from "@testing-library/react";
import CarouselSlide from "features/portfolio/Projects/CarouselSlide";
import { renderWithProviders } from "test-utils";

describe("CarouselSlide", () => {
  const baseProject = {
    title: {
      English: "Test Project",
      Polish: "Test Project",
      Spanish: "Test Project",
    },
    imageURL: "test-image.png",
    GitHubPagesURL: "https://example.com",
    GitHubRepoURL: "https://github.com/example/repo",
    GitHubPagesURLTag: {
      English: "Live Demo",
      Polish: "Live Demo",
      Spanish: "Live Demo",
    },
    GitHubRepoURLTag: {
      English: "GitHub",
      Polish: "GitHub",
      Spanish: "GitHub",
    },
    technologies: ["React", "CSS"],
  };

  it("renders project image and title", () => {
    renderWithProviders(
      <CarouselSlide
        project={baseProject}
        isActive={true}
        position="center"
        onClick={() => {}}
      />
    );

    expect(
      screen.getByAltText("Test Project project screenshot")
    ).toBeInTheDocument();
    expect(screen.getByLabelText("Test Project")).toBeInTheDocument();
  });

  it("renders technology badges", () => {
    renderWithProviders(
      <CarouselSlide
        project={baseProject}
        isActive={true}
        position="center"
        onClick={() => {}}
      />
    );

    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("CSS")).toBeInTheDocument();
  });

  it("renders CTA links with correct hrefs", () => {
    renderWithProviders(
      <CarouselSlide
        project={baseProject}
        isActive={true}
        position="center"
        onClick={() => {}}
      />
    );

    expect(screen.getByRole("link", { name: "Live Demo" })).toHaveAttribute(
      "href",
      "https://example.com"
    );
    expect(screen.getByRole("link", { name: "GitHub" })).toHaveAttribute(
      "href",
      "https://github.com/example/repo"
    );
  });

  it("renders coming soon badge when variant is set", () => {
    renderWithProviders(
      <CarouselSlide
        project={{ ...baseProject, variant: "comingSoon" }}
        isActive={true}
        position="center"
        onClick={() => {}}
      />
    );

    expect(screen.getByText("Coming Soon")).toBeInTheDocument();
  });

  it("calls onExpand when active slide is clicked", () => {
    const onExpand = jest.fn();
    renderWithProviders(
      <CarouselSlide
        project={baseProject}
        isActive={true}
        position="center"
        onClick={() => {}}
        onExpand={onExpand}
      />
    );

    fireEvent.click(screen.getByLabelText("Test Project"));
    expect(onExpand).toHaveBeenCalledTimes(1);
  });

  it("calls onClick when inactive slide is clicked", () => {
    const onClick = jest.fn();
    renderWithProviders(
      <CarouselSlide
        project={baseProject}
        isActive={false}
        position="left"
        onClick={onClick}
        onExpand={() => {}}
      />
    );

    fireEvent.click(screen.getByLabelText("Test Project"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("calls onExpand when Enter key is pressed on active slide", () => {
    const onExpand = jest.fn();
    renderWithProviders(
      <CarouselSlide
        project={baseProject}
        isActive={true}
        position="center"
        onClick={() => {}}
        onExpand={onExpand}
      />
    );

    fireEvent.keyDown(screen.getByLabelText("Test Project"), {
      key: "Enter",
    });
    expect(onExpand).toHaveBeenCalledTimes(1);
  });

  it("calls onExpand when Space key is pressed on active slide", () => {
    const onExpand = jest.fn();
    renderWithProviders(
      <CarouselSlide
        project={baseProject}
        isActive={true}
        position="center"
        onClick={() => {}}
        onExpand={onExpand}
      />
    );

    fireEvent.keyDown(screen.getByLabelText("Test Project"), {
      key: " ",
    });
    expect(onExpand).toHaveBeenCalledTimes(1);
  });

  it("does not call onClick or onExpand for other keys", () => {
    const onClick = jest.fn();
    const onExpand = jest.fn();
    renderWithProviders(
      <CarouselSlide
        project={baseProject}
        isActive={true}
        position="center"
        onClick={onClick}
        onExpand={onExpand}
      />
    );

    fireEvent.keyDown(screen.getByLabelText("Test Project"), {
      key: "Escape",
    });
    expect(onClick).not.toHaveBeenCalled();
    expect(onExpand).not.toHaveBeenCalled();
  });
});
