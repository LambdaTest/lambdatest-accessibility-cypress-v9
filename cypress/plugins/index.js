/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
const installLogsPrinter = require('cypress-terminal-report/src/installLogsPrinter')
const lambdatestAccessibility = require('lambdatest-cypress-cli/accessibility/plugin');
/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars

module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  installLogsPrinter(on, {
    printLogsToConsole: 'always',
    printLogsToFile: 'always',
    outputRoot: 'cypress/results/detailCommandLogs',
    outputTarget: {
      'detailCommandLogs.json': 'json',
    },
  })
  lambdatestAccessibility(on, config);
  return config;
}
