import { loginPage } from './login.po';
import { qbankHomePage } from './qbankHome.po';
import { browser} from 'protractor';
import { videoPlayerPage } from './videoPlayer.po';
import { qbankPage } from './qbank.po';
var fs = require('fs');

describe ('qbankHomeTest', function(){
    var testName = this.getFullName();
    
    let login:loginPage;
    let qbankHome: qbankHomePage;
    let videoPlayer:videoPlayerPage;
    let qbank: qbankPage;

    beforeEach(function (){
        login = new loginPage();
        qbankHome = new qbankHomePage();
        videoPlayer = new videoPlayerPage();
        qbank = new qbankPage();
    });

    it('verifyScrollingAndHeaderNavigationWorkTogether', function(){
      //  pending('Force skip');
        login.logInWithProductCode('SHIELD');
    });

    it('verifyResponsiveMenuAppears',function(){
        login.logInWithProductCode('SHIELD');
        browser.driver.manage().window().setSize(320, 480);
        qbankHome.goToQBankHome();
        expect(qbankHome.hamburgerMenuIsVisible()).toBe(false,'hamburger menu visible test failed');
    });

    it('test function',function(){
        console.log('test function');
    });

    it('verifyAnswerChoiceContentItemsDisplayedInItemReviewSection', function(){
        login.logInWithProductCode('SHIELD');
        qbankHome.goToQBankHome();
        browser.manage().addCookie('atom.web.fakes',
        'GET={"/api/qbank/jasper/content/preview/286663/1":"http://qa-atom-support.kaptest.com/Atom/json/api/jasper/content/preview/NewJSONFormat/QBank_AllContentItems.json"}');
        browser.sleep(5000);
        expect(qbankHome.reviewContentItem('286663','1')).toBe(true,'Answer choice display after override');
        browser.sleep(5000);
        
    });

    it('verifyVideoSpeed',function(){
        login.logInWithProductCode('SHIELD');
        browser.sleep(3000);
        expect(videoPlayer.orientationVideoIsDisplayed()).toBe(true,'video player displayed on homepage');
        videoPlayer.clickInitialPlayInVideoPlayer();
        browser.sleep(1000);
        videoPlayer.clickVideoSpeedButton_Relative('1.5x');
        browser.sleep(2000);
        videoPlayer.clickMaximizeMinimizeButton();
        browser.sleep(2000);
        videoPlayer.clickMaximizeMinimizeButton();
        browser.sleep(1000);
        videoPlayer.clickPauseInVideoPlayer();
        browser.sleep(2000);
        videoPlayer.dragScrubBarToPercent_1(100.0);
        browser.sleep(3000);
    });

    it('assertTextCanBehigHighlighted',function(){
        login.logInWithProductCode('SHIELD');
        browser.sleep(3000);
        qbankHome.clickCreateQBank();
        browser.sleep(10000);
        qbank.highlightText();
        browser.sleep(1000);
        qbank.getHighlightedText();
        browser.sleep(5000);

    });

     fit('takeScreenShotOnFailure',function(){
        login.logInWithProductCode('SHIELD');
        browser.driver.manage().window().setSize(320, 480);
        qbankHome.goToQBankHome();
        expect(qbankHome.hamburgerMenuIsVisible()).toBe(true,'hamburger menu visible test failed');
    });

afterEach(function (){
/*

  // var spec = jasmine.getEnv().currentSpec;
   // var specName = spec.description.split('').join('_');
   var specName = 'test';

 //   if(spec.results().passed()) return;

    browser.takeScreenshot().then(function(png){
        var stream = fs.createWriteStream('reports/'+specName+'.png');
        stream.write(new Buffer(png,'base64'));
        stream.end();
    }); */
});

});