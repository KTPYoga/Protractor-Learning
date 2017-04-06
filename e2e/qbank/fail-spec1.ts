import { loginPage } from './login.po';
import { qbankHomePage } from './qbankHome.po';
import { browser, element, by } from 'protractor';
import { videoPlayerPage } from './videoPlayer.po';
import { qbankPage } from './qbank.po';
import { javascriptPage } from './javascript.po';
var fs = require('fs');
var test = require('npm-publish-check');
//import {printMessage} from 'npm-publish-check';

describe('WorkSpec', function () {
    var testName = this.getFullName();

    let login: loginPage;
    let qbankHome: qbankHomePage;
    let videoPlayer: videoPlayerPage;
    let qbank: qbankPage;
    let jPage: javascriptPage;

    beforeEach(function () {
        browser.ignoreSynchronization=true;
    });

it('kaptest pass test', ()=> {
    browser.get("https://www.kaptest.com");
    browser.sleep(5000);
    element(by.css('#content > div.home > div.header.hidden-xs > div > div > div.col-sm-9.col-md-8 > div > div:nth-child(1) > a')).click();
    browser.sleep(3000);
})

it('kaptest fail test', ()=> {
    browser.get("https://www.kaptest.com");
    browser.sleep(5000);
    element(by.css('#content > div.test > div.header.hidden-xs > div > div > div.col-sm-9.col-md-8 > div > div:nth-child(1) > a')).click();
    browser.sleep(3000);
})
    

});