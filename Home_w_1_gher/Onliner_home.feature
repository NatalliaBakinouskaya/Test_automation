Feature: Home page

Scenario Outline:  Navigations to news
Given I am on the Onliner Home page.
When I click <link> in the <image div>
Then I will be navigated to the <page>

Examples:
|image div|link|page|
|news Тунеядцы|left uopper люди|People onliner|
|news Авария|left upper авто|AB Onliner|
|news Лукашенко сказал|left upper люди|People onliner|

|news Тунеядцы|right upper комментарии|Onliner news Тунеядцы - scrolled down to comments|
|news Тунеядцы|text Лукашенко сказал|Onliner news Тунеядцы|
