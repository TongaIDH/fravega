/// <reference types="cypress" />
import { useCase2 } from "../support/fixtures/data.json"
import { homePage } from "../support/POM/homePage"
import { resultsGridPage } from "../support/POM/resultsGridPage"
import { productDetailPage } from "../support/POM/productDetailPage"

before('Page setup', () => {
    homePage.visitPage();
})

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
    });

describe("useCase2", () => {
    it('Should search a product and assert its delivery time', () => {
        homePage.goToNotebooks(useCase2.category);
        resultsGridPage.assertCorrectFilter(useCase2.productToMatch)
        resultsGridPage.filterByBrand(useCase2.brand);
        resultsGridPage.assertCorrectFilter(useCase2.brandToMatch);
        resultsGridPage.selectElement(useCase2.position);
        productDetailPage.assertCorrectDeliveryTime(useCase2.deliveryTime);
    });
});

