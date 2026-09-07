import{a as e,c as t,i as n,n as r,o as i,r as a,s as o,t as s}from"./app-CVL-wmV5.js";import{t as c}from"./plugin-vue_export-helper-BDNMzG2s.js";var l=JSON.parse(`{"path":"/java8gu/36.%E7%BA%BF%E4%B8%8A%E9%97%AE%E9%A2%98%E6%8E%92%E6%9F%A5/%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8jstack%E5%88%86%E6%9E%90%E6%AD%BB%E9%94%81.html","title":"如何使用jstack分析死锁","lang":"zh-CN","frontmatter":{"title":"如何使用jstack分析死锁","author":"Hollis","category":["Java八股文"],"description":"如何使用jstack分析死锁 警告 内容来源网络，仅供学习使用。 不要相信文档中的链接、联系方式等！！！ 先来写一段死锁的程序： 当我启动该程序时，我们看一下控制台： QQ20160118-0 (1).pngQQ20160118-0 (1).png 我们发现，程序只输出了两行内容，然后程序就不再打印其它的东西了，但是程序并没有停止。 这样就产生了死锁。...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"如何使用jstack分析死锁\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2026-09-07T16:27:23.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hollis\\"}]}"],["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/java8gu/36.%E7%BA%BF%E4%B8%8A%E9%97%AE%E9%A2%98%E6%8E%92%E6%9F%A5/%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8jstack%E5%88%86%E6%9E%90%E6%AD%BB%E9%94%81.html"}],["meta",{"property":"og:site_name","content":"Java面试帮助文档"}],["meta",{"property":"og:title","content":"如何使用jstack分析死锁"}],["meta",{"property":"og:description","content":"如何使用jstack分析死锁 警告 内容来源网络，仅供学习使用。 不要相信文档中的链接、联系方式等！！！ 先来写一段死锁的程序： 当我启动该程序时，我们看一下控制台： QQ20160118-0 (1).pngQQ20160118-0 (1).png 我们发现，程序只输出了两行内容，然后程序就不再打印其它的东西了，但是程序并没有停止。 这样就产生了死锁。..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2026-09-07T16:27:23.000Z"}],["meta",{"property":"article:author","content":"Hollis"}],["meta",{"property":"article:modified_time","content":"2026-09-07T16:27:23.000Z"}]]},"git":{"createdTime":1788798443000,"updatedTime":1788798443000,"contributors":[{"name":"Yinx","username":"Yinx","email":"admin@yinx.eu.cc","commits":1,"url":"https://github.com/Yinx"}]},"readingTime":{"minutes":2.34,"words":703},"filePathRelative":"java8gu/36.线上问题排查/如何使用jstack分析死锁.md","autoDesc":true}`),u={name:`如何使用jstack分析死锁.md`};function d(c,l,u,d,f,p){let m=o(`RouteLink`);return i(),r(`div`,null,[l[1]||=s(`h1`,{id:`如何使用jstack分析死锁`,tabindex:`-1`},[s(`a`,{class:`header-anchor`,href:`#如何使用jstack分析死锁`},[s(`span`,null,`如何使用jstack分析死锁`)])],-1),l[2]||=s(`div`,{class:`hint-container caution`},[s(`p`,{class:`hint-container-title`},`警告`),s(`p`,null,[n(`内容来源网络，仅供学习使用。`),s(`br`),s(`br`),s(`strong`,null,`不要相信文档中的链接、联系方式等！！！`)])],-1),s(`p`,null,[e(m,{to:`/java8gu/04.Java%E5%B9%B6%E5%8F%91/%E4%BB%80%E4%B9%88%E6%98%AF%E6%AD%BB%E9%94%81,%E5%A6%82%E4%BD%95%E8%A7%A3%E5%86%B3.html`},{default:t(()=>[...l[0]||=[n(`04.Java并发_什么是死锁,如何解决`,-1)]]),_:1})]),l[3]||=a(`<p>先来写一段死锁的程序：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>package javaCommand;</span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * @author hollis</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>public class JStackDemo {</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        Thread t1 = new Thread(new DeadLockclass(true));//建立一个线程</span></span>
<span class="line"><span>        Thread t2 = new Thread(new DeadLockclass(false));//建立另一个线程</span></span>
<span class="line"><span>        t1.start();//启动一个线程</span></span>
<span class="line"><span>        t2.start();//启动另一个线程</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>class DeadLockclass implements Runnable {</span></span>
<span class="line"><span>    public boolean falg;// 控制线程</span></span>
<span class="line"><span>    DeadLockclass(boolean falg) {</span></span>
<span class="line"><span>        this.falg = falg;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    public void run() {</span></span>
<span class="line"><span>        /**</span></span>
<span class="line"><span>         * 如果falg的值为true则调用t1线程</span></span>
<span class="line"><span>         */</span></span>
<span class="line"><span>        if (falg) {</span></span>
<span class="line"><span>            while (true) {</span></span>
<span class="line"><span>                synchronized (Suo.o1) {</span></span>
<span class="line"><span>                    System.out.println(&quot;o1 &quot; + Thread.currentThread().getName());</span></span>
<span class="line"><span>                    synchronized (Suo.o2) {</span></span>
<span class="line"><span>                        System.out.println(&quot;o2 &quot; + Thread.currentThread().getName());</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        /**</span></span>
<span class="line"><span>         * 如果falg的值为false则调用t2线程</span></span>
<span class="line"><span>         */</span></span>
<span class="line"><span>        else {</span></span>
<span class="line"><span>            while (true) {</span></span>
<span class="line"><span>                synchronized (Suo.o2) {</span></span>
<span class="line"><span>                    System.out.println(&quot;o2 &quot; + Thread.currentThread().getName());</span></span>
<span class="line"><span>                    synchronized (Suo.o1) {</span></span>
<span class="line"><span>                        System.out.println(&quot;o1 &quot; + Thread.currentThread().getName());</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Suo {</span></span>
<span class="line"><span>    static Object o1 = new Object();</span></span>
<span class="line"><span>    static Object o2 = new Object();</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当我启动该程序时，我们看一下控制台：</p><figure><img src="/assets/%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8jstack%E5%88%86%E6%9E%90%E6%AD%BB%E9%94%81-1-DzDKjFok.png" alt="QQ20160118-0 (1).png" tabindex="0" loading="lazy"><figcaption>QQ20160118-0 (1).png</figcaption></figure><p>我们发现，程序只输出了两行内容，然后程序就不再打印其它的东西了，但是程序并没有停止。</p><p>这样就产生了死锁。 当线程1使用synchronized锁住了o1的同时，线程2也是用synchronized锁住了o2。当两个线程都执行完第一个打印任务的时候，线程1想锁住o2，线程2想锁住o1。但是，线程1当前锁着o1，线程2锁着o2。所以两个想成都无法继续执行下去，就造成了死锁。</p><p>然后，我们使用jstack来看一下线程堆栈信息：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>Found one Java-level deadlock:</span></span>
<span class="line"><span>=============================</span></span>
<span class="line"><span>&quot;Thread-1&quot;:</span></span>
<span class="line"><span>  waiting to lock monitor 0x00007f0134003ae8 (object 0x00000007d6aa2c98, a java.lang.Object),</span></span>
<span class="line"><span>  which is held by &quot;Thread-0&quot;</span></span>
<span class="line"><span>&quot;Thread-0&quot;:</span></span>
<span class="line"><span>  waiting to lock monitor 0x00007f0134006168 (object 0x00000007d6aa2ca8, a java.lang.Object),</span></span>
<span class="line"><span>  which is held by &quot;Thread-1&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Java stack information for the threads listed above:</span></span>
<span class="line"><span>===================================================</span></span>
<span class="line"><span>&quot;Thread-1&quot;:</span></span>
<span class="line"><span>    at javaCommand.DeadLockclass.run(JStackDemo.java:40)</span></span>
<span class="line"><span>    - waiting to lock &lt;0x00000007d6aa2c98&gt; (a java.lang.Object)</span></span>
<span class="line"><span>    - locked &lt;0x00000007d6aa2ca8&gt; (a java.lang.Object)</span></span>
<span class="line"><span>    at java.lang.Thread.run(Thread.java:745)</span></span>
<span class="line"><span>&quot;Thread-0&quot;:</span></span>
<span class="line"><span>    at javaCommand.DeadLockclass.run(JStackDemo.java:27)</span></span>
<span class="line"><span>    - waiting to lock &lt;0x00000007d6aa2ca8&gt; (a java.lang.Object)</span></span>
<span class="line"><span>    - locked &lt;0x00000007d6aa2c98&gt; (a java.lang.Object)</span></span>
<span class="line"><span>    at java.lang.Thread.run(Thread.java:745)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Found 1 deadlock.</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>哈哈，堆栈写的很明显，它告诉我们 Found one Java-level deadlock，然后指出造成死锁的两个线程的内容。然后，又通过 Java stack information for the threads listed above来显示更详细的死锁的信息。 他说</p><blockquote><p>Thread-1在想要执行第40行的时候，当前锁住了资源<code>&lt;0x00000007d6aa2ca8&gt;</code>,但是他在等待资源<code>&lt;0x00000007d6aa2c98&gt;</code> Thread-0在想要执行第27行的时候，当前锁住了资源<code>&lt;0x00000007d6aa2c98&gt;</code>,但是他在等待资源<code>&lt;0x00000007d6aa2ca8&gt;</code> 由于这两个线程都持有资源，并且都需要对方的资源，所以造成了死锁。 原因我们找到了，就可以具体问题具体分析，解决这个死锁了。</p></blockquote>`,10)])}var f=c(u,[[`render`,d]]);export{l as _pageData,f as default};