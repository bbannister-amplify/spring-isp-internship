import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class StartPage extends Page {

    open () {
        return super.open('');
    } 

    acceptCookies () {
        if ($('#augusta-ButtonElement--hKAdB82mq8CHpx8qWQKA').isDisplayed()) {
        return $('#augusta-ButtonElement--hKAdB82mq8CHpx8qWQKA').click(); }
    }
}

export default new StartPage();
