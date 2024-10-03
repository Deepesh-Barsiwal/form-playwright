
# Project Title - FormPage

This is proof of concept of practise form

## Installation

To install the project, follow the steps below

 ```bash
  Perquiste - Node js and vscode should be installed in your system
```
Steps To install dependencies of project
  ```bash
  1. Open the new vscode terminal
  ```
  ```bash
  2. Execute: npm i
  ```
  ```bash
  3. Execute: npx playwright install
  ```
  ```bash
  4. Execute: npm update
  ```
  ## Commands to execute test 

To run  test files in chrome in headed mode

```bash
npm run test:chrome:headed
```

To run  test files in chrome in headless mode

```bash
npm run test:chrome:headless
```

To run test files in firefox in headed mode

```bash
npm run test:firefox:headed
```

To run test files in firefox in headless mode

```bash
npm run test:firefox:headless
```
To run test files in webkit in headed mode
```bash
npm run test:webkit:headed
```
To run test files in webkit in headless mode
```bash
npm run test:webkit:headless
```
To see html reports
```bash
 npx playwright show-report
```
## Folder Structure

```bash
Playwright-project/
  │   ├── fixtures/
  │   │   └── example.ts
  |   |   └── page-objects/
  │   │           └── example.page.ts                
  │   └── tests/     
  │       └── example.spec.ts
  ├── node_modules/
  ├── .gitignore
  ├── playwright.config.ts
  ├── package-lock.json
  └── package.json
```

## Playwright Configuration

The playwright.config.ts file contains configuration options for playwright. You can set various options such as the base URL for the application, the viewport size, and much more.
## Writing Tests

Tests are written using playwright's built-in testing framework. To write a test, create a new file in the tests directory and use the describe and it functions to define your test suites and test cases

```bash
test.describe('Example test suite', () => {
  it('Example test case', () => {
    // Test code goes here
  })
})
```