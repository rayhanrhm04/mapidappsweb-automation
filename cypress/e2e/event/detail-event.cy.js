require('cypress-xpath');

describe("Event", () => {
    beforeEach(() => {
      cy.loginWithOtp();
    });

    it("Open detail event", () => {
            cy.get('button[id="dashboard-page-community"]')
                .should("be.visible")
                .click();

            cy.wait(3000)
            cy.get('#community-space-list-item-68ef38b403f74277da202311').should("be.visible").click();
            cy.wait(10000)

            cy.xpath('//button[@id="community-filter-menu-button"]').click();
            // cy.get('#community-filter-menu-button').click();
            cy.get('#community-filter-show-event-button').click();

            cy.contains('EVENT GALIAN DI PAGI HARI').click();
            // cy.get('#community-event-card-0').click();

            cy.get('#community-access-event-scanner-button').should("be.visible")
            cy.get('#community-join-event-button').should("be.visible")
    });

    it("(Positive) Join Event", () => {
        cy.get('button[id="dashboard-page-community"]')
            .should("be.visible")
            .click();

        cy.wait(3000)
        cy.get('#community-space-list-item-68ef38b403f74277da202311').should("be.visible").click();
        cy.wait(10000)        

        cy.xpath('//button[@id="community-filter-menu-button"]').click();
        // cy.get('#community-filter-menu-button').click();
        cy.get('#community-filter-show-event-button').click();

        cy.contains('EVENT GALIAN DI PAGI HARI').click();

        cy.get('#community-access-event-scanner-button').should("be.visible")
        cy.get('#community-join-event-button').should("be.visible").click();
    });

    it("(Positive) Comments Event", () => {
        cy.get('button[id="dashboard-page-community"]')
        .should("be.visible")
        .click();

        cy.wait(3000)
        cy.get('#community-space-list-item-68ef38b403f74277da202311').should("be.visible").click();
        cy.wait(10000)        

        cy.xpath('//button[@id="community-filter-menu-button"]').click();
        // cy.get('#community-filter-menu-button').click();
        cy.get('#community-filter-show-event-button').click();

        cy.contains('EVENT GALIAN DI PAGI HARI').click();

        cy.get('#community-event-comment-section-button')
            .should("be.visible")
            .click();

        cy.get('#community-create-comment-input-field')
            .should("be.visible")
            .clear()
            .type("This is a test comment.", { delay: 50 });

        cy.get('#community-send-comment-button')
        .click();

    })
});