// Uneix els fitxers de src/ en un únic index.html (sense dependències).
// Ús:  node build.mjs      → genera ./index.html
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const SRC = new URL('./src/', import.meta.url).pathname;
const llegeix = (f) => readFileSync(join(SRC, f), 'utf8');
const llista = (dir, sufix) =>
  readdirSync(join(SRC, dir)).filter((f) => f.endsWith(sufix)).sort().map((f) => `${dir}/${f}`);

// Ordre de càrrega del JavaScript (tot va dins un únic <script>):
//  1) configuració, logos i cicles   2) sessions de cada competència
//  3) helpers de contingut           4) contingut de cada competència   5) motor
const js = [
  'js/01-config.js', 'js/02-logos.js', 'js/03-cicles.js',
  ...llista('contingut', '-sessions.js'),
  'js/04-helpers-contingut.js',
  ...llista('contingut', '-contingut.js'),
  'js/05-motor.js',
].map(llegeix).join('');

const html = llegeix('index.template.html')
  .replace('/*@STYLE*/\n', () => llegeix('estils.css'))
  .replace('/*@SCRIPT*/\n', () => js);

writeFileSync(new URL('./index.html', import.meta.url), html);
console.log(`index.html generat (${(html.length / 1024).toFixed(0)} kB)`);
