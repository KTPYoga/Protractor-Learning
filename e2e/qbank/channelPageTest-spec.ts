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

    // describe('verify channel page ', function(){

    //     var testname= this.getFullName();


    //     it ('should load channelPage', function(){
    //     //browser.ignoreSynchronization = true;
    //     console.log('------------'+testname+'------------');
        
    //     channel.loginToStudyPlanViaBackDoor('lifesupport');
    //     expect (browser.getCurrentUrl()).toContain("/studyplan");
    //     //browser.sleep(3000);
    //     channel.goToChannel();
    //     browser.sleep(3000);
    //     });
    // });  

    describe('verifyLastSessionHomeworkComponents', function(){

        var testname= this.getFullName();


        xit ('should load Dashboard', function(){
            //browser.ignoreSynchronization = true;
            console.log('------------'+testname+'------------');
            
            //Log into Kaptest and go to Dashboard for GRE
            channel.loginToDashboardViaBackDoor('RAAGL16225');

            //Verify last session homework elements
            channel.getDashboardPageTitle().then(function(text){
                expect(text).toBe('Dashboard');
            });
            browser.sleep(5000);
            channel.getSessionTitle().then(function(text){
                expect(text).toBe('After Class');
            });

            expect (channel.verifyContinueLink()).toBe(true);
            expect (channel.verifyLessonTitle()).toBe(true);
            expect (channel.verifyIconPresent()).toBe(true);
            expect (channel.verifyAssignmentTypePresent()).toBe(true);
            expect (channel.verifyProgressBarPresent()).toBe(true);


        });
    });  


    describe('verifyContinueLinkWorks', function(){

        var testname= this.getFullName();
        xit ('should load Dashboard', function(){

            //browser.ignoreSynchronization = true;
            console.log('------------'+testname+'------------');
            
            //Log into Kaptest and go to Dashboard for GRE
            channel.loginToDashboardViaBackDoor('RAAGL16225');

            //Verify last session homework elements
            channel.getDashboardPageTitle().then(function(text){
                expect(text).toBe('Dashboard');
            });

            browser.sleep(5000);
            
            //get href for continue link
            channel.getContinueLinkAddress().then(function(text){
                element (by.className('homework--link')).click();
                browser.sleep(5000);
                console.log (text);
                console.log (browser.getCurrentUrl()+'==============');//
                //expect (browser.getCurrentUrl()).toBe(text);
            });
        });  


     });    


     describe('verify sat account', function(){

        var testname= this.getFullName();
        xit ('tests front door login + homework as session title', function(){
            console.log('------------'+testname+'------------');
            
            channel.loginToDashboardViaFrontDoor();
            channel.getSessionTitle().then(function(text){
                expect(text).toBe('Homework');
            });

         });  
     });   



     describe('verify MCAT account', function(){

    // tests front door login + homework as session title
        var testname= this.getFullName();
        xit ('test MCAT account = after class', function(){
            console.log('------------'+testname+'------------');
            
            channel.loginToDashboardViaBackDoor('MRGL14025');
            channel.getSessionTitle().then(function(text){
                expect(text).toBe('After Class');
            });

         });  
     });


    describe('verify no homework', function(){

    // tests front door login + homework as session title
        var testname= this.getFullName();
        it ('test MCAT account = after class', function(){
            console.log('------------'+testname+'------------');
            
            channel.loginToDashboardViaBackDoor('LAOTO16033');
            browser.sleep(5000);
            element (by.css('.card div p')).getText().then(function(text){
                expect(text).toBe('NO HOMEWORK YET');
            });

         });  
     });
});