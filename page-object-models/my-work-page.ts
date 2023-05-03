import { Locator, Page } from "@playwright/test";

export class MyWorkPage {
    readonly page: Page;
    readonly avatar: Locator;
    readonly username: Locator;

    constructor(page:Page) {
        this.page = page;
        this.avatar = page.locator('.v-avatar');
        this.username = page.locator('.v-list-item-title').nth(12);
    }

    async goto(url?: string) {
        if (url) await this.page.goto(url);
        else await this.page.goto('/');
    }

    async clickAvatar() {
        await this.avatar.click();
    }
}
