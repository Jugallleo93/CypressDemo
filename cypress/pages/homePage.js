export class homePage {

    weblocators = {
        search_input: '.form-control.input-lgll',
        click_search: '.btn.btn-default.btn-lg',
        product: 'img[title="Macbook"]',
        addtocart: 'Add to Cart',
        successMessages: 'div.alert.alert-success.alert-dismissible'
    }

    searchProduct(productName) {
        cy.get(this.weblocators.search_input).type(productName)
        cy.get(this.weblocators.click_search).click()
    }

    addToCart() {
        cy.contains(this.weblocators.addtocart).first().click()
    }

    verifySuccessMessage() {
        return cy.get(this.weblocators.successMessages)
    }
}