export class registerPage {

    weblocators = {

        firstName: '#input-firstname',
        lastName: '#input-lastname',
        email: '#input-email',
        telephone: '#input-telephone',
        password: '#input-password',
        passwordConfirm: '#input-confirm',
        policyCheckbox: 'input[type="checkbox"]',
        confirm: '.btn.btn-primary',
        search: '#APjFqb'
    }

    openURL() {
        cy.visit(Cypress.env('URL'))
    }

    searchGoogle(search) {
        cy.get(this.weblocators.search).type(search)
    }

    enterFirstName(FName) {
        cy.get(this.weblocators.firstName).type(FName)
    }

    enterLastName(LName) {
        cy.get(this.weblocators.lastName).type(LName)
    }

    enterEmail(email) {
        cy.get(this.weblocators.email).type(email)
    }

    enterTelephone(phoneno) {
        cy.get(this.weblocators.telephone).type(phoneno)
    }

    enterPassword(password) {
        cy.get(this.weblocators.password).type(password)
        cy.get(this.weblocators.passwordConfirm).type(password)
    }

    selectCheckbox() {
        cy.get(this.weblocators.policyCheckbox).check()
    }

    clickContinue() {
        cy.get(this.weblocators.confirm).click()
    }
}