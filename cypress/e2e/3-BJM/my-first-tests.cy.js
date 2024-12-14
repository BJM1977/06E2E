/// <reference types="cypress" />

describe('Meine erste Test Suite', () => {
  // Test 1: Besuchen einer Seite und Überprüfen des Titels
  it('Besucht die Beispielseite und überprüft den Titel', () => {
    cy.visit('https://example.cypress.io');
    cy.title().should('eq', 'Cypress.io: Kitchen Sink');
  });

  // Test 2: Überprüfen eines Buttons und Klicken
  it('Findet und klickt auf den Button', () => {
    cy.visit('https://example.cypress.io');
    cy.contains('type').click();
    cy.url().should('include', '/commands/actions');
  });

  // Test 3: Eingabefeld testen
  it('Füllt ein Eingabefeld aus', () => {
    cy.visit('https://example.cypress.io/commands/actions');
    cy.get('.action-email')
      .type('test@example.com')
      .should('have.value', 'test@example.com');
  });
});
