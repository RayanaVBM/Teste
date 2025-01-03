// Importar comandos personalizados
import './commands';

// Configuração para ignorar erros não capturados
Cypress.on('uncaught:exception', (err, runnable) => {
    return false; // Impede que erros não capturados falhem os testes
});
