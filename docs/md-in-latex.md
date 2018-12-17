# Markdown in LaTeX should not be rendered

## "em" in LaTeX

`*...*` in LaTeX code should not be italic:

$$
*f(x)* = 5
\tag{1}
$$

`_..._` in LaTeX code should not be italic:

$$
_f(x)_ = 5
\tag{2}
$$

Another example form [docsify#646](https://github.com/docsifyjs/docsify/issues/646):

$\{x_n\}$，$\lim\limits_{n \rightarrow \infty} x_n = a$

## "strong" in LaTeX

`**...**` in LaTeX code should not be bold:

$$
E = **mc^2**
\tag{3}
$$

`__...__` in LaTeX code should not be bold:

$$
E = __mc^2__
\tag{4}
$$