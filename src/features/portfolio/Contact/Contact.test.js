import Contact from "features/portfolio/Contact";
import { setContactVisibility } from "slices/generalSlice";
import store from "slices/store";
import { renderWithProviders } from "test-utils";

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
  it("dispatches setContactVisibility(true) when intersecting", () => {
    store.dispatch(setContactVisibility(false));
    expect(store.getState().general.isContactVisible).toBe(false);

    renderWithProviders(<Contact id="contact" />);

    expect(store.getState().general.isContactVisible).toBe(true);
  });
});
