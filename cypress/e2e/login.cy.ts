describe('Login Page', () => {
  beforeEach(() => {
    // Visit the home page
    cy.visit('/');
  });

  it('should display the login form', () => {
    // Check if the login form is visible
    cy.get('.login-container').should('be.visible');
  });

  it('should validate email and password fields', () => {
    // Enter invalid email
    cy.get('input[name="email"]').type('invalidemail');
    cy.contains('Please enter a valid email address').should('be.visible');

    cy.get('input[name="password"]').type('123');
    cy.contains('Password must be at least 4 characters long').should('be.visible');
  });

  it('should toggle password visibility', () => {
    // Type password
    cy.get('input[name="password"]').type('password123');

    // Toggle password visibility
    cy.get('#toggle').click();
    
    // Check if password is visible
    cy.get('input[name="password"]').should('have.attr', 'type', 'text');

    // Toggle password visibility again
    cy.get('#toggle').click();
    
    // Check if password is hidden
    cy.get('input[name="password"]').should('have.attr', 'type', 'password');
  });

  it('should log in with valid credentials', () => {
    // Enter valid email and password
    cy.get('input[name="email"]').type('test@example.com');
    cy.get('input[name="password"]').type('password123');

    // Submit the form
    cy.get('form').submit();

    // Check if loading state is applied
    cy.get('button').should('have.class', 'button-loading');

    // Wait for redirection
    cy.wait(1000);

    // Check if redirected to the dashboard
    cy.url().should('include', '/dashboard/users');
  });

  it('should disable submit button for invalid inputs', () => {
    // Check if button is disabled with empty inputs
    cy.get('button[type="submit"]').should('be.disabled');

    // Enter invalid email
    cy.get('input[name="email"]').type('invalidemail');
    cy.get('input[name="password"]').type('123');

    // Check if button is still disabled
    cy.get('button[type="submit"]').should('be.disabled');
  });
});
