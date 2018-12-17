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
      let preClose = /<\/pre><!-- end preserve-katex -->/g;
      let mathRecovered = html.replace(preOpen, '').replace(preClose, '');
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