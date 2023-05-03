import { test } from '../fixtures/milestone-page-fixture';

test.use({ storageState: 'utils/assets/storageState.json' });

test.describe('Milestone should be correctly created', () => {
    test('Milestone should be created correctly', async ({milestoneFixture, page }) => {
        await page.waitForURL('https://malgorzatascompany1.teamwork.com/app/projects/616042/milestones/all');
        await milestoneFixture.addMilestone('Test milestone name', 'Test milestone description');
        await milestoneFixture.deleteMilestone(); // Delete milestone to avoid missclicks in further test runs
    });
});
