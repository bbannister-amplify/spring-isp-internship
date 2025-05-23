import { browser } from '@wdio/globals'
import { createRequire } from 'module';
import { stringify } from 'querystring';
const require = createRequire(import.meta.url);
/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
    * Opens a page or sub page
    * @param path optional path of the sub page (e.g. /path/to/page.html)
    */
    open (path) {
        return browser.url(`https://www.amplify.com/${path}`)
    }

    getCurrentUrl() {
        var currentUrl = browser.getUrl();
        return stringify.apply(currentUrl);
    }

    checkFooterLinks(page) {
        const contactLinkArray = ['services/#contact', 'support', 'event', 'amplify-in-the-media', 'programs-international'];
        const companyLinkArray = ['company', 'our-team', 'careers', 'news', 'blog'];
        const socialLinkArray = ['facebook.com/AmplifyEducation', 'instagram.com/amplify.education', 'x.com/amplify', 'linkedin.com/company/amplifyinc', 'youtube.com/user/Amplifyeducation'];
        const legalLinkArray = ['customer-privacy', 'acceptable-use-policy', 'site-terms', 'site-privacy', 'amplify-program-usage-guidelines'];

        it('should verify footer menu Company links', async () => {
            const items = await browser.$$('.menu-company-footer-container > ul > li > a');        
            for (let i = 0; i < items.length; i++) {
                await items[i].click();
                await browser.pause(3000);
                await expect(page.getUrlPath().includes(companyLinkArray[i]));
                await page.open();
                await browser.pause(500);
            }
        })

        it('should verify footer menu Contact links', async () => {
            const items = await browser.$$('.menu-contact-footer-container > ul > li > a');        
            for (let i = 0; i < items.length; i++) {
                await items[i].click();
                await expect(page.getUrlPath().includes(contactLinkArray[i]));
                await page.open();
                await browser.pause(500);
            }
        })


    //These tests all dont work. The items arrays are all empty.
    // it('should verify footer menu Follow social links', async () => {
    //     const items = await browser.$$('.g-footer__menu g-footer__menu--social a');
    //     let temp = 0;
    //     for (let i = 0; i < items.length; i++) {
    //         //await items[i].click();
    //         temp++;
    //         //await expect(ServicesPage.getUrlPath().includes(socialLinkArray[i]));
    //         //await browser.closeWindow();
    //         //await browser.pause(500);
    //     }
    //     console.log(temp);
    // })

    // it('should verify footer social logo links', async () => {
    //     const items = await browser.$$('g-footer__info container > .g-footer__social > li > a');
    //     let temp = 0;
    //     for (let i = 0; i < items.length; i++) {
    //         await items[i].click();
    //         await expect(ServicesPage.getUrlPath().includes(socialLinkArray[i]));
    //         await browser.closeWindow();
    //         temp++;
    //         await browser.pause(500);
    //     }
    //     console.log(temp);
    // })

    // it('should verify footer legal links', async () => {
    //     const items = await browser.$$('g-footer__info container > .g-footer__legal > li > a');
    //     let temp = 0;
    //     for (let i = 0; i < items.length; i++) {
    //         await items[i].click();
    //         await expect(ServicesPage.getUrlPath().includes(legalLinkArray[i]));
    //         await ServicesPage.open();
    //         temp++;
    //         await browser.pause(500);
    //     }
    //     console.log(temp);
    // })    }
}
