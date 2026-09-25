import { fireEvent, screen, waitFor } from "@testing-library/react";
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

  it("opens on ArrowDown and focuses the first option", async () => {
    renderWithProviders(<LanguageSwitch />);

    const globe = screen.getByRole("button", { name: /select language/i });
    fireEvent.keyDown(globe, { key: "ArrowDown" });

    await waitFor(() => {
      expect(screen.getByRole("option", { name: "English" })).toHaveFocus();
    });
  });

  it("roves focus between options with ArrowDown and ArrowUp, wrapping at the ends", async () => {
    renderWithProviders(<LanguageSwitch />);

    const globe = screen.getByRole("button", { name: /select language/i });
    fireEvent.keyDown(globe, { key: "ArrowDown" });
    await waitFor(() => {
      expect(screen.getByRole("option", { name: "English" })).toHaveFocus();
    });

    fireEvent.keyDown(screen.getByRole("option", { name: "English" }), {
      key: "ArrowDown",
    });
    expect(screen.getByRole("option", { name: "Polish" })).toHaveFocus();

    fireEvent.keyDown(screen.getByRole("option", { name: "Polish" }), {
      key: "ArrowUp",
    });
    expect(screen.getByRole("option", { name: "English" })).toHaveFocus();

    fireEvent.keyDown(screen.getByRole("option", { name: "English" }), {
      key: "ArrowUp",
    });
    expect(screen.getByRole("option", { name: "Spanish" })).toHaveFocus();
  });

  it("closes on Escape and returns focus to the globe button", async () => {
    renderWithProviders(<LanguageSwitch />);

    const globe = screen.getByRole("button", { name: /select language/i });
    fireEvent.click(globe);
    expect(globe).toHaveAttribute("aria-expanded", "true");

    fireEvent.keyDown(screen.getByRole("listbox"), { key: "Escape" });

    expect(globe).toHaveAttribute("aria-expanded", "false");
    await waitFor(() => {
      expect(globe).toHaveFocus();
    });
  });

  it("ignores unrelated keys", () => {
    renderWithProviders(<LanguageSwitch />);

    const globe = screen.getByRole("button", { name: /select language/i });
    fireEvent.keyDown(globe, { key: "ArrowDown" });
    fireEvent.keyDown(screen.getByRole("option", { name: "English" }), {
      key: "Tab",
    });
    expect(globe).toHaveAttribute("aria-expanded", "true");
  });
});
