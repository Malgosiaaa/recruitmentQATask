import { expect } from '@playwright/test';
import { test } from '../fixtures/my-work-page-fixture';

test.use({ storageState: 'utils/assets/storageState.json' });

test.describe('Login should be successful', () => {
    test('Username after login should be as expected', async ({myWorkFixture}) => {
        await myWorkFixture.clickAvatar();
        await expect(myWorkFixture.username).toHaveText('Malgorzata Borawska');
    });
});
