import​ { $, ElementFinder, promise, ExpectedConditions, browser} from​ 'protractor';

export​ class​ MenuContentPage {

private EC = ExpectedConditions;//Declarar espera explicita

private​ get​ tShirtMenu(): ElementFinder {
 return​ $('#block_top_menu > ul > li:nth-child(3) > a');
 }
 
public​ goToTShirtMenu(): promise.Promise<void> {
    let isClickable = this.EC.elementToBeClickable(this.tShirtMenu);//Esperar hasta que el elemento este disponible para ser clickeado
    browser.wait(isClickable, 5000); //wait for condition isClickable to be true. y dar tiempo de espera de 5 segundos
    return​ this​.tShirtMenu.click(); //wait for condition isClickable to be true.
 }
}