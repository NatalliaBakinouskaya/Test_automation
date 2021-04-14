import { browser, by, element, ElementFinder, ExpectedConditions } from "protractor";
import { BrowserHacks } from "../../support/browserHacks";

const defaultTimeout = browser.params.defaultTimeout;

export = function featureSteps() {

   
    this.setDefaultTimeout(600 * 1000);

 
    let browserHacks = new BrowserHacks;

   
    this.Before(async () => {
    });

    this.After(async () => {
        
        await browserHacks.ClearBrowserData();
    });

    
    this.Given(/^I am on Onliner page$/, async () => {
        browser.navigate().to(browser.params.onlinerByURL);
    });

// Scenario 1
    this.When(/^I click Catalog link$/, async () => {
        let catalogLink:ElementFinder = await element(by.xpath("//a[contains(text(), 'КАТАЛОГ')]"));
        await catalogLink.click();
        
    });

    this.Then(/^I see Catalog$/, async () => {
        await browser.wait(ExpectedConditions.urlContains("https://catalog.onliner.by/"), defaultTimeout, "URL wasn't changed");
        // await browser.sleep(3000);
    });

//Scenario 2
    this.Given(/^I am on Onliner-Catalog page$/, async () => {
        browser.navigate().to(browser.params.catalogByURL);
    });

    this.When(/^I'm looking for lapata$/, async () => {
                let searchField:ElementFinder = await element(by.css("input.fast-search__input"));
                
                await browser.wait(ExpectedConditions.visibilityOf(searchField), defaultTimeout, "Search Field wasn't loaded or has incorrect locator");
                await searchField.sendKeys("Лопата");
                // await browser.sleep(3000);
            });


    this.Then(/^I see it in Catalog$/, async () => {

        let searchPopupIframe:ElementFinder = element(by.css(".modal-iframe"));
        await browser.wait(ExpectedConditions.presenceOf(searchPopupIframe), defaultTimeout, "Iframe not loaded");
        await browser.switchTo().frame(searchPopupIframe.getWebElement());
        let searchedElement = element(by.xpath(`//div[@class='product__title']/a[contains(text(),'Лопата')]`));
        await browser.wait(ExpectedConditions.visibilityOf(searchedElement), defaultTimeout, `"Лопата" item not found in Search Results`);
        // await browser.switchTo().window("Каталог Onliner");
        await browser.sleep(3000);
            });        

}