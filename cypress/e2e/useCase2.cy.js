/// <reference types="cypress" />
import { baseUrl, useCase2 } from "../support/fixtures/data.json"
import { homePage } from "../support/POM/homePage"
import { resultsGridPage } from "../support/POM/resultsGridPage"
import { productDetailPage } from "../support/POM/productDetailPage"
import { actions } from "../support/actions"

before('Page setup', () => {
    homePage.visitPage(baseUrl);
})

actions.disableExceptions();

describe("useCase2", () => {
    it('Should search a product and assert its delivery time', () => {
        homePage.goToNotebooks(
            useCase2.category,
            useCase2.product
        );
        resultsGridPage.assertCorrectFilterIsApplied(useCase2.productToMatch)
        resultsGridPage.filterByBrand(useCase2.brand);
        resultsGridPage.assertCorrectFilterIsApplied(useCase2.brandToMatch);
        resultsGridPage.selectGridElement(useCase2.position);
        productDetailPage.assertTwoDaysDeliveryTime(useCase2.deliveryTime);
    });
});
