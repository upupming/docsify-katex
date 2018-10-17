import markdownit from 'markdown-it';

window.docsifyKatex = markdownit({
  html: true
}).use(require('./markdown-it-katex'), { "throwOnError": false });