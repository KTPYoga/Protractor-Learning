import { loginPage } from './login.po';
import { qbankHomePage } from './qbankHome.po';
import { browser } from 'protractor';
import { videoPlayerPage } from './videoPlayer.po';
import { qbankPage } from './qbank.po';
import { javascriptPage } from './javascript.po';
var fs = require('fs');
var test = require('npm-publish-check');
//import {printMessage} from 'npm-publish-check';

describe('FailSpec', function () {
    var testName = this.getFullName();

    let login: loginPage;
    let qbankHome: qbankHomePage;
    let videoPlayer: videoPlayerPage;
    let qbank: qbankPage;
    let jPage: javascriptPage;

    beforeEach(function () {
        login = new loginPage();
        qbankHome = new qbankHomePage();
        videoPlayer = new videoPlayerPage();
        qbank = new qbankPage();
        jPage = new javascriptPage();
    });

   


it('npm failure test', ()=> {
    console.log('fail from failure');
    browser.sleep(2000);
    test.wer();
    
})
it('npm pass test', ()=> {
    console.log('pass from failure');
    browser.sleep(2000);
    
})
    

});