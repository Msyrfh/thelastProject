Feature: Forgot Password

  Scenario: User successfully requests a password reset
    Given I visit the URL
    And I should see the homepage
    When I click on the "Forgot your password?" link
    And I enter my registered Username
    And I submit the request
    Then I should see a confirmation message