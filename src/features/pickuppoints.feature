Feature: PickUpPoints

    Scenario: Check PickUpPoints
        Given I am on the homepage
        When I click on the PickUpPoints link
        Then I should see the PickUpPoints page

    Scenario: Add a PickUpPoint
        Given I am on the PickUpPoints page
        When I click on the add button
        Then I should see the add PickUpPoint modal
        When I fill in the form
        And I click on the submit button
        Then I should see the PickUpPoints page with the new PickUpPoint

    Scenario: Remove a PickUpPoint
        Given I am on the PickUpPoints page
        When I click on the remove button
        Then I should see the PickUpPoints page without the removed PickUpPoint