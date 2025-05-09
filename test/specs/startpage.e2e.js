import { browser, expect } from '@wdio/globals'
import startPage from '../pageobjects/start.page.js';

const programGroupArray = ['LITERACY SUITE', 'SCIENCE OF READING PROGRAMS', 'SPANISH LITERACY PROGRAMS', 'MIDDLE SCHOOL PROGRAMS','MATH & SCIENCE SUITE','MATH PROGRAMS', 'MATH PLATFORM', 'SCIENCE PROGRAM']
const ResourceLinks = ["","ee"];
describe('Amplify.com: the user should go to ', () => {
    it('the landing page and verify the logo is present', async () => {
        await startPage.open()
        await expect($('.icon.icon--logo').toBeVisible())
    })

    it('the list of program headings in the programs modal, verifying the text', async () => {
            await $('#m-programs').click();
            const size= browser.$$('.m-dropdown__title').length;
            for (let i = 0; i <size; i++) {
                const programGroups = await browser.$$('.m-dropdown__title')[i].getText();
                await expect(programGroups).toBe(programGroupArray[i]);
            }
    })

    it('the list of link in the resources modal, verifying the links', async () => {
            await  browser.$('#m-resources').click();
            const size= browser.$$('.nd_menu_item__menu').length;
            for (let i = 0; i <size; i++) {
                await browser.$$('.nd_menu_item__menu')[i].click();
                var x=startPage.getCurrentUrl() == ResourceLinks[i]; 
                await $('.icon.icon--logo').click();
            }
            await expect (x=true);
    })

   /* test not in use
   it('the Our Programs section of the page, click on the CKLA square and check that the link is correct', async () => {
        await $('#op_amplify_ckla').click();
        //Verifes if expected path/page is where code has taken us
        startPage.getCurrentUrl();
        await expect(StartPage.getCurrentUrl().includes('/programs/amplify-core-knowledge-language-arts/'));
    })*/
})