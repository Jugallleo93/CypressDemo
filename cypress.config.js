const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    env:{
      URL:'https://naveenautomationlabs.com/opencart/index.php?route=account/register'
      //URL:'https://gcphub.ciostage.accenture.com'
    }
  },
})