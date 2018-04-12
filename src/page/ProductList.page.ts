import​ { $, ElementFinder, promise, ExpectedConditions, browser } from​ 'protractor';

export​ class​ ProductListPage {

private EC = ExpectedConditions;//Declarar espera explicita

private​ get​ productList(): ElementFinder {
 return​ $('#add_to_cart > button > span');
 }

public​ goToAddToCart(): promise.Promise<void> {
    let isClickable = this.EC.elementToBeClickable(this.productList);//Esperar hasta que el elemento este disponible para ser clickeado
    browser.wait(isClickable, 5000); //wait for condition isClickable to be true. y dar tiempo de espera de 5 segundos
    return​ this​.productList.click();
 }
}