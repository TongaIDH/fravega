import { actions } from "../actions";
import { HomePage } from "./homePage";

export class CartPage extends HomePage {
    constructor(amount, props) {
        super(props);
        this.amount = amount;
        this.amountLabel = "#__next > div > div.sc-3f18c37f-0.cEDUdW > main > div.sc-ivTnkv.crGhDo > div.sc-bBrFuS.fUXLhG > div > div > div:nth-child(1) > div.sc-b6a50d62-6.XtMFe > div.sc-dmRblv.eHxglM > div > span.sc-f855981b-1.dbaZRm.num";
        this.productLabel = "#__next > div > div.sc-3f18c37f-0.cEDUdW > main > div.sc-ivTnkv.crGhDo > div.sc-bBrFuS.fUXLhG > div > div > div:nth-child(1) > div.sc-b6a50d62-4.fOWwGL > div.sc-b6a50d62-5.elRrGI";
    };

    // Assert correct product added to cart
    assertCorrectProductAddition(product) {
        actions.assertProductInCart(this.productLabel, product);
    };

    // Assert correct product's amount added to cart
    assertCorrectProductAmount(amount) {
        actions.assertAmountInCart(this.amountLabel, amount);
    };
};

export const cartPage = new CartPage();
