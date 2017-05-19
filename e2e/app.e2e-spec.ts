import { AngularLampBluetoothPage } from './app.po';

describe('angular-lamp-bluetooth App', function() {
  let page: AngularLampBluetoothPage;

  beforeEach(() => {
    page = new AngularLampBluetoothPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
