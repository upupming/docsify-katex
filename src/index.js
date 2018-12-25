import markdownit from 'markdown-it';
import markdownitKatex from './markdown-it-katex';
import markdownPreserver from './preserver';
import logger from './logger';

let md = markdownit({html: true});

window.docsifyKatex = md.use(markdownitKatex, { "throwOnError": false })
  .use(markdownPreserver);

(function () {
  function install(hook) {
    hook.beforeEach(content => {
      let mathRendered = `${window.docsifyKatex.render(content)}`;
      logger(mathRendered);
      return mathRendered;
    }); 
    hook.afterEach(function(html, next) {
      logger(html);
      let preOpen = /<!-- begin preserve-katex --><pre class='preserve-katex'>/g;
      let preClose = /<\/pre><!-- end preserve-katex -->/g;
      let mathRecovered = html.replace(preOpen, '').replace(preClose, '');
      logger(mathRecovered);
      next(mathRecovered);
    });
  }

  $docsify.plugins = [].concat(install, $docsify.plugins);

  // em, strong & codespan will be rendered by markdown-it instead of marked
  $docsify.markdown = $docsify.markdown || {renderer: {}};
  $docsify.markdown.renderer.em = text => text;
  $docsify.markdown.renderer.strong = text => text;
  $docsify.markdown.renderer.codespan = text => text;
  
}());