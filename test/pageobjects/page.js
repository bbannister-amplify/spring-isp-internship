import { browser } from '@wdio/globals'

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
    * Opens a page or sub page
    * @param path optional path of the sub page (e.g. /path/to/page.html)
    */
    open (path) {
        return browser.url(`https://www.amplify.com/${path}`)
    }
}
