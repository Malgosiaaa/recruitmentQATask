# QA-task
To run test please clone the repository and run npm install. Please note that you need to have nvm pre-installed (Documentation how to install nvm via brew: https://formulae.brew.sh/formula/nvm).

To run the particular test please run: npx playwright test test-relative-path
To run all the test please run: npx playwright test tests/*

Because all the tests recquired login as the first step I included login proccess in global setup and stored it in session storage.

I divided repository structure for: 
- fixtures (set of steps which needs to be performed before the actual test, like opening the page on which test will be executed), 
- page object models (set of locators and methods which will be used in tests of particular page and its functionality to avoid code repetition in the test files),
- tests which follows steps described in the task.

Normally I would also add .env file to .gitignore but I thought that for recruitment purposes it would be easier to give you a possibility to clone it together with the repository.

I also decided to temporarily comment out projects other than chmromium because as described in the documentation (https://playwright.dev/docs/next/auth#moderate-one-account-per-parallel-worker) if tests modify shared server-side state we would need separate test account per worker and I had only one account to use.