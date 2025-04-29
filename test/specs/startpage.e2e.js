import { expect } from '@wdio/globals'
import StartPage from '../pageobjects/start.page.js'

describe('Amplify.com: the user should go to ', () => {
    it('the landing page and verify the logo is present', async () => {
        await StartPage.open()

        await expect($('.icon.icon--logo').toBeVisible())
    })

    it('the Our Programs section of the page, click on the CKLA square and check that the link is correct', async () => {
        await $('#op_amplify_ckla').click();
        //TO DO assert that we are on the expected page via new url

    })
})

