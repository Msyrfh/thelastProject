export default class DashboardPage {
    static verifyTitle() {
        return cy.get('h6').contains('Dashboard')
    }
  
    static verifyUserImg() {
        return cy.get('.oxd-userdropdown-img')
    }
  
    static verifyChart() {
        return cy.get('.emp-attendance-chart');
    }

    static verifyPendingReview() {
        return cy.get('.oxd-icon-button oxd-icon-button--danger orangehrm-report-icon')
      }
    static verifyCandidat(){
        return cy.get('.oxd-icon-button oxd-icon-button--info orangehrm-report-icon')
    }
    static verifyIconQuic(){
        return cy.get('.oxd-icon bi-lightning-charge-fill orangehrm-dashboard-widget-icon')
    }

    static verifyfooter(){
        return cy.get('.oxd-layout-footer')
    }
    static buttonUpgrade(){
        return cy.get('.oxd-glass-button orangehrm-upgrade-button')
    }

    static buttonQuestion(){
        return cy.get('.oxd-icon bi-question-lg')
    }

    static copyright(){
        return cy.contains('p', '© 2005 - 2024 OrangeHRM, Inc. All rights reserved.7');
    }

    static linkorangehrm(){
        return cy.contains('a', 'http://www.orangehrm.com');

    }
}