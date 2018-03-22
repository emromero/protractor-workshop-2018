import​ { $, ElementFinder, promise } from​ 'protractor';

export​ class​ OrderResumePage {
private​ get​ orderResumePage(): ElementFinder {
 return​ $('#center_column > div > p > strong');
 }
 
public​ goToOrderResumePage(): promise.Promise<string> {
 return​ this​.orderResumePage.getText();
 }
}