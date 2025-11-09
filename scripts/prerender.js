import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distPath = join(__dirname, '..', 'dist', 'public');
const indexPath = join(distPath, 'index.html');

async function prerender() {
  console.log('🚀 Starting prerender process...');
  
  // Launch headless browser
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  
  // Read the built index.html
  const indexHtml = readFileSync(indexPath, 'utf-8');
  
  // Serve the HTML content
  await page.setContent(indexHtml, { waitUntil: 'networkidle0' });
  
  // Wait for React to render all content
  await page.waitForSelector('[data-testid="section-hero"]', { timeout: 10000 });
  
  // Get the fully rendered HTML
  const renderedHtml = await page.content();
  
  // Write back to index.html
  writeFileSync(indexPath, renderedHtml);
  
  await browser.close();
  
  console.log('✅ Prerendering complete! index.html now contains full content.');
}

prerender().catch(err => {
  console.error('❌ Prerender failed:', err);
  process.exit(1);
});
