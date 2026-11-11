require('cypress-xpath');

describe('Delete Activity', () => {
    beforeEach(() => {
        cy.loginWithOtp();
    })

    it("(Positive) Delete Activity", () => {
        cy.get('button[id="dashboard-page-community"]')
            .should("be.visible")
            .click();

        cy.wait(3000)

        cy.get('#community-space-list-item-68ef38b403f74277da202311')
            .should("be.visible")
            .click();

        cy.wait(5000)

        cy.get('#community-feat-menu-button')
            .should("be.visible")
            .click();

        cy.wait(2000)

        cy.get("#community-list-activities-button")
            .should("be.visible")
            .click();

        cy.get('#community-list-activity-more-button-6ab333df0751d3d253274072')
            .should("be.visible")
            .click();

        cy.get('#community-list-activity-delete-button-6ab333df0751d3d253274072')
            .should("be.visible")
            .click();
            
        cy.get('#community-view-delete-activity-confirm-button')
            .should("be.visible")
            .click();
    })
})