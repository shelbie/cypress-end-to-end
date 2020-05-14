describe('This is our first test!', () => {
    it("Should return true", () => {
        expect(true).to.equal(true);
    })
})

describe('Testing our form inputs', () => {
    beforeEach(function() {
        //runs before each test in this block
        //arrange - loading website up
        cy.visit("http://localhost:3000")
    })
    it('Input Name into the Name input', () => {
//=========for every test we do follow the below 3 steps: ===========
    //Arrange - get the element - get
    //Act -mimic user interaction -type
    //Assert - test/verify  -should

    //====get = arrange | type = act | should = assert!====
    cy.get('[for="name"] > input')
    .type('Shelbie Taylor')
    .should('have.value', "Shelbie Taylor")
    .type(" is awesome")
    .should('have.value', "Shelbie Taylor is awesome")
    .clear()
    

    //[] = check or select by attributes
    //get() = arrange
    //check() = act
    //should() = assert
    cy.get('input[type="checkbox"]').check().should("be.checked")
    })
})