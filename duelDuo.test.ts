
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test("clicking draw button displays the div w/ id 'choices'", async () => {
    await driver.findElement(By.id('draw')).click()
    const choices = await driver.findElement(By.id('choices'))
    expect(choices.isDisplayed()).toBeTruthy()

    await driver.sleep(3000)
})

test("add to dua button displays the div w/ id 'player-duo'", async () => {
    await driver.findElement(By.id('draw')).click()
    await driver.findElement(By.xpath('//button[text()= "Add to Duo"]')).click()
    const add = await driver.findElement(By.id('player-duo'))
    expect(add.isDisplayed()).toBeTruthy()

    await driver.sleep(3000)
});


