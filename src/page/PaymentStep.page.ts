import​ { $, ElementFinder, promise } from​ 'protractor';

export​ class​ PaymentStepPage {
private​ get​ paymentStepPage(): ElementFinder {
 return​ $('#cart_navigation > button > span');
 }
 
public​ goToConfirmMyOrder(): promise.Promise<void> {
 return​ this​.paymentStepPage.click();
 }
}