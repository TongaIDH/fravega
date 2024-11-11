import { HomePage } from "./homePage";
import { utils } from "../utils";
import { baseUrl } from "../fixtures/data.json"

export class ResultsGridPage extends HomePage {
    constructor(props, position, filter) {
        super(props);
        this.keyword = "keyword=Heladera+Samsung";
        this.secondPositionElement = "#__next > div.sc-dBFDNq.bfLtLE > div.sc-7ca66079-0.cvEICa > div.sc-7ca66079-3.gWWwSt > div.sc-7ca66079-6.kaZkPk > ul > li:nth-child(2) > article > a > a > div";
        this.thirdPositionElement = "#__next > div.sc-dBFDNq.bfLtLE > div.sc-7ca66079-0.cvEICa > div.sc-7ca66079-3.gWWwSt > div.sc-7ca66079-6.kaZkPk > ul > li:nth-child(3) > article > a > a > div";
        this.position = position;
        this.filter = filter;
    };

    // Asserting correct search
    assertCorrectSearch() {
        cy.url()
            .should("include", baseUrl)
            .should("include", this.keyword);
    };

    // Asserting correct filter
    assertCorrectfilter(filter) {
        cy.url()
            .should("contain", filter)
    }

    // Selecting second element
    selectElement(position){
        if(position === 2){
            utils.assertVisibleAndClick(this.secondPositionElement);  
        };
        if(position === 3){
            utils.assertVisibleAndClick(this.thirdPositionElement);
        }; 
    };

    filterByBrand(brand) {
        cy.contains(brand)
            .click()
    }
};

export const resultsGridPage = new ResultsGridPage();
