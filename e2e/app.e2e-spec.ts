import { ProtractorLearningPage } from './app.po';

describe('protractor-learning App', function() {
  let page: ProtractorLearningPage;

  beforeEach(() => {
    page = new ProtractorLearningPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
