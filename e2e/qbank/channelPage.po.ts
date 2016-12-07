import { browser, element, by, protractor} from 'protractor';

var kec_username = 'pchatterjee';
var kec_password = 'Welcome1';

export class channelPage{
    loginToStudyPlanViaBackDoor(productConfig){
        browser.ignoreSynchronization = true;
        browser.get('https://atom.kaptest.com/login/atom/');
        browser.sleep(2000);
        element(by.id('DomainUserName')).sendKeys(kec_username);
        element(by.id('DomainPassword')).sendKeys(kec_password);
        element(by.css('.btn-submit')).click();
        element(by.id('ProductCode')).sendKeys(productConfig);
        element(by.id('ExternalUserId')).sendKeys('hi');
        element(by.css('.btn-submit')).click(); 
        }   

    goToChannel(){
        browser.ignoreSynchronization = true;
        browser.get('https://atom.kaptest.com/channel/');
        } 

    loginToDashboardViaBackDoor(classCode){
        browser.ignoreSynchronization = true;
        browser.get('https://feature6-atom.kaptest.com/login/atom/');
        browser.sleep(2000);
        element(by.id('DomainUserName')).sendKeys(kec_username);
        element(by.id('DomainPassword')).sendKeys(kec_password);
        element(by.css('.btn-submit')).click();
        element(by.id('ClassCode')).sendKeys(classCode);
        element(by.id('ExternalUserId')).sendKeys('hi');
        element(by.css('.btn-submit')).click(); 
        browser.get('https://feature6-atom.kaptest.com/dashboard/');
        browser.sleep(1000);
        } 

    getDashboardPageTitle(){
        //browser.ignoreSynchronization = true;
        return element (by.css('h1')).getText().then(function(text){
            return text;
        });
        }     

    getSessionTitle(){
        //browser.ignoreSynchronization = true;
        return element (by.css('h2')).getText().then(function(text){
            return text;
        });
        }


}
