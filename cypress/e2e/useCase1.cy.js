/// <reference types="cypress" />
import { useCase1 } from "../support/fixtures/data.json";
import { homePage } from "../support/POM/homePage";
import { resultsGridPage } from "../support/POM/resultsGridPage";
import { productDetailPage } from "../support/POM/productDetailPage";
import { cartPage } from "../support/POM/cartPage";

before('Page setup', () => {
    homePage.visitPage();
});

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
});

describe("useCase1", () => {
    it('Should search and buy a product', () => {
        homePage.searchProduct(useCase1.product);
        resultsGridPage.assertCorrectSearch();
        resultsGridPage.selectElement(useCase1.position);
        productDetailPage.assertStockAndBuy();
        cartPage.assertCorrectAdditionToCart(useCase1.product);
        cartPage.assertCorrectAmountInCart(useCase1.amount);
    });
});
