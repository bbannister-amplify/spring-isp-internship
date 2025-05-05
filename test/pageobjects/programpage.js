import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ProgramPage extends Page {

    open () {
        return super.open('program-filters#ProgramFilters');
    }
}

export default new ProgramPage();