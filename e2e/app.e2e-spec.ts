import { Voteonitfor.UsPage } from './app.po';

describe('voteonitfor.us App', () => {
  let page: Voteonitfor.UsPage;

  beforeEach(() => {
    page = new Voteonitfor.UsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
