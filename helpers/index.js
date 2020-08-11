const {Helper} = codeceptjs;

const path = require('path');

class PlaywrightHelper extends Helper {

    _before() {
        const {page} = this.helpers.Playwright;

        page._routes = [];
    }

    async mockEndpoint(endpoint, scenario) {
        const {page} = this.helpers.Playwright;
        const rootDir = 'mocking/data/';

        await page.route(new RegExp(endpoint.url), route =>
            route.fulfill({
                path: path.resolve(rootDir, endpoint.baseDir, `${scenario}.json`),
                headers: {'content-type': 'application/json', 'access-control-allow-origin': '*'}
            }));
    }
}

module.exports = PlaywrightHelper;