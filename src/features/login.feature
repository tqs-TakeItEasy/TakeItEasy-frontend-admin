Feature: Login

    Scenario: Login with valid credentials
        Given I am on the login page
        When I enter valid credentials
        Then I should be logged in

    Scenario: Login with invalid credentials
        Given I am on the login page
        When I enter invalid credentials
        Then I should see an error message

    