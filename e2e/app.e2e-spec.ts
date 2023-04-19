import { CohortMembersPrjTemplatePage } from './app.po';

describe('CohortMembersPrj App', function() {
  let page: CohortMembersPrjTemplatePage;

  beforeEach(() => {
    page = new CohortMembersPrjTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
