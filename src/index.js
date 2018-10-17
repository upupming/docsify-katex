import markdownit from 'markdown-it';

window.docsifyKatex = markdownit().use(require('./markdown-it-katex'), { "throwOnError": false });