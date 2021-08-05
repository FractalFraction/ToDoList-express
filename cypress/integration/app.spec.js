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
    cy.get('#delete-todo-0').click();
    cy.get('#todo-0').should('not.exist');
  });

  it('can update a to do list item', () => {
    cy.task('taskTruncateTables')
    cy.task('taskCreateTables')
    cy.visit('/');
    cy.get('#edit-todo-0').click();
    cy.get('#update-deadline').type('07/08/2021');
    cy.get('#update-button').click();
    cy.get('#todo-0').should('contain','07/08/2021');
  });


});
