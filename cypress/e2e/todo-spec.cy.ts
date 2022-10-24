describe('Todo spec', () => {
  it('Visit todo app page', () => {
    cy.visit('http://127.0.0.1:5173/')
    cy.contains('React todo list')
  })

  it('Check input field is empty', () => {
    cy.get('.Todo-input-field > input').should('be.empty')
  })

  it('Check if default todo tasks are "Eating breakfast" & "Checking emails"', () => {
    cy.get('ul').contains('Eating breakfast')
    cy.get('ul').contains('Checking emails')
  })

  it('Check if "Checking emails" todo task is complete', () => {
    cy.get('ul > :nth-child(2)').should('have.text', "Checking emails")
    cy.get(':nth-child(2) > input').should('be.checked')
  })

  it('If input field is empty show error if clicked on Add button', () => {
    cy.get('.Todo-input-field > input').should('be.empty')
    cy.get('button').click();
    cy.get('.Todo-input-field > span').should('have.text','Input field is empty')
  })

  it('Add new task "Going to gym"', () => {
    cy.get('.Todo-input-field > input').type("Going to gym")
    cy.get('button').click();
    cy.get('ul').contains('Going to gym')
    cy.get('.Todo-input-field > input').should('be.empty')
  })

  it('Check and complete the task "Going to gym"', () => {
    cy.get(':nth-child(3) > input').check()
    cy.get(':nth-child(3) > span').should('have.css', 'text-decoration', 'line-through solid rgb(255, 255, 255)')
  })
})