import { expect } from '@wdio/globals'
import ServicesPage from '../pageobjects/services.page.js'

describe('Amplify.com', () => {
    it('should go to the services page and verify the logo', async () => {
        await ServicesPage.open();

        await expect($('.icon.icon--logo').toBeVisible());
    })

    it('should verify the page title', async () => {
        const pageTitle = await $('.m-dashtitle > h1').getText();
        await expect(pageTitle).toContain('Amplify services')

    })

    it('Returns back to home page by clicking logo', async () => {
        await $('.icon.icon--logo').click();
        await expect(ServicesPage.getUrlPath().includes(''));
    })
})

