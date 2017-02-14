"use strict";
var protractor_1 = require('protractor');
var qbankHomePage = (function () {
    function qbankHomePage() {
        this.CREATE_QBANK_QUESTIONS = protractor_1.element(protractor_1.by.css('.create-test-btn'));
    }
    qbankHomePage.prototype.goToQBankHome = function () {
        return protractor_1.browser.get('https://qa-atom.kaptest.com/qbank');
    };
    qbankHomePage.prototype.clickHeaderNavTabScrollsToSection = function (title, scrollToSection) {
        var section = protractor_1.element(protractor_1.by.css('#' + scrollToSection + ' .container'));
    };
    qbankHomePage.prototype.hamburgerMenuIsVisible = function () {
        return protractor_1.browser.wait(protractor_1.protractor.ExpectedConditions.elementToBeClickable(protractor_1.element(protractor_1.by.css('.fa-bars'))), 5000).then(function () {
            console.log('hamburger visible');
            return true;
        }, function (err) {
            console.error("failed hamburfer test");
            return false;
        });
    };
    qbankHomePage.prototype.reviewContentItem = function (sequenceId, sequence) {
        var url = 'https://qa-atom.kaptest.com/qbank/review/preview/' + sequenceId + '/' + sequence;
        protractor_1.browser.get(url);
        return protractor_1.browser.wait(protractor_1.protractor.ExpectedConditions.elementToBeClickable(protractor_1.element(protractor_1.by.css('.answer-choice-text'))), 10000).then(function () {
            return true;
        }, function (err) {
            return false;
        });
    };
    qbankHomePage.prototype.clickCreateQBank = function () {
        // browser.wait(protractor.ExpectedConditions.elementToBeClickable(element(by.css('.create-test-btn'))),10000);
        this.CREATE_QBANK_QUESTIONS.click();
    };
    return qbankHomePage;
}());
exports.qbankHomePage = qbankHomePage;
//# sourceMappingURL=qbankHome.po.js.map