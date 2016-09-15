import { PlaylistmanagerPage } from './app.po';

describe('playlistmanager App', function() {
  let page: PlaylistmanagerPage;

  beforeEach(() => {
    page = new PlaylistmanagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
