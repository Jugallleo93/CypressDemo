const { defineConfig } = require("cypress");
const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib')

module.exports = defineConfig({

  reporter: 'cypress-mochawesome-reporter',
  video: true,
  screenshotOnRunFailure: true,
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Cypress Execution Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },

  e2e: {
    baseUrl: 'https://naveenautomationlabs.com/opencart/index.php?route=account/login',
    setupNodeEvents(on, config) {
      on('before:run', async (details) => {
        console.log('override before:run')
        await beforeRunHook(details)
      })

      on('after:run', async () => {
        console.log('override after:run')
        await afterRunHook()
      })
      require('cypress-mochawesome-reporter/plugin')(on);
    },

    env: {
      URL: 'https://naveenautomationlabs.com/opencart/index.php?route=account/register'
      //URL:'https://gcphub.ciostage.accenture.com'
    }
  },
})