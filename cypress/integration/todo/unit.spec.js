/// <reference types="Cypress" />

context('Todo App Unit Test Cases', () => {

    beforeEach(() => {
        cy.visit('http://todomvc.com/examples/react/#/')
    })

    it('pluralize', () => {

        cy.window().then((win) => {
            expect(win.app.Utils.pluralize(2, 'Apple')).to.eq('Apples');
        });

    });

    it('store', () => {

        cy.window().then((win) => {
            win.app.Utils.store('first', { a: 1});
            win.app.Utils.store('second', { b: 2});
            expect(win.app.Utils.store('first')).to.deep.equal({ a: 1});
            expect(win.app.Utils.store('second').b).to.eq(2);
        });

    });
});
