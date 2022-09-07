// import katex from "katex";
// import marked from "marked";

(function () {
  let oldMarkdown = window.$docsify.markdown;
  let newMarked = marked;
  let newM = JSON.stringify(newMarked);
  function newMarkdown(originMarked, originRenderer) {
    // let newMarked = marked; // in docsify.js: window.$marked = marked
    function isFn(obj) {
      return typeof obj === "function";
    }
    const mathExtension = {
      name: "math",
      level: "inline",
      start(src) {
        let index = src.match(/\$/)?.index;
        return index;
      },
      tokenizer(src, tokens) {
        const blockRule = /^\$\$((\\.|[^\$\\])+)\$\$/;
        const inlineRule = /^\$((\\.|[^\$\\])+)\$/;
        let match;
        if ((match = blockRule.exec(src))) {
          return {
            type: "math",
            raw: match[0],
            text: match[1].trim(),
            mathLevel: "block",
          };
        } else if ((match = inlineRule.exec(src))) {
          return {
            type: "math",
            raw: match[0],
            text: match[1].trim(),
            mathLevel: "inline",
          };
        }
      },
      renderer(token) {
        if (token.mathLevel === "block") {
          return katex.renderToString(token.text, {
            throwOnError: false,
            displayMode: true,
          });
        } else if (token.mathLevel === "inline") {
          return katex.renderToString(token.text, {
            throwOnError: false,
            displayMode: false,
          });
        }
      },
    };
    const merge =
      Object.assign ||
      function (to) {
        for (let i = 1; i < arguments.length; i++) {
          const from = Object(arguments[i]);
          for (const key in from) {
            if (hasOwn.call(from, key)) {
              to[key] = from[key];
            }
          }
        }
        return to;
      };

    let opts = oldMarkdown || {};

    if (isFn(oldMarkdown)) {
      opts = originMarkdonw.apply(
        this, // this original
        originMarked,
        originRenderer
      ).defaults;
    } else {
      opts = merge(oldMarkdown, {
        renderer: merge(originRenderer, oldMarkdown.renderer),
      });
    }
    newMarked.setOptions(opts);
    newMarked.use({ extensions: [mathExtension] });

    return newMarked;
  }
  window.$docsify.markdown = newMarkdown;
})();
