import​ { browser} from​ 'protractor';
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

 it('then should be bought a t-shirt', async​ () => {

    //const EC = ExpectedConditions;//Declarar espera explicita

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

    /*const menuCP = menuContentPage.goToTShirtMenu();//Obtener el Elemento html
    let isClickable = EC.elementToBeClickable(menuCP);//Esperar hasta que el elemento este disponible para ser clickeado
    browser.wait(isClickable, 5000); //wait for condition isClickable to be true.
    menuCP.click(); //Click sobre el elemento html*/
    
    await menuContentPage.goToTShirtMenu();

    await productDetailPage.goToProductDetail();

    await productListPage.goToAddToCart();

    await​ productAddedModalPage.goToProceedToCheckout();
    
    await​ summaryStepPage.goToProceedToCheckout();

    await signInStepPage.goToSetEmail();
    await signInStepPage.goToSetPassword();
    await​ signInStepPage.goToSignIn();

    await​ addressStepPage.goToProceedToCheckout();

    await​ shippingStepPage.goToiAgreeTerms();

    await​ shippingStepPage.goToProceedToCheckout();


    await bankPaymentPage.goToBankPayment();

    await​ paymentStepPage.goToConfirmMyOrder();

    
    await expect(orderResumePage.goToOrderResumePage()).toBe('Your order on My Store is complete.');

    
    });
   });