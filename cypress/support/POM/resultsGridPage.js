import { HomePage } from "./homePage";
import { utils } from "../utils";
import { baseUrl } from "../fixtures/data.json"

export class ResultsGridPage extends HomePage {
    constructor(props) {
        super(props);
        this.keyword = "keyword=Heladera+Samsung";
        this.gridElement = "#__next > div.sc-dBFDNq.bfLtLE > div.sc-7ca66079-0.cvEICa > div.sc-7ca66079-3.gWWwSt > div.sc-7ca66079-6.kaZkPk > ul > li:nth-child(2) > article > a > a > div";
    }

    // Asserting correct search
    assertCorrectSearch() {
        cy.url()
            .should("include", baseUrl)
            .should("include", this.keyword);
    }

    // Selecting second element
    selectElement(){
        utils.assertVisibleAndClick(this.gridElement)
    }
}   

export const resultsGridPage = new ResultsGridPage();
