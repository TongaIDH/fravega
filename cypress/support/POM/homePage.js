import { baseUrl, useCase1 } from "../fixtures/data.json";
import { utils } from "../utils";

export class HomePage {
    constructor(product, category) {
        this.product = product;
        this.category = category;
        this.url = "";
        this.popUpButton = "#modal > div.sc-kgOKUu.pmMMW.sc-fmzyuX.jiZBaZ > button";
        this.searchInput = "#__next > div.sc-dBFDNq.bfLtLE > header > div.sc-dwalKd.ciAlUp > form > fieldset > div.sc-dkmUuB.kufEAO > input";
        this.submitSearchButton = "#__next > div.sc-dBFDNq.bfLtLE > header > div.sc-dwalKd.ciAlUp > form > fieldset > div.sc-dkmUuB.kufEAO > button";
        this.notebooks =  "#__next > div.sc-dBFDNq.bfLtLE > div:nth-child(2) > div:nth-child(2) > a:nth-child(2)";
        this.categoriesDropdown = "Categorías";
    };

    visitPage(url) {
        cy.DisableXhrAndFetchLogs();
        cy.visit(this.url);
        cy.url()
            .should('eq', baseUrl);
    };

    // Close initial pop-up
    closePopUp() {
        utils.assertVisibleAndClick(this.popUpButton);
    };

    // Searching for "Heladera Samsung"
    searchProduct(product) {
        utils.assertVisibleAndType(this.searchInput, product);
        utils.assertVisibleAndClick(this.submitSearchButton);
    };

    goToNotebooks(category) {
        cy.contains(this.categoriesDropdown)
            .click();
        cy.contains(category)
            .click();
        cy.get(this.notebooks)
            .click();
    };
};

export const homePage = new HomePage();