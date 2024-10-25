// cypress/support/step_definitions/forgot_password_steps.js

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "../../../pom/login/login.cy";
import loginPage from "../../../pom/login/ResetPasswordPage.cy";

Given('I visit the URL', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.wait(10000);
});

When('I should see the homepage', () => {
    loginPage.verifyLoginPage().should('have.text','Login');
});

When('I click on the "Forgot your password?" link', () => {
    loginPage.clickForgotPassword();
});

When('I enter my registered username', () => {
    resetPasswordPage.enterUsername('admin'); 
});


Then('I should see a confirmation message', () => {
    resetPasswordPage.getConfirmationMessage().should('contain', 'Email sent successfully!'); // Sesuaikan dengan pesan yang benar
});
