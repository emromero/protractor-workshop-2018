import​ { $, ElementFinder, promise, ExpectedConditions, browser} from​ 'protractor';

export​ class​ ProductDetailPage {
    
private EC = ExpectedConditions;//Declarar espera explicita

private​ get​ productDetail(): ElementFinder {
 return​ $('#center_column > ul > li > div > div.left-block > div > a.product_img_link > img')
 }
 
public​ goToProductDetail(): promise.Promise<void> {
    let isClickable = this.EC.elementToBeClickable(this.productDetail);//Esperar hasta que el elemento este disponible para ser clickeado
    browser.wait(isClickable, 5000); //wait for condition isClickable to be true. y dar tiempo de espera de 5 segundos
    return​ this​.productDetail.click();
 }
}