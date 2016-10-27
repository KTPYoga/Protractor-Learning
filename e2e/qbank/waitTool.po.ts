import { browser,element,by,protractor } from 'protractor';

export class waitToolPage {

    waitForElementDisplay(webElement,timeOutInSeconds){
         browser.wait(webdriver.until.elementLocated(webElement),timeOutInSeconds);
         
        return browser.wait(protractor.ExpectedConditions.presenceOf(webElement),timeOutInSeconds).then(function(){
            return true;
        },function(err){
            return false;
        });
       
    }

}