import{n as e,o as t,r as n}from"./app-CVL-wmV5.js";import{t as r}from"./plugin-vue_export-helper-BDNMzG2s.js";var i=JSON.parse(`{"path":"/java8gu/04.Java%E5%B9%B6%E5%8F%91/%E6%9C%89%E4%B8%89%E4%B8%AA%E7%BA%BF%E7%A8%8BT1_T2_T3%E5%A6%82%E4%BD%95%E4%BF%9D%E8%AF%81%E9%A1%BA%E5%BA%8F%E6%89%A7%E8%A1%8C.html","title":"有三个线程T1,T2,T3如何保证顺序执行","lang":"zh-CN","frontmatter":{"title":"有三个线程T1,T2,T3如何保证顺序执行","author":"Hollis","category":["Java八股文"],"description":"有三个线程T1,T2,T3如何保证顺序执行 警告 内容来源网络，仅供学习使用。 不要相信文档中的链接、联系方式等！！！ 想要让三个线程依次执行，并且严格按照T1,T2,T3的顺序的话，主要就是想办法让三个线程之间可以通信、或者可以排队。 想让多个线程之间可以通信，可以通过join方法实现，还可以通过CountDownLatch、CyclicBarrie...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"有三个线程T1,T2,T3如何保证顺序执行\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2026-09-07T16:27:23.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hollis\\"}]}"],["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/java8gu/04.Java%E5%B9%B6%E5%8F%91/%E6%9C%89%E4%B8%89%E4%B8%AA%E7%BA%BF%E7%A8%8BT1_T2_T3%E5%A6%82%E4%BD%95%E4%BF%9D%E8%AF%81%E9%A1%BA%E5%BA%8F%E6%89%A7%E8%A1%8C.html"}],["meta",{"property":"og:site_name","content":"Java面试帮助文档"}],["meta",{"property":"og:title","content":"有三个线程T1,T2,T3如何保证顺序执行"}],["meta",{"property":"og:description","content":"有三个线程T1,T2,T3如何保证顺序执行 警告 内容来源网络，仅供学习使用。 不要相信文档中的链接、联系方式等！！！ 想要让三个线程依次执行，并且严格按照T1,T2,T3的顺序的话，主要就是想办法让三个线程之间可以通信、或者可以排队。 想让多个线程之间可以通信，可以通过join方法实现，还可以通过CountDownLatch、CyclicBarrie..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2026-09-07T16:27:23.000Z"}],["meta",{"property":"article:author","content":"Hollis"}],["meta",{"property":"article:modified_time","content":"2026-09-07T16:27:23.000Z"}]]},"git":{"createdTime":1788798443000,"updatedTime":1788798443000,"contributors":[{"name":"Yinx","username":"Yinx","email":"admin@yinx.eu.cc","commits":1,"url":"https://github.com/Yinx"}]},"readingTime":{"minutes":6.05,"words":1815},"filePathRelative":"java8gu/04.Java并发/有三个线程T1,T2,T3如何保证顺序执行.md","autoDesc":true}`),a={name:`有三个线程T1,T2,T3如何保证顺序执行.md`};function o(r,i,a,o,s,c){return t(),e(`div`,null,[...i[0]||=[n(`<h1 id="有三个线程t1-t2-t3如何保证顺序执行" tabindex="-1"><a class="header-anchor" href="#有三个线程t1-t2-t3如何保证顺序执行"><span>有三个线程T1,T2,T3如何保证顺序执行</span></a></h1><div class="hint-container caution"><p class="hint-container-title">警告</p><p>内容来源网络，仅供学习使用。<br><br><strong>不要相信文档中的链接、联系方式等！！！</strong></p></div><p>想要让三个线程依次执行，并且严格按照T1,T2,T3的顺序的话，主要就是想办法让三个线程之间可以通信、或者可以排队。</p><p>想让多个线程之间可以通信，可以通过join方法实现，还可以通过CountDownLatch、CyclicBarrier和Semaphore来实现通信。</p><p>想要让线程之间排队的话，可以通过线程池或者CompletableFuture的方式来实现。</p><h1 id="扩展知识" tabindex="-1"><a class="header-anchor" href="#扩展知识"><span>扩展知识</span></a></h1><h2 id="依次执行start方法" tabindex="-1"><a class="header-anchor" href="#依次执行start方法"><span>依次执行start方法</span></a></h2><p>在代码中，分别依次调用三个线程的start方法，这种方法是最容易想到的，但是也是最不靠谱的。</p><p>代码实现如下，通过执行的话可以发现，数据结果是不固定的：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        Thread thread1 = new Thread(new Runnable() {</span></span>
<span class="line"><span>            @Override</span></span>
<span class="line"><span>            public void run() {</span></span>
<span class="line"><span>                System.out.println(&quot;Thread 1 running&quot;);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        Thread thread2 = new Thread(new Runnable() {</span></span>
<span class="line"><span>            @Override</span></span>
<span class="line"><span>            public void run() {</span></span>
<span class="line"><span>                System.out.println(&quot;Thread 2 running&quot;);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        Thread thread3 = new Thread(new Runnable() {</span></span>
<span class="line"><span>            @Override</span></span>
<span class="line"><span>            public void run() {</span></span>
<span class="line"><span>                System.out.println(&quot;Thread 3 running&quot;);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        thread1.start();</span></span>
<span class="line"><span>        thread2.start();</span></span>
<span class="line"><span>        thread3.start();</span></span>
<span class="line"><span>    }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上代码的数据结果每次执行都不固定，所以，没办法满足我们的要求。</p><h2 id="使用join" tabindex="-1"><a class="header-anchor" href="#使用join"><span>使用join</span></a></h2><p>Thread类中提供了一个join方法，他的有以下代码：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>public static void main(String[] args) throws InterruptedException {</span></span>
<span class="line"><span>    Thread thread1 = new Thread(new Runnable() {</span></span>
<span class="line"><span>        @Override</span></span>
<span class="line"><span>        public void run() {</span></span>
<span class="line"><span>            try {</span></span>
<span class="line"><span>                Thread.sleep(10000);</span></span>
<span class="line"><span>            } catch (InterruptedException e) {</span></span>
<span class="line"><span>                e.printStackTrace();</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            System.out.println(&quot;Thread 1 running&quot;);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    thread1.start();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    System.out.println(&quot;Main 1 running&quot;);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果会是：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>Main 1 running</span></span>
<span class="line"><span>Thread 1 running</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>但是，如果我们在上面的第15行，增加一行<code>thread1.join();</code>那么输出结果就会有变化，如下：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>Thread 1 running</span></span>
<span class="line"><span>Main 1 running</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>所以，join就是把thread1这个子线程加入到当前主线程中，也就是主线程要阻塞在这里，等子线程执行完之后再继续执行。</p><p>所以，我们可以通过join来实现多个线程的顺序执行：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        final Thread thread1 = new Thread(new Runnable() {</span></span>
<span class="line"><span>            @Override</span></span>
<span class="line"><span>            public void run() {</span></span>
<span class="line"><span>                System.out.println(Thread.currentThread().getName() + &quot; is Running.&quot;);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        },&quot;T1&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        final Thread thread2 = new Thread(new Runnable() {</span></span>
<span class="line"><span>            @Override</span></span>
<span class="line"><span>            public void run() {</span></span>
<span class="line"><span>                try {</span></span>
<span class="line"><span>                    thread1.join();</span></span>
<span class="line"><span>                } catch (InterruptedException e) {</span></span>
<span class="line"><span>                    System.out.println(&quot;join thread1 failed&quot;);</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>                System.out.println(Thread.currentThread().getName() + &quot; is Running.&quot;);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        },&quot;T2&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        Thread thread3 = new Thread(new Runnable() {</span></span>
<span class="line"><span>            @Override</span></span>
<span class="line"><span>            public void run() {</span></span>
<span class="line"><span>                try {</span></span>
<span class="line"><span>                    thread2.join();</span></span>
<span class="line"><span>                } catch (InterruptedException e) {</span></span>
<span class="line"><span>                    System.out.println(&quot;join thread1 failed&quot;);</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>                System.out.println(Thread.currentThread().getName() + &quot; is Running.&quot;);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        },&quot;T3&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        thread3.start();</span></span>
<span class="line"><span>        thread2.start();</span></span>
<span class="line"><span>        thread1.start();</span></span>
<span class="line"><span>    }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们在thread2中等待thread1执行完，然后在thread3中等待thread2执行完。那么整体的执行顺序就是：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>T1 is Running.</span></span>
<span class="line"><span>T2 is Running.</span></span>
<span class="line"><span>T3 is Running.</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用countdownlatch" tabindex="-1"><a class="header-anchor" href="#使用countdownlatch"><span>使用CountDownLatch</span></a></h2><p>CountDownLatch是Java并发库中的一个同步辅助类，它允许一个或多个线程等待其他线程完成操作。我们可以借助他来让三个线程之间相互通信，以达到顺序执行的目的。</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>public class CountDownLatchThreadExecute {</span></span>
<span class="line"><span>    public static void main(String[] args) throws InterruptedException {</span></span>
<span class="line"><span>                // 创建CountDownLatch对象，用来做线程通信</span></span>
<span class="line"><span>        CountDownLatch latch = new CountDownLatch(1);</span></span>
<span class="line"><span>        CountDownLatch latch2 = new CountDownLatch(1);</span></span>
<span class="line"><span>        CountDownLatch latch3 = new CountDownLatch(1);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 创建并启动线程T1</span></span>
<span class="line"><span>        Thread t1 = new Thread(new MyThread(latch), &quot;T1&quot;);</span></span>
<span class="line"><span>        t1.start();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 等待线程T1执行完</span></span>
<span class="line"><span>        latch.await();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 创建并启动线程T2</span></span>
<span class="line"><span>        Thread t2 = new Thread(new MyThread(latch2), &quot;T2&quot;);</span></span>
<span class="line"><span>        t2.start();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 等待线程T2执行完</span></span>
<span class="line"><span>        latch2.await();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 创建并启动线程T3</span></span>
<span class="line"><span>        Thread t3 = new Thread(new MyThread(latch3), &quot;T3&quot;);</span></span>
<span class="line"><span>        t3.start();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 等待线程T3执行完</span></span>
<span class="line"><span>        latch3.await();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class MyThread implements Runnable {</span></span>
<span class="line"><span>    private CountDownLatch latch;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public MyThread(CountDownLatch latch) {</span></span>
<span class="line"><span>        this.latch = latch;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void run() {</span></span>
<span class="line"><span>        try {</span></span>
<span class="line"><span>            // 模拟执行任务</span></span>
<span class="line"><span>            Thread.sleep(1000);</span></span>
<span class="line"><span>            System.out.println(Thread.currentThread().getName() + &quot; is Running.&quot;);</span></span>
<span class="line"><span>        } catch (InterruptedException e) {</span></span>
<span class="line"><span>            e.printStackTrace();</span></span>
<span class="line"><span>        } finally {</span></span>
<span class="line"><span>            // 完成一个线程，计数器减1</span></span>
<span class="line"><span>            latch.countDown();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>主要就是想办法让编排三个子线程的主线程阻塞，保证T1执行完再启动T2，T2执行完再启动T3。而这个编排的方式就是想办法知道什么时候子线程执行完，就可以通过CountDownLatch实现。</p><p>基于相同的原理， 我们还可以借助CyclicBarrier和Semaphore实现此功能：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span></span></span>
<span class="line"><span>public class CyclicBarrierThreadExecute {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static void main(String[] args) throws InterruptedException, BrokenBarrierException {</span></span>
<span class="line"><span>        // 创建CyclicBarrier对象，用来做线程通信</span></span>
<span class="line"><span>        CyclicBarrier barrier = new CyclicBarrier(2);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 创建并启动线程T1</span></span>
<span class="line"><span>        Thread t1 = new Thread(new MyThread(barrier), &quot;T1&quot;);</span></span>
<span class="line"><span>        t1.start();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 等待线程T1执行完</span></span>
<span class="line"><span>        barrier.await();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 创建并启动线程T2</span></span>
<span class="line"><span>        Thread t2 = new Thread(new MyThread(barrier), &quot;T2&quot;);</span></span>
<span class="line"><span>        t2.start();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 等待线程T2执行完</span></span>
<span class="line"><span>        barrier.await();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 创建并启动线程T3</span></span>
<span class="line"><span>        Thread t3 = new Thread(new MyThread(barrier), &quot;T3&quot;);</span></span>
<span class="line"><span>        t3.start();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 等待线程T3执行完</span></span>
<span class="line"><span>        barrier.await();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class MyThread implements Runnable {</span></span>
<span class="line"><span>    private CyclicBarrier barrier;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public MyThread(CyclicBarrier barrier) {</span></span>
<span class="line"><span>        this.barrier = barrier;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void run() {</span></span>
<span class="line"><span>        try {</span></span>
<span class="line"><span>            // 模拟执行任务</span></span>
<span class="line"><span>            Thread.sleep(1000);</span></span>
<span class="line"><span>            System.out.println(Thread.currentThread().getName() + &quot; is Running.&quot;);</span></span>
<span class="line"><span>        } catch (InterruptedException e) {</span></span>
<span class="line"><span>            e.printStackTrace();</span></span>
<span class="line"><span>        } finally {</span></span>
<span class="line"><span>            // 等待其他线程完成</span></span>
<span class="line"><span>            try {</span></span>
<span class="line"><span>                barrier.await();</span></span>
<span class="line"><span>            } catch (Exception e) {</span></span>
<span class="line"><span>                e.printStackTrace();</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>借助Semaphore实现此功能：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span></span></span>
<span class="line"><span>public class SemaphoreThreadExecute {</span></span>
<span class="line"><span>    public static void main(String[] args) throws InterruptedException {</span></span>
<span class="line"><span>        // 创建Semaphore对象，用来做线程通信</span></span>
<span class="line"><span>        Semaphore semaphore = new Semaphore(1);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 等待线程T1执行完</span></span>
<span class="line"><span>        semaphore.acquire();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 创建并启动线程T1</span></span>
<span class="line"><span>        Thread t1 = new Thread(new MyThread(semaphore), &quot;T1&quot;);</span></span>
<span class="line"><span>        t1.start();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 等待线程T2执行完</span></span>
<span class="line"><span>        semaphore.acquire();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 创建并启动线程T2</span></span>
<span class="line"><span>        Thread t2 = new Thread(new MyThread(semaphore), &quot;T2&quot;);</span></span>
<span class="line"><span>        t2.start();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 等待线程T3执行完</span></span>
<span class="line"><span>        semaphore.acquire();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 创建并启动线程T3</span></span>
<span class="line"><span>        Thread t3 = new Thread(new MyThread(semaphore), &quot;T3&quot;);</span></span>
<span class="line"><span>        t3.start();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class MyThread implements Runnable {</span></span>
<span class="line"><span>    private Semaphore semaphore;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public MyThread(Semaphore semaphore) {</span></span>
<span class="line"><span>        this.semaphore = semaphore;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void run() {</span></span>
<span class="line"><span>        try {</span></span>
<span class="line"><span>            // 模拟执行任务</span></span>
<span class="line"><span>            Thread.sleep(1000);</span></span>
<span class="line"><span>            System.out.println(Thread.currentThread().getName() + &quot; is Running.&quot;);</span></span>
<span class="line"><span>        } catch (InterruptedException e) {</span></span>
<span class="line"><span>            e.printStackTrace();</span></span>
<span class="line"><span>        } finally {</span></span>
<span class="line"><span>            // 释放许可证，表示完成一个线程</span></span>
<span class="line"><span>            semaphore.release();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用线程池" tabindex="-1"><a class="header-anchor" href="#使用线程池"><span>使用线程池</span></a></h2><p>了解线程池的开发者都知道，线程池内部是使用了队列来存储任务的，所以线程的执行顺序会按照任务的提交顺序执行的，但是如果是多个线程同时执行的话，是保证不了先后顺序的，因为可能先提交的后执行了。但是我们可以定义一个只有一个线程的线程池，然后依次的将T1,T2,T3提交给他执行：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>public class ThreadPoolThreadExecute {</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        // 创建线程池</span></span>
<span class="line"><span>        ExecutorService executor = Executors.newSingleThreadExecutor();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 创建并启动线程T1</span></span>
<span class="line"><span>        executor.submit(new MyThread(&quot;T1&quot;));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 创建并启动线程T2</span></span>
<span class="line"><span>        executor.submit(new MyThread(&quot;T2&quot;));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 创建并启动线程T3</span></span>
<span class="line"><span>        executor.submit(new MyThread(&quot;T3&quot;));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 关闭线程池</span></span>
<span class="line"><span>        executor.shutdown();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class MyThread implements Runnable {</span></span>
<span class="line"><span>    private String name;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public MyThread(String name) {</span></span>
<span class="line"><span>        this.name = name;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void run() {</span></span>
<span class="line"><span>        try {</span></span>
<span class="line"><span>            // 模拟执行任务</span></span>
<span class="line"><span>            Thread.sleep(1000);</span></span>
<span class="line"><span>            System.out.println(name + &quot; is Running.&quot;);</span></span>
<span class="line"><span>        } catch (InterruptedException e) {</span></span>
<span class="line"><span>            e.printStackTrace();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用completablefuture" tabindex="-1"><a class="header-anchor" href="#使用completablefuture"><span>使用CompletableFuture</span></a></h2><p>Java 8引入了CompletableFuture，它是一个用于异步编程的新的强大工具。CompletableFuture提供了一系列的方法，可以用来创建、组合、转换和管理异步任务，并且可以让你实现异步流水线，在多个任务之间轻松传递结果。</p><p>如以下实现方式：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>public class CompletableFutureThreadExecute {</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        // 创建CompletableFuture对象</span></span>
<span class="line"><span>        CompletableFuture&lt;Void&gt; future1 = CompletableFuture.runAsync(new MyThread(&quot;T1&quot;));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 等待线程T1完成</span></span>
<span class="line"><span>        future1.join();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 创建CompletableFuture对象</span></span>
<span class="line"><span>        CompletableFuture&lt;Void&gt; future2 = CompletableFuture.runAsync(new MyThread(&quot;T2&quot;));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 等待线程T2完成</span></span>
<span class="line"><span>        future2.join();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 创建CompletableFuture对象</span></span>
<span class="line"><span>        CompletableFuture&lt;Void&gt; future3 = CompletableFuture.runAsync(new MyThread(&quot;T3&quot;));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 等待线程T3完成</span></span>
<span class="line"><span>        future3.join();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class MyThread implements Runnable {</span></span>
<span class="line"><span>    private String name;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public MyThread(String name) {</span></span>
<span class="line"><span>        this.name = name;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void run() {</span></span>
<span class="line"><span>        try {</span></span>
<span class="line"><span>            // 模拟执行任务</span></span>
<span class="line"><span>            Thread.sleep(1000);</span></span>
<span class="line"><span>            System.out.println(name + &quot; is Running.&quot;);</span></span>
<span class="line"><span>        } catch (InterruptedException e) {</span></span>
<span class="line"><span>            e.printStackTrace();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码还可以做一些优化：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>public class CompletableFutureThreadExecute {</span></span>
<span class="line"><span>    public static void main(String[] args) throws ExecutionException, InterruptedException {</span></span>
<span class="line"><span>        // 创建CompletableFuture对象</span></span>
<span class="line"><span>        CompletableFuture&lt;Void&gt; future = CompletableFuture.runAsync(new MyThread(&quot;T1&quot;)).thenRun(new MyThread(&quot;T2&quot;)).thenRun(new MyThread(&quot;T3&quot;));</span></span>
<span class="line"><span>        future.get();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class MyThread implements Runnable {</span></span>
<span class="line"><span>    private String name;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public MyThread(String name) {</span></span>
<span class="line"><span>        this.name = name;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void run() {</span></span>
<span class="line"><span>        try {</span></span>
<span class="line"><span>            // 模拟执行任务</span></span>
<span class="line"><span>            Thread.sleep(1000);</span></span>
<span class="line"><span>            System.out.println(name + &quot; is Running.&quot;);</span></span>
<span class="line"><span>        } catch (InterruptedException e) {</span></span>
<span class="line"><span>            e.printStackTrace();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,40)]])}var s=r(a,[[`render`,o]]);export{i as _pageData,s as default};