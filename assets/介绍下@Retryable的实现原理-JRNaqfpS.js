import{a as e,c as t,i as n,n as r,o as i,r as a,s as o,t as s}from"./app-CVL-wmV5.js";import{t as c}from"./plugin-vue_export-helper-BDNMzG2s.js";var l=JSON.parse(`{"path":"/java8gu/06.Spring/%E4%BB%8B%E7%BB%8D%E4%B8%8B@Retryable%E7%9A%84%E5%AE%9E%E7%8E%B0%E5%8E%9F%E7%90%86.html","title":"介绍下@Retryable的实现原理","lang":"zh-CN","frontmatter":{"title":"介绍下@Retryable的实现原理","author":"Hollis","category":["Java八股文"],"description":"介绍下@Retryable的实现原理 警告 内容来源网络，仅供学习使用。 不要相信文档中的链接、联系方式等！！！ @Retryable 是 Spring Retry 框架提供的一个注解（Spring 7中已内置），用于在方法调用失败时自动进行重试。它通常用于处理临时性故障（如网络抖动、数据库连接短暂中断等），提高系统的容错能力。 如果重试最终失败，可以...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"介绍下@Retryable的实现原理\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2026-09-07T16:27:23.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hollis\\"}]}"],["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/java8gu/06.Spring/%E4%BB%8B%E7%BB%8D%E4%B8%8B@Retryable%E7%9A%84%E5%AE%9E%E7%8E%B0%E5%8E%9F%E7%90%86.html"}],["meta",{"property":"og:site_name","content":"Java面试帮助文档"}],["meta",{"property":"og:title","content":"介绍下@Retryable的实现原理"}],["meta",{"property":"og:description","content":"介绍下@Retryable的实现原理 警告 内容来源网络，仅供学习使用。 不要相信文档中的链接、联系方式等！！！ @Retryable 是 Spring Retry 框架提供的一个注解（Spring 7中已内置），用于在方法调用失败时自动进行重试。它通常用于处理临时性故障（如网络抖动、数据库连接短暂中断等），提高系统的容错能力。 如果重试最终失败，可以..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2026-09-07T16:27:23.000Z"}],["meta",{"property":"article:author","content":"Hollis"}],["meta",{"property":"article:modified_time","content":"2026-09-07T16:27:23.000Z"}]]},"git":{"createdTime":1788798443000,"updatedTime":1788798443000,"contributors":[{"name":"Yinx","username":"Yinx","email":"admin@yinx.eu.cc","commits":1,"url":"https://github.com/Yinx"}]},"readingTime":{"minutes":5.33,"words":1598},"filePathRelative":"java8gu/06.Spring/介绍下@Retryable的实现原理.md","autoDesc":true}`),u={name:`介绍下@Retryable的实现原理.md`};function d(c,l,u,d,f,p){let m=o(`RouteLink`);return i(),r(`div`,null,[l[3]||=a(`<h1 id="介绍下-retryable的实现原理" tabindex="-1"><a class="header-anchor" href="#介绍下-retryable的实现原理"><span>介绍下@Retryable的实现原理</span></a></h1><div class="hint-container caution"><p class="hint-container-title">警告</p><p>内容来源网络，仅供学习使用。<br><br><strong>不要相信文档中的链接、联系方式等！！！</strong></p></div><p><code>@Retryable</code> 是 Spring Retry 框架提供的一个注解（Spring 7中已内置），<strong>用于在方法调用失败时自动进行重试。</strong>它通常用于处理临时性故障（如网络抖动、数据库连接短暂中断等），提高系统的容错能力。</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>@Service</span></span>
<span class="line"><span>public class MyService {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Retryable(value = {SQLException.class}, maxAttempts = 3, backoff = @Backoff(delay = 1000))</span></span>
<span class="line"><span>    public void doSomething() throws SQLException {</span></span>
<span class="line"><span>        // 可能抛出 SQLException 的操作</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果重试最终失败，可以配合 <code>@Recover</code> 提供降级逻辑：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>@Recover</span></span>
<span class="line"><span>public void recover(SQLException e) {</span></span>
<span class="line"><span>    // 处理最终失败的情况</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>首先，@Retryable实现的这种重试，他是JVM级别的，基于JVM内存的，如果JVM挂了，或者应用重启了，那么他的重试任务就丢失了，所以，如果想要避免这种情况，需要用定时任务框架。</p><p>因为@Retryable是一个注解，所以可想而知，他首先就是先用到AOP了，当应用启动的时候，会扫描到增加了这个注解的类或者方法，然后给这个bean创建代理对象。</p><p>有了代理对象之后，后续的方法调用都会调用到对应的代理对象。那么，重试逻辑，包括异常判断、重试次数、退避策略等等都是在这个代理对象中实现的。</p><p>以下是上面的过程的书面一点的说法 （Spring Retry）：</p><ul><li><code>@EnableRetry</code> 会注册一个 <code>RetryConfiguration</code>，该配置会向 Spring 容器中注册一个 <code>BeanPostProcessor</code>（具体是 <code>RetryConfiguration$RetryableMethodsInterceptor</code>）。</li><li>这个 <code>BeanPostProcessor</code> 会扫描所有带有 <code>@Retryable</code> 注解的 Bean，并为其创建代理，织入 <code>RetryOperationsInterceptor</code>。</li><li><code>RetryOperationsInterceptor</code> 内部使用 <code>RetryTemplate</code> 来执行重试逻辑。</li></ul><p>以下是上面的过程的书面一点的说法 （Spring 7）：</p><ul><li>在Spring 7的resilience包中（Spring 7刚出的，一个内置的韧性能力，包括了重试、限流等），新增了一个<code>RetryAnnotationBeanPostProcessor</code> ，他会扫描所有带有 <code>@Retryable</code> 注解的 Bean，并为其创建代理，织入 <code>RetryAnnotationInterceptor</code> 。</li><li><code>RetryAnnotationInterceptor</code> 内部使用 <code>RetryTemplate</code> 来执行重试逻辑。</li></ul>`,13),s(`p`,null,[e(m,{to:`/java8gu/06.Spring/Spring_7_%E5%92%8CSpring_Boot_4_%E9%83%BD%E6%9C%89%E5%93%AA%E4%BA%9B%E6%96%B0%E7%89%B9%E6%80%A7.html`},{default:t(()=>[...l[0]||=[n(`06.Spring_Spring_7_和Spring_Boot_4_都有哪些新特性`,-1)]]),_:1})]),l[4]||=a(`<h3 id="retrytemplate实现逻辑" tabindex="-1"><a class="header-anchor" href="#retrytemplate实现逻辑"><span><code>RetryTemplate</code>实现逻辑</span></a></h3><p>不管是原来的Spring retry，还是最新的Spring 7，最终都是在RetryTemplate中实现的重试逻辑。这里我直接拿最新的，前几天刚出的Spring 7中的源码来介绍吧。（<a href="https://github.com/spring-projects/spring-framework/blob/main/spring-core/src/main/java/org/springframework/core/retry/RetryTemplate.java" target="_blank" rel="noopener noreferrer">https://github.com/spring-projects/spring-framework/blob/main/spring-core/src/main/java/org/springframework/core/retry/RetryTemplate.java</a> ）</p><p>其中最关键的就是execute方法，主要逻辑如下：</p><ol><li><p>首次尝试执行业务逻辑。成功则直接返回；失败则捕获 <code>Throwable</code>（包括 Error 和 Exception），进入重试流程。</p></li><li><p>失败的情况下，进入重试循环：</p></li></ol><ul><li>检查是否还能重试（<code>retryPolicy.shouldRetry()</code>）。（这里是个while循环）</li><li>如果能，先退避等待（backoff），再重试。（其实就是线程sleep一段时间，然后再继续执行）</li><li>每次重试前后会通知监听器（<code>retryListener</code>）。</li></ul>`,5),s(`blockquote`,null,[s(`p`,null,[l[2]||=n(`“退避”（Backoff）是在系统发生失败或异常后，延迟一段时间再重试的一种策略。比如RokcetMQ消息投递，用的就是一种叫做"指数退避"的退避策略。`,-1),e(m,{to:`/java8gu/27.%E5%AE%9A%E6%97%B6%E4%BB%BB%E5%8A%A1/%E4%BD%A0%E7%9F%A5%E9%81%93%E6%9C%89%E5%93%AA%E4%BA%9B%E9%80%80%E9%81%BF%E7%AD%96%E7%95%A5%E5%90%97.html`},{default:t(()=>[...l[1]||=[n(`27.定时任务_你知道有哪些退避策略吗`,-1)]]),_:1})])]),l[5]||=a(`<ol start="3"><li>如果重试次数用尽 → 抛出 <code>RetryException</code>，包含最后一次异常作为主因，其余异常作为 suppressed exceptions（被抑制的异常）。</li></ol><p>增加注释后的代码如下（注释由QWen帮忙添加，我做了微调）：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>@Override</span></span>
<span class="line"><span>public &lt;R extends @Nullable Object&gt; R execute(Retryable&lt;R&gt; retryable) throws RetryException {</span></span>
<span class="line"><span>    // 获取当前可重试操作的名称，用于日志追踪</span></span>
<span class="line"><span>    String retryableName = retryable.getName();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // ========== 第一次尝试执行 ==========</span></span>
<span class="line"><span>    try {</span></span>
<span class="line"><span>        logger.debug(() -&gt; &quot;Preparing to execute retryable operation &#39;%s&#39;&quot;.formatted(retryableName));</span></span>
<span class="line"><span>        R result = retryable.execute(); // 执行业务逻辑</span></span>
<span class="line"><span>        logger.debug(() -&gt; &quot;Retryable operation &#39;%s&#39; completed successfully&quot;.formatted(retryableName));</span></span>
<span class="line"><span>        return result; // 成功则直接返回结果</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    catch (Throwable initialException) {</span></span>
<span class="line"><span>        // 首次执行失败，记录异常并开始重试流程</span></span>
<span class="line"><span>        logger.debug(initialException,</span></span>
<span class="line"><span>                () -&gt; &quot;Execution of retryable operation &#39;%s&#39; failed; initiating the retry process&quot;.formatted(retryableName));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 初始化退避策略执行器（用于控制每次重试之间的等待时间）</span></span>
<span class="line"><span>        BackOffExecution backOffExecution = this.retryPolicy.getBackOff().start();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 使用双端队列保存所有失败的异常（最多预估4次，可动态扩容）</span></span>
<span class="line"><span>        Deque&lt;Throwable&gt; exceptions = new ArrayDeque&lt;&gt;(4);</span></span>
<span class="line"><span>        exceptions.add(initialException); // 保存首次异常</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 记录最近一次失败的异常，用于判断是否继续重试</span></span>
<span class="line"><span>        Throwable lastException = initialException;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // ========== 重试循环 ==========</span></span>
<span class="line"><span>        while (this.retryPolicy.shouldRetry(lastException)) {</span></span>
<span class="line"><span>            try {</span></span>
<span class="line"><span>                // 获取下一次重试前需要等待的时间（毫秒）</span></span>
<span class="line"><span>                long duration = backOffExecution.nextBackOff();</span></span>
<span class="line"><span>                // 如果退避策略返回 STOP，表示不再重试，直接退出循环</span></span>
<span class="line"><span>                if (duration == BackOffExecution.STOP) {</span></span>
<span class="line"><span>                    break;</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>                logger.debug(() -&gt; &quot;Backing off for %dms after retryable operation &#39;%s&#39;&quot;.formatted(duration, retryableName));</span></span>
<span class="line"><span>                Thread.sleep(duration); // 线程休眠，实现退避</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            catch (InterruptedException interruptedException) {</span></span>
<span class="line"><span>                // 如果线程在 sleep 期间被中断，恢复中断状态（良好实践）</span></span>
<span class="line"><span>                Thread.currentThread().interrupt();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                // 构造“重试被中断”异常，并将之前所有异常作为被抑制异常附加</span></span>
<span class="line"><span>                RetryException retryException = new RetryInterruptedException(</span></span>
<span class="line"><span>                        &quot;&quot;Unable to back off for retryable operation &#39;%s&quot;.formatted(retryableName),</span></span>
<span class="line"><span>                        interruptedException);</span></span>
<span class="line"><span>                exceptions.forEach(retryException::addSuppressed);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                // 通知监听器：重试过程被中断</span></span>
<span class="line"><span>                this.retryListener.onRetryPolicyInterruption(this.retryPolicy, retryable, retryException);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                // 抛出中断异常，终止重试</span></span>
<span class="line"><span>                throw retryException;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 准备进行下一次重试</span></span>
<span class="line"><span>            logger.debug(() -&gt; &quot;Preparing to retry operation &#39;%s&quot;.formatted(retryableName));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            try {</span></span>
<span class="line"><span>                // 通知监听器：即将开始一次重试（可用于监控、埋点等）</span></span>
<span class="line"><span>                this.retryListener.beforeRetry(this.retryPolicy, retryable);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                // 再次执行业务逻辑</span></span>
<span class="line"><span>                R result = retryable.execute();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                // 通知监听器：重试成功</span></span>
<span class="line"><span>                this.retryListener.onRetrySuccess(this.retryPolicy, retryable, result);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                logger.debug(() -&gt; &quot;Retryable operation &#39;%s&#39; completed successfully after retry&quot;.formatted(retryableName));</span></span>
<span class="line"><span>                return result; // 成功，返回结果</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            catch (Throwable currentException) {</span></span>
<span class="line"><span>                // 本次重试再次失败</span></span>
<span class="line"><span>                logger.debug(currentException,</span></span>
<span class="line"><span>                        () -&gt; Retry attempt for operation &#39;%s&#39; failed due to &#39;%s&#39;&quot;.formatted(retryableName, currentException));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                // 通知监听器：本次重试失败</span></span>
<span class="line"><span>                this.retryListener.onRetryFailure(this.retryPolicy, retryable, currentException);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                // 保存本次异常</span></span>
<span class="line"><span>                exceptions.add(currentException);</span></span>
<span class="line"><span>                // 更新最近一次异常，供下一轮 shouldRetry 判断</span></span>
<span class="line"><span>                lastException = currentException;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // ========== 重试策略已耗尽（所有重试机会用完）==========</span></span>
<span class="line"><span>        // 取出最后一次异常作为主异常（cause）</span></span>
<span class="line"><span>        Throwable lastFailedException = exceptions.removeLast();</span></span>
<span class="line"><span>        RetryException retryException = new RetryException(</span></span>
<span class="line"><span>                &quot;Retry policy for operation &#39;%s&#39; exhausted; aborting execution&quot;.formatted(retryableName),</span></span>
<span class="line"><span>                lastFailedException);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 将之前所有失败的异常作为“被抑制的异常”附加到主异常中</span></span>
<span class="line"><span>        // 这样调用者可以通过 getSuppressed() 查看完整失败历史</span></span>
<span class="line"><span>        exceptions.forEach(retryException::addSuppressed);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 通知监听器：重试策略已完全耗尽</span></span>
<span class="line"><span>        this.retryListener.onRetryPolicyExhaustion(this.retryPolicy, retryable, retryException);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 最终抛出重试失败异常</span></span>
<span class="line"><span>        throw retryException;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3)])}var f=c(u,[[`render`,d]]);export{l as _pageData,f as default};