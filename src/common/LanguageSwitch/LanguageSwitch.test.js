import { fireEvent, screen } from "@testing-library/react";
import { LanguageSwitch } from "common/LanguageSwitch";
import store from "slices/store";
import { renderWithProviders } from "test-utils";

describe("LanguageSwitch", () => {
  it("changes the Redux language to Polish when the Polish flag is clicked", () => {
    renderWithProviders(<LanguageSwitch />);

    expect(store.getState().language.language).toBe("English");

    fireEvent.click(screen.getByAltText("PLflagIcon"));

    expect(store.getState().language.language).toBe("Polish");
  });

  it("changes the Redux language to Spanish when the Spanish flag is clicked", () => {
    renderWithProviders(<LanguageSwitch />);

    fireEvent.click(screen.getByAltText("ESPflagIcon"));

    expect(store.getState().language.language).toBe("Spanish");
  });
});
