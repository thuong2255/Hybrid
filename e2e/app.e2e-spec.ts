import { ProjectShopPage } from './app.po';

describe('project-shop App', function() {
  let page: ProjectShopPage;

  beforeEach(() => {
    page = new ProjectShopPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
