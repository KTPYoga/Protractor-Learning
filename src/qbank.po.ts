import { browser,by,element,protractor } from 'protractor';

export class qbankPage{

    QUESTION_TEXT = element(by.xpath("//div[@id='content-highlighting-wrap']/div/p/span"));
    HIGHLIGHTED_TEXT = element.all(by.className('atom-highlight'));

    highlightText(){
        browser.actions().doubleClick(this.QUESTION_TEXT.getWebElement()).perform();
    }

    getHighlightedText(){
        var text = '';  
        this.HIGHLIGHTED_TEXT.each(function(item){
            item.getText().then(function(txt){
                console.log(txt);
                text = text+ txt;
            });
        });
        console.log(text);
    }
}