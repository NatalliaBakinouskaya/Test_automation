Feature: Header

Scenario Outline: Simple avigation from header menu
Given I am on the Onliner Home page
When I click <link>
Then I will be navigated to the <page>

Examples:
|link|page|
|Все суперцены|superprice|
|Каталог|catalog|
|Новости|onliner home page|
|Продать авто|ab|
|Автобарахолка|ab|
|Дома и квартиры|realt|
|Баорахолка|baraholka|
|Форум|forum|
|Онлайнер клевер|clever in a new tab|
|$|kurs|
|weather|pogoda|

Scenario Outline: Navigation back to the Home page
Given I am  on the Onliner Home page
When I click <link>
And I click 'onliner' link
Then I will be navigated to the Home page

Examples:
|link|
|Все суперцены|
|Каталог|
|Продать авто|
|Автобарахолка|
|Дома и квартиры|
|Баорахолка|
|Форум|
|Онлайнер клевер|
|$|
|weather|

Scenario Outline: Navigation to the clever ad page
Given I am on the Onliner Home page
When I click 'Online Клевер'
And I click <button>
Then I will be navigated to <page>

Examples:
|link|page|
|Оформить карту 1|onliner log in page|
|Оформить карту 2|onliner log in page|
|Оформить карту 3|onliner log in page|
|Оформить карту 4|onliner log in page|
|Оформить карту 5|onliner log in page|
|Оформить карту 6|onliner log in page|
|Оформить карту 7|onliner log in page|
|Оформить карту срочно|onliner log in page|
|onliner 1| onliner log in page in a new tab|
|mtbank 1| mtbank page in a new tab|
|onliner 2| onliner log in page in a new tab|
|mtbank 2| mtbank page in a new tab|

Scenario Outline: Navigation to news
Given I am on the Onliner Home page
When I hover over 'Новости' 
And I click <link>
Then I will be navigated to <page>

Examples:
|link|page|
|Люди|People Onliner|
|люди новость 1|People Onliner news 1 page|
|люди новость 2|People Onliner news 2 page|
|люди новость 3|People Onliner news 3 page|
|Перейти в раздел 1|People Onliner main page|

|Авто|Auto Onliner|
|авто новость  1|Auto Onliner news 1 page|
|авто новость  2|Auto Onliner news 2 page|
|авто новость  3|Auto Onliner news 3 page|
|Перейти в раздел 2|Auto Onliner main page|

|Техно|Tech Onliner|
|техно новость  1|Tech Onliner news 1 page|
|техно новость  2|Tech Onliner news 2 page|
|техно новость 3|Tech Onliner news 3 page|
|Перейтийти в раздел 3|Tech Onliner main page|

|Недвижимость|Realt Onliner page|
|недвижимость новость  1|Realt Onliner news 1 page|
|недвижимость новость  2|Realt Onliner news 2 page|
|недвижимость новость  3|Realt Onliner news 3 page|
|недвижимость в раздел 3|Realt Onliner main page|

Scenario Outline: Navigation to Auto pages
Given I am  on the Onliner Home page
When I hover over 'Авто барахолка' 
And I click <link>
Then I will be navigated to <page>
And Tab <tab> will be opend
And In the filter field <filter element> <value> will be checked

Examples:
|link|page|filter element|value|
|Автобарахолка|Ab Onliner|Авто|null|null|
|***** объявлений|Ab Onliner|Авто|null|null|

|Новые авто|Ab Onliner|Состояние автомобиля - Новый|checked|
|С пробегом|Ab Onliner|Состояние автомобиля - С пробегом|checked|

|Цена с НДС|Ab Onliner|Цена м НДС|checked|
|Авто до 4000 р.|Ab Onliner|Цена, BYN  - до|4000|
|Авто до 10000 р.|Ab Onliner|Цена, BYN  - до|10000|
|Авто до 20000 р.|Ab Onliner|Цена, BYN  - до|20000|

|Минск|Ab Onliner|местонахождение - город|Минск|
|Гомель|Ab Onliner|местонахождение - город|Гомель|
|Могилев|Ab Onliner|местонахождение - город|Могилев|
|Витебск|Ab Onliner|местонахождение - город|Витебск|
|Гродно|Ab Onliner|местонахождение - город|Гродно|
|Брест|Ab Onliner|местонахождение - город|Брест|


|Audi|Ab Onliner|марка|Audi|
|BMW|Ab Onliner|марка|Audi|
|Citroen|Ab Onliner|марка|Audi|
|Ford|Ab Onliner|марка|Audi|
|Mazda|Ab Onliner|марка|Audi|
|Mercedes-Benz|Ab Onliner|марка|Audi|
|Nissan|Ab Onliner|марка|Audi|
# to be continued...

|Мотобарахолка|Ab Onliner|null|null|
|**** объявлений|Ab Onliner|null|null|

|Aprilia|Mb Onliner|Aprilia|
|BMW|Mb Onliner|марка|BMW|
|Harley-Davidson|Mb Onliner|марка|Harley-Davidson|
|Honda|Mb Onliner|марка|Honda|
|HORS|Mb Onliner|марка|HORS|
|Jawa|Mb Onliner|марка|Jawa|
# to be continued...
Scenario Outline: Navigation to Realt pages
Given I am on the Onliner Home page
When I hover over 'Дома и квартиры' 
And I click <link>
Then I will be navigated to <page>
And Tab <tab> will be opend
And In the filter field <filter element> <value> will be checked

Examples:
|link|page|filter element|value|
|Продажа|Realt Onliner|Продажв|null|null|
|***** объявлений|Realt Onliner pk|null|

|Минск|Realt Onliner pk|Город-район-улица|Минск|
|Гомель|Realt Onliner pk|Город-район-улица|Гомель|
|Могилев|Realt Onliner pk|Город-район-улица|Могилев|
|Витебск|Realt Onliner pk|Город-район-улица|Витебск|
|Гродно|Realt Onliner pk|Город-район-улица|Гродно|
|Брест|Realt Onliner pk|Город-район-улица|Брест|

|1-комнатные|Realt Onliner pk|1|selected|
|2-комнатные|Realt Onliner pk|2|selected|
|3-комнатные|Realt Onliner pk|3|selected|
|4+-комнатные|Realt Onliner pk|4|selected|

 
|До 30 000 $|Realt Onliner pk|$[2]|30000|
|30 000–80 000 $|Realt Onliner pk|$[1]|30000|
|30 000–80 000 $|Realt Onliner pk|$[2]|80000|
|От 80 000 $ |Realt Onliner pk|$[2]|80000|
# to be continued...
