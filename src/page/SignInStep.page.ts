import​ { $, ElementFinder, promise } from​ 'protractor';

export​ class​ SignInStepPage {

private​ get​ setEmail(): ElementFinder {
 return​  $('#email');
 }

private​ get​ setPassword(): ElementFinder {
 return​  $('#passwd');
 }

private​ get​ signInStep(): ElementFinder {
 return​ $('#SubmitLogin > span');
 }

public​ goToSetEmail(): promise.Promise<void> {
 return​ this​.setEmail.sendKeys('aperdomobo@gmail.com');
 }

public​ goToSetPassword(): promise.Promise<void> {
 return​ this​.setPassword.sendKeys('WorkshopProtractor');
 }

public​ goToSignIn(): promise.Promise<void> {
 return​ this​.signInStep.click();
 }
}