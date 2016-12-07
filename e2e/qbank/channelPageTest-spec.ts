var util = require('util');
import { channelPage } from './channelPage.po';
import { browser, element, by, protractor} from 'protractor';

describe ('Dashboard Tests -', function(){

    let channel: channelPage;

    beforeEach(function () {
        browser.manage().deleteAllCookies();
        channel = new channelPage();
    });

    // afterEach(function(){
    //     browser.close();
    // });

    describe('verify channel page ', function(){

        var testname= this.getFullName();


        it ('should load channelPage', function(){
        //browser.ignoreSynchronization = true;
        console.log('------------'+testname+'------------');
        
        channel.loginToStudyPlanViaBackDoor('lifesupport');
        expect (browser.getCurrentUrl()).toContain("/studyplan");
        //browser.sleep(3000);
        channel.goToChannel();
        browser.sleep(3000);
        });
    });  

    describe('verifyLastSessionHomeworkComponents', function(){

        var testname= this.getFullName();


        it ('should load Dashboard', function(){
        //browser.ignoreSynchronization = true;
        console.log('------------'+testname+'------------');
        
        //Log into Kaptest and go to Dashboard for GRE
        channel.loginToDashboardViaBackDoor('RAAGL16225');

        //Verify last session homework elements
        channel.getDashboardPageTitle().then(function(text){
            expect(text).toBe('Dashboard');
        });
        channel.getSessionTitle().then(function(text){
            expect(text).toBe('After Class');
        });



        browser.sleep(3000);
        });
    });  




});