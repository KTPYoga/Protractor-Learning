import { loginPage } from './login.po';
import { qbankHomePage } from './qbankHome.po';
import { browser, element, by } from 'protractor';
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
        browser.ignoreSynchronization =true;
    });

   


it('google pass test', ()=> {
    browser.get("https://www.google.com");
    browser.sleep(3000);
    element(by.name('q')).sendKeys('pass test');
    browser.sleep(3000);
})
it('google fail test', ()=> {
    browser.get("https://www.google.com");
    browser.sleep(3000);
    element(by.name('textbox')).sendKeys('pass test');
    browser.sleep(3000);
    
})
    

});