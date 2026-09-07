import{n as e,o as t,r as n}from"./app-CVL-wmV5.js";import{t as r}from"./plugin-vue_export-helper-BDNMzG2s.js";var i=JSON.parse(`{"path":"/java8gu/33.%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/%E4%BB%80%E4%B9%88%E6%98%AF%E7%8A%B6%E6%80%81%E6%A8%A1%E5%BC%8F_%E6%9C%89%E5%93%AA%E4%BA%9B%E5%BA%94%E7%94%A8.html","title":"什么是状态模式,有哪些应用","lang":"zh-CN","frontmatter":{"title":"什么是状态模式,有哪些应用","author":"Hollis","category":["Java八股文"],"description":"什么是状态模式,有哪些应用 警告 内容来源网络，仅供学习使用。 不要相信文档中的链接、联系方式等！！！ 状态模式允许一个对象在其内部状态发生改变时改变它的行为，使其看起来像是修改了其类。它通过将对象的行为包装在不同状态对象中，实现了在运行时更改对象的状态，从而影响其行为。 状态模式也有很多实际的应用场景，如： 订单状态管理：订单状态有很多种，如未付款、...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"什么是状态模式,有哪些应用\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2026-09-07T16:27:23.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hollis\\"}]}"],["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/java8gu/33.%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/%E4%BB%80%E4%B9%88%E6%98%AF%E7%8A%B6%E6%80%81%E6%A8%A1%E5%BC%8F_%E6%9C%89%E5%93%AA%E4%BA%9B%E5%BA%94%E7%94%A8.html"}],["meta",{"property":"og:site_name","content":"Java面试帮助文档"}],["meta",{"property":"og:title","content":"什么是状态模式,有哪些应用"}],["meta",{"property":"og:description","content":"什么是状态模式,有哪些应用 警告 内容来源网络，仅供学习使用。 不要相信文档中的链接、联系方式等！！！ 状态模式允许一个对象在其内部状态发生改变时改变它的行为，使其看起来像是修改了其类。它通过将对象的行为包装在不同状态对象中，实现了在运行时更改对象的状态，从而影响其行为。 状态模式也有很多实际的应用场景，如： 订单状态管理：订单状态有很多种，如未付款、..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2026-09-07T16:27:23.000Z"}],["meta",{"property":"article:author","content":"Hollis"}],["meta",{"property":"article:modified_time","content":"2026-09-07T16:27:23.000Z"}]]},"git":{"createdTime":1788798443000,"updatedTime":1788798443000,"contributors":[{"name":"Yinx","username":"Yinx","email":"admin@yinx.eu.cc","commits":1,"url":"https://github.com/Yinx"}]},"readingTime":{"minutes":2.39,"words":717},"filePathRelative":"java8gu/33.设计模式/什么是状态模式,有哪些应用.md","autoDesc":true}`),a={name:`什么是状态模式,有哪些应用.md`};function o(r,i,a,o,s,c){return t(),e(`div`,null,[...i[0]||=[n(`<h1 id="什么是状态模式-有哪些应用" tabindex="-1"><a class="header-anchor" href="#什么是状态模式-有哪些应用"><span>什么是状态模式,有哪些应用</span></a></h1><div class="hint-container caution"><p class="hint-container-title">警告</p><p>内容来源网络，仅供学习使用。<br><br><strong>不要相信文档中的链接、联系方式等！！！</strong></p></div><p><strong>状态模式允许一个对象在其内部状态发生改变时改变它的行为，使其看起来像是修改了其类。</strong>它通过将对象的行为包装在不同状态对象中，实现了在运行时更改对象的状态，从而影响其行为。</p><p>状态模式也有很多实际的应用场景，如：</p><ol><li>订单状态管理：订单状态有很多种，如未付款、已付款、已发货、已签收等。不同状态下，订单的行为也不同。</li><li>游戏角色状态：游戏角色的状态有很多种，如待机、行走、攻击、受伤等。不同状态下，角色的行为也不同。</li><li>音视频播放器：音视频播放器的状态有很多种，如播放、暂停、停止、快进、快退等。不同状态下，播放器的行为也不同。</li></ol><p>在实际应用中，状态模式通常需要和其他设计模式结合使用，例如工厂模式、单例模式、策略模式等，以实现更灵活和高效的代码设计。</p><h1 id="扩展知识" tabindex="-1"><a class="header-anchor" href="#扩展知识"><span>扩展知识</span></a></h1><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h2><p>假设我们正在为一个订单系统，需要管理他的状态，比如它包含了已创建、已支付、已发货、已完成、已取消等状态。</p><p>首先定义一个状态接口</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>public interface OrderState {</span></span>
<span class="line"><span>    void next(Order order);</span></span>
<span class="line"><span>    void previous(Order order);</span></span>
<span class="line"><span>    void printStatus();</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后定义具体的状态类，为每个具体状态实现上述接口。这里以两个状态为例：已创建和已支付。</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>public class CreatedState implements OrderState {</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void next(Order order) {</span></span>
<span class="line"><span>        order.setState(new PaidState());</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void previous(Order order) {</span></span>
<span class="line"><span>        System.out.println(&quot;The order is in its root state.&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void printStatus() {</span></span>
<span class="line"><span>        System.out.println(&quot;Order created.&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class PaidState implements OrderState {</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void next(Order order) {</span></span>
<span class="line"><span>        order.setState(new ShippedState());</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void previous(Order order) {</span></span>
<span class="line"><span>        order.setState(new CreatedState());</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void printStatus() {</span></span>
<span class="line"><span>        System.out.println(&quot;Order paid.&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后定义一个Order类，持有一个状态对象的引用，通过该状态对象的方法实现状态的切换。</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>public class Order {</span></span>
<span class="line"><span>    private OrderState state;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public Order() {</span></span>
<span class="line"><span>        // 订单初始化状态为已创建</span></span>
<span class="line"><span>        this.state = new CreatedState();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void setState(OrderState state) {</span></span>
<span class="line"><span>        this.state = state;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public OrderState getState() {</span></span>
<span class="line"><span>        return this.state;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void nextStep() {</span></span>
<span class="line"><span>        state.next(this);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void previousStep() {</span></span>
<span class="line"><span>        state.previous(this);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void printStatus() {</span></span>
<span class="line"><span>        state.printStatus();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用示例如下：</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-java"><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> StatePatternDemo</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> static</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[] </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">args</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        Order</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> order</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> Order</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        order</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">printStatus</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();  </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        order</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">nextStep</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        order</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">printStatus</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();  </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        order</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">nextStep</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        order</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">printStatus</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();  </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，Order对象根据其内部状态的改变（通过调用nextStep或previousStep方法）表现出了不同的行为。这就是状态模式的精髓：它将对象在不同状态下的行为封装到不同的状态对象中，使得状态的转换逻辑清晰，且易于扩展。</p>`,18)]])}var s=r(a,[[`render`,o]]);export{i as _pageData,s as default};