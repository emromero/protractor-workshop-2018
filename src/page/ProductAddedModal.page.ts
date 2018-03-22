import​ { $, ElementFinder, promise } from​ 'protractor';

export​ class​ ProductAddedModalPage {
private​ get​ productAddedModal(): ElementFinder {
 return​ $('[style*="display: block;"] .button-container > a');
 }

public​ goToProceedToCheckout(): promise.Promise<void> {
 return​ this​.productAddedModal.click();
 }
}