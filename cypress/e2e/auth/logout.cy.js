const otp = "123456";

describe('logout test', () => {
    it('Logout', () => {
        cy.visit('https://staging-apps.mapid.io/login') 
        cy.get('input[name="phoneNumber"]')
            .click()
            .clear()
            .type("83195204745", { delay: 50 })
            .should("have.value", "83195204745")
            .blur();
        cy.get("#userAgreement")
            .check({ force: true })
            .should("be.checked");
        cy.get('button[type="submit"]').click()

        cy.get('input[inputmode="numeric"][maxlength="1"]')
            .should("have.length", 6)
            .each(($input, index) => {
                cy.wrap($input).type(otp[index]);
            });
            cy.get('button[type="submit"]')
            .should("not.be.disabled")
            .click();
         cy.wait(5000); // Wait for 2 seconds to ensure the page has loaded after login
         cy.get('button[title="Logout"]').click(); 

    })
})