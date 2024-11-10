/// <reference types="cypress" />
import { useCase1 } from "../support/fixtures/data.json"
before('Page setup', () => {
    cy.visit("")
})

it('Should search and buy a product', () => {
    console.log(useCase1)
})