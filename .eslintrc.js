module.exports = {
  root: true,
  extends: ["react-app", "react-app/jest"],
  rules: {
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        groups: [
          ["builtin", "external"],
          ["internal"],
          ["parent", "sibling", "index"],
        ],
        alphabetize: { order: "asc", caseInsensitive: true },
      },
    ],
    "import/no-relative-parent-imports": "error",
  },
  overrides: [
    {
      // Playwright specs use page.getByRole, not RTL queries
      files: ["e2e/**/*.js"],
      rules: {
        "testing-library/prefer-screen-queries": "off",
        "testing-library/no-await-sync-queries": "off",
        "testing-library/no-node-access": "off",
      },
    },
  ],
};
