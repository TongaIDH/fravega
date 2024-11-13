/// <reference types="cypress" />

import { baseUrl, endpoints, payload } from "../support/fixtures/dataBack.json";



describe("Backend Challenge", () => {
    // it("Should create a user", () => {
    //     cy.request({
    //         method: "POST",
    //         url: "https://gorest.co.in/public/v2/users",
    //         body: {
    //             name: "Gaston Garcia",
    //             email: "gaston@garcia.a",
    //             gender: "male",
    //             status: "active"
    //         }
    //     }).then((response) => {
    //         expect(response.status).to.equal(201);
    //         console.log(response.body)
    //         expect(response.body).to.equal(object);
    //     })
    // });


    it("Should obtain users", () => {
        cy.request({
            method: "GET",
            url: `${baseUrl}${endpoints.getUsers}`
        }).then((response) => {
            expect(response.status).to.equal(200);
            console.log(response.body)
            expect(response.body).to.not.be.empty;
            console.log(response.body[0].id)
            user = response.body[0].id
        })
    });

    let user = undefined;
    it("Should obtain specific user", () => {
        cy.request({
                method: "GET",
                url: `${baseUrl}${endpoints.getUsers}${user}`
            }).then((response) => {
                expect(response.status).to.equal(200);
                console.log(response.body)
                expect(response.body).to.not.be.empty;
            })
    });
});
