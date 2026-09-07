import{a as e,c as t,i as n,n as r,o as i,r as a,s as o,t as s}from"./app-CVL-wmV5.js";import{t as c}from"./plugin-vue_export-helper-BDNMzG2s.js";var l=JSON.parse(`{"path":"/java8gu/05.JVM/Java%E6%98%AF%E7%BC%96%E8%AF%91%E5%9E%8B%E8%BF%98%E6%98%AF%E8%A7%A3%E9%87%8A%E5%9E%8B.html","title":"Java是编译型还是解释型","lang":"zh-CN","frontmatter":{"title":"Java是编译型还是解释型","author":"Hollis","category":["Java八股文"],"description":"Java是编译型还是解释型 警告 内容来源网络，仅供学习使用。 不要相信文档中的链接、联系方式等！！！ 我们常用的编程语言，比如C语言、Java、Python、Go等都是高级语言，想要把高级语言转变成计算机认识的机器语言有两种方式，分别是编译和解释。 通常认为编译的过程就是通过编译器（compiler）把高级语言的源代码，直接编译成可以被机器执行的机器...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java是编译型还是解释型\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2026-09-07T16:27:23.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hollis\\"}]}"],["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/java8gu/05.JVM/Java%E6%98%AF%E7%BC%96%E8%AF%91%E5%9E%8B%E8%BF%98%E6%98%AF%E8%A7%A3%E9%87%8A%E5%9E%8B.html"}],["meta",{"property":"og:site_name","content":"Java面试帮助文档"}],["meta",{"property":"og:title","content":"Java是编译型还是解释型"}],["meta",{"property":"og:description","content":"Java是编译型还是解释型 警告 内容来源网络，仅供学习使用。 不要相信文档中的链接、联系方式等！！！ 我们常用的编程语言，比如C语言、Java、Python、Go等都是高级语言，想要把高级语言转变成计算机认识的机器语言有两种方式，分别是编译和解释。 通常认为编译的过程就是通过编译器（compiler）把高级语言的源代码，直接编译成可以被机器执行的机器..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2026-09-07T16:27:23.000Z"}],["meta",{"property":"article:author","content":"Hollis"}],["meta",{"property":"article:modified_time","content":"2026-09-07T16:27:23.000Z"}]]},"git":{"createdTime":1788798443000,"updatedTime":1788798443000,"contributors":[{"name":"Yinx","username":"Yinx","email":"admin@yinx.eu.cc","commits":1,"url":"https://github.com/Yinx"}]},"readingTime":{"minutes":10.04,"words":3012},"filePathRelative":"java8gu/05.JVM/Java是编译型还是解释型.md","autoDesc":true}`),u={name:`Java是编译型还是解释型.md`};function d(c,l,u,d,f,p){let m=o(`RouteLink`);return i(),r(`div`,null,[l[1]||=a(`<h1 id="java是编译型还是解释型" tabindex="-1"><a class="header-anchor" href="#java是编译型还是解释型"><span>Java是编译型还是解释型</span></a></h1><div class="hint-container caution"><p class="hint-container-title">警告</p><p>内容来源网络，仅供学习使用。<br><br><strong>不要相信文档中的链接、联系方式等！！！</strong></p></div><p>我们常用的编程语言，比如C语言、Java、Python、Go等都是高级语言，想要把高级语言转变成计算机认识的机器语言有两种方式，分别是编译和解释。</p><p>通常认为编译的过程就是通过编译器（compiler）把高级语言的源代码，直接<strong>编译</strong>成可以被机器执行的机器码，交由机器执行。如C语言。</p><p>而解释的过程就是通过解释器（interpreter）直接<strong>解释</strong>执行，不需要编译成机器语言。如JavaScript。</p><p>其实，现在很多的高级语言，已经很难用简单的&quot;编译型&quot;、&quot;解释型&quot;来区分了，尤其是Java，因为他的代码执行过程并不是单一的。</p><p>首先，在Java中，为了实现跨平台和提升运行速度，需要先通过<code>javac</code>将Java源代码编译成字节码，但是这个字节码并不是机器码，计算机没有办法直接执行，需要通过Java虚拟机来解释执行。</p><p>但是Java程序在通过解释器进行解释执行的过程中，当JVM发现某个方法或代码块运行特别频繁的时候，就会认为这是“热点代码”（Hot Spot Code)。然后会通过即时编译(JIT)会把部分“热点代码”直接翻译成机器码，而这些机器码就可以被直接执行了。</p><p>并且，除了JIT以外，现在Java中也支持AOT编译了，这就是纯纯的编译成机器码。</p>`,9),s(`p`,null,[e(m,{to:`/java8gu/05.JVM/%E4%BB%80%E4%B9%88%E6%98%AFAOT%E7%BC%96%E8%AF%91_%E5%92%8CJIT%E6%9C%89%E5%95%A5%E5%8C%BA%E5%88%AB.html`},{default:t(()=>[...l[0]||=[n(`05.JVM_什么是AOT编译_和JIT有啥区别`,-1)]]),_:1})]),l[2]||=a(`<p>所以，Java语言不能简单的划分成编译型或者解释型，如果非要定义的话，那只能认为，他既是编译型、又是解释型。正常的代码是解释执行的，JIT优化的过程是编译执行的。</p><h1 id="知识扩展" tabindex="-1"><a class="header-anchor" href="#知识扩展"><span>知识扩展</span></a></h1><h2 id="编译" tabindex="-1"><a class="header-anchor" href="#编译"><span>编译</span></a></h2><p>在介绍编译，我们先来简单介绍下编程语言（Programming Language）。编程语言（Programming Language）分为低级语言（Low-level Language）和高级语言（High-level Language）。</p><p>机器语言（Machine Language）和汇编语言（Assembly Language）属于低级语言，直接用计算机指令编写程序。</p><p>而C、C++、Java、Python等属于高级语言，用语句（Statement）编写程序，语句是计算机指令的抽象表示。</p><p>举个例子，同样一个语句用C语言、汇编语言和机器语言分别表示如下：</p><figure><img src="/assets/Java%E6%98%AF%E7%BC%96%E8%AF%91%E5%9E%8B%E8%BF%98%E6%98%AF%E8%A7%A3%E9%87%8A%E5%9E%8B_-1-CwrmffI2.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>计算机只能对数字做运算，符号、声音、图像在计算机内部都要用数字表示，指令也不例外，上表中的机器语言完全由十六进制数字组成。</p><p>最早的程序员都是直接用机器语言编程，但是很麻烦，需要查大量的表格来确定每个数字表示什么意思，编写出来的程序很不直观，而且容易出错，于是有了汇编语言，把机器语言中一组一组的数字用助记符（Mnemonic）表示，直接用这些助记符写出汇编程序，然后让汇编器（Assembler）去查表把助记符替换成数字，也就把汇编语言翻译成了机器语言。</p><p>但是，汇编语言用起来同样比较复杂，后面，就衍生出了Java、C、C++等高级语言。</p><p>上面提到语言有两种，一种低级语言，一种高级语言。可以这样简单的理解：低级语言是计算机认识的语言、高级语言是程序员认识的语言。</p><p>那么如何从高级语言转换成低级语言呢？这个过程其实就是编译。</p><p>从上面的例子还可以看出，C语言的语句和低级语言的指令之间不是简单的一一对应关系，一条a=b+1;语句要翻译成三条汇编或机器指令，这个过程称为编译（Compile），由编译器（Compiler）来完成，显然编译器的功能比汇编器要复杂得多。用C语言编写的程序必须经过编译转成机器指令才能被计算机执行，编译需要花一些时间，这是用高级语言编程的一个缺点，然而更多的是优点。首先，用C语言编程更容易，写出来的代码更紧凑，可读性更强，出了错也更容易改正。</p><p><strong>将便于人编写、阅读、维护的高级计算机语言所写作的源代码程序，翻译为计算机能解读、运行的低阶机器语言的程序的过程就是编译。负责这一过程的处理的工具叫做编译器。</strong></p><p>具体在Java语言中，编译又分为前端编译和后端编译，前端编译主要指与源语言有关但与目标机无关的部分，包括词法分析、语法分析、语义分析与中间代码生成。后端编译主要指与目标机有关的部分，包括代码优化和目标代码生成等。</p><p><strong>我们可以把将</strong><code>**.java**</code><strong>文件编译成</strong><code>**.class**</code><strong>的编译过程称之为前端编译。把将</strong><code>**.class**</code><strong>文件翻译成机器指令的编译过程称之为后端编译。</strong></p><h2 id="反编译" tabindex="-1"><a class="header-anchor" href="#反编译"><span>反编译</span></a></h2><p>反编译的过程与编译刚好相反，就是将已编译好的编程语言还原到未编译的状态，也就是找出程序语言的源代码。就是将机器看得懂的语言转换成程序员可以看得懂的语言。Java语言中的反编译一般指将<code>class</code>文件转换成<code>java</code>文件。</p><p>有了反编译工具，我们可以做很多事情，最主要的功能就是有了反编译工具，我们就能读得懂Java编译器生成的字节码。如果你想问读懂字节码有啥用，那么我可以很负责任的告诉你，好处大大的。</p><h2 id="java反编译工具" tabindex="-1"><a class="header-anchor" href="#java反编译工具"><span>Java反编译工具</span></a></h2><p>本文主要介绍3个Java的反编译工具：<strong>javap</strong>、<strong>jad</strong>和<strong>cfr</strong></p><h3 id="javap" tabindex="-1"><a class="header-anchor" href="#javap"><span>javap</span></a></h3><p><code>javap</code>是jdk自带的一个工具，可以对代码反编译，也可以查看java编译器生成的字节码。<code>javap</code>和其他两个反编译工具最大的区别是他生成的文件并不是<code>java</code>文件，也不像其他两个工具生成代码那样更容易理解。拿一段简单的代码举例，如我们想分析Java 7中的<code>switch</code>是如何支持<code>String</code>的，我们先有以下可以编译通过的源代码：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>public class switchDemoString {</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        String str = &quot;world&quot;;</span></span>
<span class="line"><span>        switch (str) {</span></span>
<span class="line"><span>            case &quot;hello&quot;:</span></span>
<span class="line"><span>                System.out.println(&quot;hello&quot;);</span></span>
<span class="line"><span>                break;</span></span>
<span class="line"><span>            case &quot;world&quot;:</span></span>
<span class="line"><span>                System.out.println(&quot;world&quot;);</span></span>
<span class="line"><span>                break;</span></span>
<span class="line"><span>            default:</span></span>
<span class="line"><span>                break;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行以下两个命令：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>javac switchDemoString.java</span></span>
<span class="line"><span>javap -c switchDemoString.class</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>生成代码如下：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>public class com.hollis.suguar.switchDemoString {</span></span>
<span class="line"><span>  public com.hollis.suguar.switchDemoString();</span></span>
<span class="line"><span>    Code:</span></span>
<span class="line"><span>       0: aload_0</span></span>
<span class="line"><span>       1: invokespecial #1                  // Method java/lang/Object.&quot;&lt;init&gt;&quot;:()V</span></span>
<span class="line"><span>       4: return</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  public static void main(java.lang.String[]);</span></span>
<span class="line"><span>    Code:</span></span>
<span class="line"><span>       0: ldc           #2                  // String world</span></span>
<span class="line"><span>       2: astore_1</span></span>
<span class="line"><span>       3: aload_1</span></span>
<span class="line"><span>       4: astore_2</span></span>
<span class="line"><span>       5: iconst_m1</span></span>
<span class="line"><span>       6: istore_3</span></span>
<span class="line"><span>       7: aload_2</span></span>
<span class="line"><span>       8: invokevirtual #3                  // Method java/lang/String.hashCode:()I</span></span>
<span class="line"><span>      11: lookupswitch  { // 2</span></span>
<span class="line"><span>              99162322: 36</span></span>
<span class="line"><span>             113318802: 50</span></span>
<span class="line"><span>               default: 61</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>      36: aload_2</span></span>
<span class="line"><span>      37: ldc           #4                  // String hello</span></span>
<span class="line"><span>      39: invokevirtual #5                  // Method java/lang/String.equals:(Ljava/lang/Object;)Z</span></span>
<span class="line"><span>      42: ifeq          61</span></span>
<span class="line"><span>      45: iconst_0</span></span>
<span class="line"><span>      46: istore_3</span></span>
<span class="line"><span>      47: goto          61</span></span>
<span class="line"><span>      50: aload_2</span></span>
<span class="line"><span>      51: ldc           #2                  // String world</span></span>
<span class="line"><span>      53: invokevirtual #5                  // Method java/lang/String.equals:(Ljava/lang/Object;)Z</span></span>
<span class="line"><span>      56: ifeq          61</span></span>
<span class="line"><span>      59: iconst_1</span></span>
<span class="line"><span>      60: istore_3</span></span>
<span class="line"><span>      61: iload_3</span></span>
<span class="line"><span>      62: lookupswitch  { // 2</span></span>
<span class="line"><span>                     0: 88</span></span>
<span class="line"><span>                     1: 99</span></span>
<span class="line"><span>               default: 110</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>      88: getstatic     #6                  // Field java/lang/System.out:Ljava/io/PrintStream;</span></span>
<span class="line"><span>      91: ldc           #4                  // String hello</span></span>
<span class="line"><span>      93: invokevirtual #7                  // Method java/io/PrintStream.println:(Ljava/lang/String;)V</span></span>
<span class="line"><span>      96: goto          110</span></span>
<span class="line"><span>      99: getstatic     #6                  // Field java/lang/System.out:Ljava/io/PrintStream;</span></span>
<span class="line"><span>     102: ldc           #2                  // String world</span></span>
<span class="line"><span>     104: invokevirtual #7                  // Method java/io/PrintStream.println:(Ljava/lang/String;)V</span></span>
<span class="line"><span>     107: goto          110</span></span>
<span class="line"><span>     110: return</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我个人的理解，<code>javap</code>并没有将字节码反编译成<code>java</code>文件，而是生成了一种我们可以看得懂字节码。其实javap生成的文件仍然是字节码，只是程序员可以稍微看得懂一些。如果你对字节码有所掌握，还是可以看得懂以上的代码的。其实就是把String转成hashcode，然后进行比较。</p><p>个人认为，一般情况下我们会用到<code>javap</code>命令的时候不多，一般只有在真的需要看字节码的时候才会用到。但是字节码中间暴露的东西是最全的，你肯定有机会用到，比如我在分析<code>synchronized</code>的原理的时候就有是用到<code>javap</code>。通过<code>javap</code>生成的字节码，我发现<code>synchronized</code>底层依赖了<code>ACC_SYNCHRONIZED</code>标记和<code>monitorenter</code>、<code>monitorexit</code>两个指令来实现同步。</p><h3 id="jad" tabindex="-1"><a class="header-anchor" href="#jad"><span>jad</span></a></h3><p>jad是一个比较不错的反编译工具，只要下载一个执行工具，就可以实现对<code>class</code>文件的反编译了。还是上面的源代码，使用jad反编译后内容如下：</p><p>命令：<code>jad switchDemoString.class</code></p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>public class switchDemoString</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    public switchDemoString()</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    public static void main(String args[])</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        String str = &quot;world&quot;;</span></span>
<span class="line"><span>        String s;</span></span>
<span class="line"><span>        switch((s = str).hashCode())</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>        default:</span></span>
<span class="line"><span>            break;</span></span>
<span class="line"><span>        case 99162322:</span></span>
<span class="line"><span>            if(s.equals(&quot;hello&quot;))</span></span>
<span class="line"><span>                System.out.println(&quot;hello&quot;);</span></span>
<span class="line"><span>            break;</span></span>
<span class="line"><span>        case 113318802:</span></span>
<span class="line"><span>            if(s.equals(&quot;world&quot;))</span></span>
<span class="line"><span>                System.out.println(&quot;world&quot;);</span></span>
<span class="line"><span>            break;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>看，这个代码你肯定看的懂，因为这不就是标准的java的源代码么。这个就很清楚的可以看到原来<strong>字符串的switch是通过</strong><code>**equals()**</code><strong>和</strong><code>**hashCode()**</code><strong>方法来实现的</strong>。</p><p>但是，jad已经很久不更新了，在对Java7生成的字节码进行反编译时，偶尔会出现不支持的问题，在对Java 8的lambda表达式反编译时就彻底失败。</p><h3 id="cfr" tabindex="-1"><a class="header-anchor" href="#cfr"><span>CFR</span></a></h3><p>jad很好用，但是无奈的是很久没更新了，所以只能用一款新的工具替代他，CFR是一个不错的选择，相比jad来说，他的语法可能会稍微复杂一些，但是好在他可以work。</p><p>如，我们使用cfr对刚刚的代码进行反编译。执行一下命令：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>java -jar cfr_0_125.jar switchDemoString.class --decodestringswitch false</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>得到以下代码：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>public class switchDemoString {</span></span>
<span class="line"><span>    public static void main(String[] arrstring) {</span></span>
<span class="line"><span>        String string;</span></span>
<span class="line"><span>        String string2 = string = &quot;world&quot;;</span></span>
<span class="line"><span>        int n = -1;</span></span>
<span class="line"><span>        switch (string2.hashCode()) {</span></span>
<span class="line"><span>            case 99162322: {</span></span>
<span class="line"><span>                if (!string2.equals(&quot;hello&quot;)) break;</span></span>
<span class="line"><span>                n = 0;</span></span>
<span class="line"><span>                break;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            case 113318802: {</span></span>
<span class="line"><span>                if (!string2.equals(&quot;world&quot;)) break;</span></span>
<span class="line"><span>                n = 1;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        switch (n) {</span></span>
<span class="line"><span>            case 0: {</span></span>
<span class="line"><span>                System.out.println(&quot;hello&quot;);</span></span>
<span class="line"><span>                break;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            case 1: {</span></span>
<span class="line"><span>                System.out.println(&quot;world&quot;);</span></span>
<span class="line"><span>                break;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过这段代码也能得到字符串的switch是通过<code>equals()</code>和<code>hashCode()</code>方法来实现的结论。</p><p>相比Jad来说，CFR有很多参数，还是刚刚的代码，如果我们使用以下命令，输出结果就会不同：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>java -jar cfr_0_125.jar switchDemoString.class</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class switchDemoString {</span></span>
<span class="line"><span>    public static void main(String[] arrstring) {</span></span>
<span class="line"><span>        String string;</span></span>
<span class="line"><span>        switch (string = &quot;world&quot;) {</span></span>
<span class="line"><span>            case &quot;hello&quot;: {</span></span>
<span class="line"><span>                System.out.println(&quot;hello&quot;);</span></span>
<span class="line"><span>                break;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            case &quot;world&quot;: {</span></span>
<span class="line"><span>                System.out.println(&quot;world&quot;);</span></span>
<span class="line"><span>                break;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所以<code>--decodestringswitch</code>表示对于switch支持string的细节进行解码。类似的还有<code>--decodeenumswitch</code>、<code>--decodefinally</code>、<code>--decodelambdas</code>等。在我的关于语法糖的文章中，我使用<code>--decodelambdas</code>对lambda表达式警进行了反编译。 源码：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>public static void main(String... args) {</span></span>
<span class="line"><span>    List&lt;String&gt; strList = ImmutableList.of(&quot;Hollis&quot;, &quot;公众号：Hollis&quot;, &quot;博客：www.hollischuang.com&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    strList.forEach( s -&gt; { System.out.println(s); } );</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>java -jar cfr_0_125.jar lambdaDemo.class --decodelambdas false</code>反编译后代码：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>public static /* varargs */ void main(String ... args) {</span></span>
<span class="line"><span>    ImmutableList strList = ImmutableList.of((Object)&quot;Hollis&quot;, (Object)&quot;\\u516c\\u4f17\\u53f7\\uff1aHollis&quot;, (Object)&quot;\\u535a\\u5ba2\\uff1awww.hollischuang.com&quot;);</span></span>
<span class="line"><span>    strList.forEach((Consumer&lt;String&gt;)LambdaMetafactory.metafactory(null, null, null, (Ljava/lang/Object;)V, lambda$main$0(java.lang.String ), (Ljava/lang/String;)V)());</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private static /* synthetic */ void lambda$main$0(String s) {</span></span>
<span class="line"><span>    System.out.println(s);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>CFR还有很多其他参数，均用于不同场景，读者可以使用<code>java -jar cfr_0_125.jar --help</code>进行了解。这里不逐一介绍了。</p><h2 id="如何防止反编译" tabindex="-1"><a class="header-anchor" href="#如何防止反编译"><span>如何防止反编译</span></a></h2><p>由于我们有工具可以对<code>class</code>文件进行反编译，所以，对开发人员来说，如何保护Java程序就变成了一个非常重要的挑战。但是，魔高一尺、道高一丈。当然有对应的技术可以应对反编译咯。但是，这里还是要说明一点，和网络安全的防护一样，无论做出多少努力，其实都只是提高攻击者的成本而已。无法彻底防治。</p><p>典型的应对策略有以下几种：</p><ul><li><p>隔离Java程序</p></li><li><p>让用户接触不到你的Class文件</p></li><li><p>对Class文件进行加密</p></li><li><p>提高破解难度</p></li><li><p>代码混淆</p></li><li><p>将代码转换成功能上等价，但是难于阅读和理解的形式</p></li></ul>`,55)])}var f=c(u,[[`render`,d]]);export{l as _pageData,f as default};