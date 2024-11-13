import { actions } from "../actions";
import { HomePage } from "./homePage";

export class ProductDetailPage extends HomePage {
    constructor(
        props,
        deliveryTime
    ) {
        super(props);
        this.deliveryTime = deliveryTime;
        this.textToCompare = "Comprar";
        this.addToCartButton = "#__next > div.sc-dBFDNq.bfLtLE > div.sc-991858e6-1.cmxQsL > div.sc-2b48db22-4.hYRCgX > div.sc-2b48db22-1.dOdKEt > div.sc-56271133-0.sc-56271133-1.dBlgGj.gNxZCK > div > div.sc-441c2f70-7.cLfDwW > div.sc-441c2f70-10.ePybCr > button";
        this.deliveryTimeLabel = "#__next > div.sc-dBFDNq.bfLtLE > div.sc-991858e6-1.cmxQsL > div.sc-2b48db22-4.hYRCgX > div.sc-2b48db22-1.dOdKEt > div.sc-56271133-0.sc-56271133-1.dBlgGj.gNxZCK > div > div.sc-441c2f70-7.cLfDwW > div.sc-441c2f70-9.hdnGJd > div:nth-child(1) > hgroup > div > p.sc-477ee6eb-3.sc-477ee6eb-5.jttkyQ.fOSKgB";
    };

    // Assert there's available stock and adding to cart
    assertStockAndBuy() {
        actions.buyProduct(this.addToCartButton, this.textToCompare)
    };

    // Assert correct delivery time for the product
    assertTwoDaysDeliveryTime(deliveryTime) {
        actions.assertDeliveryTime(this.deliveryTimeLabel, deliveryTime)
    };
};

export const productDetailPage = new ProductDetailPage();
