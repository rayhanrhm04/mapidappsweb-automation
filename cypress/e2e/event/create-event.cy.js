describe("Event", () => {
    beforeEach(() => {
        cy.loginWithOtp();
    });

    it("(Positive) Create Event", () => {
        cy.get('button[id="dashboard-page-community"]')
            .should("be.visible")
            .click();

        cy.wait(3000)
        cy.get('#community-space-list-item-68d63a46fa5103265bb9fb04').should("be.visible").click();
        cy.wait(10000)
        cy.get('#community-feat-menu-button').click();
        cy.get('#community-create-event-button').click();

        cy.get('input[placeholder="e.g. Coffee Talks Bandung"]')
            .should("be.visible")
            .clear()
            .type("Event Automation Test", { delay: 50 });

        cy.get('[placeholder="Testing di Cypress"]')
            .should("be.visible")
            .clear()
            .type("Berkeliling di sekitar kopo", { delay: 50 });

        cy.contains("button", "Dynamic")
            .should("be.visible")
            .click();
        
        cy.get('input[type="datetime-local"]')
            .eq(0)
            .type("2026-09-07T11:15");

        cy.get('input[type="datetime-local"]')
            .eq(1)
            .type("2026-09-30T12:15");
            
        cy.get('input[type="file"][accept="image/*"]').selectFile("cypress/fixtures/images/activitymap.png", { force: true });

        cy.get('img[alt="Basemap Dark MAPID"]')
            .parents("button")
            .click();

        cy.contains("button", "Publish")
            .should("be.visible")
            .should("not.be.disabled")
            .click();
    });

    it("(Negative) Publish button should be disabled when required fields are empty", () => {
        cy.get('button[id="dashboard-page-community"]')
            .should("be.visible")
            .click();

        cy.wait(3000)
        cy.get('#community-space-list-item-68ef38b403f74277da202311').should("be.visible").click();
        cy.wait(10000)
        cy.get('#community-feat-menu-button').click();
        cy.get('#community-create-event-button').click();

        cy.contains("button", "Publish")
            .should("be.visible")
            .should("be.disabled")
    
  });
});