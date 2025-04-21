import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class StartPage extends Page {

    open () {
        return super.open('');
    }
}

export default new StartPage();
