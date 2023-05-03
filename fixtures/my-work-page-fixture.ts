import { test as base } from '@playwright/test';
import { MyWorkPage } from '../page-object-models/my-work-page';

type MyWorkFixtures = {
    myWorkFixture: MyWorkPage;
}

export const test = base.extend<MyWorkFixtures>({
    myWorkFixture: async ({ page }, use) => {
        const myWorkPage = new MyWorkPage(page);
        await myWorkPage.goto();
        await use(myWorkPage);
    },
});
