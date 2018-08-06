describe('Visit AI', function() {

  it('Test 1 -- Valid Rule', function() {
    login();
    addProject();
    addBranchWithRule('temperature > 70', 'It\'s hot');
    cy.get('.branch').should('contain', 'It\'s hot')
  })

  it('Test 2 -- Invalid Rule', function() {
    login();
    addProject();
    addBranchWithRule('temperature > 70\'', 'It\'s hot');
    cy.get('h2.modal__title')
      .should('contain', 'This branch is invalid.')
  })

  function login() {
    cy.visit ('')//base url in cypress.json
      .get('.mdl-textfield__input.string.email.optional')
      .type('')
      .get('.mdl-textfield__input.password.optional')
      .type('')
      .get(".btn").click()
  }

  function addProject() {
    cy.contains('New Project').click()
    /*cy.contains('Upload CSV File').click()
    cy.get('.mdl-textfield__input.ws-input')
      .type('Awesome Project')
    cy.contains('browse for a file').click()
    //play more with this later*/
    cy.get('thead>tr').eq(0).find('.ws-input').eq(0)
      .type('city')
    cy.get('thead>tr').eq(0).find('.ws-input').eq(1)
      .type('temperature')
    cy.get('thead>tr').eq(0).find('.ws-input').eq(2)
      .type('chance_of_rain')
    cy.get('tbody>tr').eq(0).find('.ws-input').eq(0)
      .type('Chicago')
    cy.get('tbody>tr').eq(0).find('.ws-input').eq(1)
      .type('84')
    cy.get('tbody>tr').eq(0).find('.ws-input').eq(2)
      .type('0')
    cy.get('tbody>tr').eq(1).find('.ws-input').eq(0)
      .type('Amsterdam')
    cy.get('tbody>tr').eq(1).find('.ws-input').eq(1)
      .type('65')
    cy.get('tbody>tr').eq(1).find('.ws-input').eq(2)
      .type('54')
    cy.get('tbody>tr').eq(2).find('.ws-input').eq(0)
      .type('Dallas')
    cy.get('tbody>tr').eq(2).find('.ws-input').eq(1)
      .type('101')
    cy.get('tbody>tr').eq(2).find('.ws-input').eq(2)
      .type('20')
    cy.contains('Create Project').click()
  }

  function addBranchWithRule(ruleInput, thenInput) {
    cy.contains('Add Branch').click({timeout: 20000})
    cy.contains('Write out the first rule that is true.').click()
    cy.get('.public-DraftStyleDefault-block.public-DraftStyleDefault-ltr').eq(0)
      .type(ruleInput)
      .get('.public-DraftStyleDefault-block.public-DraftStyleDefault-ltr').eq(1)
      .type(thenInput)
    cy.contains('Done').click()
  }

})
