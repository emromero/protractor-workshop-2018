import​ { $, ElementFinder, promise } from​ 'protractor';

export​ class​ ProductListPage {
private​ get​ productList(): ElementFinder {
 return​ $('#add_to_cart > button > span');
 }

public​ goToAddToCart(): promise.Promise<void> {
 return​ this​.productList.click();
 }
}