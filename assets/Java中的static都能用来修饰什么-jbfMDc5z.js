import{n as e,o as t,r as n}from"./app-CVL-wmV5.js";import{t as r}from"./plugin-vue_export-helper-BDNMzG2s.js";var i=JSON.parse(`{"path":"/java8gu/02.Java%E5%9F%BA%E7%A1%80/Java%E4%B8%AD%E7%9A%84static%E9%83%BD%E8%83%BD%E7%94%A8%E6%9D%A5%E4%BF%AE%E9%A5%B0%E4%BB%80%E4%B9%88.html","title":"Java中的static都能用来修饰什么","lang":"zh-CN","frontmatter":{"title":"Java中的static都能用来修饰什么","author":"Hollis","category":["Java八股文"],"description":"Java中的static都能用来修饰什么 警告 内容来源网络，仅供学习使用。 不要相信文档中的链接、联系方式等！！！ 在Java编程语言中，static关键字是非常重要的修饰符，可以用于多种不同的地方。可用来修饰变量、方法、代码块以及类。 静态变量： 定义：静态变量属于类本身，而不是类的任何特定实例（new出来的对象）。 特点： 所有实例共享同一静态变...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java中的static都能用来修饰什么\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2026-09-07T16:27:23.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hollis\\"}]}"],["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/java8gu/02.Java%E5%9F%BA%E7%A1%80/Java%E4%B8%AD%E7%9A%84static%E9%83%BD%E8%83%BD%E7%94%A8%E6%9D%A5%E4%BF%AE%E9%A5%B0%E4%BB%80%E4%B9%88.html"}],["meta",{"property":"og:site_name","content":"Java面试帮助文档"}],["meta",{"property":"og:title","content":"Java中的static都能用来修饰什么"}],["meta",{"property":"og:description","content":"Java中的static都能用来修饰什么 警告 内容来源网络，仅供学习使用。 不要相信文档中的链接、联系方式等！！！ 在Java编程语言中，static关键字是非常重要的修饰符，可以用于多种不同的地方。可用来修饰变量、方法、代码块以及类。 静态变量： 定义：静态变量属于类本身，而不是类的任何特定实例（new出来的对象）。 特点： 所有实例共享同一静态变..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2026-09-07T16:27:23.000Z"}],["meta",{"property":"article:author","content":"Hollis"}],["meta",{"property":"article:modified_time","content":"2026-09-07T16:27:23.000Z"}]]},"git":{"createdTime":1788798443000,"updatedTime":1788798443000,"contributors":[{"name":"Yinx","username":"Yinx","email":"admin@yinx.eu.cc","commits":1,"url":"https://github.com/Yinx"}]},"readingTime":{"minutes":2.32,"words":697},"filePathRelative":"java8gu/02.Java基础/Java中的static都能用来修饰什么.md","autoDesc":true}`),a={name:`Java中的static都能用来修饰什么.md`};function o(r,i,a,o,s,c){return t(),e(`div`,null,[...i[0]||=[n(`<h1 id="java中的static都能用来修饰什么" tabindex="-1"><a class="header-anchor" href="#java中的static都能用来修饰什么"><span>Java中的static都能用来修饰什么</span></a></h1><div class="hint-container caution"><p class="hint-container-title">警告</p><p>内容来源网络，仅供学习使用。<br><br><strong>不要相信文档中的链接、联系方式等！！！</strong></p></div><p>在Java编程语言中，<code>static</code>关键字是非常重要的修饰符，可以用于多种不同的地方。可用来修饰变量、方法、代码块以及类。</p><ol><li><strong>静态变量</strong>：</li></ol><ul><li><p>定义：静态变量属于类本身，而不是类的任何特定实例（new出来的对象）。</p></li><li><p>特点：</p></li><li><p>所有实例共享同一静态变量。</p></li><li><p>在类加载到内存时就被初始化，而不是在创建对象的时候。</p></li><li><p>常用于管理类的全局状态或作为常量仓库（例如<code>public static final</code>修饰的常量）。</p></li></ul><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>public class Counter {</span></span>
<span class="line"><span>    // 静态变量</span></span>
<span class="line"><span>    public static int count = 0;</span></span>
<span class="line"><span>    public static final String ERROR_CODE = &quot;SYSTEM_ERROR&quot;;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li><strong>静态方法</strong>：</li></ol><ul><li><p>定义：静态方法同样属于类，而非类的实例。</p></li><li><p>特点：</p></li><li><p>可以在不创建类的实例的情况下调用。</p></li><li><p>不能访问类的实例变量或实例方法，它们只能访问其他的静态成员。</p></li><li><p>常用于工具类的方法，例如<code>Math.sqrt()</code>或<code>Collections.sort()</code>。</p></li></ul><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>public class MathUtils {</span></span>
<span class="line"><span>    // 静态方法</span></span>
<span class="line"><span>    public static double square(double number) {</span></span>
<span class="line"><span>        return number * number;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 使用示例</span></span>
<span class="line"><span>public class Main {</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        double result = MathUtils.square(3.0);</span></span>
<span class="line"><span>        System.out.println(result); // 输出9.0</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li><strong>静态代码块</strong>：</li></ol><ul><li><p>定义：用于初始化类的静态变量。</p></li><li><p>特点：</p></li><li><p>当类被Java虚拟机加载并初始化时执行。</p></li><li><p>通常用于执行静态变量的复杂初始化。</p></li></ul><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>public class DatabaseConfig {</span></span>
<span class="line"><span>    public static int timeout;</span></span>
<span class="line"><span>    public static String url;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 静态代码块</span></span>
<span class="line"><span>    static {</span></span>
<span class="line"><span>        System.out.println(&quot;Initializing database settings&quot;);</span></span>
<span class="line"><span>        timeout = 30; // 以秒为单位</span></span>
<span class="line"><span>        url = &quot;jdbc:mysql://localhost:3306/myDatabase&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 使用示例</span></span>
<span class="line"><span>public class Main {</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        System.out.println(&quot;Database URL: &quot; + DatabaseConfig.url); // 输出初始化的URL</span></span>
<span class="line"><span>        System.out.println(&quot;Timeout: &quot; + DatabaseConfig.timeout); // 输出初始化的超时时间</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li><strong>静态内部类</strong>：</li></ol><ul><li><p>定义：在一个类的内部定义的静态类。</p></li><li><p>特点：</p></li><li><p>可以不依赖于外部类的实例而独立存在。</p></li><li><p>可以访问外部类的所有静态成员，但不能直接访问外部类的实例成员。</p></li><li><p>常用于当内部类的行为不应依赖于外部类的实例时。</p></li></ul><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>public class OuterClass {</span></span>
<span class="line"><span>    // 静态内部类</span></span>
<span class="line"><span>    public static class StaticNestedClass {</span></span>
<span class="line"><span>        private int value;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        public StaticNestedClass(int value) {</span></span>
<span class="line"><span>            this.value = value;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        public void display() {</span></span>
<span class="line"><span>            System.out.println(&quot;Value: &quot; + value);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 使用示例</span></span>
<span class="line"><span>public class Main {</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        OuterClass.StaticNestedClass nestedObject = new OuterClass.StaticNestedClass(5);</span></span>
<span class="line"><span>        nestedObject.display(); // 输出值5</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用<code>static</code>修饰符的好处包括减少内存使用（共享静态变量而不是为每个实例创建副本）、提供一个全局访问点（例如静态方法和变量）以及无需实例化类即可使用其中的方法和变量。</p>`,16)]])}var s=r(a,[[`render`,o]]);export{i as _pageData,s as default};