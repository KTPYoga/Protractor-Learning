import {browser,element,by,protractor} from 'protractor';

export class qbankHomePage{

CREATE_QBANK_QUESTIONS = element(by.css('.create-test-btn'));

    goToQBankHome(){
        return browser.get('https://qa-atom.kaptest.com/qbank');
    } 

    clickHeaderNavTabScrollsToSection(title,scrollToSection){
        var section = element(by.css('#'+scrollToSection+' .container')); 
    }

    hamburgerMenuIsVisible(){
        return browser.wait(protractor.ExpectedConditions.elementToBeClickable(
            element(by.css('.fa-bars'))),5000).then (function (){
                console.log('hamburger visible');
                return true;
            }, function(err){
                console.error("failed hamburfer test");
                return false;
            });
    }

    reviewContentItem(sequenceId,sequence){
        var url = 'https://qa-atom.kaptest.com/qbank/review/preview/'+sequenceId+'/'+sequence;
        browser.get(url);
        return browser.wait(protractor.ExpectedConditions.elementToBeClickable(
            element(by.css('.answer-choice-text'))),10000).then(function(){
                return true;
            },function(err){
                return false;
            });
    }

    clickCreateQBank(){
        this.CREATE_QBANK_QUESTIONS.click();
    }
}