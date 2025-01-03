const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.feature",
    supportFile: "cypress/suporte/e2e.js",
    baseUrl: "http://localhost:3000", // Ajuste conforme necessário
  },
});
