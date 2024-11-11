// Interceptions
Cypress.Commands.add("DisableXhrAndFetchLogs", () => {
    // Disable Cypress's default behavior of logging all XMLHttpRequests and fetches
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
})

