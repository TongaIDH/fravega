/// <reference types="cypress" />
import { useCase1 } from "../support/fixtures/data.json";
import { homePage } from "../support/POM/homePage";
import { resultsGridPage } from "../support/POM/resultsGridPage";
import { productDetailPage } from "../support/POM/productDetailPage";
import { cartPage } from "../support/POM/cartPage";

before('Page setup', () => {
    homePage.visitPage();
});

it('Should search and buy a product', () => {
    homePage.closePopUp();
    homePage.searchProduct(useCase1.product);
    resultsGridPage.assertCorrectSearch();
    resultsGridPage.selectElement(useCase1.position);
    productDetailPage.assertStockAndBuy();
    cartPage.assertCorrectAdditionToCart(useCase1.product);
    cartPage.assertCorrectAmountInCart(useCase1.amount);
});
