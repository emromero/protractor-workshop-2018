import​ { $, ElementFinder, promise } from​ 'protractor';

export​ class​ ShippingStepPage {
private​ get​ iAgreeTerms(): ElementFinder {
 return​ $('#cgv');
 }

 private get shippingStepPage(): ElementFinder {
     return $('#form > p > button > span');
 }
 
public​ goToiAgreeTerms(): promise.Promise<void> {
 return​ this​.iAgreeTerms.click();
 }

 public​ goToProceedToCheckout(): promise.Promise<void> {
 return​ this​.shippingStepPage.click();
 }

 
}