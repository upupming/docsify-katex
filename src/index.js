import katex from 'katex';

let options = {
  throwOnError: false,
  displayMode: false
};
let blockOptions = {
  throwOnError: false,
  displayMode: true
};

const magicEscapedDollar = 'c194a9eb';
const magicEscapedDollarRegex = /c194a9eb/g;
const magicBacktickInCodeTag = 'c194a9ec';
const magicBacktickInCodeTagRegex = /c194a9ec/g;
const magicBacktickInDollars = 'c194a9ed';
const magicBacktickInDollarsRegex = /c194a9ed/g;
const magicEscapedBacktick = 'c194a9ee';
const magicEscapedBacktickRegex = /c194a9ee/g;
const magicDollarInBacktick = 'c194a9ef';
const magicDollarInBacktickRegex = /c194a9ef/g;

const preMathInlineOpen = 'c194a9eg<!-- begin-inline-katex';
const preMathInlineClose = 'end-inline-katex-->';
const preMathInlineRegex = /c194a9eg<!-- begin-inline-katex([\s\S]*?)end-inline-katex-->/g;


const preMathBlockOpen = '<!-- begin-block-katex';
const preMathBlockClose = 'end-block-katex-->';
const preMathBlockRegex = /<!-- begin-block-katex([\s\S]*?)end-block-katex-->/g;

(function () {
  function install(hook) {
    hook.beforeEach(content => {
      let mathPreserved = content
        // Escape all <code>`</code>
        .replace(/<code>(.*)<\/code>/g, function(a, b) {
          return `<code>${b.replace(/`/g, magicBacktickInCodeTag)}</code>`;
        })
        // Escape all $`$
        .replace(/\$`\$/g, magicBacktickInDollars)  
        // Escape all \`{
        .replace(/\\`\{/g, magicEscapedBacktick)
        // Escape all \$
        .replace(/\\\$/g, magicEscapedDollar)
        // Escape all & in `...`
        .replace(/`[^`]*`/g, function (a) {
          return a.replace(/\$/g, magicDollarInBacktick);
        })
        // Recover all <code>`</code>
        .replace(magicBacktickInCodeTagRegex, '`');
      mathPreserved = mathPreserved
        // Recover all $`$
        .replace(magicBacktickInDollarsRegex, '$ `$')
        // Recover all \`{
        .replace(magicEscapedBacktickRegex, '\\`{');
      mathPreserved = mathPreserved
        // Block
        .replace(/(\$\$)([\s\S]*?)(\$\$)/g, function (a, b, c) {
          return preMathBlockOpen + c + preMathBlockClose;
        })
        // Inline, no \$
        .replace(/(\$)([\s\S]*?)(\$)/g, function (a, b, c) {
          return preMathInlineOpen + c.replace(magicEscapedDollarRegex, '\\$') + preMathInlineClose;
        })
        .replace(magicEscapedDollarRegex, '\\$');
      return mathPreserved;
    });
    hook.afterEach(function (html, next) {
      let mathRendered = html
        .replace(
          preMathInlineRegex,
          function (m, code) {
            let rendered = katex.renderToString(code, options);
            return rendered;
          }
        );
      mathRendered = mathRendered
        .replace(
          preMathBlockRegex,
          function (m, code) {
            let rendered = katex.renderToString(code, blockOptions);
            return rendered;
          }
        );
      next(mathRendered
        // Recover all & in `...`
        .replace(magicDollarInBacktickRegex, '$'));
    });
  }

  $docsify.plugins = [].concat(install, $docsify.plugins);
}());