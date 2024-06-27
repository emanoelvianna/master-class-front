describe('Login Flow', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display login form', () => {
    cy.get('h1').should('contain', 'Login');
  });

  it('should login successfully with correct credentials', () => {
    cy.get('#username').type('user');
    cy.get('#password').type('password');
    cy.get('button').click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Login successful!');
    });
  });

  it('should fail login with incorrect credentials', () => {
    cy.get('#username').type('wronguser');
    cy.get('#password').type('wrongpassword');
    cy.get('button').click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Login failed.');
    });
  });
});