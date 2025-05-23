import { browser, expect } from '@wdio/globals'
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

    it('opens every accordian item and checks the sales link', async () => {
        const items = await browser.$$('.m-accordion__item');
        for (let i = 0; i < items.length; i++) {
            await items[i].click();
            await $('.m-4up__item > ul > li > a').click();
            await expect($('#contact').toBeVisible());
            await $('.contact-popup__close.contact-popup__close_SR').click();
            await browser.pause(500);
        }
    })

    it('should verify the get in touch button', async () => {
        await $('.m-banner__btn').click();
        await expect($('#contact').toBeVisible());
        await $('.contact-popup__close.contact-popup__close_SR').click();
    })

    it('Returns back to home page by clicking logo', async () => {
        await $('.icon.icon--logo').click();
        await expect(ServicesPage.getCurrentUrl().includes('')); 
    })    
    

 })

