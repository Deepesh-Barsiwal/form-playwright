import { Page, Locator } from '@playwright/test';

export class FormPage {
    constructor(private page: Page) {}

    get firstNameInput() {
        return this.page.locator('#firstName');
    }

    get lastNameInput() {
        return this.page.locator('#lastName');
    }

    get emailInput() {
        return this.page.locator('#userEmail');
    }

    get genderRadio() {
        return this.page.locator('input[name="gender"]');
    }

    get mobileInput() {
        return this.page.locator('#userNumber');
    }

    get dateOfBirthInput() {
        return this.page.locator('#dateOfBirthInput');
    }

    get subjectsInput() {
        return this.page.locator('#subjectsInput');
    }

    get hobbiesCheckbox() {
        return this.page.locator('input[type="checkbox"]');
    }

    get currentAddressInput() {
        return this.page.locator('#currentAddress');
    }

    get uploadPictureBtn(){
        return this.page.locator('#uploadPicture');
    }

    get stateInput() {
        return this.page.locator('#react-select-3-input');
    }

    get cityInput() {
        return this.page.locator('#react-select-4-input');
    }

    get submitButton() {
        return this.page.locator('#submit');
    }

    get successMessage(){
        return this.page.locator('.modal-title');
    }

    async fillForm(firstName: string, lastName: string, email: string,gender:string, mobile: string, dateOfBirth: string,hobby:string, address: string, state: string, city: string) {
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.emailInput.fill(email);
        await this.selectGender(gender).check();
        await this.mobileInput.fill(mobile);
        await this.dateOfBirthInput.fill(dateOfBirth);
        await this.page.keyboard.press("Enter");
        await this.selectHobby(hobby).click();
        await this.currentAddressInput.fill(address);
        await this.stateInput.fill(state);
        await this.page.keyboard.press("Enter");
        await this.cityInput.fill(city);
        await this.page.keyboard.press("Enter");
    }

    selectGender(gender: string) {
        return this.page.locator(`[for="gender-radio-${gender}"]`);
    }

    selectHobby(hobby: string) {
        return this.page.locator(`[for="hobbies-checkbox-${hobby}"]`);
    }

    async submitForm() {
        await this.submitButton.click();
    }
}


