/// <reference types="cypress" />
import { baseUrl, useCase1 } from "../support/fixtures/data.json"
import { homePage } from "../support/POM/homePage"
import { resultsGridPage } from "../support/POM/resultsGridPage"
import { productDetailPage } from "../support/POM/productDetailPage"
import { cartPage } from "../support/POM/cartPage"

before('Page setup', () => {
    homePage.visitPage("")
})

it('Should search and buy a product', () => {

    homePage.closePopUp()

    homePage.searchProduct(useCase1.product)

    resultsGridPage.assertCorrectSearch()

    resultsGridPage.selectElement()

    productDetailPage.assertStockAndBuy()

    cartPage.AssertCorrectAdditionToCart(useCase1.product)
    cartPage.AssertCorrectAmountInCart(useCase1.amount)
})
