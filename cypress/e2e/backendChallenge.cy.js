/// <reference types="cypress" />

import { baseUrl, endpoints, payload } from "../support/fixtures/dataBack.json";

describe("Backend Challenge", () => {
    // it("Should create a user", () => {
    //     cy.request({
    //         method: "POST",
    //         url: baseUrl.concat(endpoints.postUser),
    //         body: payload
    //     })
    // });
    it.only("Should obtain users", () => {
        cy.request({
            method: "GET",
            url: "https://gorest.co.in/public/v2/users"
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).to.not.be.empty;
        })
    });
    // it("Should obtain specific user", () => {

    // });
});
