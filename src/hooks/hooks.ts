import { BeforeAll, AfterAll, Before, After, BeforeStep, AfterStep, Status } from "@cucumber/cucumber"
import { chromium, Browser, Page, BrowserContext} from "@playwright/test"
import { pageFixture } from "./pageFixture"

let browser: Browser
let context: BrowserContext

BeforeAll (async function () {
    browser = await chromium.launch({headless: false})
    const page = await browser.newPage()
    pageFixture.page = page
})

Before (async function () {
    context = await browser.newContext()
    const page = await browser.newPage()
    pageFixture.page = page
})

After (async function ( { pickle, result } ) {
    console.log(result?.status); 
    if(result?.status == Status.FAILED) {
        const img = await pageFixture.page.screenshot({ path: `./test-results/screenshots/${pickle.name}`, type: "png" })
        await this.attach(img, "image/png")
    }

    await pageFixture.page.close()
    await context.close()
})

AfterAll (async function () {
    await browser.close()
})