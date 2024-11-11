/// <reference types="cypress" />
import { useCase2 } from "../support/fixtures/data.json"
before('Page setup', () => {
    cy.DisableXhrAndFetchLogs().visit("")
})

it('Should search a product and assert its delivery time', () => {
    console.log(useCase2)
})