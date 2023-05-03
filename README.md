# QA-task
To run test please clone the repository and run npm install. Please note that you need to have nvm pre-installed (Documentation how to install nvm via brew: https://formulae.brew.sh/formula/nvm).

I added .env file to .gitignore and left env_example like I would do in real project to avoid storing login data publicly. I thought that for recruitment purposes it would be easier to store real data in env_example to give you a possibility to clone them together with the repository. To run the tests please add .env file in the project root and use data from env_example.

To run the particular test please run: npx playwright test test-relative-path
To run all the test please run: npx playwright test tests/*

Because all the tests recquired login as the first step I included login proccess in global setup and stored it in session storage.

I divided repository structure for: 
- fixtures (set of steps which needs to be performed before the actual test, like opening the page on which test will be executed), 
- page object models (set of locators and methods which will be used in tests of particular page and its functionality to avoid code repetition in the test files),
- tests which follows steps described in the task.

I also decided to temporarily comment out projects other than chmromium because as described in the documentation (https://playwright.dev/docs/next/auth#moderate-one-account-per-parallel-worker) if tests modify shared server-side state we would need separate test account per worker and I had only one account to use.
