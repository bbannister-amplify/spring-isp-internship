import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ServicesPage extends Page {

    open () {
        return super.open('services');
    }
}

export default new ServicesPage();
