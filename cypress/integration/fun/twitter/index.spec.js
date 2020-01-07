/// <reference types="Cypress" />

context('Twitter', () => {
    beforeEach(() => {
        cy.visit(Cypress.env('twitter_url'));
        cy.get('input[placeholder="Phone, email or username"]')
            .type(Cypress.env('twitter_username'))
        cy.get('.js-password-field')
            .type(Cypress.env('twitter_password'));
        cy.get('button.submit')
            .click({force: true});

    })

    it('Tweet', () => {
        cy.contains('Home')
            .click();
        cy.get('div[aria-label="Tweet text"]')
            .focus()
            .type("Security Vulnerabilities in Web Apps https://medium.com/datadriveninvestor/security-vulnerabilities-for-web-apps-4e944b5d7548")
        cy.get('div[data-testid="tweetButtonInline"]')
            .click();
    });

});