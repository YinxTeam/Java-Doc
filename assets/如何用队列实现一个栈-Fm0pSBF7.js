import{n as e,o as t,r as n}from"./app-CVL-wmV5.js";import{t as r}from"./plugin-vue_export-helper-BDNMzG2s.js";var i=JSON.parse(`{"path":"/java8gu/44.%E7%BC%96%E7%A8%8B%E9%A2%98/%E5%A6%82%E4%BD%95%E7%94%A8%E9%98%9F%E5%88%97%E5%AE%9E%E7%8E%B0%E4%B8%80%E4%B8%AA%E6%A0%88.html","title":"如何用队列实现一个栈","lang":"zh-CN","frontmatter":{"title":"如何用队列实现一个栈","author":"Hollis","category":["Java八股文"],"description":"如何用队列实现一个栈 警告 内容来源网络，仅供学习使用。 不要相信文档中的链接、联系方式等！！！ 使用两个队列可以实现一个栈，一个队列用来存储栈中的元素，另一个队列用来在pop操作时暂存元素。 其中，push方法用来入栈，直接将元素加入queue队列中。 pop方法用来出栈，先将queue队列中的元素倒入tempQueue队列中，直到queue队列中只...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"如何用队列实现一个栈\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2026-09-07T16:27:23.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hollis\\"}]}"],["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/java8gu/44.%E7%BC%96%E7%A8%8B%E9%A2%98/%E5%A6%82%E4%BD%95%E7%94%A8%E9%98%9F%E5%88%97%E5%AE%9E%E7%8E%B0%E4%B8%80%E4%B8%AA%E6%A0%88.html"}],["meta",{"property":"og:site_name","content":"Java面试帮助文档"}],["meta",{"property":"og:title","content":"如何用队列实现一个栈"}],["meta",{"property":"og:description","content":"如何用队列实现一个栈 警告 内容来源网络，仅供学习使用。 不要相信文档中的链接、联系方式等！！！ 使用两个队列可以实现一个栈，一个队列用来存储栈中的元素，另一个队列用来在pop操作时暂存元素。 其中，push方法用来入栈，直接将元素加入queue队列中。 pop方法用来出栈，先将queue队列中的元素倒入tempQueue队列中，直到queue队列中只..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2026-09-07T16:27:23.000Z"}],["meta",{"property":"article:author","content":"Hollis"}],["meta",{"property":"article:modified_time","content":"2026-09-07T16:27:23.000Z"}]]},"git":{"createdTime":1788798443000,"updatedTime":1788798443000,"contributors":[{"name":"Yinx","username":"Yinx","email":"admin@yinx.eu.cc","commits":1,"url":"https://github.com/Yinx"}]},"readingTime":{"minutes":1.16,"words":348},"filePathRelative":"java8gu/44.编程题/如何用队列实现一个栈.md","autoDesc":true}`),a={name:`如何用队列实现一个栈.md`};function o(r,i,a,o,s,c){return t(),e(`div`,null,[...i[0]||=[n(`<h1 id="如何用队列实现一个栈" tabindex="-1"><a class="header-anchor" href="#如何用队列实现一个栈"><span>如何用队列实现一个栈</span></a></h1><div class="hint-container caution"><p class="hint-container-title">警告</p><p>内容来源网络，仅供学习使用。<br><br><strong>不要相信文档中的链接、联系方式等！！！</strong></p></div><p>使用两个队列可以实现一个栈，一个队列用来存储栈中的元素，另一个队列用来在pop操作时暂存元素。</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>import java.util.LinkedList;</span></span>
<span class="line"><span>import java.util.Queue;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class MyStack&lt;T&gt; {</span></span>
<span class="line"><span>    private Queue&lt;T&gt; queue;</span></span>
<span class="line"><span>    private Queue&lt;T&gt; tempQueue;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public MyStack() {</span></span>
<span class="line"><span>        queue = new LinkedList&lt;&gt;();</span></span>
<span class="line"><span>        tempQueue = new LinkedList&lt;&gt;();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void push(T element) {</span></span>
<span class="line"><span>        queue.offer(element);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public T pop() {</span></span>
<span class="line"><span>        if (isEmpty()) {</span></span>
<span class="line"><span>            throw new RuntimeException(&quot;Stack is empty&quot;);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        while (queue.size() &gt; 1) {</span></span>
<span class="line"><span>            tempQueue.offer(queue.poll());</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        T element = queue.poll();</span></span>
<span class="line"><span>        Queue&lt;T&gt; temp = queue;</span></span>
<span class="line"><span>        queue = tempQueue;</span></span>
<span class="line"><span>        tempQueue = temp;</span></span>
<span class="line"><span>        return element;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public T peek() {</span></span>
<span class="line"><span>        if (isEmpty()) {</span></span>
<span class="line"><span>            throw new RuntimeException(&quot;Stack is empty&quot;);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        while (queue.size() &gt; 1) {</span></span>
<span class="line"><span>            tempQueue.offer(queue.poll());</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        T element = queue.poll();</span></span>
<span class="line"><span>        tempQueue.offer(element);</span></span>
<span class="line"><span>        Queue&lt;T&gt; temp = queue;</span></span>
<span class="line"><span>        queue = tempQueue;</span></span>
<span class="line"><span>        tempQueue = temp;</span></span>
<span class="line"><span>        return element;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public boolean isEmpty() {</span></span>
<span class="line"><span>        return queue.isEmpty();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中，push方法用来入栈，直接将元素加入queue队列中。</p><p>pop方法用来出栈，先将queue队列中的元素倒入tempQueue队列中，直到queue队列中只有一个元素，将其弹出即可。</p><p>peek方法用来获取栈顶元素，与pop方法类似，只是在弹出元素之前需要先将其加入tempQueue队列中。</p><p>isEmpty方法用来判断栈是否为空，如果queue队列为空，则栈为空。</p><p>这个实现的时间复杂度为O(n)，空间复杂度为O(n)，其中n为栈中元素的个数。</p>`,9)]])}var s=r(a,[[`render`,o]]);export{i as _pageData,s as default};