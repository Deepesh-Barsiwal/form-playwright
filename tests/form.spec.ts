import { test, expect } from '@playwright/test';
import { FormPage } from '../page-objects/form.page.ts'
import { firstName, lastName, email, mobileNumber, DOB, address, city, state, submit, fileAddress, gender, hobby } from '../fixtures/formPageData.ts';
let formPage: FormPage
test.beforeEach(async ({ page }) => {
  await page.goto('/automation-practice-form/');
  formPage = new FormPage(page)
})

test.describe('verification of form page', async () => {
  test('verify user is able to submit the form successfully', async ({ page }) => {
    await expect(formPage.firstNameInput).toBeEnabled();
    await formPage.firstNameInput.fill(firstName);
    await expect(formPage.lastNameInput).toBeEnabled();
    await formPage.lastNameInput.fill(lastName);
    await expect(formPage.emailInput).toBeEnabled();
    await formPage.emailInput.fill(email);
    await expect(formPage.mobileInput).toBeEnabled();
    await expect(formPage.selectGender(gender)).toBeVisible();
    await formPage.selectGender(gender).click();
    await formPage.mobileInput.fill(mobileNumber);
    await expect(formPage.dateOfBirthInput).toBeEnabled();
    await formPage.dateOfBirthInput.fill(DOB);
    await page.keyboard.press("Enter");
    await expect(formPage.selectHobby(hobby)).toBeVisible();
    await formPage.selectHobby(hobby).check();
    await formPage.uploadPictureBtn.setInputFiles(fileAddress)
    await expect(formPage.currentAddressInput).toBeEnabled();
    await formPage.currentAddressInput.fill(address);
    await expect(formPage.stateInput).toBeEnabled();
    await formPage.stateInput.fill(state);
    await page.keyboard.press("Enter");
    await expect(formPage.cityInput).toBeEnabled();
    await formPage.cityInput.fill(city);
    await page.keyboard.press("Enter");
    await expect(formPage.submitButton).toBeEnabled();
    await expect(formPage.submitButton).toHaveText(submit);
    await formPage.submitButton.click();
    const successMessage = await formPage.successMessage.textContent();
    expect(successMessage).toContain(successMessage);
  });

  test('verify the required fields', async () => {
    await formPage.submitButton.click();
    await expect(formPage.firstNameInput).toHaveCSS("border-color", "rgb(220, 53, 69)");
    await expect(formPage.lastNameInput).toHaveCSS("border-color", "rgb(220, 53, 69)");
    await expect(formPage.selectGender("1")).toHaveCSS("color", "rgb(220, 53, 69)");
    await expect(formPage.mobileInput).toHaveCSS("border-color", "rgb(220, 53, 69)");
  });
  test('verify the required fields validation removed after filling details', async () => {
    await formPage.submitButton.click();
    await expect(formPage.firstNameInput).toHaveCSS("border-color", "rgb(220, 53, 69)");
    await expect(formPage.lastNameInput).toHaveCSS("border-color", "rgb(220, 53, 69)");
    await expect(formPage.selectGender(gender)).toHaveCSS("color", "rgb(220, 53, 69)");
    await expect(formPage.mobileInput).toHaveCSS("border-color", "rgb(220, 53, 69)");
    //fill the form
    await formPage.fillForm(firstName, lastName, email, gender, mobileNumber, DOB, hobby, address, state,city);
    await expect(formPage.firstNameInput).toHaveCSS("border-color", "rgb(40, 167, 69)");
    await expect(formPage.lastNameInput).toHaveCSS("border-color", "rgb(40, 167, 69)");
    await expect(formPage.selectGender(gender)).toHaveCSS("color", "rgb(40, 167, 69)");
    await expect(formPage.mobileInput).toHaveCSS("border-color", "rgb(40, 167, 69)");
  });
});


