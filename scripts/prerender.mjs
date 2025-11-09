import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { renderToString } from 'react-dom/server';
import { createElement } from 'react';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distPath = join(__dirname, '..', 'dist', 'public');
const indexPath = join(distPath, 'index.html');

async function prerender() {
  console.log('🚀 Starting prerender with ReactDOMServer...');
  
  try {
    // Import the built app
    const { default: App } = await import('../dist/public/assets/index.js');
    
    // Render app to string
    const appHtml = renderToString(createElement(App));
    
    // Read the template HTML
    let html = readFileSync(indexPath, 'utf-8');
    
    // Inject the rendered content
    html = html.replace(
      '<div id="root"></div>',
      `<div id="root">${appHtml}</div>`
    );
    
    // Write back
    writeFileSync(indexPath, html);
    
    console.log('✅ Prerendering complete! SEO-friendly HTML generated.');
  } catch (error) {
    console.error('❌ Prerender failed:', error);
    console.log('ℹ️  Continuing with client-side rendering only.');
  }
}

prerender();
