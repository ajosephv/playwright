import { Given, When, Then, setDefaultTimeout, After, Before } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import {getPage} from "../../corelib/corelib.spec";

Given('User is on loginpage', async function () {
    
    await getPage().goto('https://ecommerce-playground.lambdatest.io/')
    await getPage().locator("xpath=//a[contains(.,'My account') and @data-toggle]").click();
    
  
  });
  
  When('User enter login details',async function () {
    await getPage().locator("xpath=//input[@id='input-email']").fill('aarun.josh@gmail.com');
    await getPage().locator("xpath=//input[@id='input-password']").fill('Welcome@123');
    await getPage().locator("xpath=//input[@value='Login']").click();
    console.log("user enter login")
  });

  Then('Logout should be successfull', async function () {
    console.info("logout is success");
    
  });
  