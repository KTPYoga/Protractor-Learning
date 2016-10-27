"use strict";
var protractor_1 = require('protractor');
var loginPage = (function () {
    function loginPage() {
    }
    loginPage.prototype.logInWithProductCode = function (productCode) {
        protractor_1.browser.ignoreSynchronization = true;
        this.loginWithKecAccount();
        protractor_1.browser.wait(protractor_1.protractor.ExpectedConditions.elementToBeClickable(protractor_1.element(protractor_1.by.id('ProductCode'))), 10000);
        protractor_1.element(protractor_1.by.id('ProductCode')).sendKeys(productCode);
        var secs = Math.floor(Date.now() / 1000);
        protractor_1.element(protractor_1.by.name('ExternalUserId')).sendKeys('PR' + secs);
        protractor_1.element(protractor_1.by.css('.btn-submit')).click();
        return protractor_1.browser.driver.isElementPresent(protractor_1.by.className('qbank-create-test-body')).then(function (isPresent) {
            return isPresent;
        });
    };
    loginPage.prototype.loginWithKecAccount = function () {
        protractor_1.browser.get('https://qa-atom.kaptest.com/login/kec?redirectUrl=/login/atom');
        protractor_1.element(protractor_1.by.id('DomainUserName')).sendKeys('kec\\Abot');
        protractor_1.element(protractor_1.by.id('DomainPassword')).sendKeys('8ufRAbRa');
        protractor_1.element(protractor_1.by.css('.btn-submit')).click();
    };
    return loginPage;
}());
exports.loginPage = loginPage;
