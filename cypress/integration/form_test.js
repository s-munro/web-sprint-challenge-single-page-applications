describe('Form App', () => {
beforeEach(() => {
  cy.visit('http://localhost:3001')
});

const pizzaBtn = () => cy.get('button[id=pizzaBtn]')
const submitBtn = () => cy.get('button[id=submitBtn]')
const nameInput = () => cy.get('input[name="name"]')
const pepTopping = () => cy.get('input[name="pepperoni"]')
const onionsTopping = () => cy.get('input[name="onions"]')
const sizeForm = () => cy.get('select[name="size"]')
const medSize = () => cy.get('option[value="medium"]')



it('page transition', () => {
  pizzaBtn().click()
  cy.url().should('include', 'http://localhost:3001/pizza')
})

it('add text to box', () => {
  pizzaBtn().click()
  nameInput()
    .should('have.value', '')
    .type('Hello there! :)')
    .should('have.value', 'Hello there! :)')

})

it('can click multiple toppings', () => {
  pizzaBtn().click()
  pepTopping().click()
  onionsTopping().click()
  pepTopping().should('have.value', 'on')
  onionsTopping().should('have.value', 'on')
})

it('can submit button after typing name', () => {
  pizzaBtn().click()
  nameInput()
    .should('have.value', '')
    .type('Sam')
    .should('have.value', 'Sam')
  sizeForm().select('medium')
  submitBtn().click()
  

})

})