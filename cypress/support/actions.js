export class Actions {
    constructor(amount, amountLabelSelector, category, dropdownOption, popUpButton, product, productLabelSelector, selector, url) {
        this.amount = amount;
        this.amountLabelSelector = amountLabelSelector;
        this.baseUrl = baseUrl;
        this.category = category;
        this.dropdownOption = dropdownOption;
        this.popUpButton = popUpButton;
        this.product = product;
        this.productLabelSelector = productLabelSelector
        this.selector = selector;
        this.url = url;
    };

    // Assert a given amount is available on cart for a product
    assertAmountInCart() {
        cy.get(this.amountLabel)
            .invoke("text")
            .should("eq", amount);
    };

    // Assert a given product is available on cart
    assertProductInCart(productLabelSelector, product) {
        cy.get(productLabelSelector)
            .invoke("text")
            .should("contain", product);
    };

    // Assert a given component is visible and clicking it
    assertVisibleAndClick(selector) {
        cy.get(selector)
            .should("be.visible")
            .click();
    };

    // Assert a given component is visible and typing it
    assertVisibleAndType(selector, product) {
        cy.get(selector)
            .should("be.visible")
            .type(product);
    };

    // [PENDING] Assert that the current text is equal compared to a given value
    assertTextIsEqual() {

    };

    // [PENDING] Assert that the current text contains a given value
    assertTextIsIncluded() {

    };

    // [PENDING] Assert that the current URL contains a given text
    assertUrlContainsText() {

    };

    // Assert that the current URL is equal compared to given a value
    assertUrlIsEqual() {
        cy.url()
            .should('eq', baseUrl);
    };
    
    // Close a given PopUp
    closePopUp(popUpButton){
        this.assertVisibleAndClick(popUpButton);
    };

    // Disable Cypress's default behavior of logging all XMLHttpRequests and fetches
    disableXhrAndFetch() {
        cy.intercept({
            resourceType: /xhr|fetch/
        }, {
            log: false
        });
    };

    // Disable Fetch and Xhr logs and navigate to page
    disableLogsAndNavigate(url, baseUrl) {
        this.disableXhrAndFetch();
        this.goToPage(url, baseUrl);
    };

    // Navigate to a page and assert the URL
    goToPage() {
        cy.visit(url);
        this.assertUrlIsEqual(baseUrl);
    };

    // Filter a given product type through header dropdown's options
    goToSpecificProductType(category, dropdownOption, product) {
        cy.get(dropdownOption)
            .trigger('mouseover');
        cy.contains(category)
            .trigger('mouseover');
        cy.contains(product)
            .click();
    };
};

export const actions = new Actions();