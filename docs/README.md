# docsify-katex

[![jsdelivr](https://data.jsdelivr.com/v1/package/npm/docsify-katex/badge)](https://www.jsdelivr.com/package/npm/docsify-katex)
[![npm bundle size (minified)](https://img.shields.io/github/size/upupming/docsify-katex/dist/docsify-katex.js.svg)]([https://www.npmjs.com/package/docsify-katex](https://github.com/upupming/docsify-katex/tree/master/dist))
[![npm](https://img.shields.io/npm/v/docsify-katex.svg?style=flat-square)](https://www.npmjs.com/package/docsify-katex)

Add [KaTeX](https://github.com/KaTeX/KaTeX/) support to your docsify project with just two lines of code in `index.html`.

## Usage

Add `docsify-katex` CDN to your `index.html`:

```html
<!-- CDN files for docsify-katex -->
<script src="//cdn.jsdelivr.net/npm/docsify-katex@latest/dist/docsify-katex.js"></script>
<!-- or <script src="//cdn.jsdelivr.net/gh/upupming/docsify-katex@latest/dist/docsify-katex.js"></script> -->
<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/katex@latest/dist/katex.min.css"/>
```

Note:

1. `gh/upupming/docsify-katex@latest/dist/docsify-katex.js` will always fetch the latest version of `docsify-katex` on GitHub, you can use it when you want to try the latest dev features.
2. You don't need `katex.min.js`, because it is already included in `docsify-katex.js`.

## Demo projects

|Name|Website|Source code|
|:---:|:------:|:---------:|
|`docsify-katex` documentation|[upupming.site/docsify-katex/docs](https://upupming.site/docsify-katex/docs/)|[upupming/docsify-katex/docs](https://github.com/upupming/docsify-katex/tree/master/docs)|
|Firebook|[yngtodd.github.io/firebook](https://yngtodd.github.io/firebook/)|[yngtodd/firebook](https://github.com/yngtodd/firebook)|

If you have an awesome project using `docsify-katex` and want to share it with others, please leave it at [this issue](https://github.com/upupming/docsify-katex/issues/7). I will add it here as soon as possible.

## LaTeX quick reference

- [Supported functions](https://upupming.site/docsify-katex/docs/#/supported)
- [Support table](https://upupming.site/docsify-katex/docs/#/support-table)
- [Detexify](http://detexify.kirelabs.org/classify.html)
- [MathJax quick reference on Stack Exchange](https://math.meta.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference)

## Inspired by

1. [vscode-markdown](https://github.com/yzhang-gh/vscode-markdown)
2. [yzhang-gh/markdown-it-katex](https://github.com/yzhang-gh/markdown-it-katex)

## Credits

1. [KaTeX](https://github.com/Khan/KaTeX)

## Known issues

Making KaTeX work properly with docsify is a hard work, this repo is just a workaround. The main difficulty is that we cannot know context of the whole markdown file like [yzhang-gh/markdown-it-katex](https://github.com/yzhang-gh/markdown-it-katex) does, so matching complicate <code>`</code>'s and <code>\$</code>'s is not possible. Now we have such known issues:

1. Change <code>\\`</code> to:

   ```txt
   <code>`</code>
   ```

    By doing this, your <code>`</code> will not be considered as a start or end of a code block.