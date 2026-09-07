import{n as e,o as t,r as n}from"./app-CVL-wmV5.js";import{t as r}from"./plugin-vue_export-helper-BDNMzG2s.js";var i=JSON.parse(`{"path":"/java8gu/33.%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/%E4%BB%80%E4%B9%88%E6%98%AF%E8%B4%A3%E4%BB%BB%E9%93%BE%E6%A8%A1%E5%BC%8F_%E6%9C%89%E5%93%AA%E4%BA%9B%E5%BA%94%E7%94%A8.html","title":"什么是责任链模式,有哪些应用","lang":"zh-CN","frontmatter":{"title":"什么是责任链模式,有哪些应用","author":"Hollis","category":["Java八股文"],"description":"什么是责任链模式,有哪些应用 警告 内容来源网络，仅供学习使用。 不要相信文档中的链接、联系方式等！！！ 责任链模式的目的是避免请求发送者与多个接收者之间的耦合关系，将这些接收者组成一条链，并沿着这条链传递请求，直到有一个接收者处理它为止。 在责任链模式中，通常将处理请求的对象称为处理器或者链的节点，每个节点都包含了处理该请求的逻辑以及指向下一个节点的...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"什么是责任链模式,有哪些应用\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2026-09-07T16:27:23.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hollis\\"}]}"],["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/java8gu/33.%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/%E4%BB%80%E4%B9%88%E6%98%AF%E8%B4%A3%E4%BB%BB%E9%93%BE%E6%A8%A1%E5%BC%8F_%E6%9C%89%E5%93%AA%E4%BA%9B%E5%BA%94%E7%94%A8.html"}],["meta",{"property":"og:site_name","content":"Java面试帮助文档"}],["meta",{"property":"og:title","content":"什么是责任链模式,有哪些应用"}],["meta",{"property":"og:description","content":"什么是责任链模式,有哪些应用 警告 内容来源网络，仅供学习使用。 不要相信文档中的链接、联系方式等！！！ 责任链模式的目的是避免请求发送者与多个接收者之间的耦合关系，将这些接收者组成一条链，并沿着这条链传递请求，直到有一个接收者处理它为止。 在责任链模式中，通常将处理请求的对象称为处理器或者链的节点，每个节点都包含了处理该请求的逻辑以及指向下一个节点的..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2026-09-07T16:27:23.000Z"}],["meta",{"property":"article:author","content":"Hollis"}],["meta",{"property":"article:modified_time","content":"2026-09-07T16:27:23.000Z"}]]},"git":{"createdTime":1788798443000,"updatedTime":1788798443000,"contributors":[{"name":"Yinx","username":"Yinx","email":"admin@yinx.eu.cc","commits":1,"url":"https://github.com/Yinx"}]},"readingTime":{"minutes":3.62,"words":1085},"filePathRelative":"java8gu/33.设计模式/什么是责任链模式,有哪些应用.md","autoDesc":true}`),a={name:`什么是责任链模式,有哪些应用.md`};function o(r,i,a,o,s,c){return t(),e(`div`,null,[...i[0]||=[n(`<h1 id="什么是责任链模式-有哪些应用" tabindex="-1"><a class="header-anchor" href="#什么是责任链模式-有哪些应用"><span>什么是责任链模式,有哪些应用</span></a></h1><div class="hint-container caution"><p class="hint-container-title">警告</p><p>内容来源网络，仅供学习使用。<br><br><strong>不要相信文档中的链接、联系方式等！！！</strong></p></div><p><strong>责任链模式的目的是避免请求发送者与多个接收者之间的耦合关系，将这些接收者组成一条链，并沿着这条链传递请求，直到有一个接收者处理它为止。</strong></p><p>在责任链模式中，通常将处理请求的对象称为处理器或者链的节点，每个节点都包含了处理该请求的逻辑以及指向下一个节点的引用。当请求到达一个节点时，如果该节点无法处理该请求，它会将请求转发给下一个节点，直到有一个节点处理该请求或者整个链都无法处理该请求。</p><p>责任链模式在实际开发中有很多应用场景，比如：</p><ol><li><p>过滤器链：在Web开发中，可以通过责任链模式来实现过滤器链，例如Spring框架中的FilterChain就是一条责任链，每个过滤器都有机会对请求进行处理，直到最后一个过滤器处理完毕。</p></li><li><p>日志记录器：在日志系统中，可以使用责任链模式来将日志记录器组成一条链，从而实现多种日志记录方式的灵活组合。</p></li><li><p>异常处理器：在应用程序中，可以使用责任链模式来实现异常处理器的链式调用，从而灵活地处理各种异常情况。</p></li><li><p>授权认证：在系统中，可以使用责任链模式来实现授权认证的链式调用，从而灵活地控制不同用户对系统的访问权限。</p></li></ol><h1 id="扩展知识" tabindex="-1"><a class="header-anchor" href="#扩展知识"><span>扩展知识</span></a></h1><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h2><p>下面以一个订单处理的场景为例，介绍如何使用责任链模式：</p><p>假设我们有一个在线商店，当用户下单时，订单需要经过以下几个步骤：</p><ol><li>检查订单信息是否完整</li><li>检查商品库存是否充足</li><li>检查用户余额是否充足</li><li>确认订单，更新商品库存和用户余额</li></ol><p>我们可以将每个步骤封装成一个处理者，然后使用责任链模式将它们连接起来，形成一个处理链。</p><p>首先定义一个处理者接口 OrderHandler：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>public interface OrderHandler {</span></span>
<span class="line"><span>    void handle(Order order);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后实现每个步骤对应的Handler：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>public class CheckOrderHandler implements OrderHandler {</span></span>
<span class="line"><span>    private OrderHandler next;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public CheckOrderHandler(OrderHandler next) {</span></span>
<span class="line"><span>        this.next = next;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void handle(Order order) {</span></span>
<span class="line"><span>        // 检查订单信息是否完整</span></span>
<span class="line"><span>        if (order.isInfoComplete()) {</span></span>
<span class="line"><span>            // 如果订单信息完整，则将请求传递给下一个处理者</span></span>
<span class="line"><span>            next.handle(order);</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            // 如果订单信息不完整，则直接返回错误信息</span></span>
<span class="line"><span>            throw new RuntimeException(&quot;订单信息不完整&quot;);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class CheckStockHandler implements OrderHandler {</span></span>
<span class="line"><span>    private OrderHandler next;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public CheckStockHandler(OrderHandler next) {</span></span>
<span class="line"><span>        this.next = next;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void handle(Order order) {</span></span>
<span class="line"><span>        // 检查商品库存是否充足</span></span>
<span class="line"><span>        if (order.getStock() &gt;= order.getQuantity()) {</span></span>
<span class="line"><span>            // 如果库存充足，则将请求传递给下一个处理者</span></span>
<span class="line"><span>            next.handle(order);</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            // 如果库存不足，则直接返回错误信息</span></span>
<span class="line"><span>            throw new RuntimeException(&quot;商品库存不足&quot;);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class CheckBalanceHandler implements OrderHandler {</span></span>
<span class="line"><span>    private OrderHandler next;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public CheckBalanceHandler(OrderHandler next) {</span></span>
<span class="line"><span>        this.next = next;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void handle(Order order) {</span></span>
<span class="line"><span>        // 检查用户余额是否充足</span></span>
<span class="line"><span>        if (order.getBalance() &gt;= order.getAmount()) {</span></span>
<span class="line"><span>            // 如果余额充足，则将请求传递给下一个处理者</span></span>
<span class="line"><span>            next.handle(order);</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            // 如果余额不足，则直接返回错误信息</span></span>
<span class="line"><span>            throw new RuntimeException(&quot;用户余额不足&quot;);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class ConfirmOrderHandler implements OrderHandler {</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void handle(Order order) {</span></span>
<span class="line"><span>        // 确认订单，更新商品库存和用户余额</span></span>
<span class="line"><span>        order.confirm();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中每个处理者都有一个指向下一个处理者的引用，处理者之间通过调用下一个处理者的 handle 方法将请求传递下去。如果某个处理者无法处理请求，则直接返回错误信息。</p><p>最后，再将这些Handler串联起来按顺序执行即可。</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>// 客户端代码示例</span></span>
<span class="line"><span>CheckOrderHandler checkOrderHandler = new CheckOrderHandler();</span></span>
<span class="line"><span>CheckStockHandler checkStockHandler = new CheckStockHandler();</span></span>
<span class="line"><span>CheckBalanceHandler checkBalanceHandler = new CheckBalanceHandler();</span></span>
<span class="line"><span>ConfirmOrderHandler confirmOrderHandler = new ConfirmOrderHandler();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 将处理器按照一定顺序组成责任链</span></span>
<span class="line"><span>checkOrderHandler.setNext(checkStockHandler);</span></span>
<span class="line"><span>checkStockHandler.setNext(checkBalanceHandler);</span></span>
<span class="line"><span>checkBalanceHandler.setNext(confirmOrderHandler);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 处理订单</span></span>
<span class="line"><span>Order order = new Order();</span></span>
<span class="line"><span>checkOrderHandler.handle(order);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19)]])}var s=r(a,[[`render`,o]]);export{i as _pageData,s as default};