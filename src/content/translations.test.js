import projects from "./projects";
import {
  skillDescriptions,
  skillsets,
  toLearn,
  toLearnDescriptions,
} from "./skillsets";
import { translations } from "./translations";

describe("content language parity", () => {
  const expected = Object.keys(translations).sort();

  it("translations has English, Polish, and Spanish", () => {
    expect(expected).toEqual(["English", "Polish", "Spanish"]);
  });

  it("skillsets content uses the same languages as translations", () => {
    expect(Object.keys(skillsets).sort()).toEqual(expected);
    expect(Object.keys(skillDescriptions).sort()).toEqual(expected);
    expect(Object.keys(toLearn).sort()).toEqual(expected);
    expect(Object.keys(toLearnDescriptions).sort()).toEqual(expected);
  });

  it("projects use the same languages as translations", () => {
    const languages = new Set();

    for (const project of projects) {
      for (const field of [
        "title",
        "description",
        "GitHubPagesURLTag",
        "GitHubRepoURLTag",
      ]) {
        if (project[field]) {
          for (const lang of Object.keys(project[field])) {
            languages.add(lang);
          }
        }
      }
    }

    expect([...languages].sort()).toEqual(expected);
  });
});
