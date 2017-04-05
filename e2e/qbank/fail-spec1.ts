import { loginPage } from './login.po';
import { qbankHomePage } from './qbankHome.po';
import { browser } from 'protractor';
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
        login = new loginPage();
        qbankHome = new qbankHomePage();
        videoPlayer = new videoPlayerPage();
        qbank = new qbankPage();
        jPage = new javascriptPage();
    });

it('npm working test', ()=> {
    console.log('works from work');
    browser.sleep(2000);
    //  expect.apply(3).toBe(5);
})

it('npm working fail test', ()=> {
    console.log('fail from work');
    browser.sleep(2000);
    expect.apply(3).toBe(2);
})
    

});