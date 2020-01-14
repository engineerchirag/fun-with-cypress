/// <reference types="Cypress" />

context('Todo App API Test Cases', () => {
    
    it('Fetch todo and check snapshot', () => {
        cy.request('http://www.mocky.io/v2/5e1d43f7360000521dc73f0f')
            .its('body')
            .snapshot()

    });

    it('Fetch todo and check headers', () => {
        cy.request('http://www.mocky.io/v2/5e1d43f7360000521dc73f0f')
            .its('headers')
            .its('content-type')
            .should('include', 'application/json');

    });
});