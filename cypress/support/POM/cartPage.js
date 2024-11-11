import { HomePage } from "./homePage";

export class CartPage extends HomePage {
    constructor(props, product, amount) {
        super(props);
        this.productLabel = "#__next > div > div.sc-3f18c37f-0.cEDUdW > main > div.sc-ivTnkv.crGhDo > div.sc-bBrFuS.fUXLhG > div > div > div:nth-child(1) > div.sc-b6a50d62-4.fOWwGL > div.sc-b6a50d62-5.elRrGI";
        this.amountLabel = "#__next > div > div.sc-3f18c37f-0.cEDUdW > main > div.sc-ivTnkv.crGhDo > div.sc-bBrFuS.fUXLhG > div > div > div:nth-child(1) > div.sc-b6a50d62-6.XtMFe > div.sc-dmRblv.eHxglM > div > span.sc-f855981b-1.dbaZRm.num",
        this.product = product;
        this.amount = amount;
    }

    // Asserting correct element to cart
    AssertCorrectAdditionToCart(product) {
        cy.get(this.productLabel)
            .invoke("text")
            .should("contain", product)
    }

    // Asserting correct amount added to cart
    AssertCorrectAmountInCart(amount) {
        cy.get(this.amountLabel)
            .invoke("text")
            .should("eq", amount)
    }
}

export const cartPage = new CartPage();
