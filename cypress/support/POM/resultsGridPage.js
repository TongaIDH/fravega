import { HomePage } from "./homePage";
import { actions } from "../actions";
import { baseUrl } from "../fixtures/data.json"

export class ResultsGridPage extends HomePage {
    constructor(props, position, filterValue, brand) {
        super(props);
        this.position = position;
        this.filterValue = filterValue;
        this.brand = brand;
        this.keyword = "keyword=Heladera+Samsung";
        this.secondPositionElement = "#__next > div.sc-dBFDNq.bfLtLE > div.sc-7ca66079-0.cvEICa > div.sc-7ca66079-3.gWWwSt > div.sc-7ca66079-6.kaZkPk > ul > li:nth-child(3)";
        this.thirdPositionElement = '[href="/p/macbook-pro-13-m2-chip-8-core-cpu-10-core-gpu-512gb-ssd-space-grey-990020955/"] > .sc-812c6cb5-0 > .sc-3ad84bfe-0 > .sc-95e993ee-5 > .sc-ca346929-0';
        this.appleFilterCheckbox = ":nth-child(5) > .sc-4cab333d-0 > .sc-f8576aa3-0 > span";
    };

    // Assert correct product search
    assertCorrectProductSearch(baseUrl) {
        actions.assertSearchUrlIsCorrect(baseUrl, this.keyword)
    };

    // Assert correct filter applied
    assertCorrectFilterIsApplied(filterValue) {
        actions.assertAppliedFilterIsCorrect(filterValue)
    };

    // Select a given grid element
    selectGridElement(position) {
        if (position === 2) {
            actions.assertVisibleAndClick(this.secondPositionElement);
        } else if (position === 3) {
            actions.assertVisibleAndClick(this.thirdPositionElement);
        };
    };

    //Filter by Apple brand using checkbox
    filterByBrand(brand) {
        if (brand === "Apple") {
            actions.filterByBrand(this.appleFilterCheckbox)
        }
    };
};
