import katex from 'katex';

let options = {
  throwOnError: false,
  displayMode: false
};
let blockOptions = {
  throwOnError: false,
  displayMode: true
}

const preMathInlineOpen = "<!-- begin-inline-katex";
const preMathInlineClose = "end-inline-katex-->";
const preMathInlineRegex = /<!-- begin-inline-katex([\s\S]*?)end-inline-katex-->/g;


const preMathBlockOpen = "<!-- begin-block-katex";
const preMathBlockClose = "end-block-katex-->";
const preMathBlockRegex = /<!-- begin-block-katex([\s\S]*?)end-block-katex-->/g;

(function () {
  function install(hook) {
    hook.beforeEach(content => {
      let mathPreserved = content
        .replace(/(?<![\\`])(\$\$)([\s\S]*?)(?<![\\`])(\$\$)(?!`)/g, function (a, b, code) {
          return preMathBlockOpen + code + preMathBlockClose;
        })
        .replace(/(?<![\\])(\$)([\s\S]*?)(?<![\\])(\$)/g, function (a, b, code) {
          return preMathInlineOpen + code + preMathInlineClose;
        })
        .replace(/(?<![\\`])(\$)([\s\S]*?)(?<![\\`])(\$)(?!`)/g, function (a, b, code) {
          return preMathInlineOpen + code + preMathInlineClose;
        });
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
      next(mathRendered);
    });
  }

  $docsify.plugins = [].concat(install, $docsify.plugins);
}());