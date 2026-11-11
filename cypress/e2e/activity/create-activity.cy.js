describe('Activity', () => {
    beforeEach(() => {
        cy.loginWithOtp();
    });

    it("(Positive) Create Activity 1 image", () => {
            cy.get('button[id="dashboard-page-community"]')
                .should("be.visible")
                .click();

            cy.wait(3000)
            cy.get('#community-space-list-item-68ef38b403f74277da202311').should("be.visible").click();
            cy.wait(5000)
            cy.get('#community-feat-menu-button').click();
            cy.get('#community-create-activity-button').click();

            cy.get('input[placeholder="e.g Morning Run"]')
                .should("be.visible")
                .clear()
                .type("Test Automation Testing Web 1 images", { delay: 50 });

            cy.get('[placeholder="How was it? add some details..."]')
                .should("be.visible")
                .clear()
                .type("Test Description automation test web with cypress", { delay: 50 });

            cy.contains("Choose media")
                .click({ force: true });

            cy.get('input[type="file"]')
                .selectFile("cypress/fixtures/images/spiderman.jpg", { force: true });

            cy.contains("button", "Post")
                .should("be.visible")
                .click();
    });

    it("(Positive) Create Activity 5 images", () => {
            cy.get('button[id="dashboard-page-community"]')
                .should("be.visible")
                .click();

            cy.wait(3000)
            cy.get('#community-space-list-item-68d63a46fa5103265bb9fb04').should("be.visible").click();
            cy.wait(5000)
            cy.get('#community-feat-menu-button').click();
            cy.get('#community-create-activity-button').click();

            cy.get('input[placeholder="e.g Morning Run"]')
                .should("be.visible")
                .clear()
                .type("Test Automation Testing Web 5 images", { delay: 50 });

            cy.get('[placeholder="How was it? add some details..."]')
                .should("be.visible")
                .clear()
                .type("Test activity with 5 images", { delay: 50 });

            cy.contains("button", "Choose media")
                .should("be.visible")
                .click();

            cy.get('input[type="file"]').selectFile(
                [
                    "cypress/fixtures/images/diajak.jpg",
                    "cypress/fixtures/images/spiderman.jpg",
                    "cypress/fixtures/images/gemini.png",
                    "cypress/fixtures/images/gym.jpg",
                    "cypress/fixtures/images/coursera.png",
                ],{ force: true });

            cy.contains("button", "Post")
                .should("be.visible")
                .click();
    });
})