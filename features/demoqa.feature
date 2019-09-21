@hormiguitas
Feature: Project 1

  Scenario: User should be able to fill some fields
    Given User is in the home page
    When WidgetsMenu is visible
    And SidebarMenu is visible
    Then User click on the Widgets
    And Logo is visible
    And User click on the contactForm
    And User fills Firstname
    And User fills Lastname
    And User fills country
    And Values are confirmed
    And Values are submitted
    And Confirmation message is displayed
