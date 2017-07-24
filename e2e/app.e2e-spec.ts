import { AngularHumber2Page } from './app.po';

describe('angular-humber2 App', () => {
  let page: AngularHumber2Page;

  beforeEach(() => {
    page = new AngularHumber2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
