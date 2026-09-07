import{n as e,o as t,r as n}from"./app-CVL-wmV5.js";import{t as r}from"./plugin-vue_export-helper-BDNMzG2s.js";var i=JSON.parse(`{"path":"/java8gu/33.%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/%E7%AD%96%E7%95%A5%E6%A8%A1%E5%BC%8F%E5%92%8Cif-else%E7%9B%B8%E6%AF%94%E6%9C%89%E4%BB%80%E4%B9%88%E5%A5%BD%E5%A4%84.html","title":"策略模式和if-else相比有什么好处","lang":"zh-CN","frontmatter":{"title":"策略模式和if-else相比有什么好处","author":"Hollis","category":["Java八股文"],"description":"策略模式和if-else相比有什么好处 警告 内容来源网络，仅供学习使用。 不要相信文档中的链接、联系方式等！！！ 策略模式是一种行为设计模式，它允许在运行时根据不同情况选择算法的不同实现。它将算法和其相应的行为封装在一个独立的类中，使得它们可以相互替换，而不会影响客户端的使用。这种模式支持开闭原则，即在不修改现有客户端代码的情况下，可以动态地添加、删...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"策略模式和if-else相比有什么好处\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2026-09-07T16:27:23.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hollis\\"}]}"],["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/java8gu/33.%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/%E7%AD%96%E7%95%A5%E6%A8%A1%E5%BC%8F%E5%92%8Cif-else%E7%9B%B8%E6%AF%94%E6%9C%89%E4%BB%80%E4%B9%88%E5%A5%BD%E5%A4%84.html"}],["meta",{"property":"og:site_name","content":"Java面试帮助文档"}],["meta",{"property":"og:title","content":"策略模式和if-else相比有什么好处"}],["meta",{"property":"og:description","content":"策略模式和if-else相比有什么好处 警告 内容来源网络，仅供学习使用。 不要相信文档中的链接、联系方式等！！！ 策略模式是一种行为设计模式，它允许在运行时根据不同情况选择算法的不同实现。它将算法和其相应的行为封装在一个独立的类中，使得它们可以相互替换，而不会影响客户端的使用。这种模式支持开闭原则，即在不修改现有客户端代码的情况下，可以动态地添加、删..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2026-09-07T16:27:23.000Z"}],["meta",{"property":"article:author","content":"Hollis"}],["meta",{"property":"article:modified_time","content":"2026-09-07T16:27:23.000Z"}]]},"git":{"createdTime":1788798443000,"updatedTime":1788798443000,"contributors":[{"name":"Yinx","username":"Yinx","email":"admin@yinx.eu.cc","commits":1,"url":"https://github.com/Yinx"}]},"readingTime":{"minutes":3.49,"words":1048},"filePathRelative":"java8gu/33.设计模式/策略模式和if-else相比有什么好处.md","autoDesc":true}`),a={name:`策略模式和if-else相比有什么好处.md`};function o(r,i,a,o,s,c){return t(),e(`div`,null,[...i[0]||=[n(`<h1 id="策略模式和if-else相比有什么好处" tabindex="-1"><a class="header-anchor" href="#策略模式和if-else相比有什么好处"><span>策略模式和if-else相比有什么好处</span></a></h1><div class="hint-container caution"><p class="hint-container-title">警告</p><p>内容来源网络，仅供学习使用。<br><br><strong>不要相信文档中的链接、联系方式等！！！</strong></p></div><p>策略模式是一种行为设计模式，它允许在运行时根据不同情况选择算法的不同实现。它将算法和其相应的行为封装在一个独立的类中，使得它们可以相互替换，而不会影响客户端的使用。这种模式支持开闭原则，即在不修改现有客户端代码的情况下，可以动态地添加、删除或替换算法。</p><p>策略模式相较于if-else语句，有以下几个优势：</p><ol><li>易于扩展：使用策略模式，可以方便地增加、删除或更换算法，而不需要修改原有的代码，只需要添加新的策略类即可。</li><li>更好的可读性：策略模式可以将复杂的条件语句分散到不同的策略类中，使得代码更加清晰、易于理解和维护。</li><li>避免大量的条件判断：在if-else语句中，可能需要写很多的条件判断，当条件越来越多时，代码变得复杂、难以维护。而使用策略模式，可以将条件判断分散到不同的策略类中，每个策略类只需要关注自己的逻辑，使得代码更加简洁。</li><li>提高代码复用性：策略模式可以将一些常用的算法封装在策略类中，可以被多个客户端共享使用，从而提高代码的复用性。</li></ol><p>一般在实际应用中，策略模式会结合工厂模式、模板方法模式一起使用。</p><h1 id="扩展知识" tabindex="-1"><a class="header-anchor" href="#扩展知识"><span>扩展知识</span></a></h1><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h2><p>我们结合策略+工厂+模板方法模式，看一下如何在Spring中使用。</p><p>假设有一个订单处理系统，处理订单的流程包括如下步骤：</p><ol><li>根据订单类型选择不同的处理策略（如普通订单、团购订单、秒杀订单等）；</li><li>每个订单类型的处理策略可能有所不同，但是都需要经过一些公共的处理流程，比如记录日志、验证订单信息等；</li><li>处理完订单后，需要将处理结果返回给调用方。</li></ol><p>首先，定义订单处理策略的接口：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>public interface OrderProcessStrategy {</span></span>
<span class="line"><span>    void process(Order order);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后定义一个公共的基础实现类，其中包含了订单的前置处理和后置处理：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>public abstract class BaseOrderProcessStrategy implements OrderProcessStrategy {</span></span>
<span class="line"><span>   public void process(Order order){</span></span>
<span class="line"><span>    	//前置处理</span></span>
<span class="line"><span>    	checkOrder(order);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    	doProcess(order);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    	//后置处理</span></span>
<span class="line"><span>      //doLog(order);</span></span>
<span class="line"><span>  	</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  	public abstract void doProcess(Order order);</span></span>
<span class="line"><span>    public void checkOrder(Order order){</span></span>
<span class="line"><span>    	//订单检查业务逻辑</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	 public void doLog(Order order){</span></span>
<span class="line"><span>    	//记录日志相关代码</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来，定义不同类型订单的处理策略实现类，集成BaseOrderProcessStrategy这个抽象类，并且实现其中的doProcess方法。</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>@Component(&quot;normalOrderProcessStrategy&quot;)</span></span>
<span class="line"><span>public class NormalOrderProcessStrategy extends BaseOrderProcessStrategy {</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void doProcess(Order order) {</span></span>
<span class="line"><span>        // 普通订单处理逻辑</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Component(&quot;groupOrderProcessStrategy&quot;)</span></span>
<span class="line"><span>public class GroupOrderProcessStrategy extends BaseOrderProcessStrategy {</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void doProcess(Order order) {</span></span>
<span class="line"><span>        // 团购订单处理逻辑</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Component(&quot;seckillOrderProcessStrategy&quot;)</span></span>
<span class="line"><span>public class SeckillOrderProcessStrategy extends BaseOrderProcessStrategy {</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void doProcess(Order order) {</span></span>
<span class="line"><span>        // 秒杀订单处理逻辑</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，定义一个工厂类来创建订单处理策略实例：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>@Component</span></span>
<span class="line"><span>public class OrderProcessStrategyFactory {</span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private ApplicationContext applicationContext;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public OrderProcessStrategy getStrategy(String type) {</span></span>
<span class="line"><span>        return applicationContext.getBean(type + &quot;OrderProcessStrategy&quot;, OrderProcessStrategy.class);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span></span></span>
<span class="line"><span>public static class OrderProcessStrategyFactory {</span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private ConcurrentHashMap&lt;String,OrderProcessStrategy&gt; orderProcessStrategyMaps;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public OrderProcessStrategy getStrategy(String type) {</span></span>
<span class="line"><span>        return orderProcessStrategyMaps.get(type + &quot;OrderProcessStrategy&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后，定义一个订单处理服务类，使用策略模式来处理订单：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>@Service</span></span>
<span class="line"><span>public class OrderProcessService {</span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private OrderProcessStrategyFactory strategyFactory;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void processOrder(Order order) {</span></span>
<span class="line"><span>        // 选择处理策略</span></span>
<span class="line"><span>        OrderProcessStrategy strategy = strategyFactory.getStrategy(order.getType());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 执行处理流程</span></span>
<span class="line"><span>        strategy.process(order);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述代码中，通过使用工厂模式来创建不同类型的订单处理策略实例，并使用策略模式来处理订单，避免了复杂的 if-else 语句，代码更加简洁易读，也更加易于维护。同时，使用模板方法模式来封装公共的处理流程，避免了代码重复。</p>`,24)]])}var s=r(a,[[`render`,o]]);export{i as _pageData,s as default};