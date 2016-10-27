import { browser,by,element,protractor} from 'protractor';

export class videoPlayerPage{

    VIDEOPLAYER = element(by.css('.vjs-tech'));
    INITIAL_PLAY_BUTTON = element(by.css('.vjs-play-control'));
    CURRENT_TIME = element(by.css('.vjs-current-time-display'));
    SPEED_BUTTON = element(by.css('.vjs-playback-rate-value'));
    MAXIMIZE_BUTTON = element(by.css('.vjs-fullscreen-control'));
    LITTLE_PAUSE_BUTTON = element(by.css('.vjs-play-control.vjs-playing'));
    SCRUB_BAR = element(by.css('.vjs-play-progress'));
    SLIDER_HANDLE = element(by.css('.vjs-play-progress.vjs-slider-bar'));
   LITTLE_PLAY_BUTTON = element(by.xpath("//div[@class='vjs-control-bar']/div[contains(@class,'vjs-paused')]"));

    orientationVideoIsDisplayed(){
        return browser.wait(protractor.ExpectedConditions.elementToBeClickable(
            this.VIDEOPLAYER),10000).then(function(){
                return true;
            },function (err){
                return false;
            }
        );
    }

    clickInitialPlayInVideoPlayer(){
        this.INITIAL_PLAY_BUTTON.click();
    }

    clickVideoSpeedButton_Relative(strRate){
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
    }
    /**
     * Function to minimize and maximize button video player
     */
    clickMaximizeMinimizeButton(){
        this.MAXIMIZE_BUTTON.click();
    }

    /**
     * Function to pause video player
     */
    clickPauseInVideoPlayer(){
        this.LITTLE_PAUSE_BUTTON.click();
    }

    /**
     * Function to move video progress bar to percentage provided
     */
    dragScrubBarToPercent_1(percent){
        var width = 1180.0;
        var percentOfWidth = (width * (percent / 100));
       
       var elt = browser.findElement(by.css('.vjs-play-progress.vjs-slider-bar'));
       browser.actions().dragAndDrop(elt, {x:percentOfWidth,y:1}).perform();
       browser.sleep(1000);
       this.LITTLE_PLAY_BUTTON.click();
     
    }


    /**
     * Function to check video player starts playing
     */
    waitForVideoPlayerTimeToBeginElapsing(){
        if (browser.wait(protractor.ExpectedConditions.presenceOf(this.CURRENT_TIME)),5000) {
            
        }
    }
}