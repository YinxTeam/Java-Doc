import{n as e,o as t,r as n}from"./app-CVL-wmV5.js";import{t as r}from"./plugin-vue_export-helper-BDNMzG2s.js";var i=JSON.parse(`{"path":"/java8gu/04.Java%E5%B9%B6%E5%8F%91/Java%E6%98%AF%E5%A6%82%E4%BD%95%E5%88%A4%E6%96%AD%E4%B8%80%E4%B8%AA%E7%BA%BF%E7%A8%8B%E6%98%AF%E5%90%A6%E5%AD%98%E6%B4%BB%E7%9A%84.html","title":"Java是如何判断一个线程是否存活的","lang":"zh-CN","frontmatter":{"title":"Java是如何判断一个线程是否存活的","author":"Hollis","category":["Java八股文"],"description":"Java是如何判断一个线程是否存活的 警告 内容来源网络，仅供学习使用。 不要相信文档中的链接、联系方式等！！！ 在Java中，我们自己想要判断线程是否存活，可以通过Thread下的isAlive()方法： 运行结果： 但是事情并没有这么简单，先来看一下以下代码执行后t1的isAlive()方法返回： 运行结果： 可以看到t1已经结束了，但t1的isA...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java是如何判断一个线程是否存活的\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2026-09-07T16:27:23.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hollis\\"}]}"],["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/java8gu/04.Java%E5%B9%B6%E5%8F%91/Java%E6%98%AF%E5%A6%82%E4%BD%95%E5%88%A4%E6%96%AD%E4%B8%80%E4%B8%AA%E7%BA%BF%E7%A8%8B%E6%98%AF%E5%90%A6%E5%AD%98%E6%B4%BB%E7%9A%84.html"}],["meta",{"property":"og:site_name","content":"Java面试帮助文档"}],["meta",{"property":"og:title","content":"Java是如何判断一个线程是否存活的"}],["meta",{"property":"og:description","content":"Java是如何判断一个线程是否存活的 警告 内容来源网络，仅供学习使用。 不要相信文档中的链接、联系方式等！！！ 在Java中，我们自己想要判断线程是否存活，可以通过Thread下的isAlive()方法： 运行结果： 但是事情并没有这么简单，先来看一下以下代码执行后t1的isAlive()方法返回： 运行结果： 可以看到t1已经结束了，但t1的isA..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2026-09-07T16:27:23.000Z"}],["meta",{"property":"article:author","content":"Hollis"}],["meta",{"property":"article:modified_time","content":"2026-09-07T16:27:23.000Z"}]]},"git":{"createdTime":1788798443000,"updatedTime":1788798443000,"contributors":[{"name":"Yinx","username":"Yinx","email":"admin@yinx.eu.cc","commits":1,"url":"https://github.com/Yinx"}]},"readingTime":{"minutes":3.02,"words":907},"filePathRelative":"java8gu/04.Java并发/Java是如何判断一个线程是否存活的.md","autoDesc":true}`),a={name:`Java是如何判断一个线程是否存活的.md`};function o(r,i,a,o,s,c){return t(),e(`div`,null,[...i[0]||=[n(`<h1 id="java是如何判断一个线程是否存活的" tabindex="-1"><a class="header-anchor" href="#java是如何判断一个线程是否存活的"><span>Java是如何判断一个线程是否存活的</span></a></h1><div class="hint-container caution"><p class="hint-container-title">警告</p><p>内容来源网络，仅供学习使用。<br><br><strong>不要相信文档中的链接、联系方式等！！！</strong></p></div><p>在Java中，我们自己想要判断线程是否存活，可以通过Thread下的isAlive()方法：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>public class Test{</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static void main(String[] args) throws InterruptedException {</span></span>
<span class="line"><span>        Thread t1 = new Thread(() -&gt; {</span></span>
<span class="line"><span>            System.out.println(&quot;t1 begin&quot;);</span></span>
<span class="line"><span>            try {</span></span>
<span class="line"><span>                Thread.sleep(1000);</span></span>
<span class="line"><span>            } catch (InterruptedException e) {</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            System.out.println(&quot;t1 end&quot;);</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span>        t1.start();</span></span>
<span class="line"><span>        System.out.println(&quot;t1.isAlive()=&quot;+t1.isAlive());</span></span>
<span class="line"><span>        t1.join();</span></span>
<span class="line"><span>        System.out.println(&quot;t1.isAlive()=&quot;+t1.isAlive());</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>t1 begin</span></span>
<span class="line"><span>t1.isAlive()=true</span></span>
<span class="line"><span>t1 end</span></span>
<span class="line"><span>t1.isAlive()=false</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是事情并没有这么简单，先来看一下以下代码执行后t1的isAlive()方法返回：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>public class Test{</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        Thread t1 = new Thread(() -&gt; {</span></span>
<span class="line"><span>            System.out.println(&quot;t1 begin&quot;);</span></span>
<span class="line"><span>            try {</span></span>
<span class="line"><span>                Thread.sleep(1000);</span></span>
<span class="line"><span>            } catch (InterruptedException e) {</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            System.out.println(&quot;t1 end&quot;);</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span>        Thread t2 = new Thread(() -&gt; {</span></span>
<span class="line"><span>            synchronized (t1) {</span></span>
<span class="line"><span>                System.out.println(&quot;t2 begin&quot;);</span></span>
<span class="line"><span>                try {</span></span>
<span class="line"><span>                    Thread.sleep(2000);</span></span>
<span class="line"><span>                } catch (InterruptedException e) {</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>                System.out.println(&quot;t2 end&quot;);</span></span>
<span class="line"><span>                System.out.println(&quot;t1 isAlive:&quot; + t1.isAlive());</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span>        t1.start();</span></span>
<span class="line"><span>        t2.start();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>t2 begin</span></span>
<span class="line"><span>t1 begin</span></span>
<span class="line"><span>t1 end</span></span>
<span class="line"><span>t2 end</span></span>
<span class="line"><span>t1 isAlive:true</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到t1已经结束了，但t1的isAlive()方法返回的是true。</p><p><strong>产生这个现象的原因是isAlive()需要拿到当前对象的锁，注意上面代码中t2里对t1对象进行了synchronized，即t1线程在结束时需要修改自己的状态，而t1的被t2锁住，所以无法修改状态，导致isAlive()返回true。</strong></p><p>上述具体原因，我们可以看java.lang.Thread.isAlive()方法的实现。</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span> public final native boolean isAlive();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>可以看到这是个本地方法，对应到jdk源码中<code>java_lang_Thread::is_alive</code>方法调用。其底层实现是取当前线程对象中_eetop_offset的值。不为空则返回true。</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>bool java_lang_Thread::is_alive(oop java_thread) {</span></span>
<span class="line"><span>  JavaThread* thr = java_lang_Thread::thread(java_thread);</span></span>
<span class="line"><span>  return (thr != NULL);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>JavaThread* java_lang_Thread::thread(oop java_thread) {</span></span>
<span class="line"><span>  return (JavaThread*)java_thread-&gt;address_field(_eetop_offset);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>_eetop_offset会在调用java.lang.Thread.start()方法时，在jdk源码中，通过<code>native_thread-&gt;prepare(jthread)</code>的prepare方法设置为当前线程对象</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>void JavaThread::prepare(jobject jni_thread, ThreadPriority prio) {</span></span>
<span class="line"><span>  ... //此处缩略其他无关代码</span></span>
<span class="line"><span>  java_lang_Thread::set_thread(thread_oop(), this);//thread_oop()返回了jdk包装好的当前线程oop对象，this传入当前线程对象的地址</span></span>
<span class="line"><span> ... //此处缩略其他无关代码</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>void java_lang_Thread::set_thread(oop java_thread, JavaThread* thread) {</span></span>
<span class="line"><span>  //设置_eetop_offset值为当前线程对象的地址</span></span>
<span class="line"><span>  java_thread-&gt;address_field_put(_eetop_offset, (address)thread); </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>java线程结束时，jvm会调用<code>JavaThread::exit</code>方法</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>void JavaThread::exit(bool destroy_vm, ExitType exit_type) {</span></span>
<span class="line"><span>  ... //此处缩略其他无关代码</span></span>
<span class="line"><span>  ensure_join(this); //这里开始设置线程状态，包括设置_eetop_offset值为空</span></span>
<span class="line"><span>  ... //此处缩略其他无关代码</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>static void ensure_join(JavaThread* thread) {</span></span>
<span class="line"><span>  Handle threadObj(thread, thread-&gt;threadObj());</span></span>
<span class="line"><span>  assert(threadObj.not_null(), &quot;java thread object must exist&quot;);</span></span>
<span class="line"><span>  ObjectLocker lock(threadObj, thread); //重点，拿到当前线程对象的锁</span></span>
<span class="line"><span>  thread-&gt;clear_pending_exception();</span></span>
<span class="line"><span>  java_lang_Thread::set_thread_status(threadObj(), java_lang_Thread::TERMINATED); //标记当前线程状态为终止</span></span>
<span class="line"><span>  java_lang_Thread::set_thread(threadObj(), NULL); //重点，_eetop_offset值为空</span></span>
<span class="line"><span>  lock.notify_all(thread);</span></span>
<span class="line"><span>  thread-&gt;clear_pending_exception();</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>ObjectLocker</code>就是传说中的synchronized的实现，其构造函数如下</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>ObjectLocker::ObjectLocker(Handle obj, Thread* thread, bool doLock) {</span></span>
<span class="line"><span>  _dolock = doLock;</span></span>
<span class="line"><span>  _thread = thread;</span></span>
<span class="line"><span>  debug_only(if (StrictSafepointChecks) _thread-&gt;check_for_valid_safepoint_state(false);)</span></span>
<span class="line"><span>  _obj = obj; //拿到当前对象，在上面例子里，obj为t1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  if (_dolock) {</span></span>
<span class="line"><span>    TEVENT (ObjectLocker) ;</span></span>
<span class="line"><span>    ObjectSynchronizer::fast_enter(_obj, &amp;_lock, false, _thread); </span></span>
<span class="line"><span>    //操作当前对象的对象头，执行synchronized的流程</span></span>
<span class="line"><span>    //由于t1的锁被t2持有，所以t1无法设置_eetop_offset值为空。自然isAlive()方法返回的是true，当然线程状态也无法修改为TERMINATED终止。</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>所以，在执行线程的退出过程中，需要拿到当前对象的锁之后才能设置_eetop_offset，上面的例子中，由于t1的锁被t2持有，所以t1无法设置_eetop_offset值为空。所以这时候isAlive()方法返回的就还是true，当然线程状态也无法修改为TERMINATED终止。</strong></p>`,23)]])}var s=r(a,[[`render`,o]]);export{i as _pageData,s as default};