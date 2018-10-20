import markdownit from 'markdown-it';
import markdownitKatex from './markdown-it-katex';

window.docsifyKatex = markdownit({html: true})
  .use(markdownitKatex, { "throwOnError": false });

(function () {
  function install(hook) {
    hook.beforeEach(content => {
      return window.docsifyKatex.render(content);
    }); 
  }

  $docsify.plugins = [].concat(install, $docsify.plugins);
}());