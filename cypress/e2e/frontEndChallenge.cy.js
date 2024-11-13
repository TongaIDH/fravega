/// <reference types="cypress" />
import { urls, useCase1, useCase2 } from "../support/fixtures/data.json";
import { homePage } from "../support/POM/homePage";
import { resultsGridPage } from "../support/POM/resultsGridPage";
import { productDetailPage } from "../support/POM/productDetailPage";
import { cartPage } from "../support/POM/cartPage";

beforeEach('Page setup', () => {
    homePage.visitPage(urls.baseUrl);
});

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
});

describe("FrontEnd Challenge", () => {
    it('Use Case 1 - Should search and buy a product', () => {
        homePage.searchProduct(useCase1.product);
        resultsGridPage.assertCorrectProductSearch(urls.baseUrl);
        resultsGridPage.selectGridElement(useCase1.position);
        productDetailPage.assertStockAndBuy();
        cartPage.assertCorrectProductAddition(useCase1.product);
        cartPage.assertCorrectProductAmount(useCase1.amount);
    });

    it('Use Case 2 - Should search a product and assert its delivery time', () => {
        homePage.goToNotebooks(
            useCase2.category,
            useCase2.product
        );
        resultsGridPage.assertCorrectFilterIsApplied(useCase2.productToMatch);
        resultsGridPage.filterByBrand(useCase2.brand);
        resultsGridPage.assertCorrectFilterIsApplied(useCase2.brandToMatch);
        resultsGridPage.selectGridElement(useCase2.position);
        productDetailPage.assertTwoDaysDeliveryTime(useCase2.deliveryTime);
    });
});
