import { fireEvent, screen, waitFor } from "@testing-library/react";
import Home from "features/portfolio/Home";
import { renderWithProviders } from "test-utils";

describe("TalkingPortrait", () => {
  it("renders a localized play button and lazy-loads the clip on tap", () => {
    renderWithProviders(<Home id="home" />, {
      initialLanguage: "English",
      initialIsDark: true,
    });

    const button = screen.getByRole("button", { name: /hear me/i });
    expect(
      screen.queryByTestId("talking-portrait-video")
    ).not.toBeInTheDocument();

    fireEvent.click(button);
    const video = screen.getByTestId("talking-portrait-video");
    expect(video).toHaveAttribute("preload", "none");

    fireEvent(video, new Event("ended"));
    expect(
      screen.queryByTestId("talking-portrait-video")
    ).not.toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /hear me/i })
    ).toBeInTheDocument();
  });

  it("does not render without an English clip", () => {
    renderWithProviders(<Home id="home" />, {
      initialLanguage: "Polish",
      initialIsDark: true,
    });

    expect(
      screen.queryByRole("button", { name: /posłuchaj/i })
    ).not.toBeInTheDocument();
  });

  it("does not render in light theme", () => {
    renderWithProviders(<Home id="home" />, {
      initialLanguage: "English",
      initialIsDark: false,
    });

    expect(
      screen.queryByRole("button", { name: /hear me/i })
    ).not.toBeInTheDocument();
  });

  it("does not render on Save-Data connections", () => {
    Object.defineProperty(window.navigator, "connection", {
      value: { saveData: true },
      configurable: true,
    });

    renderWithProviders(<Home id="home" />, {
      initialLanguage: "English",
      initialIsDark: true,
    });

    expect(
      screen.queryByRole("button", { name: /hear me/i })
    ).not.toBeInTheDocument();

    delete window.navigator.connection;
  });

  it("hides the control when the decoder reports non-smooth playback", async () => {
    Object.defineProperty(window.navigator, "mediaCapabilities", {
      value: {
        decodingInfo: async () => ({
          supported: true,
          smooth: false,
          powerEfficient: false,
        }),
      },
      configurable: true,
    });

    renderWithProviders(<Home id="home" />, {
      initialLanguage: "English",
      initialIsDark: true,
    });

    await waitFor(() =>
      expect(
        screen.queryByRole("button", { name: /hear me/i })
      ).not.toBeInTheDocument()
    );

    delete window.navigator.mediaCapabilities;
  });
});
