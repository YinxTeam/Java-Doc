import{n as e,o as t,r as n}from"./app-CVL-wmV5.js";import{t as r}from"./plugin-vue_export-helper-BDNMzG2s.js";var i=JSON.parse(`{"path":"/java8gu/04.Java%E5%B9%B6%E5%8F%91/%E4%BB%80%E4%B9%88%E6%98%AF%E5%AE%88%E6%8A%A4%E7%BA%BF%E7%A8%8B_%E5%92%8C%E6%99%AE%E9%80%9A%E7%BA%BF%E7%A8%8B%E6%9C%89%E4%BB%80%E4%B9%88%E5%8C%BA%E5%88%AB.html","title":"什么是守护线程,和普通线程有什么区别","lang":"zh-CN","frontmatter":{"title":"什么是守护线程,和普通线程有什么区别","author":"Hollis","category":["Java八股文"],"description":"什么是守护线程,和普通线程有什么区别 警告 内容来源网络，仅供学习使用。 不要相信文档中的链接、联系方式等！！！ 在Java中有两类线程：User Thread(用户线程)、Daemon Thread(守护线程) 。用户线程一般用于执行用户级任务，而守护线程也就是“后台线程”，一般用来执行后台任务，守护线程最典型的应用就是GC(垃圾回收器)。 这两种线...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"什么是守护线程,和普通线程有什么区别\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2026-09-07T16:27:23.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hollis\\"}]}"],["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/java8gu/04.Java%E5%B9%B6%E5%8F%91/%E4%BB%80%E4%B9%88%E6%98%AF%E5%AE%88%E6%8A%A4%E7%BA%BF%E7%A8%8B_%E5%92%8C%E6%99%AE%E9%80%9A%E7%BA%BF%E7%A8%8B%E6%9C%89%E4%BB%80%E4%B9%88%E5%8C%BA%E5%88%AB.html"}],["meta",{"property":"og:site_name","content":"Java面试帮助文档"}],["meta",{"property":"og:title","content":"什么是守护线程,和普通线程有什么区别"}],["meta",{"property":"og:description","content":"什么是守护线程,和普通线程有什么区别 警告 内容来源网络，仅供学习使用。 不要相信文档中的链接、联系方式等！！！ 在Java中有两类线程：User Thread(用户线程)、Daemon Thread(守护线程) 。用户线程一般用于执行用户级任务，而守护线程也就是“后台线程”，一般用来执行后台任务，守护线程最典型的应用就是GC(垃圾回收器)。 这两种线..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2026-09-07T16:27:23.000Z"}],["meta",{"property":"article:author","content":"Hollis"}],["meta",{"property":"article:modified_time","content":"2026-09-07T16:27:23.000Z"}]]},"git":{"createdTime":1788798443000,"updatedTime":1788798443000,"contributors":[{"name":"Yinx","username":"Yinx","email":"admin@yinx.eu.cc","commits":1,"url":"https://github.com/Yinx"}]},"readingTime":{"minutes":2.31,"words":692},"filePathRelative":"java8gu/04.Java并发/什么是守护线程,和普通线程有什么区别.md","autoDesc":true}`),a={name:`什么是守护线程,和普通线程有什么区别.md`};function o(r,i,a,o,s,c){return t(),e(`div`,null,[...i[0]||=[n(`<h1 id="什么是守护线程-和普通线程有什么区别" tabindex="-1"><a class="header-anchor" href="#什么是守护线程-和普通线程有什么区别"><span>什么是守护线程,和普通线程有什么区别</span></a></h1><div class="hint-container caution"><p class="hint-container-title">警告</p><p>内容来源网络，仅供学习使用。<br><br><strong>不要相信文档中的链接、联系方式等！！！</strong></p></div><p>在Java中有两类线程：User Thread(用户线程)、Daemon Thread(守护线程) 。用户线程一般用于执行用户级任务，而守护线程也就是“后台线程”，一般用来执行后台任务，守护线程最典型的应用就是GC(垃圾回收器)。</p><p>这两种线程其实是没有什么区别的，唯一的区别就是Java虚拟机在所有<code>&lt;用户线程&gt;</code>都结束后就会退出，而不会等<code>&lt;守护线程&gt;</code>执行完。</p><h1 id="扩展知识" tabindex="-1"><a class="header-anchor" href="#扩展知识"><span>扩展知识</span></a></h1><h2 id="创建守护线程" tabindex="-1"><a class="header-anchor" href="#创建守护线程"><span>创建守护线程</span></a></h2><p>我们可以通过使用setDaemon()方法通过传递true作为参数，使线程成为一个守护线程。我们必须在启动线程之前调用一个线程的setDaemon()方法。否则，就会抛出一个java.lang.IllegalThreadStateException。</p><p>可以使用isDaemon()方法来检查线程是否是守护线程。</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>/**</span></span>
<span class="line"><span>* @author Hollis</span></span>
<span class="line"><span>*/</span></span>
<span class="line"><span>public class Main {</span></span>
<span class="line"><span>  public static void main(String[] args) {</span></span>
<span class="line"><span>    Thread t1 = new Thread();</span></span>
<span class="line"><span>    System.out.println(t1.isDaemon());</span></span>
<span class="line"><span>    t1.setDaemon(true);</span></span>
<span class="line"><span>    System.out.println(t1.isDaemon());</span></span>
<span class="line"><span>    t1.start();</span></span>
<span class="line"><span>    t1.setDaemon(false);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上代码输出结果：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>false</span></span>
<span class="line"><span>true</span></span>
<span class="line"><span>Exception in thread &quot;main&quot; java.lang.IllegalThreadStateException</span></span>
<span class="line"><span>at java.lang.Thread.setDaemon(Thread.java:1359)</span></span>
<span class="line"><span>at com.hollis.Main.main(Main.java:16)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们提到，当JVM中只剩下守护线程的时候，JVM就会退出，那么写一段代码测试下：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>/**</span></span>
<span class="line"><span>* @author Hollis</span></span>
<span class="line"><span>*/</span></span>
<span class="line"><span>public class Main {</span></span>
<span class="line"><span>  public static void main(String[] args) {</span></span>
<span class="line"><span>    Thread childThread = new Thread(new Runnable() {</span></span>
<span class="line"><span>      @Override</span></span>
<span class="line"><span>      public void run() {</span></span>
<span class="line"><span>        while (true) {</span></span>
<span class="line"><span>          System.out.println(&quot;I&#39;m child thread..&quot;);</span></span>
<span class="line"><span>            try {</span></span>
<span class="line"><span>              TimeUnit.MILLISECONDS.sleep(1000);</span></span>
<span class="line"><span>            } catch (InterruptedException e) {</span></span>
<span class="line"><span>           	 e.printStackTrace();</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      });</span></span>
<span class="line"><span>    childThread.start();</span></span>
<span class="line"><span>    System.out.println(&quot;I&#39;m main thread...&quot;);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上代码中，我们在Main线程中开启了一个子线程，在并没有显示将其设置为守护线程的情况下，他是一个用户线程，代码比较好理解，就是子线程处于一个while(true)循环中，每隔一秒打印一次I&#39;m child thread..</p><p>输出结果为：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>I&#39;m main thread...</span></span>
<span class="line"><span>I&#39;m child thread..</span></span>
<span class="line"><span>I&#39;m child thread..</span></span>
<span class="line"><span>.....</span></span>
<span class="line"><span>I&#39;m child thread..</span></span>
<span class="line"><span>I&#39;m child thread..</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们再把子线程设置成守护线程，重新运行以上代码。</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>/**</span></span>
<span class="line"><span>* @author Hollis</span></span>
<span class="line"><span>*/</span></span>
<span class="line"><span>public class Main {</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>    Thread childThread = new Thread(new Runnable() {</span></span>
<span class="line"><span>      @Override</span></span>
<span class="line"><span>      public void run() {</span></span>
<span class="line"><span>        while (true) {</span></span>
<span class="line"><span>        	System.out.println(&quot;I&#39;m child thread..&quot;);</span></span>
<span class="line"><span>          try {</span></span>
<span class="line"><span>        	  TimeUnit.MILLISECONDS.sleep(1000);</span></span>
<span class="line"><span>          } catch (InterruptedException e) {</span></span>
<span class="line"><span>         	 e.printStackTrace();</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>    childThread.setDaemon(true);</span></span>
<span class="line"><span>    childThread.start();</span></span>
<span class="line"><span>    System.out.println(&quot;I&#39;m main thread...&quot;);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上代码，我们通过childThread.setDaemon(true);把子线程设置成守护线程，然后运行，得到以下结果：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>I&#39;m main thread...</span></span>
<span class="line"><span>I&#39;m child thread..</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>子线程只打印了一次，也就是，在main线程执行结束后，由于子线程是一个守护线程，JVM就会直接退出了。</p><p>值得注意的是，在Daemon线程中产生的新线程也是Daemon的。</p>`,22)]])}var s=r(a,[[`render`,o]]);export{i as _pageData,s as default};