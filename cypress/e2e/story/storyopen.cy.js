describe('Story', () => {
    beforeEach(() => {
        cy.loginWithOtp();
    })
    it('(Positive) Open Story', () => {
        cy.get('button[id="dashboard-page-community"]')
            .should("be.visible")
            .click();

        cy.wait(3000)

        cy.get('#community-space-list-item-68ef38b403f74277da202311')
            .should("be.visible")
            .click();

        cy.wait(5000)

        cy.get('#community-filter-menu-button')
            .should("be.visible")
            .click();

        cy.wait(2000)   
        cy.get("#community-filter-show-story-button")
            .should("be.visible")
            .click();   

        cy.get('#community-story-6af42f39f1f63f563ccd8fe6')
            .should("be.visible")  
            .click();
    })
})