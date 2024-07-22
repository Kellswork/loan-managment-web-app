describe('Dashboard Page', () => {
  beforeEach(() => {
    // Visit the dashboard page
    cy.visit('/dashboard');
  });

  it('should display the page heading', () => {
    cy.get('h2').should('contain', 'Users');
  });

  it('should render the Card component', () => {
    cy.get('.card-container').should('exist');
    cy.get('.card-item').should('have.length', 4); // Adjust based on the number of cards
  });

  it('should render the Table component', () => {
    cy.get('.table-container').should('exist');
  });

  it('should display pagination controls inside the Table component', () => {
    cy.get('.pagination-container').should('exist');
  });
});