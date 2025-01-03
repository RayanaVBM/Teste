const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = {
  e2e: {
    async setupNodeEvents(on, config) {
      // Configura o bundler para o preprocessor
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });
      on("file:preprocessor", bundler);

      // Adiciona o suporte ao Cucumber
      await addCucumberPreprocessorPlugin(on, config);

      return config;
    },
    specPattern: "cypress/e2e/**/*.feature", // Localização dos arquivos .feature
  },
};





