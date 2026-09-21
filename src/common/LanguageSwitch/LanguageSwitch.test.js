import { fireEvent, screen } from "@testing-library/react";
import { useLanguage } from "common/LanguageProvider";
import { LanguageSwitch } from "common/LanguageSwitch";
import { renderWithProviders } from "test-utils";

const DisplayLanguage = () => {
  const { language } = useLanguage();
  return <span data-testid="language">{language}</span>;
};

describe("LanguageSwitch", () => {
  it("changes the language to Polish when the Polish flag is clicked", () => {
    renderWithProviders(
      <>
        <LanguageSwitch />
        <DisplayLanguage />
      </>
    );

    expect(screen.getByTestId("language")).toHaveTextContent("English");

    fireEvent.click(screen.getByText("Polish"));

    expect(screen.getByTestId("language")).toHaveTextContent("Polish");
  });

  it("changes the language to Spanish when the Spanish flag is clicked", () => {
    renderWithProviders(
      <>
        <LanguageSwitch />
        <DisplayLanguage />
      </>
    );

    expect(screen.getByTestId("language")).toHaveTextContent("English");

    fireEvent.click(screen.getByText("Spanish"));

    expect(screen.getByTestId("language")).toHaveTextContent("Spanish");
  });
});
