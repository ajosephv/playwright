import { Given, When, Then, setDefaultTimeout, After, Before } from "@cucumber/cucumber";
import { Browser, BrowserContext, Page, chromium } from "playwright";
import { expect } from "@playwright/test";

setDefaultTimeout(1000*60*2);


let browser: Browser;
let bctx: BrowserContext;
let page: Page;

Before( async function ()  {
  browser = await chromium.launch({ headless: false, channel: "chrome", args: ['--start-maximized'] });
  bctx = await browser.newContext({ viewport: null, javaScriptEnabled: true });
  page = await bctx.newPage();
  
});

After(async function () {
    await page.close();
    await bctx.close();
    await browser.close();
  });
 
  export function getPage():Page {
    return page;
  }

