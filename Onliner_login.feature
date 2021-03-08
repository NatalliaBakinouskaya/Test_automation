Feature: Login

Scenario: Onliner Login with existing credentials
Given I am on the Onliner Home page
And Following users exist:
|login or mail|password|
|user1| password1|
|user2@gmail.com|password2|
|user3|password3|

When I click the button "Вход" into login field
And I enter <login ar mail> into field "Ник или e-mail"
And I enter <password> into password "Пароль"
And I click the button "Войти"
And I check the box "I'm not a bot"
Then I will be logged in


Scenario: Onliner Login through social network
Given I am on the Onliner Home page
And Following user exist and is logged to the social networks, which are connected with Onlener profile:
|password|social network|
|password1|facebook|
|password2|vk|
|password3|google|

When I click the button <social network>
And I click the button "Войти"
Then I will be logged in


Scenario: Registration
Given I am on the Onliner Home page
And Following users should be created:
|e-mail|password|
|user1@mail.com| password1|
|user2@gmail.com|password2|
|user3@mail.com|password3|

When I click the button "Вход" into login field
And I click the link "Зарегистрироваться на Onliner"
And I enter <e-mail> into field "Ваш e-mail"
And I enter <password> into password "Придумайте пароль"
And I enter <password> into password "Повторите"
And I click the button "Зарегистрироваться"
And I click the button "Перейти в почту"
Then I will be redirected to the email signing in page