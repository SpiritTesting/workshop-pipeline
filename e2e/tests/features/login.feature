@Prio-HOCH
Feature: login
    Um ein Blogeintrag zu lesen oder zu schreiben logge ich mich als Benutzer auf der Webseite ein.

    Scenario: Nicht Registrierter Nutzer kann sich nicht anmelden
        Given a not registerd user
        When I open the login page
        And I enter the username and password
        Then I am not logged in
        And Exception
