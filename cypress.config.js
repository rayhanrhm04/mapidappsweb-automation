const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://staging-apps.mapid.io",
    setupNodeEvents(on, config) {
      // implement node event listeners here

    },
  },
  env: {
    phoneNumber: "83195204745",
    otp: "123456"
  }
});
