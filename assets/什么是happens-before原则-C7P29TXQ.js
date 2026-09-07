import{a as e,c as t,i as n,n as r,o as i,r as a,s as o,t as s}from"./app-CVL-wmV5.js";import{t as c}from"./plugin-vue_export-helper-BDNMzG2s.js";var l=JSON.parse(`{"path":"/java8gu/04.Java%E5%B9%B6%E5%8F%91/%E4%BB%80%E4%B9%88%E6%98%AFhappens-before%E5%8E%9F%E5%88%99.html","title":"什么是happens-before原则","lang":"zh-CN","frontmatter":{"title":"什么是happens-before原则","author":"Hollis","category":["Java八股文"],"description":"什么是happens-before原则 警告 内容来源网络，仅供学习使用。 不要相信文档中的链接、联系方式等！！！ 在关于JMM的介绍中，我们知道，JMM 是一种规范，它提供了一系列的机制来保证跨线程的内存可见性、有序性和原子性。 我们之前介绍过很多保证可见性的关键字，如volatile和synchronized等，其实，volatile和synchr...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"什么是happens-before原则\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2026-09-07T16:27:23.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hollis\\"}]}"],["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/java8gu/04.Java%E5%B9%B6%E5%8F%91/%E4%BB%80%E4%B9%88%E6%98%AFhappens-before%E5%8E%9F%E5%88%99.html"}],["meta",{"property":"og:site_name","content":"Java面试帮助文档"}],["meta",{"property":"og:title","content":"什么是happens-before原则"}],["meta",{"property":"og:description","content":"什么是happens-before原则 警告 内容来源网络，仅供学习使用。 不要相信文档中的链接、联系方式等！！！ 在关于JMM的介绍中，我们知道，JMM 是一种规范，它提供了一系列的机制来保证跨线程的内存可见性、有序性和原子性。 我们之前介绍过很多保证可见性的关键字，如volatile和synchronized等，其实，volatile和synchr..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2026-09-07T16:27:23.000Z"}],["meta",{"property":"article:author","content":"Hollis"}],["meta",{"property":"article:modified_time","content":"2026-09-07T16:27:23.000Z"}]]},"git":{"createdTime":1788798443000,"updatedTime":1788798443000,"contributors":[{"name":"Yinx","username":"Yinx","email":"admin@yinx.eu.cc","commits":1,"url":"https://github.com/Yinx"}]},"readingTime":{"minutes":5.04,"words":1513},"filePathRelative":"java8gu/04.Java并发/什么是happens-before原则.md","autoDesc":true}`),u={name:`什么是happens-before原则.md`};function d(c,l,u,d,f,p){let m=o(`RouteLink`);return i(),r(`div`,null,[l[1]||=s(`h1`,{id:`什么是happens-before原则`,tabindex:`-1`},[s(`a`,{class:`header-anchor`,href:`#什么是happens-before原则`},[s(`span`,null,`什么是happens-before原则`)])],-1),l[2]||=s(`div`,{class:`hint-container caution`},[s(`p`,{class:`hint-container-title`},`警告`),s(`p`,null,[n(`内容来源网络，仅供学习使用。`),s(`br`),s(`br`),s(`strong`,null,`不要相信文档中的链接、联系方式等！！！`)])],-1),l[3]||=s(`p`,null,`在关于JMM的介绍中，我们知道，JMM 是一种规范，它提供了一系列的机制来保证跨线程的内存可见性、有序性和原子性。`,-1),l[4]||=s(`p`,null,`我们之前介绍过很多保证可见性的关键字，如volatile和synchronized等，其实，volatile和synchronized为啥可以保证可见性，也正是因为他们遵守了一个重要的happens-before原则（后文会介绍，Monitor Lock 和Volatile Variable 是happens - before中重要的两个原则）。`,-1),l[5]||=s(`p`,null,`我们之前还介绍过一个原则，叫做as-if-serial，他意思指：不管怎么重排序，单线程程序的执行结果都不能被改变。编译器和处理器无论如何优化，都必须遵守as-if-serial语义。`,-1),s(`p`,null,[e(m,{to:`/java8gu/04.Java%E5%B9%B6%E5%8F%91/synchronized%E6%98%AF%E5%A6%82%E4%BD%95%E4%BF%9D%E8%AF%81%E5%8E%9F%E5%AD%90%E6%80%A7%E3%80%81%E5%8F%AF%E8%A7%81%E6%80%A7%E3%80%81%E6%9C%89%E5%BA%8F%E6%80%A7%E7%9A%84.html`},{default:t(()=>[...l[0]||=[n(`04.Java并发_synchronized是如何保证原子性、可见性、有序性的`,-1)]]),_:1})]),l[6]||=a(`<p>这个as-if-serial语义是针对单线程的，但是如果在多线程情况下呢？有没有什么原则可以保证有序性呢？这就需要我们的happens-before原则了。</p><p>happens-before原则是一种用于描述多线程程序中操作执行顺序的规则。它是Java内存模型（Java Memory Model，JMM）的一部分：<strong>如果一个操作 A “happen-before” 另一个操作 B，那么 A 的结果对 B 是可见的。这个概念是理解线程间内存可见性的关键。</strong></p><p><strong>举一个例子，如以下代码：</strong></p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span></span></span>
<span class="line"><span>public class ThreadStartExample {</span></span>
<span class="line"><span>    private int startValue = 10;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void startNewThread() {</span></span>
<span class="line"><span>        startValue +=1；</span></span>
<span class="line"><span>        new Thread(() -&gt; {</span></span>
<span class="line"><span>            int localValue = startValue;  </span></span>
<span class="line"><span>        }).start();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有两个线程，一个写startValue，一个读startValue，但是我们并没有用synchronized加锁，也没有用volatile修饰，那么，JVM是如何保证，在主线程中修改startValue的操作在子线程中是可见的呢？</p><p>这其实就是happens-before原则发挥的作用了。但是，happens-before原则也不是没有任何限制，任何场景都能happens-before的，还是有一些规则要求的。我们接下来介绍下每个规则以及附上一些代码演示</p><h3 id="happends-before规则" tabindex="-1"><a class="header-anchor" href="#happends-before规则"><span>happends-before规则</span></a></h3><p>以下十几个happends-before原则的适用场景（节选自《深入理解Java虚拟机》，并做了一些描述上的修改，增加了代码示例，方便大家理解）</p><ul><li>程序次序规则（Program Order Rule）：在单个线程内，按照程序代码的顺序，前一个操作 happens-before 后一个操作。</li></ul><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>public class ProgramOrderExample {</span></span>
<span class="line"><span>    private int a = 0;</span></span>
<span class="line"><span>    private int b = 0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void method() {</span></span>
<span class="line"><span>        a = 1;  // 操作1</span></span>
<span class="line"><span>        b = 2;  // 操作2，</span></span>
<span class="line"><span>        // 操作1 \`happens-before\` 操作2</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>管程锁定规则（Monitor Lock Rule）：对一个锁的解锁 happens-before 随后对这个锁的加锁。即在 synchronized 代码块或方法中，释放锁之前的所有操作对于下一个获取这个锁的线程是可见的。</li></ul><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>public class MonitorLockExample {</span></span>
<span class="line"><span>    private int value = 0;</span></span>
<span class="line"><span>    private final Object lock = new Object();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void increment() {</span></span>
<span class="line"><span>        synchronized(lock) {</span></span>
<span class="line"><span>            value++;  // 操作在锁内</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public int getValue() {</span></span>
<span class="line"><span>        synchronized(lock) {</span></span>
<span class="line"><span>            return value;  // 此操作 \`happens-before\` increment() 中的操作</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>increment 方法中对 value 的修改，在 getValue 方法获取锁之后是可见的。</p><ul><li>volatile 变量规则（Volatile Variable Rule）：对一个 volatile 字段的写操作 happens-before 任意后续对这个字段的读操作。即确保 volatile 变量的写操作对其他线程立即可见。</li></ul><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>public class VolatileExample {</span></span>
<span class="line"><span>    private volatile boolean flag = false;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void writeFlag() {</span></span>
<span class="line"><span>        flag = true;  // volatile 写操作</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public boolean checkFlag() {</span></span>
<span class="line"><span>        return flag;  // 这里读取到的 flag 值 \`happens-before\` 写操作</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当一个线程调用 writeFlag()，另一个线程随后调用 checkFlag() 将看到 flag 为 true。</p><ul><li>线程启动规则（Thread Start Rule）：对线程的 start() 方法的调用 happens-before 该线程的每个动作。确保线程启动时，主线程中对共享变量的写操作对于新线程是可见的。</li></ul><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>public class ThreadStartExample {</span></span>
<span class="line"><span>    private int startValue = 10;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void startNewThread() {</span></span>
<span class="line"><span>        startValue +=1；</span></span>
<span class="line"><span>        new Thread(() -&gt; {</span></span>
<span class="line"><span>            int localValue = startValue;  // startValue 的值 \`happens-before\` 这里的读操作</span></span>
<span class="line"><span>            // 处理 localValue</span></span>
<span class="line"><span>        }).start();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>线程启动时，将看到 startValue 的值为 11。</p><ul><li>线程终止规则（Thread Termination Rule）：一个线程的所有操作 happens-before 对这个线程的 join() 方法的成功返回。确保线程终止时，该线程中的所有操作对于调用 join() 方法的线程是可见的。</li></ul><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>public class ThreadJoinExample {</span></span>
<span class="line"><span>    private int counter = 0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void incrementInThread() throws InterruptedException {</span></span>
<span class="line"><span>        Thread thread = new Thread(() -&gt; {</span></span>
<span class="line"><span>            counter++;</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span>        thread.start();</span></span>
<span class="line"><span>        thread.join();  // \`happens-before\` counter 的读操作</span></span>
<span class="line"><span>        int value = counter;  // 这里能够看到线程中对 counter 的修改</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>主线程中可以看到子线程对counter的修改</p><ul><li><p>线程中断规则（Thread Interruption Rule）： 对线程的 interrupt() 方法的调用 happens-before 被中断线程检测到中断事件的发生。即线程的中断操作在被该线程检测到之前已经发生。</p></li><li><p>对象终结规则（Finalizer Rule）： 一个对象的初始化完成（构造函数执行结束）happens-before 它的 finalize() 方法的开始。即在对象被回收前，其构造过程已经完全结束。</p></li></ul><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>public class FinalizerExample {</span></span>
<span class="line"><span>    private int value;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public FinalizerExample() {</span></span>
<span class="line"><span>        value = 10;  // 构造函数中的操作</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    protected void finalize() {</span></span>
<span class="line"><span>        // 此方法 \`happens-before\` 构造函数中的操作</span></span>
<span class="line"><span>        if (value != 10) {</span></span>
<span class="line"><span>            // 这里不应该发生</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>传递性（Transitivity）：如果操作 A 先行发生于操作 B，操作 B 先行发生于操作 C，那就可以得出操作 A 先行发生于操作 C 的结论。</li></ul><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>public class TransitivityExample {</span></span>
<span class="line"><span>    private volatile boolean ready;</span></span>
<span class="line"><span>    private int number;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void writer() {</span></span>
<span class="line"><span>        number = 42;       // 操作 A</span></span>
<span class="line"><span>        ready = true;      // 操作 B</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void reader() {</span></span>
<span class="line"><span>        if (ready) {       // 操作 C（由于 ready 是 volatile，它 \`happens-before\` 这里的操作）</span></span>
<span class="line"><span>            assert number == 42;  // 因为 A \`happens-before\` B，B \`happens-before\` C，所以 A \`happens-before\` C</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于 ready 是一个 volatile 变量，写入 ready（操作 B）发生在读取 ready 之前，同样，写入 number（操作 A）发生在写入 ready 之前。根据传递性规则，写入 number 发生在读取 ready 之前。</p>`,27)])}var f=c(u,[[`render`,d]]);export{l as _pageData,f as default};