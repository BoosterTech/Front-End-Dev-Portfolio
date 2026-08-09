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
};
