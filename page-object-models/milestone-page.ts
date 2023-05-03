import { Locator, Page } from "@playwright/test";

export class MilestonePage {
    readonly page: Page;
    readonly projectsLink: Locator;
    readonly projectLink: Locator;
    readonly milestoneTab: Locator;
    readonly addMilestoneBtn: Locator;
    readonly milestoneNameInput: Locator;
    readonly dueDate7DaysInput: Locator;
    readonly milestoneDescription: Locator;
    readonly notify: Locator;
    readonly submitMilestoneBtn: Locator;
    readonly completeMilestoneBtn: Locator;
    readonly deleteMilestoneBtn: Locator;
    readonly confirmDeleteBtn: Locator;
    readonly actionLinks: Locator;
    
    constructor(page:Page) {
        this.page = page;
        this.projectsLink = page.locator('.v-list-item-title:has-text("Projects")');
        this.projectLink = page.frameLocator('iFrame').locator('a:has-text("Testing1234")').first();
        this.milestoneTab = page.locator('a:has-text("Milestones")');
        this.addMilestoneBtn = page.frameLocator('iFrame').locator('button.main-header__button:has-text("Add Milestone")');
        this.milestoneNameInput = page.frameLocator('iFrame').locator('#milestoneName');
        this.dueDate7DaysInput = page.frameLocator('iFrame').locator('a.w-date-input__shortcut-plus-1-week');
        this.milestoneDescription = page.frameLocator('iFrame').locator('div[role="presentation"]').last();
        this.notify = page.frameLocator('iFrame').locator('a >> span:has-text("Notify by Email?")');
        this.submitMilestoneBtn = page.frameLocator('iFrame').locator('button[type="submit"]');
        this.completeMilestoneBtn = page.frameLocator('iFrame').locator('button.w-completion-check').last();
        this.deleteMilestoneBtn = page.frameLocator('iFrame').locator('a >> i.fa-trash').last();
        this.confirmDeleteBtn = page.frameLocator('iFrame').locator('button >> span:has-text("OK")');
        this.actionLinks = page.frameLocator('iFrame').locator('.w-action-links');
    }

    async goto(url?: string) {
        if (url) await this.page.goto(url);
        else await this.page.goto('/');
    }

    async clickMilestoneTab() {
        await this.projectsLink.click();
        await this.projectLink.click();
        await this.milestoneTab.click();
    }

    async addMilestone(milestoneName, milestoneDescription) {
        await this.addMilestoneBtn.click();
        await this.milestoneNameInput.fill(milestoneName);
        await this.dueDate7DaysInput.click();
        await this.notify.click();
        await this.milestoneDescription.fill(milestoneDescription);
        await this.submitMilestoneBtn.click();
    }

    async completeMilestone() {
        await this.completeMilestoneBtn.click();
    }

    async deleteMilestone() {
        const actionLinks = this.actionLinks;
        const actionLinksCount = await actionLinks.count();
        for (let link_index = 0; link_index < actionLinksCount; link_index++) {
            const actionLink = actionLinks.nth(link_index);
            await actionLink.hover();
            await this.deleteMilestoneBtn.waitFor();
            await this.deleteMilestoneBtn.click();
            await this.confirmDeleteBtn.click();
        }
    }
}
