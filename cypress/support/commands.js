
Cypress.Commands.add('loginWithOtp', () => {
  cy.env(['phoneNumber', 'otp']).then(({ phoneNumber, otp }) => {
    cy.visit('/login');

    cy.get('input[name="phoneNumber"]')
      .clear()
      .type(phoneNumber, { delay: 50 })
      .should('have.value', phoneNumber)
      .blur();

    cy.get('#userAgreement')
      .check({ force: true })
      .should('be.checked');

    cy.get('#continue-login-button', { timeout: 10000 })
      .should('be.enabled')
      .click();

    cy.url({ timeout: 15000 }).should('include', '/otp');

    cy.get('input[inputmode="numeric"][maxlength="1"]')
      .should('have.length', 6)
      .each(($input, index) => {
        cy.wrap($input).type(otp[index]);
      });

    cy.get('button[type="submit"]')
      .should('not.be.disabled')
      .click();

    cy.get('#dashboard-page-community', { timeout: 20000 })
      .should('be.visible');
  });
});
