"use strict";
var protractor_1 = require('protractor');
var qbankPage = (function () {
    function qbankPage() {
        this.QUESTION_TEXT = protractor_1.element(protractor_1.by.xpath("//div[@id='content-highlighting-wrap']/div/p/span"));
        this.HIGHLIGHTED_TEXT = protractor_1.element.all(protractor_1.by.className('atom-highlight'));
        this.ANSWER_CHOICES = protractor_1.element.all(protractor_1.by.model("answerChoiceCtrl.sequence.currentItem.interactionState.contentItemArray[contentItemPosition].singleAnswerMultipleChoice['@selectedIndex']"));
        this.NAV = protractor_1.element.all(protractor_1.by.binding('::title'));
        //   QUESTION_ID = element(by.binding('ctrl.sequence.currentItem.contentItemName'));
        this.QUESTION_ID = protractor_1.element(protractor_1.by.binding('currentPosition'));
        this.MARK = protractor_1.element(protractor_1.by.model("ctrl.sequence.currentItem.interactionState.currentContentItem.mark['@marked']"));
    }
    qbankPage.prototype.highlightText = function () {
        protractor_1.browser.actions().doubleClick(this.QUESTION_TEXT.getWebElement()).perform();
    };
    ;
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
    ;
    qbankPage.prototype.selectAnswer = function (position) {
        this.ANSWER_CHOICES.get(position).click();
    };
    ;
    qbankPage.prototype.selectNav = function (position) {
        this.NAV.get(position).click();
    };
    qbankPage.prototype.markQuestion = function () {
        this.MARK.click();
    };
    qbankPage.prototype.getQuestionId = function () {
        return this.QUESTION_ID.getText().then(function (text) {
            return text;
        });
    };
    return qbankPage;
}());
exports.qbankPage = qbankPage;
//# sourceMappingURL=qbank.po.js.map