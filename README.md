# docsify-katex

Add KaTex support for your docsify project. [Demo](https://upupming.site/docsify-katex)

[KaTeX](https://github.com/Khan/KaTeX) is a faster alternative to MathJax. This plugin makes it easy to support in your markdown.

## Usage

**Step 1:**

Add `docsify-katex` CDN to your `index.html`:

```html
<!-- CDN files for docsify-katex -->
<script src="//cdn.jsdelivr.net/npm/docsify-katex@latest/dist/docsify-katex.js"></script>
<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/katex@latest/dist/katex.min.css">
<!-- Put them above docsify.min.js -->
<script src="//cdn.jsdelivr.net/npm/docsify@latest/lib/docsify.min.js"></script>
```

**Step 2:**

Add a plugin to your `index.html` to render page content using `docsify-katex`:

```html
<script>
window.$docsify = {
  name: 'docsify-katex',
  repo: 'https://github.com/upupming/docsify-katex',
  
  // ...

  plugins: [
    function (hook) {
      hook.beforeEach(content => window.docsifyKatex.render(content));
    }
  ]
}
</script>
```

## Build

```bash
npm run build
```

## Inspired by

1. [vscode-markdown](https://github.com/neilsustc/vscode-markdown)
2. [neilsustc/markdown-it-katex](https://github.com/neilsustc/markdown-it-katex)

## Credits

1. [markdown-it](https://markdown-it.github.io/markdown-it/)
2. [KaTex](https://github.com/Khan/KaTeX)