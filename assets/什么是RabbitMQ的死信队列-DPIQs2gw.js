import{a as e,c as t,i as n,n as r,o as i,r as a,s as o,t as s}from"./app-CVL-wmV5.js";import{t as c}from"./plugin-vue_export-helper-BDNMzG2s.js";var l=JSON.parse(`{"path":"/java8gu/18.RabbitMQ/%E4%BB%80%E4%B9%88%E6%98%AFRabbitMQ%E7%9A%84%E6%AD%BB%E4%BF%A1%E9%98%9F%E5%88%97.html","title":"什么是RabbitMQ的死信队列","lang":"zh-CN","frontmatter":{"title":"什么是RabbitMQ的死信队列","author":"Hollis","category":["Java八股文"],"description":"什么是RabbitMQ的死信队列 警告 内容来源网络，仅供学习使用。 不要相信文档中的链接、联系方式等！！！ RabbitMQ的死信队列（Dead Letter Queue，简称DLQ）是一种用于处理消息处理失败或无法路由的消息的机制。它允许将无法被正常消费的消息重新路由到另一个队列，以便稍后进行进一步的处理、分析或排查问题。 当消息队列里面的消息出现...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"什么是RabbitMQ的死信队列\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2026-09-07T16:27:23.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hollis\\"}]}"],["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/java8gu/18.RabbitMQ/%E4%BB%80%E4%B9%88%E6%98%AFRabbitMQ%E7%9A%84%E6%AD%BB%E4%BF%A1%E9%98%9F%E5%88%97.html"}],["meta",{"property":"og:site_name","content":"Java面试帮助文档"}],["meta",{"property":"og:title","content":"什么是RabbitMQ的死信队列"}],["meta",{"property":"og:description","content":"什么是RabbitMQ的死信队列 警告 内容来源网络，仅供学习使用。 不要相信文档中的链接、联系方式等！！！ RabbitMQ的死信队列（Dead Letter Queue，简称DLQ）是一种用于处理消息处理失败或无法路由的消息的机制。它允许将无法被正常消费的消息重新路由到另一个队列，以便稍后进行进一步的处理、分析或排查问题。 当消息队列里面的消息出现..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2026-09-07T16:27:23.000Z"}],["meta",{"property":"article:author","content":"Hollis"}],["meta",{"property":"article:modified_time","content":"2026-09-07T16:27:23.000Z"}]]},"git":{"createdTime":1788798443000,"updatedTime":1788798443000,"contributors":[{"name":"Yinx","username":"Yinx","email":"admin@yinx.eu.cc","commits":1,"url":"https://github.com/Yinx"}]},"readingTime":{"minutes":3.74,"words":1122},"filePathRelative":"java8gu/18.RabbitMQ/什么是RabbitMQ的死信队列.md","autoDesc":true}`),u={name:`什么是RabbitMQ的死信队列.md`};function d(c,l,u,d,f,p){let m=o(`RouteLink`);return i(),r(`div`,null,[l[1]||=a(`<h1 id="什么是rabbitmq的死信队列" tabindex="-1"><a class="header-anchor" href="#什么是rabbitmq的死信队列"><span>什么是RabbitMQ的死信队列</span></a></h1><div class="hint-container caution"><p class="hint-container-title">警告</p><p>内容来源网络，仅供学习使用。<br><br><strong>不要相信文档中的链接、联系方式等！！！</strong></p></div><p>RabbitMQ的死信队列（Dead Letter Queue，简称DLQ）是一种用于处理消息处理失败或无法路由的消息的机制。它允许将无法被正常消费的消息重新路由到另一个队列，以便稍后进行进一步的处理、分析或排查问题。</p><p>当消息队列里面的消息出现以下几种情况时，就可能会被称为&quot;死信&quot;：</p><ol><li>消息处理失败：当消费者由于代码错误、消息格式不正确、业务规则冲突等原因无法成功处理一条消息时，这条消息可以被标记为死信。</li><li>消息过期：在RabbitMQ中，消息可以设置过期时间。如果消息在规定的时间内没有被消费，它可以被认为是死信并被发送到死信队列。</li><li>消息被拒绝：当消费者明确拒绝一条消息时，它可以被标记为死信并发送到死信队列。拒绝消息的原因可能是消息无法处理，或者消费者认为消息不符合处理条件。</li><li>消息无法路由：当消息不能被路由到任何队列时，例如，没有匹配的绑定关系或路由键时，消息可以被发送到死信队列。</li></ol><figure><img src="/assets/%E4%BB%80%E4%B9%88%E6%98%AFRabbitMQ%E7%9A%84%E6%AD%BB%E4%BF%A1%E9%98%9F%E5%88%97_-1-B1igXdCW.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><p>当消息变成&quot;死信&quot;之后，如果配置了死信队列，它将被发送到死信交换机，死信交换机将死信投递到一个队列上，这个队列就是死信队列。但是如果没有配置死信队列，那么这个消息将被丢弃。</p><p>RabbitMQ的死信队列其实有很多作用，比如我们可以借助他实现延迟消息，进而实现订单的到期关闭，超时关单等业务逻辑。</p>`,8),s(`p`,null,[e(m,{to:`/java8gu/18.RabbitMQ/rabbitMQ%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0%E5%BB%B6%E8%BF%9F%E6%B6%88%E6%81%AF.html`},{default:t(()=>[...l[0]||=[n(`18.RabbitMQ_rabbitMQ如何实现延迟消息`,-1)]]),_:1})]),l[2]||=a(`<h1 id="扩展知识" tabindex="-1"><a class="header-anchor" href="#扩展知识"><span>扩展知识</span></a></h1><h2 id="配置死信队列" tabindex="-1"><a class="header-anchor" href="#配置死信队列"><span>配置死信队列</span></a></h2><p>在RabbitMQ中，死信队列通常与交换机（Exchange）和队列（Queue）之间的绑定关系一起使用。要设置死信队列，通常需要以下步骤：</p><ol><li>创建死信队列：定义一个用于存储死信消息的队列。</li><li>创建死信交换机：为死信队列定义一个交换机，通常是一个direct类型的交换机。</li><li>将队列与死信交换机绑定：将主要队列和死信交换机绑定，以便无法处理的消息能够被转发到死信队列。</li><li>在主要队列上设置死信属性：通过设置队列的x-dead-letter-exchange和x-dead-letter-routing-key属性，指定死信消息应该被发送到哪个交换机和路由键。</li></ol><p>当消息被标记为死信时，它将被发送到死信队列，并可以由应用程序进一步处理、审查或记录。这种机制有助于增加消息处理的可靠性和容错性，确保不丢失重要的消息，并提供了一种处理失败消息的方式。</p><p>以下是一个配置死信队列的方式：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>import org.springframework.amqp.core.*;</span></span>
<span class="line"><span>import org.springframework.context.annotation.Bean;</span></span>
<span class="line"><span>import org.springframework.context.annotation.Configuration;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Configuration</span></span>
<span class="line"><span>public class RabbitMQConfig {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 配置死信队列和交换机</span></span>
<span class="line"><span>    @Bean</span></span>
<span class="line"><span>    public DirectExchange deadLetterExchange() {</span></span>
<span class="line"><span>        return new DirectExchange(&quot;dead-letter-exchange&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 死信队列</span></span>
<span class="line"><span>    @Bean</span></span>
<span class="line"><span>    public Queue deadLetterQueue() {</span></span>
<span class="line"><span>        return new Queue(&quot;dead-letter-queue&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 绑定死信队列到死信交换机</span></span>
<span class="line"><span>    @Bean</span></span>
<span class="line"><span>    public Binding deadLetterBinding() {</span></span>
<span class="line"><span>        return BindingBuilder.bind(deadLetterQueue()).to(deadLetterExchange()).with(&quot;dead-letter-routing-key&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 主队列的交换机</span></span>
<span class="line"><span>    @Bean</span></span>
<span class="line"><span>    public DirectExchange mainExchange() {</span></span>
<span class="line"><span>        return new DirectExchange(&quot;main-exchange&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 		// 主队列</span></span>
<span class="line"><span>    @Bean</span></span>
<span class="line"><span>    public Queue mainQueue() {</span></span>
<span class="line"><span>      	Map&lt;String, Object&gt; args = new HashMap&lt;&gt;(2);</span></span>
<span class="line"><span>      	// 声明当前队列绑定的死信交换机 </span></span>
<span class="line"><span>				args.put(&quot;x-dead-letter-exchange&quot;, DEAD_LETTER_EXCHANGE);</span></span>
<span class="line"><span>      	// 这里声明当前队列的死信路由key </span></span>
<span class="line"><span>				args.put(&quot;x-dead-letter-routing-key&quot;, &quot;dead-letter-routing-key&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      	return QueueBuilder.durable(&quot;main-queue&quot;).withArguments(args).build();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 绑定主队列到主交换机</span></span>
<span class="line"><span>    @Bean</span></span>
<span class="line"><span>    public Binding binding() {</span></span>
<span class="line"><span>        return BindingBuilder.bind(mainQueue()).to(mainExchange()).with(&quot;main-routing-key&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样，消费者在消费的时候，分别监听主队列和死信队列就可以了：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>@Component </span></span>
<span class="line"><span>public class DeadLetterMessageReceiver { </span></span>
<span class="line"><span>    @RabbitListener(queues = &quot;dead-letter-queue&quot;) </span></span>
<span class="line"><span>    public void receiveA(Message message, Channel channel) throws IOException { </span></span>
<span class="line"><span>      System.out.println(&quot;收到死信消息：&quot; + new String(message.getBody())); </span></span>
<span class="line"><span>      channel.basicAck(message.getMessageProperties().getDeliveryTag(), false); </span></span>
<span class="line"><span>    } </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Component </span></span>
<span class="line"><span>public class MainMessageReceiver { </span></span>
<span class="line"><span>    @RabbitListener(queues = &quot;main-queue&quot;) </span></span>
<span class="line"><span>    public void receiveA(Message message, Channel channel) throws IOException { </span></span>
<span class="line"><span>      System.out.println(&quot;收到普通消息A：&quot; + new String(message.getBody())); </span></span>
<span class="line"><span>      channel.basicAck(message.getMessageProperties().getDeliveryTag(), false); </span></span>
<span class="line"><span>    } </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9)])}var f=c(u,[[`render`,d]]);export{l as _pageData,f as default};