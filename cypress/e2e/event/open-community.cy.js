describe("Open Community", () => {
  it("Open Community", () => {
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

      cy.wait(8000)

      cy.get('button[id="dashboard-page-community"]')
        .should("be.visible")
        .click();
    });
  });
});