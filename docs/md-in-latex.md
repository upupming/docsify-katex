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

## `\\` support

$$
a = b \\
c = d
$$

So this: $
\def\arraystretch{1.5}
   \begin{array}{c:c:c}
   a & b & c \\ \hline
   d & e & f \\
   \hdashline
   g & h & i
\end{array}
$

## HTML

This URL: $
\href{https://katex.org/}{\KaTeX}
$

## Table

| |
|:-------------------------------------------------------|
|$\displaystyle\sum_{i=1}^n$ `\displaystyle\sum_{i=1}^n`
|$\textstyle\sum_{i=1}^n$ `\textstyle\sum_{i=1}^n`
|$\scriptstyle x$ `\scriptstyle x` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(The size of a first sub/superscript)
|$\scriptscriptstyle x$ `\scriptscriptstyle x` (The size of subsequent sub/superscripts)
|$\lim\limits_x$ `\lim\limits_x`
|$\lim\nolimits_x$ `\lim\nolimits_x`
|$\verb!x^2!$ `\verb!x^2!`

## Comments and begin with KaTeX

<!--
bla
bla
bla
-->

$$
a = b
$$

## Special cases

The second argument of `\raisebox` can contain math if it is nested within `$…$` delimiters, as in `\raisebox{0.25em}{$\frac a b$}`

$\left(\LARGE{AB}\right)$ `\left(\LARGE{AB}\right)`

$`$ <code>`</code>

||||
|-|-|-|
|\\_|$\_$||
|\\\`|$\text{\`{a}}$|<code>\text{\\'{a}}</code>|