import markdownit from 'markdown-it';
import markdownitKatex from './markdown-it-katex';
import markdownPreserver from './preserver';

let md = markdownit({html: true});

window.docsifyKatex = md.use(markdownitKatex, { "throwOnError": false })
  .use(markdownPreserver);

(function () {
  function install(hook) {
    hook.beforeEach(content => {
      let mathRendered = `${window.docsifyKatex.render(content)}`;
      return mathRendered;
    }); 
    hook.afterEach(function(html, next) {
      let preOpen = /<!-- begin preserve-katex --><pre class='preserve-katex'>/g;
      let preClose = /<\/pre><!-- end\ preserve-katex\ -->/g;
      next(html.replace(preOpen, '').replace(preClose, ''));
    });
  }

  $docsify.plugins = [].concat(install, $docsify.plugins);
}());