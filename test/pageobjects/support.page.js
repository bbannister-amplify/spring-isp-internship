import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SupportPage extends Page {

    open () {
        return super.open('support');
    }
}

export default new SupportPage();