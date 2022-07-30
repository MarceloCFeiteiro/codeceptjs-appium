const server = require('./server/server.js')

exports.config = {
  output: './output',
  helpers: {
    Appium: {
      platform: process.env.PLATFORM,
      app: process.env.APP,
      desiredCapabilities: {
        appPackage: process.env.PACKAGE,
        appActivity: process.env.ACTIVITY,
        deviceName: process.env.DEVICE,
        platformVersion: process.env.VERSION
      }
    }
  },
  include: {
    I: './steps_file.js',
    login_page: './pages/login_page.js',
    home_page: './pages/home_page.js'
  },
  mocha: {},
  bootstrap: async () => {
    await server.start();
  },
  teardown: async () => {
    await server.stop();
  },
  hooks: [],
  // gherkin: {
  //   features: './features/*.feature',
  //   steps: ['./step_definitions/steps.js']
  // },
  plugins: {
    screenshotOnFail: {
      enabled: true
    }
  },
  name: 'qazando-automation',
  tests: './steps/*_test.js'
}