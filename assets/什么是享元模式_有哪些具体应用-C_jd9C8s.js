import{n as e,o as t,r as n}from"./app-CVL-wmV5.js";import{t as r}from"./plugin-vue_export-helper-BDNMzG2s.js";var i=JSON.parse(`{"path":"/java8gu/33.%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/%E4%BB%80%E4%B9%88%E6%98%AF%E4%BA%AB%E5%85%83%E6%A8%A1%E5%BC%8F_%E6%9C%89%E5%93%AA%E4%BA%9B%E5%85%B7%E4%BD%93%E5%BA%94%E7%94%A8.html","title":"什么是享元模式,有哪些具体应用","lang":"zh-CN","frontmatter":{"title":"什么是享元模式,有哪些具体应用","author":"Hollis","category":["Java八股文"],"description":"什么是享元模式,有哪些具体应用 警告 内容来源网络，仅供学习使用。 不要相信文档中的链接、联系方式等！！！ 享元模式是一种通过尽可能多地共享数据来最小化内存使用和对象数量，从而提高性能的设计模式。在享元模式中，如果需要相同数据的多个对象，则共享这些对象而不是创建新的对象，从而提高系统的效率。 其实有很多应用场景，我们日常经常能接触到，但是很多人并不知道...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"什么是享元模式,有哪些具体应用\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2026-09-07T16:27:23.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hollis\\"}]}"],["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/java8gu/33.%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/%E4%BB%80%E4%B9%88%E6%98%AF%E4%BA%AB%E5%85%83%E6%A8%A1%E5%BC%8F_%E6%9C%89%E5%93%AA%E4%BA%9B%E5%85%B7%E4%BD%93%E5%BA%94%E7%94%A8.html"}],["meta",{"property":"og:site_name","content":"Java面试帮助文档"}],["meta",{"property":"og:title","content":"什么是享元模式,有哪些具体应用"}],["meta",{"property":"og:description","content":"什么是享元模式,有哪些具体应用 警告 内容来源网络，仅供学习使用。 不要相信文档中的链接、联系方式等！！！ 享元模式是一种通过尽可能多地共享数据来最小化内存使用和对象数量，从而提高性能的设计模式。在享元模式中，如果需要相同数据的多个对象，则共享这些对象而不是创建新的对象，从而提高系统的效率。 其实有很多应用场景，我们日常经常能接触到，但是很多人并不知道..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2026-09-07T16:27:23.000Z"}],["meta",{"property":"article:author","content":"Hollis"}],["meta",{"property":"article:modified_time","content":"2026-09-07T16:27:23.000Z"}]]},"git":{"createdTime":1788798443000,"updatedTime":1788798443000,"contributors":[{"name":"Yinx","username":"Yinx","email":"admin@yinx.eu.cc","commits":1,"url":"https://github.com/Yinx"}]},"readingTime":{"minutes":2.66,"words":799},"filePathRelative":"java8gu/33.设计模式/什么是享元模式,有哪些具体应用.md","autoDesc":true}`),a={name:`什么是享元模式,有哪些具体应用.md`};function o(r,i,a,o,s,c){return t(),e(`div`,null,[...i[0]||=[n(`<h1 id="什么是享元模式-有哪些具体应用" tabindex="-1"><a class="header-anchor" href="#什么是享元模式-有哪些具体应用"><span>什么是享元模式,有哪些具体应用</span></a></h1><div class="hint-container caution"><p class="hint-container-title">警告</p><p>内容来源网络，仅供学习使用。<br><br><strong>不要相信文档中的链接、联系方式等！！！</strong></p></div><p><strong>享元模式是一种通过尽可能多地共享数据来最小化内存使用和对象数量，从而提高性能的设计模式</strong>。在享元模式中，如果需要相同数据的多个对象，则共享这些对象而不是创建新的对象，从而提高系统的效率。</p><p>其实有很多应用场景，我们日常经常能接触到，但是很多人并不知道这其实是享元模式，如：</p><p>字符串池：在Java中，String对象使用了享元模式，通过字符串池的方式共享相同的字符串对象，避免了重复创建。</p><p>其实，很多池化技术，如数据库连接池、线程池等，背后都是采用了享元模式来共享对象的。</p><p>在服务器端开发中，享元模式也经常被使用，可以用来管理网络连接，避免资源的浪费。</p><h1 id="扩展知识" tabindex="-1"><a class="header-anchor" href="#扩展知识"><span>扩展知识</span></a></h1><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h2><p>假设我们正在编写一个简单的游戏，这个游戏需要绘制很多小怪兽，每个小怪兽有不同的颜色、形状和属性。为了避免创建太多的怪兽对象占用过多的内存，我们可以使用享元模式来实现。</p><p>首先，我们创建一个抽象的怪兽类 Monster，包含所有怪兽共有的属性和方法，例如 draw() 方法来绘制怪兽。</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>public abstract class Monster {</span></span>
<span class="line"><span>    public abstract void draw();</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，我们创建具体的怪兽类，例如红色怪兽、蓝色怪兽、方形怪兽、圆形怪兽等等。这些怪兽类继承自 Monster 类，并在构造方法中初始化它们特有的属性，例如颜色和形状</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>public class RedMonster extends Monster {</span></span>
<span class="line"><span>    private String color = &quot;red&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void draw() {</span></span>
<span class="line"><span>        System.out.println(&quot;Draw a &quot; + color + &quot; monster&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class BlueMonster extends Monster {</span></span>
<span class="line"><span>    private String color = &quot;blue&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void draw() {</span></span>
<span class="line"><span>        System.out.println(&quot;Draw a &quot; + color + &quot; monster&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class SquareMonster extends Monster {</span></span>
<span class="line"><span>    private String shape = &quot;square&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void draw() {</span></span>
<span class="line"><span>        System.out.println(&quot;Draw a &quot; + shape + &quot; monster&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class CircleMonster extends Monster {</span></span>
<span class="line"><span>    private String shape = &quot;circle&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void draw() {</span></span>
<span class="line"><span>        System.out.println(&quot;Draw a &quot; + shape + &quot; monster&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来，我们创建一个工厂类 MonsterFactory 来管理怪兽对象的创建和共享。工厂类维护一个 HashMap 对象，用来存储已经创建的怪兽对象。在获取怪兽对象时，如果该对象已经存在，直接返回已有的对象，否则创建一个新的对象并将其存储到 HashMap 中。这样，我们就可以确保每种属性的怪兽只创建一次，从而实现共享。</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>import java.util.HashMap;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class MonsterFactory {</span></span>
<span class="line"><span>    private static final HashMap&lt;String, Monster&gt; monsters = new HashMap&lt;&gt;();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static Monster getMonster(String key) {</span></span>
<span class="line"><span>        Monster monster = monsters.get(key);</span></span>
<span class="line"><span>        if (monster == null) {</span></span>
<span class="line"><span>            switch (key) {</span></span>
<span class="line"><span>                case &quot;red&quot;:</span></span>
<span class="line"><span>                    monster = new RedMonster();</span></span>
<span class="line"><span>                    break;</span></span>
<span class="line"><span>                case &quot;blue&quot;:</span></span>
<span class="line"><span>                    monster = new BlueMonster();</span></span>
<span class="line"><span>                    break;</span></span>
<span class="line"><span>                case &quot;square&quot;:</span></span>
<span class="line"><span>                    monster = new SquareMonster();</span></span>
<span class="line"><span>                    break;</span></span>
<span class="line"><span>                case &quot;circle&quot;:</span></span>
<span class="line"><span>                    monster = new CircleMonster();</span></span>
<span class="line"><span>                    break;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            monsters.put(key, monster);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return monster;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样，我们就可以在游戏中随意创建各种类型的怪兽，但是实际上每个怪兽只会被创建一次，避免了过多的内存占用。</p>`,17)]])}var s=r(a,[[`render`,o]]);export{i as _pageData,s as default};