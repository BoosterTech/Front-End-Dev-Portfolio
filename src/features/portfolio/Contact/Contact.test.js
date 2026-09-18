import { screen } from "@testing-library/react";
import { useContactVisibility } from "common/ContactVisibilityProvider";
import Contact from "features/portfolio/Contact";
import { renderWithProviders } from "test-utils";

const DisplayContactVisibility = () => {
  const { isContactVisible } = useContactVisibility();
  return (
    <span data-testid="contact-visibility">
      {isContactVisible ? "true" : "false"}
    </span>
  );
};

class MockIntersectionObserver {
  constructor(callback) {
    this.callback = callback;
  }

  observe(target) {
    this.callback([{ target, isIntersecting: true }]);
  }

  unobserve() {}
  disconnect() {}
}

beforeEach(() => {
  global.IntersectionObserver = MockIntersectionObserver;
});

describe("Contact", () => {
  it("sets contact visibility to true when intersecting", () => {
    renderWithProviders(
      <>
        <Contact id="contact" />
        <DisplayContactVisibility />
      </>
    );

    expect(screen.getByTestId("contact-visibility")).toHaveTextContent("true");
  });
});
