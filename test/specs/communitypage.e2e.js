import { expect } from '@wdio/globals';
import CommunityPage from '../pageobjects/communitypage.js';

describe('Community Page Social Media Links Test', function () {
    this.timeout(120000);

    const socialLinks = [
        {
            selector: 'a[href="https://www.facebook.com/AmplifyEducation"]',
            expectedUrl: 'https://www.facebook.com/AmplifyEducation',
        },
        {
            selector: 'a[href="https://twitter.com/Amplify"]',
            expectedUrl: 'https://x.com/Amplify',
        },
        {
            selector: 'a[href="https://www.linkedin.com/company/amplifyinc"]', 
            expectedUrl: 'https://www.linkedin.com/company/amplifyinc',
        },
        {
            selector: 'a[href="https://www.instagram.com/amplify.education/"]',
            expectedUrl: 'https://www.instagram.com/amplify.education/',
        }
    ];

    const normalizeUrl = (url) => url.trim().toLowerCase();

    it('should verify all social media links navigate to the correct URLs', async () => {
        await CommunityPage.open();

        for (const { selector, expectedUrl } of socialLinks) {
            const link = await $(selector);
            await link.waitForDisplayed({ timeout: 10000 });
            console.log(`Testing link: ${selector}`);

            const originalHandles = await browser.getWindowHandles();
            console.log(`Original window handles: [${originalHandles.join(', ')}]`);

            await link.click();

            await browser.pause(500);

            let newHandles = await browser.getWindowHandles();

            if (newHandles.length > originalHandles.length) {
                const newWindowHandle = newHandles.find(h => !originalHandles.includes(h));
                await browser.switchToWindow(newWindowHandle);
            } else {
                newHandles = originalHandles;
            }
        
            await browser.waitUntil(async () => {
                const url = await browser.getUrl();
                console.log(`Current URL: '${url}', Expected URL: '${expectedUrl}'`);
                return normalizeUrl(url).includes(normalizeUrl(expectedUrl));
            }, {
                timeout: 15000,
                timeoutMsg: `URL did not include expected string: ${expectedUrl}`
            });

            const currentUrl = await browser.getUrl();
            expect(normalizeUrl(currentUrl)).toContain(normalizeUrl(expectedUrl));

            if (newHandles.length > originalHandles.length) {
                await browser.closeWindow();
                await browser.switchToWindow(originalHandles[0]);
            } else {
                await browser.back();
            }
        }
    });
});



