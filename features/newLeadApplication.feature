Feature: New Lead Application

  As a new Lead
  I want to create an application knowing that I do not have my own business, I am not an independent contractor, freelance contractor, gig worker, or W2 employee
  But I have the following employment statuses: Unemployed, retired, disabled, and other
  So that I can see if I am eligible for financing

  Background:
    Given the Lead is ready for new applications

  @web @FA-4026
  Scenario: Verify application denial for a new Lead with specific employment statuses
    When the Lead starts a new application
    #Then the Lead provides their personal information and selects the employment statuses:
    #  | status     |
    #  | Unemployed |
    #  | retired    |
    #  | disabled   |
    #  | other      |
    #And enters the requested financing amount and banking information
    #Then the application should be denied with an option to explore other options
    #And no other financing options are found