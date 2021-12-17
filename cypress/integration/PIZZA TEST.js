describe('Pizza App Test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/pizza')
  })

  const nameBox = () => cy.get('input[id=name-input]')
  const sizeSelect = () => cy.get('select[id=size-dropdown]')
  const topping1 = () => cy.get('input[name=topping1]')
  const topping2 = () => cy.get('input[name=topping2]')
  const topping3 = () => cy.get('input[name=topping3]')
  const topping4 = () => cy.get('input[name=topping4]')
  const submit = () => cy.get('button[id=order-button]')

  it('elements are showing', () => {
    nameBox().should('exist');
    sizeSelect().should('exist')
    topping1().should('exist');
    topping2().should('exist');
    topping3().should('exist');
    topping4().should('exist');
    submit().should('exist');
  })

  it('add text to the box', () => {
    nameBox()
      .should('have.value', '')
      .type('Name')
      .should('have.value', 'Name')
  })

  it('select multiple toppings', () => {
    topping1()
      .should('not.be.checked')
      .check()
      .should('be.checked')

    topping2()
      .should('not.be.checked')
      .check()
      .should('be.checked')

    topping3()
      .should('not.be.checked')
      .check()
      .should('be.checked')

    topping4()
      .should('not.be.checked')
      .check()
      .should('be.checked')
  })

  it('submit the form', () => {
    submit().should('be.disabled')
    nameBox().type('Name')
    sizeSelect().select('small')
    topping1().check()
    submit().should('not.be.disabled').click()
    cy.url().should('include', 'finish')
  })
})