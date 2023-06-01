Feature: eSellers

    Scenario: Check eSellers
        Given I am on the homepage
        When I click on the eSellers link
        Then I should see the eSellers page

    Scenario: Add an eSeller
        Given I am on the eSellers page
        When I click on the Add eSeller button
        Then I should see the Add eSeller modal
        When I fill in the eSeller form
        And I click on the Add eSeller button
        Then I should see the eSellers page
