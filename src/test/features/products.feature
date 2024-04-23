Feature: User Authentication tests

Background:
    Given User navigates to the application
    And User has logged in successfully

@all @listOfProducts
Scenario: All products are in page
    Then I see 6 products in the page

@all @addToCart
Scenario: Add to Cart a product
    Given I get a random item from list
    When I click on Add to cart button
    And I click on shopping cart
    Then I see Checkout button
    And The article is the same that I chose before
