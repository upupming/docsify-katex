# Comment test

平稳随机过程的样本函数是功率型的，以上公式对平稳过程均适用。

<!-- 
## 平稳过程的功率谱密度

平稳随机过程的样本函数是功率型的。

$$
F_X(\omega, T) = \int_{-T}^{T}X(t)e^{-j\omega t}dt
$$

$$
\frac{1}{2T}\int_{-T}^{T}X^2(t)dt = \frac{1}{4\pi T}\int_{-\infty}^{\infty}|F(\omega, T)|^2d\omega
$$

$$
\begin{aligned}
    P_X &= \lim_{T \to \infty} \frac{1}{2T}\int_{-T}^{T}X^2(t)dt \\
    &= 
\end{aligned}
$$

$P_X$ 称为平稳过程 $X(t)$ 的平均功率。 -->

## 谱密度与自相关函数

### 维纳-辛钦（Wiener-Khintchine ）公式

**平稳随机过程**（必须呀！WSS，宽平稳随机过程也可以）的功率谱密度是他自相关函数的傅里叶变换。

