module.exports = {
  ci: {
    collect: {
      staticDistDir: "./build",
      url: ["/"],
      numberOfRuns: 1,
    },
    assert: {
      assertions: {
        "largest-contentful-paint": ["error", { maxNumericValue: 4000 }],
        "cumulative-layout-shift": ["error", { maxNumericValue: 0.1 }],
      },
    },
    upload: {
      target: "filesystem",
    },
  },
};
