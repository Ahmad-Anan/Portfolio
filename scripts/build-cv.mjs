// Prints cv/cv.html to public/pdf/CV_Anan-Frontend.pdf with headless Chromium.
// Run with `npm run cv` after editing the CV.
import { chromium } from 'playwright';
import { fileURLToPath, pathToFileURL } from 'node:url';

const source = fileURLToPath(new URL('../cv/cv.html', import.meta.url));
const output = fileURLToPath(new URL('../public/pdf/CV_Anan-Frontend.pdf', import.meta.url));

const browser = await chromium.launch();
try {
  const page = await browser.newPage();
  await page.goto(pathToFileURL(source).href);
  await page.pdf({ path: output, preferCSSPageSize: true, printBackground: true });
  console.log(`Wrote ${output}`);
} finally {
  await browser.close();
}
