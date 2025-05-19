import { browser, expect } from '@wdio/globals'
import startPage from '../pageobjects/start.page.js';

//"5_fundamentals", "amplify_ckla_&_amplify_caminos","boost_reading_&_boost_lectura"
const programGroupArray = ['LITERACY SUITE', 'SCIENCE OF READING PROGRAMS', 'SPANISH LITERACY PROGRAMS', 'MIDDLE SCHOOL PROGRAMS','MATH & SCIENCE SUITE','MATH PROGRAMS', 'MATH PLATFORM', 'SCIENCE PROGRAM']
const ResourseIDs= ["resources_hub","hqim_hub", "amplify_on_edreports", "multilingual_and_english_learner_support", "sorpodcast", "beyond_my_years_podcast", "science_of_reading_resource_site", "dyslexia_and_the_science_of_reading", "mclass_dyslexia_screener","principles_of_middle_school_ela", "math_teacher_lounge_podcast", "desmos_classroom", "science_connections_podcast", "ngss", "phenomena-based_learning", "literacy-rich_instruction", "science_blog", "science_success_stories", "science_experience_kit", "science_free_resources_library", "research_hub","amplify_ckla_&_amplify_caminos", "amplify_ela", "amplify_science", "boost_reading_\\&_boost_lectura","mclass_\\&_mclass_lectura", "amplify_tutoring", "early_literacy_research_brief", "literacy_blog", "math_blog", "science_blog", "webinar_library", "literacy_webinar_library", "math_webinar_library", "math_live_webinars", "science_webinar_library", "science_live_webinars", "podcast_hub", "press_releases", "media_highlights", "upcoming_events"]
const ResourceLinks = ["https://amplify.com/resources/","https://amplify.com/hqim-home/", "https://amplify.com/hqim-fundamentals/", "https://amplify.com/edreports", "https://amplify.com/multilingual-and-english-learner-support/", "https://amplify.com/science-of-reading-the-podcast/", "https://amplify.com/beyond-my-years", "https://amplify.com/science-of-reading", "https://amplify.com/science-of-reading/dyslexia", "https://amplify.com/programs/mclass/dyslexia-screener/", "https://amplify.com/blog/english-language-arts/4-ways-to-engage-middle-school-students-in-ela/", "https://amplify.com/math-teacher-lounge/", "https://teacher.desmos.com/", "https://amplify.com/science-connections/", "https://amplify.com/science-connections/", "https://amplify.com/ngss/", "https://go.info.amplify.com/whats-so-phenomenal-about-phenomena", "https://go.info.amplify.com/literacy-rich-science-instruction", "https://amplify.com/blog?subject=science&topics=&grades=#ProgramFilters", "https://amplify.com/programs/amplify-science/success-stories/", "https://amplify.com/science-experience-kit", "https://amplify.com/science-free-resources", "https://amplify.com/research-and-case-studies", "https://amplify.com/research-and-case-studies/amplify-ckla-research", "https://amplify.com/research-and-case-studies/amplify-ela-research", "https://amplify.com/research-and-case-studies/amplify-science-research", "https://amplify.com/research-and-case-studies/boost-reading-research", "https://amplify.com/research-and-case-studies/mclass-research", "https://amplify.com/research-and-case-studies/amplify-tutoring-research","https://amplify.com/research-brief/","https://www.amplify.com/blog/", "https://www.amplify.com/blog?subject=literacy&topics=&grades=#ProgramFilters", "https://www.amplify.com/blog?subject=math&topics=&grades=#ProgramFilters", "https://www.amplify.com/blog?subject=science&topics=&grades=#ProgramFilters","https://amplify.com/webinar-library/", "https://www.amplify.com/webinar-library?subject=literacy&topics=&grades=&e_credit=false#ProgramFilters", "https://amplify.com/webinar-library?subject=math&topics=&grades=&e_credit=false#ProgramFilters", "https://amplify.com/mathwebinars", "https://www.amplify.com/webinar-library?subject=science&topics=&grades=&e_credit=false#ProgramFilters", "https://amplify.com/sciencewebinars", "https://amplify.com/resources/podcast-hub/", "https://amplify.com/news/", "https://amplify.com/amplify-in-the-media/", "https://amplify.com/events/"];
describe('Amplify.com: the user should go to ', () => {
    it('the landing page and verify the logo is present and accept cookies', async () => {
        await startPage.open()
        await expect($('.icon.icon--logo').toBeVisible())
        await startPage.acceptCookies();
    })

    /*it('the list of program headings in the programs modal, verifying the text', async () => {
            await $('#m-programs').click();
            const size= browser.$$('.m-dropdown__title').length;
            for (let i = 0; i <size; i++) {
                const programGroups = await browser.$$('.m-dropdown__title')[i].getText();
                await expect(programGroups).toBe(programGroupArray[i]);
            }
    })*/
            var size = 4;
            var g=0;
    // it('the list of link in the resources modal, verifying the links [Pt1]', async () => {
    //         var x = false;
    //         await browser.$('#m-resources').click();
    //         for (let i = 0; i <3; i++) {
    //             for(let j=0; j<size; j++){
    //                 await browser.$$('.nd_menu_item__header')[i].click();
    //                 await $('#'+ResourseIDs[g]).click();
    //                 var str = browser.getUrl();
    //                 await browser.getUrl();
    //                 x= ResourceLinks[g].includes(str);
    //                 await expect (x=true);
    //                 await startPage.open();
    //                 g++;
    //                 await browser.$('#m-resources').click();
    //             }

    //             switch (i) {
    //                 case 0:
    //                     size=6;
    //                     break;
                
    //                 case 1:
    //                     size=2
    //                     break;                    
    //                 case 2:
    //                     size=8;
    //                     break;  
    //             }
    //         }
    //         await browser.$('#m-resources').click();
    //         console.log(g)
    //         await expect (x=true);
    // })

    it('the list of link in the resources modal, verifying the links [Pt2]', async () => {
            var x = false;
            await browser.$('#m-resources').click();
            g=12;
            for (let i = 3; i <5; i++) {
                for(let j=0; j<size; j++){
                    await browser.$$('.nd_menu_item__header')[i].click();
                    await $('#'+ResourseIDs[g]).click();
                    var str = browser.getUrl();
                    await browser.getUrl();
                    x= ResourceLinks[g].includes(str);
                    await expect (x=true);
                    await startPage.open();
                    g++;
                    await browser.$('#m-resources').click();
                }
            }
            size=10;
            console.log(g)                
            await expect (x=true);
    })
        it('the list of link in the resources modal, verifying the links [Pt3]', async () => {
            var x = false;
            for (let i = 5; i <7; i++) {
                for(let j=0; j<size; j++){
                    await browser.$$('.nd_menu_item__header')[i].click();
                    await $('#'+ResourseIDs[g]).click();
                    var str = browser.getUrl();
                    await browser.getUrl();
                    x= ResourceLinks[g].includes(str);
                    await expect (x=true);
                    await startPage.open();
                    g++;
                    await browser.$('#m-resources').click();
                }
                size=4;
            }                
            await expect (x=true);
    })
    
    /*it ('the list of link in the resources modal, verifying the links', async () => {
            var x = false;
            var str;
            await browser.$('#m-resources').click();
            for (let i = 0; i <7; i++) {
                for(let j=0; j<size; j++){
                    str = browser.$('#'+ResourseIDs[g]).('href');
                    await browser.$('#'+ResourseIDs[g]).attr('href');
                    x = ResourceLinks[g].includes(str);
                    await expect (x==true);
                    console.log(str + " and reult is " + x);
                }

                switch (i) {
                    case 0:
                        size=6;
                        break;
                
                    case 1:
                        size=2
                        break;                    
                    case 2:
                        size=8;
                        break;
                    case 4:
                        size=10;
                        break;
                
                    case 5:
                        size=4;
                        break;
                    default:
                        break;  
                }
            }
            await expect (x==true);
        })*/

   /* test not in use
   it('the Our Programs section of the page, click on the CKLA square and check that the link is correct', async () => {
        await $('#op_amplify_ckla').click();
        //Verifes if expected path/page is where code has taken us
        startPage.getCurrentUrl();
        await expect(StartPage.getCurrentUrl().includes('/programs/amplify-core-knowledge-language-arts/'));
    })*/
})