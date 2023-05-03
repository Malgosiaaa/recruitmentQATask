import { expect } from '@playwright/test';
import { test } from '../fixtures/milestone-page-fixture';

test.use({ storageState: 'utils/assets/storageState.json' });

test.describe('Milestone should be correctly created and completed', () => {
    test('Milestone should be created and completed correctly', async ({milestoneFixture, page }) => {
        await page.waitForURL('https://malgorzatascompany1.teamwork.com/app/projects/616042/milestones/all');
        await milestoneFixture.addMilestone('Test milestone completion', 'Test completed milestone description');
        const [response] = await Promise.all([
            page.waitForResponse(/complete.json/),
            await milestoneFixture.completeMilestone(),
        ]);
        await expect(response.status()).toBe(200);
        await milestoneFixture.deleteMilestone(); // Delete milestone to avoid missclicks in further test runs
    });
});
