// const message = `Test chat automation ${Date.now()}`;

describe('Chat Community', () => {
     it("Chat Community", () => {
        cy.env(["phoneNumber", "otp"]).then(({ phoneNumber, otp }) => {
            cy.visit("/login");

            cy.get('input[name="phoneNumber"]')
                .click()
                .clear()
                .type(phoneNumber, { delay: 50 })
                .should("have.value", phoneNumber)
                .blur();

            cy.get('label[for="userAgreement"]')
                .click("left");

            cy.get("#userAgreement")
                .should("be.checked");

            cy.get('button[type="submit"]')
                .should("not.be.disabled")
                .click();

            cy.url().should("include", "/otp");

            cy.get('input[inputmode="numeric"][maxlength="1"]')
                .should("have.length", 6)
                .each(($input, index) => {
                    cy.wrap($input).type(otp[index]);
                });

            cy.get('button[type="submit"]')
                .should("not.be.disabled")
                .click();

            cy.wait(3000)

            cy.contains("button", "Komunitas MAPID Shitposter").should("be.visible").click();

            cy.get('[name="message"]').should("be.visible").type("Firman WicakSINI", { delay: 50 });

            cy.get('textarea[name="message"]')
                .parent()
                .find('button[type="button"]')
                .last()
                .click();
        });
    });
})