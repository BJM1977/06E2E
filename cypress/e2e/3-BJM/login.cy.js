/// <reference types="cypress" />

describe('Login Test für MyCampaign', () => {
  it('Navigiert zur Login-Seite, füllt Benutzername und Passwort aus und loggt sich ein', () => {
    // URL der Login-Seite
    const baseUrl = 'https://mycampaign.ch/login';
    
    // Testdaten
    const username = 'bjoern.maegerli@ict.csbe.ch';  // Ersetzen Sie durch einen gültigen Benutzernamen
    const password = 'Admin12345';  // Ersetzen Sie durch ein gültiges Passwort
    
    // Aufrufen der Login-Seite
    cy.visit(baseUrl);

    // Finden und Ausfüllen des Benutzernamen-Feldes
    cy.get('#username') // Ersetzen Sie '#username' durch den richtigen Selektor
      .type(username);

    // Finden und Ausfüllen des Passwort-Feldes
    cy.get('#password') // Ersetzen Sie '#password' durch den richtigen Selektor
      .type(password);

    // Klicken auf den Login-Button
    cy.get('button[type="submit"]').click(); // Ersetzen Sie den Selektor entsprechend der DOM-Struktur

    // Überprüfen, ob die Anmeldung erfolgreich war
    cy.url().should('not.include', '/login'); // URL sollte sich nach dem Login ändern
    cy.contains('Willkommen').should('exist'); // Ersetzen Sie 'Willkommen' durch einen Text, der auf der Startseite angezeigt wird
  });
});
