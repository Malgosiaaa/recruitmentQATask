import { expect } from '@playwright/test';
import { test } from '../fixtures/task-list-page-fixture';

test.use({ storageState: 'utils/assets/storageState.json' });

test.describe('Task should be created and completed correctly', () => {
    test('Task should be added and completed in existing tasklist', async ({ taskListFixture, page }) => {
        await page.waitForURL('https://malgorzatascompany1.teamwork.com/app/projects/616042/tasks/list');
        await taskListFixture.clickTaskList();
        await taskListFixture.clickAddTaskInExistingList();
        await taskListFixture.addTask('Test task completion', 'Completed task description');
        await page.on('requestfinished', request => {
            console.log('New task created')
        });
        const [response] = await Promise.all([
            page.waitForResponse('https://malgorzatascompany1.teamwork.com/projects/api/v1/tasklists/2995972.json?getCompletedCount=1'),
            await taskListFixture.clickCompleteTask(),
        ])
        await expect(response.status()).toBe(200);
    });
});
