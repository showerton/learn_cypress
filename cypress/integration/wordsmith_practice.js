describe('Visit AI', function() {

  it('Everything', function() {
    //split up into separate actions later.

    //--LOGIN--How to handle login info??
    cy.visit ('')
    cy.get('.mdl-textfield__input.string.email.optional')
    //cy.get('input').find('user-email') -- why can't I use id's??
      .type('')
    cy.get('.mdl-textfield__input.password.optional')
      .type('')
    cy.get(".btn").click()

    //--CREATE NEW PROJECT--
    cy.contains('New Project').click()
    /*cy.contains('Upload CSV File').click()
    cy.get('.mdl-textfield__input.ws-input')
      .type('Awesome Project')
    cy.contains('browse for a file').click()
    //play more with this later*/

    // --Fill in table -- improve later
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

    //--INSERT BRANCH--
    cy.contains('Add Branch').click()
    //--FILL OUT RULE--
    //--FOR TEST 1--
    cy.contains('Write out the first rule that is true.').click()
    cy.get('.public-DraftStyleDefault-block.public-DraftStyleDefault-ltr').eq(0)
      .type('temperature > 70')
    cy.get('.public-DraftStyleDefault-block.public-DraftStyleDefault-ltr').eq(1)
      .type('It\'s hot')
    cy.contains('Done').click()
    //--VALIDATION--
    //Validate rule inserted correctly
    //cy.get('.branch').should('eq', 'It\'s hot')
    //refine this!

    /*//--FOR TEST 2--
    cy.contains('Write out the first rule that is true.').click()
    cy.get('.public-DraftStyleDefault-block.public-DraftStyleDefault-ltr').eq(0)
      .type('temperature > 70\'')
    cy.get('.public-DraftStyleDefault-block.public-DraftStyleDefault-ltr').eq(1)
      .type('It\'s hot')
    cy.contains('Done').click()
    //--VALIDATION--
    //Validate error message here
    //expect('.modal__title').to.eq('This branch is invalid. Continue anyway?')
    //refine!!*/
  })

})
