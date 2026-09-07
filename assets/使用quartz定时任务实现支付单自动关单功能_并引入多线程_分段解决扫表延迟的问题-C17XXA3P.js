import{a as e,c as t,i as n,n as r,o as i,r as a,s as o,t as s}from"./app-CVL-wmV5.js";import{t as c}from"./plugin-vue_export-helper-BDNMzG2s.js";var l=JSON.parse(`{"path":"/java8gu/50.%E9%A1%B9%E7%9B%AE%E9%9A%BE%E7%82%B9_%E4%BA%AE%E7%82%B9/%E4%BD%BF%E7%94%A8quartz%E5%AE%9A%E6%97%B6%E4%BB%BB%E5%8A%A1%E5%AE%9E%E7%8E%B0%E6%94%AF%E4%BB%98%E5%8D%95%E8%87%AA%E5%8A%A8%E5%85%B3%E5%8D%95%E5%8A%9F%E8%83%BD_%E5%B9%B6%E5%BC%95%E5%85%A5%E5%A4%9A%E7%BA%BF%E7%A8%8B_%E5%88%86%E6%AE%B5%E8%A7%A3%E5%86%B3%E6%89%AB%E8%A1%A8%E5%BB%B6%E8%BF%9F%E7%9A%84%E9%97%AE%E9%A2%98.html","title":"使用quartz定时任务实现支付单自动关单功能,并引入多线程+分段解决扫表延迟的问题","lang":"zh-CN","frontmatter":{"title":"使用quartz定时任务实现支付单自动关单功能,并引入多线程+分段解决扫表延迟的问题","author":"Hollis","category":["Java八股文"],"description":"使用quartz定时任务实现支付单自动关单功能,并引入多线程+分段解决扫表延迟的问题 警告 内容来源网络，仅供学习使用。 不要相信文档中的链接、联系方式等！！！ 背景 我负责的订单系统模块，有一个功能就是需要实现订单的到期自动关闭，这功能以前其实是有的，但是后来我发现经常有一些订单，明明已经到期了，但是还是没有正常被关闭，就导致已超时的订单后来有支付成...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"使用quartz定时任务实现支付单自动关单功能,并引入多线程+分段解决扫表延迟的问题\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2026-09-07T16:27:23.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hollis\\"}]}"],["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/java8gu/50.%E9%A1%B9%E7%9B%AE%E9%9A%BE%E7%82%B9_%E4%BA%AE%E7%82%B9/%E4%BD%BF%E7%94%A8quartz%E5%AE%9A%E6%97%B6%E4%BB%BB%E5%8A%A1%E5%AE%9E%E7%8E%B0%E6%94%AF%E4%BB%98%E5%8D%95%E8%87%AA%E5%8A%A8%E5%85%B3%E5%8D%95%E5%8A%9F%E8%83%BD_%E5%B9%B6%E5%BC%95%E5%85%A5%E5%A4%9A%E7%BA%BF%E7%A8%8B_%E5%88%86%E6%AE%B5%E8%A7%A3%E5%86%B3%E6%89%AB%E8%A1%A8%E5%BB%B6%E8%BF%9F%E7%9A%84%E9%97%AE%E9%A2%98.html"}],["meta",{"property":"og:site_name","content":"Java面试帮助文档"}],["meta",{"property":"og:title","content":"使用quartz定时任务实现支付单自动关单功能,并引入多线程+分段解决扫表延迟的问题"}],["meta",{"property":"og:description","content":"使用quartz定时任务实现支付单自动关单功能,并引入多线程+分段解决扫表延迟的问题 警告 内容来源网络，仅供学习使用。 不要相信文档中的链接、联系方式等！！！ 背景 我负责的订单系统模块，有一个功能就是需要实现订单的到期自动关闭，这功能以前其实是有的，但是后来我发现经常有一些订单，明明已经到期了，但是还是没有正常被关闭，就导致已超时的订单后来有支付成..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2026-09-07T16:27:23.000Z"}],["meta",{"property":"article:author","content":"Hollis"}],["meta",{"property":"article:modified_time","content":"2026-09-07T16:27:23.000Z"}]]},"git":{"createdTime":1788798443000,"updatedTime":1788798443000,"contributors":[{"name":"Yinx","username":"Yinx","email":"admin@yinx.eu.cc","commits":1,"url":"https://github.com/Yinx"}]},"readingTime":{"minutes":3.48,"words":1045},"filePathRelative":"java8gu/50.项目难点&亮点/使用quartz定时任务实现支付单自动关单功能,并引入多线程+分段解决扫表延迟的问题.md","autoDesc":true}`),u={name:`使用quartz定时任务实现支付单自动关单功能,并引入多线程+分段解决扫表延迟的问题.md`};function d(c,l,u,d,f,p){let m=o(`RouteLink`);return i(),r(`div`,null,[l[2]||=a(`<h1 id="使用quartz定时任务实现支付单自动关单功能-并引入多线程-分段解决扫表延迟的问题" tabindex="-1"><a class="header-anchor" href="#使用quartz定时任务实现支付单自动关单功能-并引入多线程-分段解决扫表延迟的问题"><span>使用quartz定时任务实现支付单自动关单功能,并引入多线程+分段解决扫表延迟的问题</span></a></h1><div class="hint-container caution"><p class="hint-container-title">警告</p><p>内容来源网络，仅供学习使用。<br><br><strong>不要相信文档中的链接、联系方式等！！！</strong></p></div><h3 id="背景" tabindex="-1"><a class="header-anchor" href="#背景"><span>背景</span></a></h3><p>我负责的订单系统模块，有一个功能就是需要实现订单的到期自动关闭，这功能以前其实是有的，但是后来我发现经常有一些订单，明明已经到期了，但是还是没有正常被关闭，就导致已超时的订单后来有支付成功的情况。</p><p>后来经过排查，是因为之前的实现方式比较简单，是基于JDK自带的delayQueue实现的，大致的代码如下：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>import java.util.concurrent.DelayQueue;</span></span>
<span class="line"><span>import java.util.concurrent.Delayed;</span></span>
<span class="line"><span>import java.util.concurrent.TimeUnit;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Order implements Delayed {</span></span>
<span class="line"><span>    private String orderId;</span></span>
<span class="line"><span>    private long createTime;</span></span>
<span class="line"><span>    private long closeTime;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public Order(String orderId, long delayInMinutes) {</span></span>
<span class="line"><span>        this.orderId = orderId;</span></span>
<span class="line"><span>        this.createTime = System.currentTimeMillis();</span></span>
<span class="line"><span>        this.closeTime = this.createTime + TimeUnit.MINUTES.toMillis(delayInMinutes);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public String getOrderId() {</span></span>
<span class="line"><span>        return orderId;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public long getDelay(TimeUnit unit) {</span></span>
<span class="line"><span>        long delay = closeTime - System.currentTimeMillis();</span></span>
<span class="line"><span>        return unit.convert(delay, TimeUnit.MILLISECONDS);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public int compareTo(Delayed other) {</span></span>
<span class="line"><span>        if (this == other) return 0;</span></span>
<span class="line"><span>        long diff = getDelay(TimeUnit.MILLISECONDS) - other.getDelay(TimeUnit.MILLISECONDS);</span></span>
<span class="line"><span>        return (int) (diff);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class OrderAutoCloser {</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        DelayQueue&lt;Order&gt; delayQueue = new DelayQueue&lt;&gt;();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 创建订单并将其添加到DelayQueue中</span></span>
<span class="line"><span>        Order order1 = new Order(&quot;Order1&quot;, 30); // 30分钟后自动关闭</span></span>
<span class="line"><span>        Order order2 = new Order(&quot;Order2&quot;, 15); // 15分钟后自动关闭</span></span>
<span class="line"><span>        delayQueue.offer(order1);</span></span>
<span class="line"><span>        delayQueue.offer(order2);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 启动后台线程来处理订单关闭</span></span>
<span class="line"><span>        Thread closerThread = new Thread(() -&gt; {</span></span>
<span class="line"><span>            while (true) {</span></span>
<span class="line"><span>                try {</span></span>
<span class="line"><span>                    Order order = delayQueue.take();</span></span>
<span class="line"><span>                    System.out.println(&quot;Closing order: &quot; + order.getOrderId());</span></span>
<span class="line"><span>                    // 在这里执行订单关闭的逻辑</span></span>
<span class="line"><span>                } catch (InterruptedException e) {</span></span>
<span class="line"><span>                    e.printStackTrace();</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        closerThread.start();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在创建订单的时候，就指定好自动关闭的时间，并且把订单放入delayQueue中，借助delayQueue来实现到期关闭的功能。</p><p>但是后来发现一个比较大的问题，那就是delayQueue是依托于JVM的，当应用崩溃了，或者正常的发布重启过程时，delayQueue就都没有了，这时候里面的订单就无法被关闭了。</p><h3 id="技术选型" tabindex="-1"><a class="header-anchor" href="#技术选型"><span>技术选型</span></a></h3><p>关于这个问题，其实就是实现一个订单的到期自动关闭的功能，实现的方式有很多，包括了自己扫表、依赖延迟消息、依赖Redis等。</p><p>各个方案都有自己的优缺点，但是因为我们这个订单量一开始其实并不大，所以就选择了一个最简单的方案就是自己用定时任务扫表的方式来实现。</p><p>这里用了Quartz，这是一个功能强大的调度框架，可以用于执行定时任务。</p><h3 id="具体实现" tabindex="-1"><a class="header-anchor" href="#具体实现"><span>具体实现</span></a></h3><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>@Component</span></span>
<span class="line"><span>public class OrderAutoCloseQuartz extends QuartzJobBean{</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Autowired </span></span>
<span class="line"><span>    private OrderMapper orderMapper;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    @Transactional </span></span>
<span class="line"><span>    protected void executeInternal(JobExecutionContext context) throws JobExecutionException {</span></span>
<span class="line"><span>        //扫描订单数据</span></span>
<span class="line"><span>      	//执行关单操作</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>@Configuration</span></span>
<span class="line"><span>public class OrderQuartzConfig {</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    @Bean</span></span>
<span class="line"><span>    public JobDetail orderjobDetail() {</span></span>
<span class="line"><span>        return JobBuilder</span></span>
<span class="line"><span>                .newJob(OrderAutoCloseQuartz.class) </span></span>
<span class="line"><span>                .withIdentity(&quot;orderAutoCloseQuartz&quot;) </span></span>
<span class="line"><span>                .storeDurably()</span></span>
<span class="line"><span>                .build();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Bean</span></span>
<span class="line"><span>    public Trigger orderTrigger() {</span></span>
<span class="line"><span>        CronScheduleBuilder scheduleBuilder </span></span>
<span class="line"><span>            = CronScheduleBuilder.cronSchedule(&quot;0 0/1 * * * ?&quot;);</span></span>
<span class="line"><span>       //调度器时钟,时间表达式，每隔一分钟执行一次</span></span>
<span class="line"><span>			return TriggerBuilder</span></span>
<span class="line"><span>                .newTrigger()</span></span>
<span class="line"><span>                .forJob(orderjobDetail())</span></span>
<span class="line"><span>                .withIdentity(&quot;orderAutoCloseQuartz&quot;)</span></span>
<span class="line"><span>                .withSchedule(scheduleBuilder).build();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上是使用Quartz实现定时任务扫表关单的部分代码，这个方案对于数据量少的订单关单是非常简单高效的。</p><p>但是如果随着业务量增大，那么一次扫表可能处理不完，那么就需要引入多线程，并行的执行。那么多线程在扫描的时候怎么避免扫描到重复的数据呢？有一个好的办法，就是可以通过分段的思想进行数据隔离。举个例子：</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-java"><span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Long</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> minId </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> messageService</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">getMinInitId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">for</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> i</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">i</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> threadPool</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">size</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">i</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">++</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">){</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">    Long</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> maxId </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> minId </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> segmentSize</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">()</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">*</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">i</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">    List</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Message</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> messages </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> messageService</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">scanInitMessages</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(minId,maxId);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    proccee</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(messages)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    minId </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> maxId </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那么就可以把以上这段代码，结合到定时任务执行的OrderAutoCloseQuartz中，在这里面进行多线程的扫表和处理。可以大大提升效率。</p><h3 id="学习资料" tabindex="-1"><a class="header-anchor" href="#学习资料"><span>学习资料</span></a></h3>`,20),s(`p`,null,[e(m,{to:`/java8gu/42.%E5%9C%BA%E6%99%AF%E9%A2%98/%E8%AE%A2%E5%8D%95%E5%88%B0%E6%9C%9F%E5%85%B3%E9%97%AD%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0.html`},{default:t(()=>[...l[0]||=[n(`42.场景题_订单到期关闭如何实现`,-1)]]),_:1})]),s(`p`,null,[e(m,{to:`/java8gu/27.%E5%AE%9A%E6%97%B6%E4%BB%BB%E5%8A%A1/%E5%AE%9A%E6%97%B6%E4%BB%BB%E5%8A%A1%E6%89%AB%E8%A1%A8%E7%9A%84%E6%96%B9%E6%A1%88%E6%9C%89%E4%BB%80%E4%B9%88%E7%BC%BA%E7%82%B9.html`},{default:t(()=>[...l[1]||=[n(`27.定时任务_定时任务扫表的方案有什么缺点`,-1)]]),_:1})])])}var f=c(u,[[`render`,d]]);export{l as _pageData,f as default};