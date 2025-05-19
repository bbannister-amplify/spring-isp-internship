import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CommunityPage extends Page {

    open () {
        return super.open('community');
    }
}

export default new CommunityPage();