import { expect } from '@wdio/globals'
import StartPage from '../pageobjects/start.page.js'

describe('Amplify.com', () => {
    it('should go to the landing page', async () => {
        await StartPage.open()

        await expect($('.icon.icon--logo').toBeVisible())

    })
})

