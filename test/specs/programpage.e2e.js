import { expect } from '@wdio/globals';
import ProgramPage from '../pageobjects/programpage.js';

describe('Program Page Test', () => {
    it('should click the image link and verify the URL', async () => {
        await ProgramPage.open();

        const image = await $('img[src*="CKLA-Caminos_1-Header.png"]');
        await image.waitForDisplayed({ timeout: 30000 });

        const parentLink = await image.parentElement();
        await parentLink.click();

        await browser.pause(5000); 

        const currentUrl = await browser.getUrl();
        console.log('Redirected to:', currentUrl);

        expect(currentUrl).toBe('https://amplify.com/programs/amplify-caminos/');
    });
});

/* 
The expect tool would check if something is true? Did we go to the right web? Line 1
calls on to my program class that exist in page objects Line 2
describe is like starting a group of test Line 4
it is a single test which tries to open a link, click on the picture and then check the website address after clicking Line 5 
(There could be like a shared method but I will do that next time)
await would wait till the programpage that i am calling is loaded? Line 6
finds the image on the page LIne 8
wait for 30 secs so just divide that by 1000 to get it to load Line 9
gets the parent element Ex: It would be the <div class="m-card__image"> Line 11
clicks on it ? LIne 12
wait for 5 secs LIne 14
gets the current web address Line 16
Redirected to: https://amplify.com/programs/amplify-caminos/ Line 17
Am I on the right page? It would tell me if it pass or not Line 19
*/






