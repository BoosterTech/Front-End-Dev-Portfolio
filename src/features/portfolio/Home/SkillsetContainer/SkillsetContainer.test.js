import { screen } from "@testing-library/react";
import { SkillsetContainer, SkillsetList } from "features/portfolio/Home/SkillsetContainer";
import { renderWithProviders } from "test-utils";

describe("SkillsetContainer", () => {
  it("renders both skillset headers", () => {
    renderWithProviders(<SkillsetContainer />);

    expect(screen.getByText(/🛠️/)).toBeInTheDocument();
    expect(screen.getByText(/🚀/)).toBeInTheDocument();
  });
});

describe("SkillsetList", () => {
  it("renders skills for the current language", () => {
    const skills = {
      English: ["React", "JavaScript", "CSS"],
    };

    renderWithProviders(<SkillsetList skills={skills} />);

    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("JavaScript")).toBeInTheDocument();
    expect(screen.getByText("CSS")).toBeInTheDocument();
  });

  it("renders tooltips when descriptions are provided", () => {
    const skills = {
      English: ["React", "JavaScript"],
    };
    const descriptions = {
      English: {
        React: "A UI library",
        JavaScript: "A programming language",
      },
    };

    renderWithProviders(
      <SkillsetList skills={skills} descriptions={descriptions} />
    );

    expect(screen.getByText("A UI library")).toBeInTheDocument();
    expect(screen.getByText("A programming language")).toBeInTheDocument();
  });

  it("renders without tooltips when descriptions are absent", () => {
    const skills = {
      English: ["React"],
    };

    renderWithProviders(<SkillsetList skills={skills} />);

    expect(screen.getByText("React")).toBeInTheDocument();
  });
});
