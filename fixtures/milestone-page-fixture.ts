import { test as base } from '@playwright/test';
import { MilestonePage } from '../page-object-models/milestone-page';

type MilestoneFixtures = {
    milestoneFixture: MilestonePage; 
}

export const test = base.extend<MilestoneFixtures>({
    milestoneFixture: async ({ page }, use) => {
        const milestonePage = new MilestonePage(page);
        await milestonePage.goto();
        await milestonePage.clickMilestoneTab();
        await use(milestonePage);
    },
});
