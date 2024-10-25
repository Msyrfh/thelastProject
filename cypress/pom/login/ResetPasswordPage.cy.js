export default class ResetPasswordPage {

    static enterUsername(){
        return cy.get('input[name="username"]').type('Admin');
    }

    static buttonReset(){
        return cy.get('[type="submit"]');
    }
    static buttonCancel(){
        return cy.get('[type="submit"]');
    }

    static resetpass(){
        return cy.get('.oxd-form');
    }

    static linksuccess(){
        return cy.get('.oxd-text oxd-text--p orangehrm-sub-title');
    }

}
