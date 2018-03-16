import​ { browser } from​ 'protractor';

describe('This is thefirst example of protractor', () => {
    describe('when open Google Page', () => {
        beforeEach(() => {
            browser.get('http://www.google.com');
        });

    it('then should have a title', () => {
        expect(browser.getTitle()).toEqual('Google');
    });
 });
});