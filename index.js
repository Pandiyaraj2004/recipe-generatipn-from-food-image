const puppeteer = require('puppeteer');

async function scrape() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  // Replace with the URL of the webpage you want to scrape
  await page.goto('https://www.google.com/searchbyimage?sbisrc=4chanx&image_url=https://i.ibb.co/7GPK9Bv/25473-the.jpgsafe=off&safe=off');

  // Scrape the <a> tags and their classes
  const links = await page.evaluate(() => {
    const elements = Array.from(document.querySelectorAll('a.fKDtNb'));

    return elements.map(element => element.innerText.trim());
  });

  console.log(links);
  console.log("the food name is",links);
  await browser.close();
}

scrape();








