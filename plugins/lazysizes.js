export default ({ app, store }) => {
  if (process.client) {
    require('lazysizes/plugins/object-fit/ls.object-fit.js');
    require('lazysizes');
    require('picturefill');
    window.lazySizesConfig = window.lazySizesConfig || {};
    window.lazySizesConfig.preloadAfterLoad= true;
    window.lazySizesConfig.expand = 500;
  }
}