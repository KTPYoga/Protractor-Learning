import { browser, element, by, protractor} from 'protractor';

export class loginPage{
    logInWithProductCode(productCode){
      //  browser.ignoreSynchronization = true;
        this.loginWithKecAccount();
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(element(by.id('ProductCode'))),10000);
        element(by.id('ProductCode')).sendKeys(productCode);
        var secs = Math.floor(Date.now() / 1000);
        element(by.name('ExternalUserId')).sendKeys('PR'+secs);
        element(by.css('.btn-submit')).click(); 
        return browser.driver.isElementPresent(by.className('qbank-create-test-body')).then(function (isPresent){
            return isPresent;
        });
    }
    loginWithKecAccount(){
        browser.get('https://qa-atom.kaptest.com/login/kec?redirectUrl=/login/atom');
        element(by.id('DomainUserName')).sendKeys('kec\\Abot');
        element(by.id('DomainPassword')).sendKeys('8ufRAbRa');
        element(by.css('.btn-submit')).click();
    }
}