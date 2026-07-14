import { test, expect } from "@playwright/test";

test.describe("Assignment 10 — Custom React Hooks + E2E Testing", () => {

    test("custom hooks page loads successfully", async ({ page }) => {
        await page.goto("/customHooks");
        await expect(page).toHaveTitle(/Front End Web Development/);
        await expect(page.getByRole("heading", { name: "Custom React Hooks" })).toBeVisible();
        await expect(page.getByRole("heading", { name: "Contact Form" })).toBeVisible();
        await expect(page.getByRole("heading", { name: "User Directory" })).toBeVisible();
        await expect(page.getByRole("heading", { name: "Search Users" })).toBeVisible();
    });

});
