import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "../../pom/login/dashboardPage.js";
import DashboardPage from "../../pom/login/dashboardPage.js";

Given('I am logged in ', () => {
    loginPage.dashboardPage().should('have.text', 'Dashboard')
});

When('I should see the dashboard title', () => {
    loginPage.verifyTitle().should('have.text','Dashboard');
});

Then('I see Image user', () => {
    DashboardPage.verifyUserImg().should('be.visible');
});

Then('I see chart', () => {
    DashboardPage.verifyChart().should('be.visible');
});

Then('I see icon pending review', () => {
    DashboardPage.verifyPendingReview().should('be.visible');
});

Then('I see icon candidat review', () => {
    DashboardPage.verifyCandidat().should('be.visible');
});

Then('I see footer dashboard', () => {
    DashboardPage.verifyfooter().should('be.visible');
});

Then('I see button upgrade', () => {
    DashboardPage.buttonUpgrade().should('be.visible');
});

Then('I see copyright orangeHRM', () => {
    DashboardPage.copyright().should('be.visible');
});

Then('I see link orangeHRM', () => {
    DashboardPage.linkorangehrm().should('be.visible');
});
