import { Given, When, Then, setDefaultTimeout, After, Before } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import {getPage} from "../../corelib/corelib.spec";



Then('Home page should be displayed', async function () {
  await getPage().locator("xpath=//a[contains(.,'Edit your account information')]").waitFor({timeout:5000});
 expect(getPage().locator("xpath=//a[contains(.,'Edit your account information')]")).toBeVisible();
  console.log("homepage displayed")
});

Then('upon Logout', async function () {
  await getPage().locator("xpath=//a[contains(.,'Logout') and @class='list-group-item']").click();
  await getPage().getByRole("link", { name: 'continue' }).click();
});






