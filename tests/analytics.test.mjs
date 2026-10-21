import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { runInNewContext } from 'node:vm';
import ts from 'typescript';

const source = await readFile(new URL('../public/analytics.js', import.meta.url), 'utf8');
const config = await readFile(new URL('../public/tracking-config.js', import.meta.url), 'utf8');
const helper = await readFile(new URL('../src/lib/analytics.ts', import.meta.url), 'utf8');

test('LP envia para as duas propriedades sem duplicar tags, preservando o Pixel e as medições Vercel', () => {
  const window = {};
  const scripts = [];
  let click;
  runInNewContext(config, { window });
  runInNewContext(source, { window, location: { hostname: 'lp.dramarinasteffli.com.br' }, navigator: {}, URL, document: {
    createElement: () => ({}), head: { append: (script) => scripts.push(script) }, addEventListener: (_, handler) => { click = handler; },
  } });
  const calls = () => Array.from(window.dataLayer, (args) => Array.from(args));
  assert.deepEqual(calls().filter(([type]) => type === 'config').map(([, id]) => id), ['G-5G5TYPJET0', 'G-XHQ8FYWMXK']);
  assert.equal(scripts.filter((s) => s.src.includes('gtag/js')).length, 1);
  assert.equal(scripts.filter((s) => s.src.includes('fbevents.js')).length, 1);
  assert.equal(scripts.filter((s) => s.src === '/_vercel/insights/script.js').length, 1);
  assert.equal(scripts.filter((s) => s.src === '/_vercel/speed-insights/script.js').length, 1);
  assert.equal(window.fbq.queue.filter((args) => args[0] === 'init')[0][1], '1385259336476482');
  click({ target: { closest: () => ({ href: window.siteContactTargets.doctoralia, dataset: { agendamento: 'true', posicaoCta: 'agendamento' } }) } });
  assert.equal(calls().filter((args) => args[1] === 'agendamento_click').length, 1);
  assert.equal(window.fbq.queue.filter((args) => args[1] === 'Contact').length, 1);
});

test('rolar até a agenda registra início, sem converter em Lead ou Contact', () => {
  const calls = [];
  const exports = {};
  const window = { gtag: (...args) => calls.push(args) };
  runInNewContext(ts.transpileModule(helper, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText, { exports, window });
  exports.trackBookingStart('hero');
  assert.equal(calls.length, 1);
  assert.equal(calls[0][1], 'agendamento_inicio');
  assert.equal(calls[0][2].posicao_cta, 'hero');
  delete window.gtag;
  assert.doesNotThrow(() => exports.trackBookingStart('agendamento'));
});
