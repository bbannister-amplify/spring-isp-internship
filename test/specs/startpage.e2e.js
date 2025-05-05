import { expect } from '@wdio/globals'
import StartPage from '../pageobjects/start.page.js'

const programGroupArray = ['LITERACY SUITE', 'SCIENCE OF READING PROGRAMS', 'SPANISH LITERACY PROGRAMS', 'MIDDLE SCHOOL PROGRAMS','MATH & SCIENCE SUITE','MATH PROGRAMS', 'MATH PLATFORM', 'SCIENCE PROGRAM']

describe('Amplify.com: the user should go to ', () => {
    it('the landing page and verify the logo is present', async () => {
        await StartPage.open()
        await expect($('.icon.icon--logo').toBeVisible())
    })


    it('the list of program headings in the programs modal, verifying the text', async () => {
        await $('#m-programs').click();

            for (let i = 0; i < 8; i++) {
            const programGroups = await browser.$$('.m-dropdown__title')[i].getText();
            await expect(programGroups).toContain(programGroupArray[i]);
            }
    })
})