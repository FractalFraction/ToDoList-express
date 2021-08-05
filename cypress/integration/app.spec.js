describe('To Do List', () => {
  it('can add a to do item', () => {
    cy.task('taskTruncateTables');
    cy.visit('/');
    cy.get('#todo-input').type('Buy milk');
    //Implement deadline as a dropdown for now -- but should be a calendar
    cy.get('#todo-deadline-input').type('25/08/2021');
    cy.get('#add-todo').click();
    cy.get('#todo-0').should('contain','Buy milk');
  })

  it('can delete a to do item', () => {
    cy.task('taskTruncateTables')
    cy.task('taskCreateTables')
    cy.visit('/');
    cy.get('#todo-0-delete').click();
    cy.get('#todo-0').should('not.exist');
  });

});
