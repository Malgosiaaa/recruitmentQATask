import { test as base } from '@playwright/test';
import { TaskListPage } from '../page-object-models/task-list-page';

type TaskListFixtures = {
    taskListFixture: TaskListPage;
}

export const test = base.extend<TaskListFixtures>({
    taskListFixture: async ({ page }, use) => {
        const taskListPage = new TaskListPage(page);
        await taskListPage.goto();
        await taskListPage.clickProject();
        await use(taskListPage);
    },
});
