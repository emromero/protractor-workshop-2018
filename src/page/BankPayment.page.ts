import​ { $, ElementFinder, promise } from​ 'protractor';

export​ class​ BankPaymentPage {
private​ get​ bankPayment(): ElementFinder {
 return​ $('#HOOK_PAYMENT > div:nth-child(1) > div > p > a');
 }
 
public​ goToBankPayment(): promise.Promise<void> {
 return​ this​.bankPayment.click();
 }
}