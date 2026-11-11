describe('Login', () => {
    it('Login with valid credentials', () => {
        cy.env(['phoneNumber']).then(({ phoneNumber }) => {
            cy.visit('/login')
            cy.get('input[name="phoneNumber"]')
                .click()
                .clear()
                .type(phoneNumber, { delay: 50 })
                .should("have.value", phoneNumber)
                .blur();
            cy.get("#userAgreement")
                .check({ force: true })
                .should("be.checked");
            cy.get('button[type="submit"]').click()
        });
    })

    it('Login with OTP', () => {
        cy.env(['phoneNumber', 'otp']).then(({ phoneNumber, otp }) => {
            cy.visit('/login')
            cy.get('input[name="phoneNumber"]')
                .click()
                .clear()
                .type(phoneNumber, { delay: 50 })
                .should("have.value", phoneNumber)
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
        });
    })
})
