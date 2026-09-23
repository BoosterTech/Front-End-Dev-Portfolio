const { test, expect } = require("@playwright/test");

test.describe("Portfolio E2E", () => {
  test("navigates to About via scroll", async ({ page }) => {
    await page.goto("/");
    await page.locator('[data-testid="nav-link-about"]').click();
    await page.waitForTimeout(1000);
    const aboutTop = await page.evaluate(() => {
      const el = document.getElementById("about");
      return el ? el.getBoundingClientRect().top : null;
    });
    expect(aboutTop).not.toBeNull();
    expect(aboutTop).toBeLessThan(200);
  });

  test("switches language to Polish", async ({ page }) => {
    await page.goto("/");
    await page.locator('[aria-label="Select language"]').click();
    await page.getByRole("option", { name: "Polish" }).click();
    await expect(
      page.locator('[data-testid="nav-link-about"]')
    ).toHaveText("O mnie");
    await expect(
      page.locator('[data-testid="nav-link-home"]')
    ).toHaveText("Strona główna");
  });

  test("toggles dark mode", async ({ page }) => {
    await page.goto("/");
    await page.locator('[data-testid="dark-mode-toggle"]').click();
    const darkTheme = await page.evaluate(() =>
      document.documentElement.getAttribute("data-theme")
    );
    expect(darkTheme).toBe("dark");

    await page.locator('[data-testid="dark-mode-toggle"]').click();
    const lightTheme = await page.evaluate(() =>
      document.documentElement.getAttribute("data-theme")
    );
    expect(lightTheme).toBeNull();
  });

  test("carousel navigates to next project via arrow button", async ({ page }) => {
    await page.goto("/");
    await page.locator('[data-testid="nav-link-projects"]').click();
    await page.waitForTimeout(1000);

    const activeDot = page.locator('[aria-label="Go to project 2"]');

    const bgBefore = await activeDot.evaluate(
      (el) => window.getComputedStyle(el).backgroundColor
    );

    await page.locator('[aria-label="Next project"]').click();
    await page.waitForTimeout(500);

    const bgAfter = await activeDot.evaluate(
      (el) => window.getComputedStyle(el).backgroundColor
    );

    expect(bgBefore).not.toBe(bgAfter);
  });

  test("carousel navigates to specific project via dot click", async ({ page }) => {
    await page.goto("/");
    await page.locator('[data-testid="nav-link-projects"]').click();
    await page.waitForTimeout(1000);

    const thirdDot = page.locator('[aria-label="Go to project 3"]');

    const bgBefore = await thirdDot.evaluate(
      (el) => window.getComputedStyle(el).backgroundColor
    );

    await thirdDot.click();
    await page.waitForTimeout(500);

    const bgAfter = await thirdDot.evaluate(
      (el) => window.getComputedStyle(el).backgroundColor
    );

    expect(bgBefore).not.toBe(bgAfter);
  });
});
