import{a as e,c as t,i as n,n as r,o as i,r as a,s as o,t as s}from"./app-CVL-wmV5.js";import{t as c}from"./plugin-vue_export-helper-BDNMzG2s.js";var l=JSON.parse(`{"path":"/java8gu/18.RabbitMQ/%E5%A6%82%E4%BD%95%E4%BF%9D%E9%9A%9C%E6%B6%88%E6%81%AF%E4%B8%80%E5%AE%9A%E8%83%BD%E5%8F%91%E9%80%81%E5%88%B0RabbitMQ.html","title":"如何保障消息一定能发送到RabbitMQ","lang":"zh-CN","frontmatter":{"title":"如何保障消息一定能发送到RabbitMQ","author":"Hollis","category":["Java八股文"],"description":"如何保障消息一定能发送到RabbitMQ 警告 内容来源网络，仅供学习使用。 不要相信文档中的链接、联系方式等！！！ 当我们作为一个消息发送方，如何保证我们给RabbitMQ发送的消息一定能发送成功，如何确保他一定能收到这个消息呢？ 我们知道，RabbitMQ的消息最终是存储在Queue上的，而在Queue之前还要经过Exchange，那么这个过程中就...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"如何保障消息一定能发送到RabbitMQ\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2026-09-07T16:27:23.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hollis\\"}]}"],["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/java8gu/18.RabbitMQ/%E5%A6%82%E4%BD%95%E4%BF%9D%E9%9A%9C%E6%B6%88%E6%81%AF%E4%B8%80%E5%AE%9A%E8%83%BD%E5%8F%91%E9%80%81%E5%88%B0RabbitMQ.html"}],["meta",{"property":"og:site_name","content":"Java面试帮助文档"}],["meta",{"property":"og:title","content":"如何保障消息一定能发送到RabbitMQ"}],["meta",{"property":"og:description","content":"如何保障消息一定能发送到RabbitMQ 警告 内容来源网络，仅供学习使用。 不要相信文档中的链接、联系方式等！！！ 当我们作为一个消息发送方，如何保证我们给RabbitMQ发送的消息一定能发送成功，如何确保他一定能收到这个消息呢？ 我们知道，RabbitMQ的消息最终是存储在Queue上的，而在Queue之前还要经过Exchange，那么这个过程中就..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2026-09-07T16:27:23.000Z"}],["meta",{"property":"article:author","content":"Hollis"}],["meta",{"property":"article:modified_time","content":"2026-09-07T16:27:23.000Z"}]]},"git":{"createdTime":1788798443000,"updatedTime":1788798443000,"contributors":[{"name":"Yinx","username":"Yinx","email":"admin@yinx.eu.cc","commits":1,"url":"https://github.com/Yinx"}]},"readingTime":{"minutes":2.99,"words":896},"filePathRelative":"java8gu/18.RabbitMQ/如何保障消息一定能发送到RabbitMQ.md","autoDesc":true}`),u={name:`如何保障消息一定能发送到RabbitMQ.md`};function d(c,l,u,d,f,p){let m=o(`RouteLink`);return i(),r(`div`,null,[l[2]||=a(`<h1 id="如何保障消息一定能发送到rabbitmq" tabindex="-1"><a class="header-anchor" href="#如何保障消息一定能发送到rabbitmq"><span>如何保障消息一定能发送到RabbitMQ</span></a></h1><div class="hint-container caution"><p class="hint-container-title">警告</p><p>内容来源网络，仅供学习使用。<br><br><strong>不要相信文档中的链接、联系方式等！！！</strong></p></div><p>当我们作为一个消息发送方，如何保证我们给RabbitMQ发送的消息一定能发送成功，如何确保他一定能收到这个消息呢？</p><p>我们知道，RabbitMQ的消息最终是存储在Queue上的，而在Queue之前还要经过Exchange，那么这个过程中就有两个地方可能导致消息丢失。第一个是Producer到Exchange的过程，第二个是Exchange到Queue的过程。</p><figure><img src="/assets/%E5%A6%82%E4%BD%95%E4%BF%9D%E9%9A%9C%E6%B6%88%E6%81%AF%E4%B8%80%E5%AE%9A%E8%83%BD%E5%8F%91%E9%80%81%E5%88%B0RabbitMQ-1-zRVuAPJh.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><p>为了解决这个问题，有两种方案，一种是通过confirm机制，另外一种是事务机制，因为事务机制并不推荐，这里先介绍Confirm机制。</p>`,6),s(`p`,null,[e(m,{to:`/java8gu/18.RabbitMQ/%E4%BB%8B%E7%BB%8D%E4%B8%8BRabbitMQ%E7%9A%84%E4%BA%8B%E5%8A%A1%E6%9C%BA%E5%88%B6.html`},{default:t(()=>[...l[0]||=[n(`18.RabbitMQ_介绍下RabbitMQ的事务机制`,-1)]]),_:1})]),l[3]||=a(`<p>上面两个可能丢失的过程，都可以利用confirm机制，注册回调来监听是否成功。</p><p><strong>Publisher Confirm</strong>是一种机制，用于确保消息已经被Exchange成功接收和处理。一旦消息成功到达Exchange并被处理，RabbitMQ会向消息生产者发送确认信号（ACK）。如果由于某种原因（例如，Exchange不存在或路由键不匹配）消息无法被处理，RabbitMQ会向消息生产者发送否认信号（NACK）。</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>// 启用Publisher Confirms</span></span>
<span class="line"><span>channel.confirmSelect();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 设置Publisher Confirms回调</span></span>
<span class="line"><span>channel.addConfirmListener(new ConfirmListener() {</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void handleAck(long deliveryTag, boolean multiple) throws IOException {</span></span>
<span class="line"><span>        System.out.println(&quot;Message confirmed with deliveryTag: &quot; + deliveryTag);</span></span>
<span class="line"><span>        // 在这里处理消息确认</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void handleNack(long deliveryTag, boolean multiple) throws IOException {</span></span>
<span class="line"><span>        System.out.println(&quot;Message not confirmed with deliveryTag: &quot; + deliveryTag);</span></span>
<span class="line"><span>        // 在这里处理消息未确认</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>});</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Publisher Returns</strong>机制与Publisher Confirms类似，但用于处理在消息无法路由到任何队列时的情况。当RabbitMQ在无法路由消息时将消息返回给消息生产者，但是如果能正确路由，则不会返回消息。</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>// 启用Publisher Returns</span></span>
<span class="line"><span>channel.addReturnListener(new ReturnListener() {</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void handleReturn(int replyCode, String replyText, String exchange, String routingKey, AMQP.BasicProperties properties, byte[] body) throws IOException {</span></span>
<span class="line"><span>        System.out.println(&quot;Message returned with replyCode: &quot; + replyCode);</span></span>
<span class="line"><span>        // 在这里处理消息发送到Queue失败的返回</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>});</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过以上方式，我们注册了两个回调监听，用于在消息发送到Exchange或者Queue失败时进行异常处理。<strong>通常我们可以在失败时进行报警或者重试来保障一定能发送成功。</strong></p><p>完整的代码如下：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>import com.rabbitmq.client.*;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class PublisherCallbacksExample {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static void main(String[] args) throws Exception {</span></span>
<span class="line"><span>        ConnectionFactory factory = new ConnectionFactory();</span></span>
<span class="line"><span>        factory.setHost(&quot;localhost&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        try (Connection connection = factory.newConnection();</span></span>
<span class="line"><span>             Channel channel = connection.createChannel()) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 启用Publisher Confirms</span></span>
<span class="line"><span>            channel.confirmSelect();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 设置Publisher Confirms回调</span></span>
<span class="line"><span>            channel.addConfirmListener(new ConfirmListener() {</span></span>
<span class="line"><span>                @Override</span></span>
<span class="line"><span>                public void handleAck(long deliveryTag, boolean multiple) throws IOException {</span></span>
<span class="line"><span>                    System.out.println(&quot;Message confirmed with deliveryTag: &quot; + deliveryTag);</span></span>
<span class="line"><span>                    // 在这里处理消息确认</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                @Override</span></span>
<span class="line"><span>                public void handleNack(long deliveryTag, boolean multiple) throws IOException {</span></span>
<span class="line"><span>                    System.out.println(&quot;Message not confirmed with deliveryTag: &quot; + deliveryTag);</span></span>
<span class="line"><span>                    // 在这里处理消息未确认</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 启用Publisher Returns</span></span>
<span class="line"><span>            channel.addReturnListener(new ReturnListener() {</span></span>
<span class="line"><span>                @Override</span></span>
<span class="line"><span>                public void handleReturn(int replyCode, String replyText, String exchange, String routingKey, AMQP.BasicProperties properties, byte[] body) throws IOException {</span></span>
<span class="line"><span>                    System.out.println(&quot;Message returned with replyCode: &quot; + replyCode);</span></span>
<span class="line"><span>                    // 在这里处理消息发送到Queue失败的返回</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            String exchangeName = &quot;my_exchange&quot;;</span></span>
<span class="line"><span>            String routingKey = &quot;my_routing_key&quot;;</span></span>
<span class="line"><span>            String message = &quot;Hello, RabbitMQ!&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 发布消息到Exchange</span></span>
<span class="line"><span>            channel.basicPublish(exchangeName, routingKey, true, null, message.getBytes());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 等待Publisher Confirms</span></span>
<span class="line"><span>            if (!channel.waitForConfirms()) {</span></span>
<span class="line"><span>                System.out.println(&quot;Message was not confirmed!&quot;);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 关闭通道和连接</span></span>
<span class="line"><span>            channel.close();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另外，这里如果发送到Queue之后，是否一定能持久化下来，是否一定不丢，这就是另外一个话题了。</p>`,9),s(`p`,null,[e(m,{to:`/java8gu/18.RabbitMQ/RabbitMQ%E5%A6%82%E4%BD%95%E4%BF%9D%E8%AF%81%E6%B6%88%E6%81%AF%E4%B8%8D%E4%B8%A2.html`},{default:t(()=>[...l[1]||=[n(`18.RabbitMQ_RabbitMQ如何保证消息不丢`,-1)]]),_:1})]),l[4]||=s(`h1`,{id:``,tabindex:`-1`},[s(`a`,{class:`header-anchor`,href:`#`},[s(`span`)])],-1)])}var f=c(u,[[`render`,d]]);export{l as _pageData,f as default};