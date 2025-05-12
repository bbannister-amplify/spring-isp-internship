import { expect } from '@wdio/globals';
import SupportPage from '../pageobjects/support.page.js';

describe('Support Page Test', () => {
    it('check if button exist and should click the button link and verify the URL', async () => {
        await SupportPage.open();

        const helpCenterButton = await $('a[href*="service.amplify.com/s/help"]');
        await helpCenterButton.waitForDisplayed({ timeout: 30000 });
        await helpCenterButton.click();

        const allTabs = await browser.getWindowHandles();
        await browser.switchToWindow(allTabs[1]);

        const newTabUrl = await browser.getUrl();
        console.log('New tab URL:', newTabUrl);

        expect(newTabUrl).toContain('https://service.amplify.com/s/help');
    });
});
