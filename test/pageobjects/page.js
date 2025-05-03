import { browser } from '@wdio/globals'
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
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

    getUrlPath() {
        const http = require('http');
        const url = require('url');
        http.createServer(function (req,res) {
        const parseUrl= url.parse(req.url,true);
        res.end();
        return parseUrl;
        })
        return "no url";
    }
}
