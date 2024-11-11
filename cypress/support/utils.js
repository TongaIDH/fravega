export class Utils {
    constructor(selector, product) {
        this.selector = selector;
        this.product = product;
    }

    // Asserting and typing on component
    assertVisibleAndClick(selector) {
        cy.get(selector)
            .should("be.visible")
            .click();
    }
    
    // Asserting and typing on component
    assertVisibleAndType(selector, product) {
        cy.get(selector)
            .should("be.visible")
            .type(product);
    }
}

export const utils = new Utils();