describe("BlogSection", () => {
  beforeEach(() => {
    // Intercept API request and inject the mock data
    cy.intercept("GET", "https://dev.to/api/articles?page=1&per_page=6", {
      fixture: "mock_articles.json", // Mock data
    }).as("fetchArticles");

    // Visit the page where BlogSection is rendered
    cy.visit("/");

    // Wait for the API call to complete
    cy.wait("@fetchArticles");
  });

  it("renders the blog section", () => {
    // Blog section must be visible
    cy.get("[data-testid='blog-section']").should("be.visible");
  });

  it("displays blog posts", () => {
    // Blog posts must be displayed
    cy.get("[data-testid='blog-post']").should("have.length.greaterThan", 0);
  });

  it("formats the date correctly", () => {
    // Date format must be correct
    cy.get("[data-cy=article-date]").each(($date) => {
      const dateText = $date.text();
      expect(dateText).to.match(/^\d{1,2}(st|nd|rd|th) \w+ \d{4}$/);
    });
  });

  it("navigates to the correct article page on click", () => {
    // Simulate a click on the first article and verify that we are navigated to the correct article page
    cy.fixture("mock_articles.json").then((articles) => {
      // Ensure that the view post button is visible and clickable
      cy.get("[data-cy=article-card]").first().should("be.visible").click();

      // Verify the URL has changed to the correct article page
      cy.location("pathname").should("eq", `/articles/${articles[0].id}`);
    });
  });

  it("displays a 404 page for non-existent articles", () => {
    // Simulate navigation to a non-existent article page
    cy.visit("/articles/001", { failOnStatusCode: false }); // So that Cypress does not fail on 404

    // Verify the 404 page is displayed
    cy.get("[data-testid='404-page']").should("be.visible");
  });

  it("handles API errors gracefully", () => {
    // Simulating an API error and verify the error message
    cy.intercept("GET", "https://dev.to/api/articles?page=1&per_page=6", {
      statusCode: 500,
      body: { message: "Internal Server Error" },
    }).as("fetchArticlesError");

    cy.visit("/"); // Reload the page to trigger the API call
    cy.wait("@fetchArticlesError");

    // Assert error message is displayed
    cy.get("[data-testid='error-message']").should("be.visible");
  });

  it("loads more articles on button click", () => {
    // Intercept the API request for the next page of articles
    cy.intercept("GET", "https://dev.to/api/articles?page=2&per_page=6", {
      fixture: "articles-page-2.json",
    }).as("fetchArticlesPage2");

    // Click the "Load More" button
    cy.get("button").contains("Load More").click();

    // Wait for the API call to complete
    cy.wait("@fetchArticlesPage2");

    // Verify that more articles are loaded
    cy.get("[data-testid='blog-post']").should("have.length.greaterThan", 2);
  });

  it("filters articles based on selected tag", () => {
    // Select a tag from the dropdown
    cy.get("select").select("JavaScript");

    // Verify that articles are filtered based on the selected tag
    cy.get("[data-testid='blog-post']").should("have.length.greaterThan", 0);
  });

  it("filters articles based on search query", () => {
    // Type a search query into the search input
    cy.get("input[placeholder='Search']").type("Test Article 1");

    // Verify that articles are filtering based on the search query
    cy.get("[data-testid='blog-post']").should("have.length.greaterThan", 0);
  });
});
