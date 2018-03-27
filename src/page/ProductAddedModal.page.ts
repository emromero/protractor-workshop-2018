import​ { $, ElementFinder, promise, ExpectedConditions, browser } from​ 'protractor';

export​ class​ ProductAddedModalPage {

private EC = ExpectedConditions;//Declarar espera explicita

private​ get​ productAddedModal(): ElementFinder {
 return​ $('[style*="display: block;"] .button-container > a');
 }

public​ goToProceedToCheckout(): promise.Promise<void> {
    let isClickable = this.EC.visibilityOf(this.productAddedModal);//Esperar hasta que el elemento este disponible para ser clickeado
    browser.wait(isClickable, 5000); //wait for condition isClickable to be true. y dar tiempo de espera de 5 segundos
    return​ this​.productAddedModal.click();
 }
}