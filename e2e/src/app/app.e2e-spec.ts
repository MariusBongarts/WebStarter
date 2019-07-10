import { WebElement, Builder, Browser, WebDriver, By, until, logging } from 'selenium-webdriver';
import { login } from '../helper/login';
import { getShadowRoot } from '../helper/getShadowRoot';

describe('app', async () => {
  let driver: WebDriver;
  let appRoot: WebElement;
  beforeEach(async () => {
    driver = await new Builder().forBrowser(Browser.CHROME).build();
    await driver.get('http://localhost:8080');
    appRoot = await driver.findElement(By.tagName('app-root'));
  });

  afterEach(async () => {
    await driver.quit();
  });

  it('should find title element', async () => {
    const headerElement = await (await getShadowRoot(appRoot)).findElement(
      By.tagName('app-header'));
    const title = await (await getShadowRoot(headerElement)).findElement(
      By.className('navbar-brand'));
    const content = await title.getText();
    expect(content).toBe('WG-App');
  }, 3000);
});
