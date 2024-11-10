const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "mochawesome", 
  reporterOptions:{
        "reportDir": "cypress/results/mochawesome",
        "overwrite": false,
        "html": false,
        "json": true
  },
  e2e: {
    setupNodeEvents(on, config) {

    },
    baseUrl: "https://www.fravega.com",
    experimentalRunAllSpecs: false,
  },
});
