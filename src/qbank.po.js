"use strict";
var protractor_1 = require('protractor');
var qbankPage = (function () {
    function qbankPage() {
        this.QUESTION_TEXT = protractor_1.element(protractor_1.by.xpath("//div[@id='content-highlighting-wrap']/div/p/span"));
        this.HIGHLIGHTED_TEXT = protractor_1.element.all(protractor_1.by.className('atom-highlight'));
    }
    qbankPage.prototype.highlightText = function () {
        protractor_1.browser.actions().doubleClick(this.QUESTION_TEXT.getWebElement()).perform();
    };
    qbankPage.prototype.getHighlightedText = function () {
        var text = '';
        this.HIGHLIGHTED_TEXT.each(function (item) {
            item.getText().then(function (txt) {
                console.log(txt);
                text = text + txt;
            });
        });
        console.log(text);
    };
    return qbankPage;
}());
exports.qbankPage = qbankPage;
