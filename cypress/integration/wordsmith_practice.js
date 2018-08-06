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
      .get('.mdl-textfield__input.string.email.optional').type('')
      .get('.mdl-textfield__input.password.optional').type('')
      .get(".btn").click()
  }

  function addProject() {
    var header = ['city', 'temperature', 'chance_of_rain']
    var row1 = ['Chicago', '84', '0']
    var row2 = ['Amsterdam', '65', '54']
    var row3 = ['Dallas', '101', '20']
    cy.contains('New Project').click()
    /*cy.contains('Upload CSV File').click()
    cy.get('.mdl-textfield__input.ws-input').type('Awesome Project')
    cy.contains('browse for a file').click()
    //play more with this later*/
    //TODO -- put this in a loop of some kind
    cy.get('thead>tr').eq(0).find('.ws-input').eq(0).type(header[0])
      .get('thead>tr').eq(0).find('.ws-input').eq(1).type(header[1])
      .get('thead>tr').eq(0).find('.ws-input').eq(2).type(header[2])
      .get('tbody>tr').eq(0).find('.ws-input').eq(0).type(row1[0])
      .get('tbody>tr').eq(0).find('.ws-input').eq(1).type(row1[1])
      .get('tbody>tr').eq(0).find('.ws-input').eq(2).type(row1[2])
      .get('tbody>tr').eq(1).find('.ws-input').eq(0).type(row2[0])
      .get('tbody>tr').eq(1).find('.ws-input').eq(1).type(row2[1])
      .get('tbody>tr').eq(1).find('.ws-input').eq(2).type(row2[2])
      .get('tbody>tr').eq(2).find('.ws-input').eq(0).type(row3[0])
      .get('tbody>tr').eq(2).find('.ws-input').eq(1).type(row3[1])
      .get('tbody>tr').eq(2).find('.ws-input').eq(2).type(row3[2])
    cy.contains('Create Project').click()
  }

  function addBranchWithRule(ruleInput, thenInput) {
    cy.contains('Add Branch').click({timeout: 30000})
    cy.contains('Write out the first rule that is true.').click()
    cy.get('.public-DraftStyleDefault-block.public-DraftStyleDefault-ltr').eq(0)
      .type(ruleInput)
      .get('.public-DraftStyleDefault-block.public-DraftStyleDefault-ltr').eq(1)
      .type(thenInput)
    cy.contains('Done').click()
  }

})
