const { setHeadlessWhen } = require("@codeceptjs/configure");
const { devices } = require("playwright");

setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: "./interface/tests/*.test.js",
  output: "./interface/output",
  helpers: {
    Playwright: {
      url: "http://localhost",
      show: true,
      emulate: devices["iPhone 11 Pro"],
    },
  },
  include: {
    I: "./steps_file.js",
  },
  multiple: {
    smoke: {
      browsers: [
        {
          browser: "webkit",
          windowSize: "maximize",
          desiredCapabilities: {
            acceptSslCerts: true,
          },
        },
        {
          browser: "chromium",
          windowSize: "maximize",
          desiredCapabilities: {
            acceptSslCerts: true,
          },
        },
      ],
    },
  },
  bootstrap: null,
  mocha: {},
  name: "poc-testing",
  translation: "pt-BR",
  plugins: {
    retryFailedStep: {
      enabled: true,
    },
    screenshotOnFail: {
      enabled: true,
    },
  },
};
