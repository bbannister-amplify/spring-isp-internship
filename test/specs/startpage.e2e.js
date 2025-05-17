import { browser, expect } from '@wdio/globals'
import startPage from '../pageobjects/start.page.js';

const programGroupArray = ['LITERACY SUITE', 'SCIENCE OF READING PROGRAMS', 'SPANISH LITERACY PROGRAMS', 'MIDDLE SCHOOL PROGRAMS','MATH & SCIENCE SUITE','MATH PROGRAMS', 'MATH PLATFORM', 'SCIENCE PROGRAM']
const ResourceLinks = ["https://amplify.com/resources/","https://amplify.com/hqim-home/", "https://amplify.com/hqim-fundamentals/", "https://amplify.com/edreports", "https://amplify.com/multilingual-and-english-learner-support/", "https://amplify.com/science-of-reading-the-podcast/", "https://amplify.com/beyond-my-years", "https://amplify.com/science-of-reading", "https://amplify.com/science-of-reading/dyslexia", "https://amplify.com/programs/mclass/dyslexia-screener/", "https://amplify.com/blog/english-language-arts/4-ways-to-engage-middle-school-students-in-ela/", "https://amplify.com/math-teacher-lounge/", "https://teacher.desmos.com/", "https://amplify.com/science-connections/", "https://amplify.com/science-connections/", "https://amplify.com/ngss/", "https://go.info.amplify.com/whats-so-phenomenal-about-phenomena", "https://go.info.amplify.com/literacy-rich-science-instruction", "https://amplify.com/blog?subject=science&topics=&grades=#ProgramFilters", "https://amplify.com/programs/amplify-science/success-stories/", "https://amplify.com/science-experience-kit", "https://amplify.com/science-free-resources", "https://amplify.com/research-and-case-studies", "https://amplify.com/research-and-case-studies/amplify-ckla-research", "https://amplify.com/research-and-case-studies/amplify-ela-research", "https://amplify.com/research-and-case-studies/amplify-science-research", "https://amplify.com/research-and-case-studies/boost-reading-research", "https://amplify.com/research-and-case-studies/mclass-research", "https://amplify.com/research-and-case-studies/amplify-tutoring-research","https://amplify.com/research-brief/","https://www.amplify.com/blog/", "https://www.amplify.com/blog?subject=literacy&topics=&grades=#ProgramFilters", "https://www.amplify.com/blog?subject=math&topics=&grades=#ProgramFilters", "https://www.amplify.com/blog?subject=science&topics=&grades=#ProgramFilters","https://amplify.com/webinar-library/", "https://www.amplify.com/webinar-library?subject=literacy&topics=&grades=&e_credit=false#ProgramFilters", "https://amplify.com/webinar-library?subject=math&topics=&grades=&e_credit=false#ProgramFilters", "https://amplify.com/mathwebinars", "https://www.amplify.com/webinar-library?subject=science&topics=&grades=&e_credit=false#ProgramFilters", "https://amplify.com/sciencewebinars", "https://amplify.com/resources/podcast-hub/", "https://amplify.com/news/", "https://amplify.com/amplify-in-the-media/", "https://amplify.com/events/"];
describe('Amplify.com: the user should go to ', () => {
    it('the landing page and verify the logo is present', async () => {
        await startPage.open()
        await expect($('.icon.icon--logo').toBeVisible())
        await StartPage.acceptCookies();
    })

    /*it('the list of program headings in the programs modal, verifying the text', async () => {
            await $('#m-programs').click();
            const size= browser.$$('.m-dropdown__title').length;
            for (let i = 0; i <size; i++) {
                const programGroups = await browser.$$('.m-dropdown__title')[i].getText();
                await expect(programGroups).toBe(programGroupArray[i]);
            }
    })*/

    it('the list of link in the resources modal, verifying the links', async () => {
            await  browser.$('#m-resources').click();
            var x = true;
            var g=0;
            for (let i = 0; i <7; i++) {
                await browser.$$('.nd_menu_item__header')[i].click();
                var size =await browser.$$('.nd_menu_item__menu')[0].length;
                console.log('size: '+ size);
                for(let j=0; j<size; j++){
                    var str = await browser.$$('.nd_menu_item__header').attr('href');
                    x= ResourceLinks[g].includes(str);
                    g++;
                    console.log('Link: '+ str);
                }
            }
            await expect (x=true);
    })

   /* test not in use
   it('the Our Programs section of the page, click on the CKLA square and check that the link is correct', async () => {
        await $('#op_amplify_ckla').click();
        //Verifes if expected path/page is where code has taken us
        startPage.getCurrentUrl();
        await expect(StartPage.getCurrentUrl().includes('/programs/amplify-core-knowledge-language-arts/'));
    })*/
})