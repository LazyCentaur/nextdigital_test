Feature: User Authentication tests

Background:
    Given User navigates to the application

@all @login
Scenario Outline: Login should be success
    Given User enter the username as "<username>"
    And User enter the password as "<password>"
    When User click on "Login" button
    Then <result>

    Examples:
    | username      | password      | result                      |
    | standard_user | secret_sauce  | Login should be success     |
    | wrong         | wrong         | Login should not be success |
