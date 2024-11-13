/// <reference types="cypress" />

import { baseUrl, endpoints, payload, token } from "../support/fixtures/dataBack.json";
import { actions } from "../support/actions";

describe("Backend Challenge", () => {
    const body = {
        name: `${payload.name} ${actions.randomNumber()}`,
        email: `${actions.randomNumber()}${payload.email}`,
        gender: "male",
        status: "active",
    }

    it("Should create a user", () => {
        cy.request({
            method: "POST",
            url: `${baseUrl}${endpoints.users}`,
            headers: {
                grant_type: "Bearer token",
                authorization: token,
            },
            body: body
        }).as("newUser").then((response) => {
            expect(response.status).to.equal(201);
            console.log(response.body)
            expect(response.body.name).to.equal(body.name);
            expect(response.body.email).to.equal(body.email);
            expect(response.body.gender).to.equal(body.gender);
            expect(response.body.status).to.equal(body.status);
        })
    });


    it("Should obtain users", () => {
        cy.request({
            method: "GET",
            url: `${baseUrl}${endpoints.users}`
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).to.not.be.empty;
            user = response.body[0].id;
        })
    });

    let user = undefined;
    it("Should obtain specific user", () => {
        cy.request({
            method: "GET",
            url: `${baseUrl}${endpoints.users}${user}`
        }).then((response) => {
            expect(response.status).to.equal(200);
            console.log(response.body)
            expect(response.body).to.not.be.empty;
        })
    });
});
