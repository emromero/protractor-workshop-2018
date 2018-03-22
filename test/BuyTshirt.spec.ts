import​ { browser } from​ 'protractor';
import​ { MenuContentPage, AddressStepPage } from​ '../src/page';
import​ { ProductDetailPage } from​ '../src/page';
import​ { ProductListPage } from​ '../src/page';
import​ { ProductAddedModalPage } from​ '../src/page';
import​ { SummaryStepPage } from​ '../src/page';
import​ { SignInStepPage } from​ '../src/page';
import​ { ShippingStepPage } from​ '../src/page';
import​ { BankPaymentPage } from​ '../src/page';
import​ { PaymentStepPage } from​ '../src/page';
import​ { OrderResumePage } from​ '../src/page';

describe('Buy a t-shirt', () => {
 beforeEach(() => {
 jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;
 });

 it('then should be bought a t-shirt', async​ () => {

    const​ menuContentPage: MenuContentPage = new​ MenuContentPage();
    const​ productDetailPage: ProductDetailPage = new​ ProductDetailPage();
    const​ productListPage: ProductListPage = new​ ProductListPage();
    const​ productAddedModalPage: ProductAddedModalPage = new​ ProductAddedModalPage();
    const​ summaryStepPage: SummaryStepPage = new​ SummaryStepPage();
    const​ signInStepPage: SignInStepPage = new​ SignInStepPage();
    const​ addressStepPage: AddressStepPage = new​ AddressStepPage();
    const​ shippingStepPage: ShippingStepPage = new​ ShippingStepPage();
    const​ bankPaymentPage: BankPaymentPage = new​ BankPaymentPage();
    const​ paymentStepPage: PaymentStepPage = new​ PaymentStepPage();
    const​ orderResumePage: OrderResumePage = new​ OrderResumePage();

    await​ browser.get('http://automationpractice.com/');
    await​(browser.sleep(10000));

    await​ menuContentPage.goToTShirtMenu();
    await​(browser.sleep(3000));

    await productDetailPage.goToProductDetail();
    await​(browser.sleep(3000));

    await productListPage.goToAddToCart();
    await​(browser.sleep(3000));

    await​ productAddedModalPage.goToProceedToCheckout();
    await​(browser.sleep(3000));
    
    await​ summaryStepPage.goToProceedToCheckout();
    await​(browser.sleep(3000)); 

    await signInStepPage.goToSetEmail();
    await signInStepPage.goToSetPassword();
    await​ signInStepPage.goToSignIn();
    await​(browser.sleep(3000));

    await​ addressStepPage.goToProceedToCheckout();
    await​(browser.sleep(3000));

    await​ shippingStepPage.goToiAgreeTerms();
    await​(browser.sleep(3000));
    await​ shippingStepPage.goToProceedToCheckout();
    await​(browser.sleep(3000));

    await bankPaymentPage.goToBankPayment();
    await​(browser.sleep(3000));
    await​ paymentStepPage.goToConfirmMyOrder();
    await​(browser.sleep(3000));
    
    await expect(orderResumePage.goToOrderResumePage()).toBe('Your order on My Store is complete.');

    
    });
   });