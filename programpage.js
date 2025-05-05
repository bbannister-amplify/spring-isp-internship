import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ProgramPage extends Page {

    open () {
        return super.open('program-filters#ProgramFilters');
    }

    async handleImageClick() {
        const link = await $('a[href="https://amplify.com/programs/amplify-caminos/"]');
        
        await link.click();  

        const href = await link.getAttribute('href');
        console.log("Image clicked! Would have navigated to:", href);
    }
}

export default new ProgramPage();