Feature: Footer

Scenario Outline: Simple avigation from footer menu
Given I am on the Onliner Home page
When I click <link>
Then I will be navigated to the <page>

Examples:
|link|page|
|О компании|Onliner About|
|Контакты редакции|Onliner Contacts|
|Пользовательское соглашение|Onliner Siterools|
|Правила возврата|Onliner pravila|
|Реклама|Onliner advertising|
|Публичные договоры|Onliner publ|
|Размещение в каталоге|Onliner reg
|Политика конфиденциальности|Onliner polit|
|Вакансии|Onliner vacancy|
|Манифест|manifest|
|Поддержка пользователей|support|
|F|Facebook account Onliner in a new tab|
|VK|VK account Onliner in a new tab|
|twitter|twitter account Onliner in a new tab|
|Yourtube|Yourtube account Onliner in a new tab|