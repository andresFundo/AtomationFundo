Feature: WEB Automation

Background:
    Given User starts with the flow
  @web
  Scenario: Verify login on sauce demo site
    When User logs on portal web
    Then User verifies the login was succsesfully