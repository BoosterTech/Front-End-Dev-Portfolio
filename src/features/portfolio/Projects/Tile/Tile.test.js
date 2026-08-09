import { screen } from "@testing-library/react";
import Tile from "features/portfolio/Projects/Tile";
import { renderWithProviders } from "test-utils";

describe("Tile", () => {
  it("renders project links with the correct hrefs", () => {
    const props = {
      title: {
        English: "Test Project",
      },
      description: {
        English: "<p>Description</p>",
      },
      imageURL: "test-image.png",
      GitHubPagesURL: "https://example.com",
      GitHubRepoURL: "https://github.com/example/repo",
      GitHubPagesURLTag: {
        English: "Go to the Website",
      },
      GitHubRepoURLTag: {
        English: "Go to the GitHub Repository",
      },
      border: true,
      index: 0,
      available: "web",
    };

    renderWithProviders(<Tile {...props} />);

    const websiteLink = screen.getByRole("link", {
      name: /Go to the Website/i,
    });
    const repoLink = screen.getByRole("link", {
      name: /Go to the GitHub Repository/i,
    });

    expect(websiteLink).toHaveAttribute("href", "https://example.com");
    expect(repoLink).toHaveAttribute("href", "https://github.com/example/repo");
  });
});
