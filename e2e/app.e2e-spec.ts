import { AngularLampBluetoothV4Page } from './app.po';

describe('angular-lamp-bluetooth-v4 App', () => {
  let page: AngularLampBluetoothV4Page;

  beforeEach(() => {
    page = new AngularLampBluetoothV4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
