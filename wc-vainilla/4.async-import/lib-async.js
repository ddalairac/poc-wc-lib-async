// import IconTooltip from './icon-tooltip.js';
// window.customElements.define('icon-tooltip', IconTooltip);
(async function () {
  window.customElements.define(
    'icon-tooltip',
    await (await import('./icon-tooltip.js')).default()
  )
  window.customElements.define(
    'wc-list',
    await (await import('./wc-list.js')).default()
  )
  window.customElements.define(
    'wc-item',
    await (await import('./wc-item.js')).default()
  )
})()
