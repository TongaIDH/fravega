import { actions } from "../actions";
import { urls } from "../fixtures/dataFront.json"
export class HomePage {
    constructor(
        category,
        endpoint,
        product
    ) {
        this.category = category;
        this.endpoint = endpoint;
        this.product = product;
        this.categoriesDropdown = ".sc-jEACwC > .sc-dAlyuH";
        this.popUpButton = "#modal > div.sc-kgOKUu.pmMMW.sc-fmzyuX.jiZBaZ > button";
        this.searchInput = "#__next > div.sc-dBFDNq.bfLtLE > header > div.sc-dwalKd.ciAlUp > form > fieldset > div.sc-dkmUuB.kufEAO > input";
        this.submitSearchButton = "#__next > div.sc-dBFDNq.bfLtLE > header > div.sc-dwalKd.ciAlUp > form > fieldset > div.sc-dkmUuB.kufEAO > button";
        this.notebooks = "#__next > div.sc-dBFDNq.bfLtLE > div:nth-child(2) > div:nth-child(2) > a:nth-child(2)";
    };

    // Visit the page and close the initial pop-up
    visitPage(endpoint,) {
        actions.disableLogsAndNavigate(endpoint, urls.baseUrl);
        actions.closePopUp(this.popUpButton);
    };

    // Search for "Heladera Samsung"
    searchProduct(product) {
        actions.assertVisibleAndType(this.searchInput, product);
        actions.assertVisibleAndClick(this.submitSearchButton);
    };

    // Filter notebooks product through header's cateries
    goToNotebooks(category, product) {
        actions.goToSpecificProductType(this.categoriesDropdown, category, product);
    };
};

export const homePage = new HomePage();
