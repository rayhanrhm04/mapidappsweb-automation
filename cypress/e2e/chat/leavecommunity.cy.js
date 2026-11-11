describe('Leave', () => {
    beforeEach(() => {
        cy.loginWithOtp();
    })
    it("Leave Community", () => {
        cy.get('button[id="dashboard-page-community"]')
            .should("be.visible")
            .click();

        cy.wait(3000)
        cy.get('#community-space-list-item-69ca2d8ff04dacba03452938')
            .should("be.visible")
            .click();
            
        cy.get('#community-space-more-detail-item-69ca2d8ff04dacba03452938').should("be.visible").click();
        cy.wait(3000)
        cy.get('#community-leave-button').should("be.visible").click();
  });
})