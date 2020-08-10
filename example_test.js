Feature('Testing GitHub');

Scenario('test something', (I) => {
    I.amOnPage('https://github.com');
    I.see('GitHub');
});
