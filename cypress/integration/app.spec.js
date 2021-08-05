describe('To Do List', () => {
  it('can add a to do item', () => {
    cy.visit('/');
    cy.get('#todo-input').type('Buy milk');
    //Implement deadline as a dropdown for now -- but should be a calendar
    cy.get('#todo-deadline-dropdown').select('25/08/2021');
    cy.get('#todo-1').should('contain','Buy milk');
  })


});
