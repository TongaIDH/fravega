/// <reference types="cypress" />
import { baseUrl, useCase1 } from "../support/fixtures/data.json";
import { homePage } from "../support/POM/homePage";
import { resultsGridPage } from "../support/POM/resultsGridPage";
import { productDetailPage } from "../support/POM/productDetailPage";
import { cartPage } from "../support/POM/cartPage";

before('Page setup', () => {
    homePage.visitPage(baseUrl);
});

actions.disableExceptions();

describe("useCase1", () => {
    it('Should search and buy a product', () => {
        homePage.searchProduct(useCase1.product);
        resultsGridPage.assertCorrectProductSearch(baseUrl);
        resultsGridPage.selectGridElement(useCase1.position);
        productDetailPage.assertStockAndBuy();
        cartPage.assertCorrectProductAddition(useCase1.product);
        cartPage.assertCorrectProductAmount(useCase1.amount);
    });
});
