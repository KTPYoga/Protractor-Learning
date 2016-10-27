"use strict";
var protractor_1 = require('protractor');
var videoPlayerPage = (function () {
    function videoPlayerPage() {
        this.VIDEOPLAYER = protractor_1.element(protractor_1.by.css('.vjs-tech'));
        this.INITIAL_PLAY_BUTTON = protractor_1.element(protractor_1.by.css('.vjs-play-control'));
        this.CURRENT_TIME = protractor_1.element(protractor_1.by.css('.vjs-current-time-display'));
        this.SPEED_BUTTON = protractor_1.element(protractor_1.by.css('.vjs-playback-rate-value'));
        this.MAXIMIZE_BUTTON = protractor_1.element(protractor_1.by.css('.vjs-fullscreen-control'));
        this.LITTLE_PAUSE_BUTTON = protractor_1.element(protractor_1.by.css('.vjs-play-control.vjs-playing'));
        this.SCRUB_BAR = protractor_1.element(protractor_1.by.css('.vjs-play-progress'));
        this.SLIDER_HANDLE = protractor_1.element(protractor_1.by.css('.vjs-play-progress.vjs-slider-bar'));
        this.LITTLE_PLAY_BUTTON = protractor_1.element(protractor_1.by.xpath("//div[@class='vjs-control-bar']/div[contains(@class,'vjs-paused')]"));
    }
    videoPlayerPage.prototype.orientationVideoIsDisplayed = function () {
        return protractor_1.browser.wait(protractor_1.protractor.ExpectedConditions.elementToBeClickable(this.VIDEOPLAYER), 10000).then(function () {
            return true;
        }, function (err) {
            return false;
        });
    };
    videoPlayerPage.prototype.clickInitialPlayInVideoPlayer = function () {
        this.INITIAL_PLAY_BUTTON.click();
    };
    videoPlayerPage.prototype.clickVideoSpeedButton_Relative = function (strRate) {
        switch (strRate) {
            case '1.5x':
                this.SPEED_BUTTON.click();
                break;
            case '2x':
                this.SPEED_BUTTON.click();
                this.SPEED_BUTTON.click();
                break;
            case '0.75x':
                this.SPEED_BUTTON.click();
                this.SPEED_BUTTON.click();
                this.SPEED_BUTTON.click();
                break;
        }
    };
    /**
     * Function to minimize and maximize button video player
     */
    videoPlayerPage.prototype.clickMaximizeMinimizeButton = function () {
        this.MAXIMIZE_BUTTON.click();
    };
    /**
     * Function to pause video player
     */
    videoPlayerPage.prototype.clickPauseInVideoPlayer = function () {
        this.LITTLE_PAUSE_BUTTON.click();
    };
    /**
     * Function to move video progress bar to percentage provided
     */
    videoPlayerPage.prototype.dragScrubBarToPercent_1 = function (percent) {
        var width = 1180.0;
        var percentOfWidth = (width * (percent / 100));
        var elt = protractor_1.browser.findElement(protractor_1.by.css('.vjs-play-progress.vjs-slider-bar'));
        protractor_1.browser.actions().dragAndDrop(elt, { x: percentOfWidth, y: 1 }).perform();
        protractor_1.browser.sleep(1000);
        this.LITTLE_PLAY_BUTTON.click();
    };
    /**
     * Function to check video player starts playing
     */
    videoPlayerPage.prototype.waitForVideoPlayerTimeToBeginElapsing = function () {
        if (protractor_1.browser.wait(protractor_1.protractor.ExpectedConditions.presenceOf(this.CURRENT_TIME)), 5000) {
        }
    };
    return videoPlayerPage;
}());
exports.videoPlayerPage = videoPlayerPage;
//# sourceMappingURL=videoPlayer.po.js.map