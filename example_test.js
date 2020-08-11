const { url } = require("./mocking");
require("dotenv").config();

Feature("Page Initial | Sandbox");

Scenario("test something", (I) => {
  I.amOnPage(url);
  I.see("Olá, Visitante");

  I.click("#login");
  I.waitForElement("#login");

  I.fillField("#email", `${process.env.USER_EMAIL}`);
  I.pressKey("Enter");

  I.fillField("#password", `${process.env.USER_EMAIL}`);
  I.pressKey("Enter");

  I.see("Fabio");
});
