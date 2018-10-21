import markdownit from 'markdown-it';
import markdownitKatex from './markdown-it-katex';

window.docsifyKatex = markdownit({html: true})
  .use(markdownitKatex, { "throwOnError": false });

(function () {
  function install(hook) {
    hook.beforeEach(content => {
      return `<pre>${window.docsifyKatex.render(content)}</pre>`;
    }); 
    hook.afterEach(function(html, next) {
      next(html.slice(5, -6))
    })
  }

  $docsify.plugins = [].concat(install, $docsify.plugins);
}());