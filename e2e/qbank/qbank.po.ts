import { browser,by,element,protractor } from 'protractor';

export class qbankPage{

    QUESTION_TEXT = element(by.xpath("//div[@id='content-highlighting-wrap']/div/p/span"));
    HIGHLIGHTED_TEXT = element.all(by.className('atom-highlight'));
    ANSWER_CHOICES = element.all(by.model("answerChoiceCtrl.sequence.currentItem.interactionState.contentItemArray[contentItemPosition].singleAnswerMultipleChoice['@selectedIndex']"));
    NAV = element.all(by.binding('::title'));
 //   QUESTION_ID = element(by.binding('ctrl.sequence.currentItem.contentItemName'));
 QUESTION_ID = element(by.binding('currentPosition'));
    MARK = element(by.model("ctrl.sequence.currentItem.interactionState.currentContentItem.mark['@marked']"));
    

    highlightText(){
        browser.actions().doubleClick(this.QUESTION_TEXT.getWebElement()).perform();
    };

    getHighlightedText(){
        var text = '';  
        this.HIGHLIGHTED_TEXT.each(function(item){
            item.getText().then(function(txt){
                console.log(txt);
                text = text+ txt;
            });
        });
        console.log(text);
    };

    selectAnswer(position){
        this.ANSWER_CHOICES.get(position).click();
    };

    selectNav(position){
        this.NAV.get(position).click();
    }

    markQuestion(){
        this.MARK.click();
    }

    getQuestionId(){
        return this.QUESTION_ID.getText().then(function (text){
            return text;
        })
    }
}