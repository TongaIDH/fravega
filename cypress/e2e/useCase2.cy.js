/// <reference types="cypress" />
import { useCase2 } from "../support/fixtures/data.json"
import { homePage } from "../support/POM/homePage"
import { resultsGridPage } from "../support/POM/resultsGridPage"
import { productDetailPage } from "../support/POM/productDetailPage"

before('Page setup', () => {
    homePage.visitPage();
})

it('Should search a product and assert its delivery time', () => {
    //COMPLETE
    homePage.closePopUp();
    homePage.goToNotebooks(useCase2.category);

    resultsGridPage.assertCorrectfilter(useCase2.product);

    // //WORKING
    // resultsGridPage.filterByBrand(useCase2.brand);

    // //WORKING
    // resultsGridPage.assertCorrectFilter(useCase2.brand);
    
    //COMPLETE
    resultsGridPage.selectElement(useCase2.position);
    productDetailPage.assertCorrectDeliveryTime(useCase2.deliveryTime);
});
