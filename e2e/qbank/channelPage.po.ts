import { browser, element, by, protractor} from 'protractor';
import { envConfig } from './envConfig';

//TEST CONFIGURATIONS
var config = 'feature6';
var kec_username = 'abot';
var kec_password = '8ufRAbRa';
let env = new envConfig();


export class channelPage{

    //ELEMENTS
    ICON = 'db-assignment-progress div.assignment__group__label span';
    AssignmenType = 'db-assignment-progress div.assignment__group__label h4';
    ProgressComplete = 'db-assignment-progress div.assignment__group__summary h5';
    TimeRemaining = this.ProgressComplete + ' span';
    User = 'DomainUserName';
    Password = 'DomainPassword';
    LoginSubmit ='.btn-submit';
    ProductCode = 'ProductCode';
    ExternalUserID =  'ExternalUserId';
    ClassCode = 'ClassCode';
    SubmitBtn= '.btn-submit';
    Email = 'email';
    Pwd = 'password';
    LoginBtn = '//*[@type="submit"]';
    ContinueLink = 'homework--link';
    Homework = '.card div p';


    getDomain(){
        browser.ignoreSynchronization = true;
        env.setenv(config);
        var url = 'https://'+ env.getenv();
        return url;
        } 



    loginToStudyPlanViaBackDoor(productConfig){
        browser.ignoreSynchronization = true;
        browser.get(this.getDomain()+'/login/atom/');
        browser.sleep(2000);
        element(by.id(this.User)).sendKeys(kec_username);
        element(by.id(this.Password)).sendKeys(kec_password);
        element(by.css(this.LoginSubmit)).click();
        element(by.id(this.ProductCode)).sendKeys(productConfig);
        element(by.id(this.ExternalUserID)).sendKeys('hi');
        element(by.css(this.LoginSubmit)).click(); 
        }   

    goToChannel(){
        browser.ignoreSynchronization = true;
        browser.get(this.getDomain()+'/channel/');
        } 

    loginToDashboardViaBackDoor(classCode){
        browser.ignoreSynchronization = true;
        browser.get(this.getDomain()+'/login/atom/');
        browser.sleep(2000);
        element(by.id(this.User)).sendKeys(kec_username);
        element(by.id(this.Password)).sendKeys(kec_password);
        element(by.css(this.LoginSubmit)).click();
        element(by.id(this.ClassCode)).sendKeys(classCode);
        element(by.id(this.ExternalUserID)).sendKeys('hi');
        element(by.css(this.SubmitBtn)).click(); 
        browser.get(this.getDomain()+'/dashboard/');
        browser.sleep(3000);
        } 


    loginToDashboardViaFrontDoor(email , password){
        browser.ignoreSynchronization = true;
        browser.get('http://www.kaptest.com/login.jhtml');
        browser.sleep(2000);
        element(by.id(this.Email)).sendKeys(email);
        element(by.id(this.Pwd)).sendKeys(password);
        element(by.xpath(this.LoginBtn)).click();
        browser.sleep(2000);
        browser.get('https://www.kaptest.com/myaccount');
        browser.sleep(5000);
        var dom = this.getDomain();
        element(by.linkText('Access my Online Resources')).getAttribute('href').then(function(text){
            browser.get(dom+text.substring(23));
            browser.sleep(5000);
        });
        browser.get(this.getDomain()+'/dashboard/');
        browser.sleep(5000);
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

    getNoHomeworkText(){
        //browser.ignoreSynchronization = true;
        return element (by.css(this.Homework)).getText().then(function(text){
            return text;
        });
        }


    getContinueLinkAddress(){
        //browser.ignoreSynchronization = true;
        return element (by.className(this.ContinueLink)).getAttribute('href').then(function(text){
            return text;
        });
        }

    clickContinue(){
        //browser.ignoreSynchronization = true;
        element (by.className(this.ContinueLink)).click();
        browser.sleep(5000);
        }

    


    verifyContinueLink(){
        //browser.ignoreSynchronization = true;
          return element (by.className(this.ContinueLink)).isPresent().then(function(){
              console.log('Continue link visible');
              //this.clickContinue();
              return true;
          }, function(err){
                console.error("Continue link not displyed");
                return false;
        });
        }   


    verifyLessonTitle(){
        //browser.ignoreSynchronization = true;
          return element (by.css('h3')).isPresent().then(function(){
              console.log('Lesson Title link visible');
              return true;
          }, function(err){
                console.error("Lesson Title not displyed");
                return false;
        });
        } 

    verifyIconPresent(){
        //browser.ignoreSynchronization = true;
          return element (by.css(this.ICON)).isPresent().then(function(){
              console.log('Icon visible');
              return true;
          }, function(err){
                console.error("Icon not displyed");
                return false;
        });
        } 


    verifyAssignmentTypePresent(){
        //browser.ignoreSynchronization = true;
          return element (by.css(this.AssignmenType)).isPresent().then(function(){
              console.log('AssignmentType visible');
              return true;
          }, function(err){
                console.error("AssignmentType not displyed");
                return false;
        });
        } 


     verifyProgressBarPresent(){
        //browser.ignoreSynchronization = true;
          return element (by.css(this.ProgressComplete)).isPresent().then(function(){
              console.log('% Complete visible');
              return true;
          }, function(err){
                console.error("% Complete not displyed");
                return false;
        });
        } 

    verifyTimeRemainingPresent(){
        //browser.ignoreSynchronization = true;
          return element (by.css(this.TimeRemaining)).isPresent().then(function(){
              console.log('Time visible');
              return true;
          }, function(err){
                console.error("Time not displyed");
                return false;
        });
        } 




}
