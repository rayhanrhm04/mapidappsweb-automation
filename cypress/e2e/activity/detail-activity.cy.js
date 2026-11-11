describe('Detail Activity', () => {
    beforeEach(() => {
        cy.loginWithOtp();
    })

    it('(Positive) Open Detail Activity', () => {
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

        cy.contains('[VIRAL] PENANGKAPAN PELAKU PENGHITAMAN')
            .should("be.visible")
            .click();   
            
    })
})