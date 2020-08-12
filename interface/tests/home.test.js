require("dotenv").config();

Feature("Page Initial | Sandbox @browser");

Scenario("test something", (I) => {
  I.amOnPage("https://farmaciasapp.com.br");
  I.see("Olá, Visitante");

  I.click("#login");
  I.waitForElement("#login");

  I.fillField("#email", `${process.env.USER_EMAIL}`);
  I.pressKey("Enter");

  I.fillField("#password", `${process.env.USER_EMAIL}`);
  I.pressKey("Enter");

  I.see("Fabio");
});

Feature("Page Initial | Sandbox @device");
Scenario("test something", (I) => {
  I.amOnPage("https://farmaciasapp.com.br");
  I.see("Alterar");
});
