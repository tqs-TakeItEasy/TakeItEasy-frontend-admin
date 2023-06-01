Feature: Deliveries

    Scenario: Check deliveries
        Given I am on the homepage
        When I click on the deliveries link
        Then I should see the deliveries page

    Scenario: Cancel delivery
        Given I am on the deliveries page
        When I click on the cancel delivery button
        Then The delivery should be cancelled
