import { Locator, Page } from "@playwright/test";

const delay = 100;

export class TaskListPage {
    readonly page: Page;
    readonly projectsLink: Locator;
    readonly projectLink: Locator;
    readonly addTaskListBtn: Locator;
    readonly taskListBtn: Locator;
    readonly listNameInput: Locator;
    readonly submitTaskListBtn: Locator;
    readonly addTaskBtn: Locator;
    readonly taskNameInput: Locator;
    readonly assigneePicker: Locator;
    readonly assigneeName: Locator;
    readonly startDateTodayInput: Locator;
    readonly dueDate7DaysInput: Locator;
    readonly taskDescriptionInput: Locator;
    readonly createTaskBtn: Locator;
    readonly completeTaskBtn: Locator;
    readonly addTaskWithinTaskList: Locator;

    constructor(page:Page) {
        this.page = page;
        this.projectsLink = page.locator('.v-list-item-title:has-text("Projects")');
        this.projectLink = page.frameLocator('iFrame').locator('a:has-text("Testing1234")').first();
        this.addTaskListBtn = page.frameLocator('iFrame').locator('button:has-text("Add Task List")');
        this.taskListBtn = page.frameLocator('iFrame').locator('a:has-text("My List")');
        this.listNameInput = page.frameLocator('iFrame').locator('#addOrEditTaskList_name');
        this.submitTaskListBtn = page.frameLocator('iFrame').locator('button[type="submit"]');
        this.addTaskBtn = page.frameLocator('iFrame').locator('button.js-add-task');
        this.taskNameInput = page.frameLocator('iFrame').locator('.w-task-input__input');
        this.assigneePicker = page.frameLocator('iFrame').locator('.w-people-picker-new');
        this.assigneeName = page.frameLocator('iFrame').locator('.w-people-picker-new__item-name-text');
        this.startDateTodayInput = page.frameLocator('iFrame').locator('.w-date-input__shortcut-today').first();
        this.dueDate7DaysInput = page.frameLocator('iFrame').locator('.w-date-input__shortcut-plus-1-week').last();
        this.taskDescriptionInput = page.frameLocator('iFrame').locator('div[role="presentation"]').last();
        this.createTaskBtn = page.frameLocator('iFrame').locator('.w-task-edit__save >> button[type="submit"]');
        this.completeTaskBtn = page.frameLocator('iFrame').locator('button[aria-label="Task Complete"]').last();
        this.addTaskWithinTaskList = page.frameLocator('iFrame').locator('button.main-header__button:has-text("Add a Task")');
    }

    async goto(url?: string) {
        if (url) await this.page.goto(url);
        else await this.page.goto('/');
    }

    async clickProject() {
        await this.projectsLink.click();
        await this.projectLink.click();
    }

    async addTaskList(listName) {
        await this.addTaskListBtn.click();
        await this.listNameInput.waitFor();
        await this.listNameInput.fill(listName);
        await this.submitTaskListBtn.click();
    }

    async clickTaskList() {
        await this.taskListBtn.waitFor();
        await this.taskListBtn.click({force:true});
    }

    async clickAddTask() {
        await this.addTaskBtn.click();
    }

    async clickAddTaskInExistingList() {
        await this.addTaskWithinTaskList.click();
    }

    async addTask(taskName, taskDescription) {
        await this.taskNameInput.type(taskName, {delay: delay});
        await this.assigneePicker.click();
        await this.assigneeName.click();
        await this.startDateTodayInput.click();
        await this.dueDate7DaysInput.click();
        await this.taskDescriptionInput.waitFor();
        await this.taskDescriptionInput.type(taskDescription, {delay: delay});
        await this.createTaskBtn.click();
    }

    async clickCompleteTask() {
        await this.completeTaskBtn.hover();
        await this.completeTaskBtn.click();
    }
}
