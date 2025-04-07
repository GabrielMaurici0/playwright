import { defineConfig, devices } from "@playwright/test";
import * as dotenv from 'dotenv';

dotenv.config(); 

export default defineConfig({
    // Look for test files in the "tests" directory, relative to this configuration file.
    testDir: "tests",

    // Run all tests in parallel.
    fullyParallel: true,

    // Fail the build on CI if you accidentally left test.only in the source code.
    forbidOnly: !!process.env.CI,

    // Retry on CI only.
    retries: process.env.CI ? 2 : 0,

    // Opt out of parallel tests on CI.
     workers: 1, //process.env.CI ? 1 : undefined,

    // Reporter to use
    reporter: [['html', {outputFolter: 'report'} ]],

    use: {
        // Base URL to use in actions like `await page.goto('/')`.
        baseURL: "http://localhost:3000",

        // Collect trace when retrying the failed test.
        trace: "on-first-retry",

        headless: false,
        screenshot: 'on',
        video: 'on',
    },
    // Configure projects for major browsers.
    projects: [
        {
        name: "chromium",
        use: { ...devices["Desktop Chrome"] },
        },
    ],
    webServer: undefined,
});
