export class Actions {
    constructor(
        amount,
        baseUrl,
        category,
        deliveryTime,
        endpoint,
        popUpButton,
        product,
        selector,
        value
    ) {
        this.amount = amount;
        this.baseUrl = baseUrl;
        this.category = category;
        this.deliveryTime = deliveryTime;
        this.endpoint = endpoint;
        this.popUpButton = popUpButton;
        this.product = product;
        this.selector = selector;
        this.value = value;
    };

    // Assert that a given amount is available in cart for a product
    assertAmountInCart(selector, amount) {
        cy.get(selector)
            .invoke("text")
            .should("eq", amount);
    };

    // Assert that the current URL contains a given filter
    assertAppliedFilter(value) {
        cy.url()
            .should("include", value);
    };

    // Assert that a given delivery time is correct
    assertDeliveryTime(selector, deliveryTime) {
        cy.get(selector)
            .invoke("text")
            .should("eq", deliveryTime);
    };

    // Assert that a given product is available on cart
    assertProductInCart(selector, product) {
        cy.get(selector)
            .invoke("text")
            .should("contain", product);
    };

    // Assert that the current URL is equal compared to a given value
    assertSearchUrlIsCorrect(baseUrl, value) {
        cy.url()
            .should("include", baseUrl)
            .and("include", value);
    };

    // Assert that the current URL is equal compared to given a value
    assertUrlIsEqual(baseUrl) {
        cy.url()
            .should('eq', baseUrl);
    };

    // Assert that a given component is visible and click on it
    assertVisibleAndClick(selector) {
        cy.get(selector)
            .should("be.visible")
            .click();
    }

    // Assert that a given component is visible and type on it
    assertVisibleAndType(selector, product) {
        cy.get(selector)
            .should("be.visible")
            .type(product);
    };

    // Assert that a given product has stock and click to buy it
    buyProduct(selector, value) {
        cy.get(selector)
            .should("be.visible")
            .and("have.text", value)
            .click();
    };

    // Close a given PopUp
    closePopUp(popUpButton) {
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
    disableLogsAndNavigate(endpoint, baseUrl) {
        this.disableXhrAndFetch();
        this.goToPage(endpoint, baseUrl);
    };

    // Filter by a given brand
    filterByBrand(selector) {
        cy.get(selector)
            .scrollIntoView()
            .click({ force: true });
    };

    // Navigate to a given page and assert the URL
    goToPage(endpoint, baseUrl) {
        cy.visit(endpoint);
        this.assertUrlIsEqual(baseUrl);
    };

    // Filter a given product type through header dropdown's options
    goToSpecificProductType(categoriesDropdown, category, product) {
        cy.get(categoriesDropdown)
            .trigger('mouseover');
        cy.contains(category)
            .trigger('mouseover');
        cy.contains(product)
            .click();
    };

    randomNumber() {
        return Math.floor(Math.random() * 1000000);
    }
};

export const actions = new Actions();
