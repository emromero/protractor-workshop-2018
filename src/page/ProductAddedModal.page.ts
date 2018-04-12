import { $, ElementFinder, ExpectedConditions, browser } from 'protractor';

export class ProductAddedModalPage {
    private get proceedToCheckoutButton(): ElementFinder {
      return $('[style*="display: block;"] .button-container > a');
    }
  
    public async goToProceedToCheckout(): Promise<void> {
      await browser.wait(ExpectedConditions.elementToBeClickable(this.proceedToCheckoutButton), 5000);
      await this.proceedToCheckoutButton.click();
    }
  }