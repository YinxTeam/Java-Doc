import{n as e,o as t,r as n}from"./app-CVL-wmV5.js";import{t as r}from"./plugin-vue_export-helper-BDNMzG2s.js";var i=JSON.parse(`{"path":"/java8gu/44.%E7%BC%96%E7%A8%8B%E9%A2%98/%E4%BA%94%E4%B8%AA%E7%BA%BF%E7%A8%8Babcde_%E6%83%B3%E5%85%88%E6%89%A7%E8%A1%8Ca_%E5%9C%A8%E6%89%A7%E8%A1%8Cbcd_bcd%E6%89%A7%E8%A1%8C%E5%AE%8C%E5%90%8E%E6%89%A7%E8%A1%8Ce%E5%A6%82%E4%BD%95%E5%81%9A.html","title":"五个线程abcde,想先执行a,在执行bcd,bcd执行完后执行e如何做","lang":"zh-CN","frontmatter":{"title":"五个线程abcde,想先执行a,在执行bcd,bcd执行完后执行e如何做","author":"Hollis","category":["Java八股文"],"description":"五个线程abcde,想先执行a,在执行bcd,bcd执行完后执行e如何做 警告 内容来源网络，仅供学习使用。 不要相信文档中的链接、联系方式等！！！ 这也是一个典型的多线程之间通信的问题， 需要控制多个线程的执行顺序，即：a ➔ (b、c、d并发完成) ➔ e 这个场景中，用 CountDownLatch 就比较合适，大致流程如下： a线程执行，执行完...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"五个线程abcde,想先执行a,在执行bcd,bcd执行完后执行e如何做\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2026-09-07T16:27:23.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hollis\\"}]}"],["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/java8gu/44.%E7%BC%96%E7%A8%8B%E9%A2%98/%E4%BA%94%E4%B8%AA%E7%BA%BF%E7%A8%8Babcde_%E6%83%B3%E5%85%88%E6%89%A7%E8%A1%8Ca_%E5%9C%A8%E6%89%A7%E8%A1%8Cbcd_bcd%E6%89%A7%E8%A1%8C%E5%AE%8C%E5%90%8E%E6%89%A7%E8%A1%8Ce%E5%A6%82%E4%BD%95%E5%81%9A.html"}],["meta",{"property":"og:site_name","content":"Java面试帮助文档"}],["meta",{"property":"og:title","content":"五个线程abcde,想先执行a,在执行bcd,bcd执行完后执行e如何做"}],["meta",{"property":"og:description","content":"五个线程abcde,想先执行a,在执行bcd,bcd执行完后执行e如何做 警告 内容来源网络，仅供学习使用。 不要相信文档中的链接、联系方式等！！！ 这也是一个典型的多线程之间通信的问题， 需要控制多个线程的执行顺序，即：a ➔ (b、c、d并发完成) ➔ e 这个场景中，用 CountDownLatch 就比较合适，大致流程如下： a线程执行，执行完..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2026-09-07T16:27:23.000Z"}],["meta",{"property":"article:author","content":"Hollis"}],["meta",{"property":"article:modified_time","content":"2026-09-07T16:27:23.000Z"}]]},"git":{"createdTime":1788798443000,"updatedTime":1788798443000,"contributors":[{"name":"Yinx","username":"Yinx","email":"admin@yinx.eu.cc","commits":1,"url":"https://github.com/Yinx"}]},"readingTime":{"minutes":1.21,"words":364},"filePathRelative":"java8gu/44.编程题/五个线程abcde,想先执行a,在执行bcd,bcd执行完后执行e如何做.md","autoDesc":true}`),a={name:`五个线程abcde,想先执行a,在执行bcd,bcd执行完后执行e如何做.md`};function o(r,i,a,o,s,c){return t(),e(`div`,null,[...i[0]||=[n(`<h1 id="五个线程abcde-想先执行a-在执行bcd-bcd执行完后执行e如何做" tabindex="-1"><a class="header-anchor" href="#五个线程abcde-想先执行a-在执行bcd-bcd执行完后执行e如何做"><span>五个线程abcde,想先执行a,在执行bcd,bcd执行完后执行e如何做</span></a></h1><div class="hint-container caution"><p class="hint-container-title">警告</p><p>内容来源网络，仅供学习使用。<br><br><strong>不要相信文档中的链接、联系方式等！！！</strong></p></div><p>这也是一个典型的多线程之间通信的问题， 需要控制多个线程的执行顺序，即：<strong>a ➔ (b、c、d并发完成) ➔ e</strong></p><p>这个场景中，用 CountDownLatch 就比较合适，大致流程如下：</p><ul><li><code>a</code>线程执行，执行完后 <code>latchA.countDown()</code></li><li><code>b/c/d</code>线程在 <code>latchA.await()</code> 处等待，直到a执行完一起开始</li><li><code>b/c/d</code>各自执行，完成后各自 <code>latchBCD.countDown()</code></li><li><code>e</code>线程在 <code>latchBCD.await()</code> 处等，等bcd都完成后执行</li></ul><p>具体代码如下：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>import java.util.concurrent.CountDownLatch;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class ThreadOrderControl {</span></span>
<span class="line"><span>    public static void main(String[] args) throws InterruptedException {</span></span>
<span class="line"><span>        CountDownLatch latchA = new CountDownLatch(1); // 控制bcd等待a完成</span></span>
<span class="line"><span>        CountDownLatch latchBCD = new CountDownLatch(3); // 控制e等待bcd完成</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        Thread a = new Thread(() -&gt; {</span></span>
<span class="line"><span>            System.out.println(&quot;A start&quot;);</span></span>
<span class="line"><span>            // do something...</span></span>
<span class="line"><span>            System.out.println(&quot;A done&quot;);</span></span>
<span class="line"><span>            latchA.countDown(); // 通知bcd可以开始了</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        Runnable bcdTask = (String name) -&gt; {</span></span>
<span class="line"><span>            try {</span></span>
<span class="line"><span>                latchA.await(); // 等a完成</span></span>
<span class="line"><span>                System.out.println(name + &quot; start&quot;);</span></span>
<span class="line"><span>                // do something...</span></span>
<span class="line"><span>                System.out.println(name + &quot; done&quot;);</span></span>
<span class="line"><span>                latchBCD.countDown(); // bcd每个线程做完都countDown一次</span></span>
<span class="line"><span>            } catch (InterruptedException e) {</span></span>
<span class="line"><span>                e.printStackTrace();</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        };</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        Thread b = new Thread(() -&gt; bcdTask.run(&quot;B&quot;));</span></span>
<span class="line"><span>        Thread c = new Thread(() -&gt; bcdTask.run(&quot;C&quot;));</span></span>
<span class="line"><span>        Thread d = new Thread(() -&gt; bcdTask.run(&quot;D&quot;));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        Thread e = new Thread(() -&gt; {</span></span>
<span class="line"><span>            try {</span></span>
<span class="line"><span>                latchBCD.await(); // 等bcd全部完成</span></span>
<span class="line"><span>                System.out.println(&quot;E start&quot;);</span></span>
<span class="line"><span>                // do something...</span></span>
<span class="line"><span>                System.out.println(&quot;E done&quot;);</span></span>
<span class="line"><span>            } catch (InterruptedException ex) {</span></span>
<span class="line"><span>                ex.printStackTrace();</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 启动所有线程</span></span>
<span class="line"><span>        a.start();</span></span>
<span class="line"><span>        b.start();</span></span>
<span class="line"><span>        c.start();</span></span>
<span class="line"><span>        d.start();</span></span>
<span class="line"><span>        e.start();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7)]])}var s=r(a,[[`render`,o]]);export{i as _pageData,s as default};