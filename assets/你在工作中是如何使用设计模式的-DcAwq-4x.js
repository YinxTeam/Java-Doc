import{a as e,c as t,i as n,n as r,o as i,r as a,s as o,t as s}from"./app-CVL-wmV5.js";import{t as c}from"./plugin-vue_export-helper-BDNMzG2s.js";var l=JSON.parse(`{"path":"/java8gu/33.%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/%E4%BD%A0%E5%9C%A8%E5%B7%A5%E4%BD%9C%E4%B8%AD%E6%98%AF%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%E7%9A%84.html","title":"你在工作中是如何使用设计模式的","lang":"zh-CN","frontmatter":{"title":"你在工作中是如何使用设计模式的","author":"Hollis","category":["Java八股文"],"description":"你在工作中是如何使用设计模式的 警告 内容来源网络，仅供学习使用。 不要相信文档中的链接、联系方式等！！！ 工作中常用的设计模式有很多，如单例、工厂、策略、模板等。一般在工作中，是可以把策略、工厂和模板一起结合着来使用的。 当我们需要有多个具体的策略服务的时候，那不同的内容放到策略服务中，那些公共的东西就可以抽象出来放到模板方法中了。那这些策略服务该如...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"你在工作中是如何使用设计模式的\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2026-09-07T16:27:23.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hollis\\"}]}"],["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/java8gu/33.%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/%E4%BD%A0%E5%9C%A8%E5%B7%A5%E4%BD%9C%E4%B8%AD%E6%98%AF%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%E7%9A%84.html"}],["meta",{"property":"og:site_name","content":"Java面试帮助文档"}],["meta",{"property":"og:title","content":"你在工作中是如何使用设计模式的"}],["meta",{"property":"og:description","content":"你在工作中是如何使用设计模式的 警告 内容来源网络，仅供学习使用。 不要相信文档中的链接、联系方式等！！！ 工作中常用的设计模式有很多，如单例、工厂、策略、模板等。一般在工作中，是可以把策略、工厂和模板一起结合着来使用的。 当我们需要有多个具体的策略服务的时候，那不同的内容放到策略服务中，那些公共的东西就可以抽象出来放到模板方法中了。那这些策略服务该如..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2026-09-07T16:27:23.000Z"}],["meta",{"property":"article:author","content":"Hollis"}],["meta",{"property":"article:modified_time","content":"2026-09-07T16:27:23.000Z"}]]},"git":{"createdTime":1788798443000,"updatedTime":1788798443000,"contributors":[{"name":"Yinx","username":"Yinx","email":"admin@yinx.eu.cc","commits":1,"url":"https://github.com/Yinx"}]},"readingTime":{"minutes":2.38,"words":713},"filePathRelative":"java8gu/33.设计模式/你在工作中是如何使用设计模式的.md","autoDesc":true}`),u={name:`你在工作中是如何使用设计模式的.md`};function d(c,l,u,d,f,p){let m=o(`RouteLink`);return i(),r(`div`,null,[l[1]||=a(`<h1 id="你在工作中是如何使用设计模式的" tabindex="-1"><a class="header-anchor" href="#你在工作中是如何使用设计模式的"><span>你在工作中是如何使用设计模式的</span></a></h1><div class="hint-container caution"><p class="hint-container-title">警告</p><p>内容来源网络，仅供学习使用。<br><br><strong>不要相信文档中的链接、联系方式等！！！</strong></p></div><p>工作中常用的设计模式有很多，如单例、工厂、策略、模板等。<strong>一般在工作中，是可以把策略、工厂和模板一起结合着来使用的。</strong></p><p>当我们需要有多个具体的策略服务的时候，那不同的内容放到策略服务中，那些公共的东西就可以抽象出来放到模板方法中了。那这些策略服务该如何管理呢？什么时候用什么策略服务呢？这时候就可以借助工厂来管理这些服务。</p><p>如以下例子， 我们需要定义一个支付服务，里面有一个支付方法：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>public interface PayService {</span></span>
<span class="line"><span>    public void pay(PayRequest payRequest);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class PayRequest {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这是一个单独的接口，只定义了一个方法，那么，我们再把所有支付渠道中公共的代码抽出来，定义一个抽象类：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>public abstract class AbstractPayService implements PayService {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void pay(PayRequest payRequest) {</span></span>
<span class="line"><span>      	//前置检查</span></span>
<span class="line"><span>        validateRequest(payRequest);</span></span>
<span class="line"><span>      	//支付核心逻辑</span></span>
<span class="line"><span>        doPay(payRequest);</span></span>
<span class="line"><span>      	//后置处理</span></span>
<span class="line"><span>        postPay(payRequest);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public abstract void doPay(PayRequest payRequest);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private void postPay(PayRequest payRequest) {</span></span>
<span class="line"><span>        //支付成功的后置处理</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void validateRequest(PayRequest payRequest) {</span></span>
<span class="line"><span>        //参数检查</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个抽象类中首先把pay方法给实现了，然后编排了几个其他的方法，这些公共的方法在抽象类中直接实现了，具体的支付核心实现，留给实现类去实现就行了。</p><p>然后我们就可以定义多个策略服务了：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>@Service</span></span>
<span class="line"><span>public class AlipayPayService extends AbstractPayService {</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void doPay(PayRequest payRequest) {</span></span>
<span class="line"><span>        //支付宝支付逻辑</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Service</span></span>
<span class="line"><span>public class WechatPayService extends AbstractPayService {</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void doPay(PayRequest payRequest) {</span></span>
<span class="line"><span>        //微信支付逻辑</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这些服务定义好了之后，需要有一个地方统一管理，那就定义一个工厂吧：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>import java.util.Map;</span></span>
<span class="line"><span>import java.util.concurrent.ConcurrentHashMap;</span></span>
<span class="line"><span>@Service</span></span>
<span class="line"><span>public class PayServiceFactory {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    public Map&lt;String, PayService&gt; payServiceMap = new ConcurrentHashMap&lt;&gt;();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public PayService getPayService(String payChannel) {</span></span>
<span class="line"><span>        // alipay -&gt; alipayPayService</span></span>
<span class="line"><span>        // wechat -&gt; wechatPayService</span></span>
<span class="line"><span>        return payServiceMap.get(payChannel + &quot;PayService&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在工厂中，把PayService的所有实现全部都注入到payServiceMap中，然后再需要用的是，直接调他的getPayService方法就行了。</p>`,14),s(`p`,null,[e(m,{to:`/java8gu/06.Spring/Spring%E7%9A%84@Autowired%E8%83%BD%E7%94%A8%E5%9C%A8Map%E4%B8%8A%E5%90%97.html`},{default:t(()=>[...l[0]||=[n(`06.Spring_Spring的@Autowired能用在Map上吗`,-1)]]),_:1})]),l[2]||=a(`<p>这样，在使用的时候，只需要通过工厂就能获取对应的策略服务进行服务调用了：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>public class PayDomainService {</span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    PayServiceFactory payServiceFactory;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void pay(PayRequest payRequest) {</span></span>
<span class="line"><span>        String payChannel = payRequest.getPayChannel();</span></span>
<span class="line"><span>        payServiceFactory.getPayService(payChannel).pay(payRequest);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上，我们借助了Spring，结合了策略、模板以及工厂，实现了我们想要的功能，通过多种设计模式，减少重复代码，提升可维护性，也让代码更容易阅读和理解。</p>`,3)])}var f=c(u,[[`render`,d]]);export{l as _pageData,f as default};