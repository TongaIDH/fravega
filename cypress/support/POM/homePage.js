import { baseUrl } from "../fixtures/data.json"
import { utils } from "../utils";

export class HomePage {
    constructor(product) {
        this.product = product
        this.url = "";
        this.popUpButton = "#modal > div.sc-kgOKUu.pmMMW.sc-fmzyuX.jiZBaZ > button";
        this.searchInput = "#__next > div.sc-dBFDNq.bfLtLE > header > div.sc-dwalKd.ciAlUp > form > fieldset > div.sc-dkmUuB.kufEAO > input";
        this.submitSearchButton = "#__next > div.sc-dBFDNq.bfLtLE > header > div.sc-dwalKd.ciAlUp > form > fieldset > div.sc-dkmUuB.kufEAO > button";
    }

    visitPage(url) {
        cy.DisableXhrAndFetchLogs();
        cy.visit(this.url);
        cy.url()
            .should('eq', baseUrl);
    }
    
    // Close initial pop-up
    closePopUp() {
        utils.assertVisibleAndClick(this.popUpButton)
    };

    // Searching for "Heladera Samsung"
    searchProduct(product) {
        utils.assertVisibleAndType(this.searchInput, product)
        utils.assertVisibleAndClick(this.submitSearchButton)
    }
}

export const homePage = new HomePage();