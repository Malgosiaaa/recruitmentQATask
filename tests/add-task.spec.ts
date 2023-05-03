import { test } from '../fixtures/task-list-page-fixture';

test.use({ storageState: 'utils/assets/storageState.json' });

test.describe('Task should be created correctly', () => {
    test('Task list should be created and task should be added in newly created task list', async ({ taskListFixture, page}) => {
        await page.waitForURL('https://malgorzatascompany1.teamwork.com/app/projects/616042/tasks/list');
        await taskListFixture.addTaskList('Test task list');
        await taskListFixture.clickAddTask();
        await taskListFixture.addTask('Test task name', 'Test task description');
    });
});
