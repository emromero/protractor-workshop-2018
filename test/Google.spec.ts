import​ { browser } from​ 'protractor';

describe('This is thefirst example of protractor', () => {
    describe('when open Google Page', () => {
        beforeEach(async () => {
            await browser.get('http://www.google.com');
        });

    it('then should have a title', async () => {
        await expect(browser.getTitle()).toEqual('Google');
    });
 });
});