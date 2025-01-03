/// <reference types="Cypress"/>

describe('Ajuda', () => {
    it('Como faço para me cadastrar na Lacrei Saúde', () => {
        cy.visit("https://staging.lacreisaude.com.br/ajuda/")
        cy.get(':nth-child(1) > .sc-4d95d4c6-1').click()
    });

    it('Como faço para alterar meu cadastro ?', () => {
        cy.visit("https://staging.lacreisaude.com.br/ajuda/")
        cy.get(':nth-child(2) > .sc-4d95d4c6-1').click()
    });

    it('Como faço para excluir meu cadastro na lacrei saúde?', () => {
        cy.visit("https://staging.lacreisaude.com.br/ajuda/")
        cy.get(':nth-child(3) > .sc-4d95d4c6-1').click()
    });

    it('Esqueci minha senha. Como faço pra acessar a conta?', () => {
        cy.visit("https://staging.lacreisaude.com.br/ajuda/")
        cy.get(':nth-child(4) > .sc-4d95d4c6-1').click()
    });

    it('Não estou recebendo o email de validação.O que faço?', () => {
        cy.visit("https://staging.lacreisaude.com.br/ajuda/")
        cy.get(':nth-child(5) > .sc-4d95d4c6-1').click()
    });

    it('Link para redefinição de senha ou email expirou.O que devo fazer ?', () => {
        cy.visit("https://staging.lacreisaude.com.br/ajuda/")
        cy.get(':nth-child(6) > .sc-4d95d4c6-1').click()
    });

    it('Não recebo o código SMS. O que faço ?', () => {
        cy.visit("https://staging.lacreisaude.com.br/ajuda/")
        cy.get(':nth-child(7) > .sc-4d95d4c6-1').click()
    });

    it('Como busco uma pessoa profissional da saúde na Lacrei ?', () => {
        cy.visit("https://staging.lacreisaude.com.br/ajuda/")
        cy.get(':nth-child(8) > .sc-4d95d4c6-1').click()
    });

    it('Como faço para registrar uma reclamação ?', () => {
        cy.visit("https://staging.lacreisaude.com.br/ajuda/")
        cy.get(':nth-child(9) > .sc-4d95d4c6-1').click()
    });

    it('Quero fazer uma denúncia. O que devo fazer?', () => {
        cy.visit("https://staging.lacreisaude.com.br/ajuda/")
        cy.get(':nth-child(10) > .sc-4d95d4c6-1').click()
    });

    it('Porque preciso informar meu número de registro profissional  ?', () => {
        cy.visit("https://staging.lacreisaude.com.br/ajuda/")
        cy.get(':nth-child(11) > .sc-4d95d4c6-1').click()
    });

    it('Qual o tempo de validação do meu cadastro?', () => {
        cy.visit("https://staging.lacreisaude.com.br/ajuda/")
        cy.get(':nth-child(12) > .sc-4d95d4c6-1').click()
    });
});