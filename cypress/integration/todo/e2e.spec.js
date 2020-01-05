/// <reference types="Cypress" />

context('Todo App', () => {
    beforeEach(() => {
        cy.visit('http://todomvc.com/examples/react/#/')
    })

    it('Add 2 todo', () => {
        cy.get('.new-todo')
            .type('First todo')
            .type('{enter}')
            .type('Second todo')
            .type('{enter}');

        cy.get('.todo-list li:nth-child(1) label')
            .should('have.text', 'First todo');

        cy.get('.todo-list li:nth-child(2) label')
            .should('have.text', 'Second todo');

    });

    it('Delete todo', () => {
        cy.get('.new-todo')
            .type('First todo')
            .type('{enter}')
            .type('Second todo')
            .type('{enter}');

        cy.get('.todo-list li:nth-child(1) .destroy')
            .click({
                force: true
            });

        cy.get('.todo-list li:nth-child(1) label')
            .should('have.text', 'Second todo');
    });
});