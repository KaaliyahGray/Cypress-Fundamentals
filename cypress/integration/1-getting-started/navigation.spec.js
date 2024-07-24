 <refrence types = "cypress" />

 descibe("Navigation"), () => {
    it("should navigate to conference sessions page"), () =>{
        cy.visit("http://localhost:1137/conference");
        cy.get("h1").contains("View Sessions");

        cy.url().should("include", "/sessions");
    }
 }