import{n as e,o as t,r as n}from"./app-CVL-wmV5.js";import{t as r}from"./plugin-vue_export-helper-BDNMzG2s.js";var i=JSON.parse(`{"path":"/java8gu/44.%E7%BC%96%E7%A8%8B%E9%A2%98/%E5%AE%9E%E7%8E%B0%E4%B8%80%E4%B8%AALRU%E7%BC%93%E5%AD%98%E6%B7%98%E6%B1%B0%E7%AD%96%E7%95%A5_%E6%94%AF%E6%8C%81get%E5%92%8Cput%E6%93%8D%E4%BD%9C.html","title":"实现一个LRU缓存淘汰策略,支持get和put操作","lang":"zh-CN","frontmatter":{"title":"实现一个LRU缓存淘汰策略,支持get和put操作","author":"Hollis","category":["Java八股文"],"description":"实现一个LRU缓存淘汰策略,支持get和put操作 警告 内容来源网络，仅供学习使用。 不要相信文档中的链接、联系方式等！！！ LRU算法的思想是：如果一个数据在最近一段时间没有被访问到，那么可以认为在将来它被访问的可能性也很小。因此，当空间满时，最久没有访问的数据最先被淘汰。 一般实现有两种方式，首先是通过继承LinkedHashMap可以实现这个功...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"实现一个LRU缓存淘汰策略,支持get和put操作\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2026-09-07T16:27:23.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hollis\\"}]}"],["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/java8gu/44.%E7%BC%96%E7%A8%8B%E9%A2%98/%E5%AE%9E%E7%8E%B0%E4%B8%80%E4%B8%AALRU%E7%BC%93%E5%AD%98%E6%B7%98%E6%B1%B0%E7%AD%96%E7%95%A5_%E6%94%AF%E6%8C%81get%E5%92%8Cput%E6%93%8D%E4%BD%9C.html"}],["meta",{"property":"og:site_name","content":"Java面试帮助文档"}],["meta",{"property":"og:title","content":"实现一个LRU缓存淘汰策略,支持get和put操作"}],["meta",{"property":"og:description","content":"实现一个LRU缓存淘汰策略,支持get和put操作 警告 内容来源网络，仅供学习使用。 不要相信文档中的链接、联系方式等！！！ LRU算法的思想是：如果一个数据在最近一段时间没有被访问到，那么可以认为在将来它被访问的可能性也很小。因此，当空间满时，最久没有访问的数据最先被淘汰。 一般实现有两种方式，首先是通过继承LinkedHashMap可以实现这个功..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2026-09-07T16:27:23.000Z"}],["meta",{"property":"article:author","content":"Hollis"}],["meta",{"property":"article:modified_time","content":"2026-09-07T16:27:23.000Z"}]]},"git":{"createdTime":1788798443000,"updatedTime":1788798443000,"contributors":[{"name":"Yinx","username":"Yinx","email":"admin@yinx.eu.cc","commits":1,"url":"https://github.com/Yinx"}]},"readingTime":{"minutes":3.34,"words":1001},"filePathRelative":"java8gu/44.编程题/实现一个LRU缓存淘汰策略,支持get和put操作.md","autoDesc":true}`),a={name:`实现一个LRU缓存淘汰策略,支持get和put操作.md`};function o(r,i,a,o,s,c){return t(),e(`div`,null,[...i[0]||=[n(`<h1 id="实现一个lru缓存淘汰策略-支持get和put操作" tabindex="-1"><a class="header-anchor" href="#实现一个lru缓存淘汰策略-支持get和put操作"><span>实现一个LRU缓存淘汰策略,支持get和put操作</span></a></h1><div class="hint-container caution"><p class="hint-container-title">警告</p><p>内容来源网络，仅供学习使用。<br><br><strong>不要相信文档中的链接、联系方式等！！！</strong></p></div><p>LRU算法的思想是：如果一个数据在最近一段时间没有被访问到，那么可以认为在将来它被访问的可能性也很小。因此，当空间满时，最久没有访问的数据最先被淘汰。</p><p>一般实现有两种方式，首先是<strong>通过继承LinkedHashMap可以实现这个功能</strong>。</p><p>LinkedHashMap内部维护了一个双向链表，用于存储元素的顺序信息。当accessOrder参数为true时，LinkedHashMap会按照访问顺序来维护元素，即最近访问的元素会被移到链表尾部，而最久未使用的元素会被移到链表头部。当accessOrder参数为false时，LinkedHashMap会按照插入顺序来维护元素。</p><p>LinkedHashMap和HashMap一样提供了put、get等方法，实现细节稍有不同（以下特点为当accessOrder为true时）：</p><ul><li><p>put方法：</p></li><li><p>如果指定的键已经存在，则更新对应的值，并将该元素移动到链表末尾</p></li><li><p>如果指定的键不存在，则将新元素插入到哈希表中，并将其插入到链表末尾</p></li><li><p>get方法：</p></li><li><p>如果指定的键不存在，则返回null；</p></li><li><p>如果指定的键存在，则返回对应的值，并将该元素移动到链表末尾</p></li></ul><p>但是，需要注意的是，LinkedHashMap默认情况下不会移除元素的，不过，LinkedHashMap中预留了方法afterNodeInsertion，在插入元素之后这个方法会被回调，这个方法的默认实现如下：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>void afterNodeInsertion(boolean evict) { </span></span>
<span class="line"><span>   LinkedHashMap.Entry&lt;K,V&gt; first;</span></span>
<span class="line"><span>   if (evict &amp;&amp; (first = head) != null &amp;&amp; removeEldestEntry(first)) {</span></span>
<span class="line"><span>       K key = first.key;</span></span>
<span class="line"><span>       removeNode(hash(key), key, null, false, true);</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>protected boolean removeEldestEntry(Map.Entry&lt;K,V&gt; eldest) {</span></span>
<span class="line"><span>   return false;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，如果我们可以实现removeEldestEntry方法， 让他返回true的话，就可以执行删除节点的动作。所以，一个基于<strong>LinkedHashMap的LRU实现如下：</strong></p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>import java.util.*;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class LRUCache&lt;K, V&gt; extends LinkedHashMap&lt;K, V&gt; {</span></span>
<span class="line"><span>    private final int capacity;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public LRUCache(int capacity) {</span></span>
<span class="line"><span>        // 调用LinkedHashMap构造函数，设置初始容量和负载因子</span></span>
<span class="line"><span>        super(capacity, 0.75f, true);</span></span>
<span class="line"><span>        this.capacity = capacity;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    protected boolean removeEldestEntry(Map.Entry&lt;K, V&gt; eldest) {</span></span>
<span class="line"><span>        // 重写LinkedHashMap的removeEldestEntry方法，实现LRU缓存淘汰策略</span></span>
<span class="line"><span>        // 当缓存容量超出设定值时，自动移除最久未使用的元素</span></span>
<span class="line"><span>        return size() &gt; capacity;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上，就是一个最简单的LRU 缓存的实现方式了。</p><p>除此之外，还有一些其他的方式也可以实现，比如<strong>基于LinkedList+HashMap也可以简单的实现</strong>：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>import java.util.HashMap;</span></span>
<span class="line"><span>import java.util.LinkedList;</span></span>
<span class="line"><span>import java.util.Map;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class LRUCache&lt;K, V&gt; {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private final int capacity;            // 缓存容量</span></span>
<span class="line"><span>    private final Map&lt;K, V&gt; cache;         // 缓存</span></span>
<span class="line"><span>    private final LinkedList&lt;K&gt; keyList;   // 缓存key列表，用于记录key的访问顺序</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public LRUCache(int capacity) {</span></span>
<span class="line"><span>        this.capacity = capacity;</span></span>
<span class="line"><span>        this.cache = new HashMap&lt;&gt;(capacity);</span></span>
<span class="line"><span>        this.keyList = new LinkedList&lt;&gt;();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // put操作：向缓存中存入一个key-value</span></span>
<span class="line"><span>    public synchronized void put(K key, V value) {</span></span>
<span class="line"><span>        // 如果缓存中已经存在该key，则需要将其从缓存中移除，因为它将被更新</span></span>
<span class="line"><span>        if (cache.containsKey(key)) {</span></span>
<span class="line"><span>            cache.remove(key);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        // 如果缓存已满，则需要删除最久未使用的key-value，即keyList的第一个元素</span></span>
<span class="line"><span>        while (cache.size() &gt;= capacity) {</span></span>
<span class="line"><span>            K oldestKey = keyList.removeFirst();</span></span>
<span class="line"><span>            cache.remove(oldestKey);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        // 将新的key-value存入缓存中，并将该key添加到keyList的末尾，表示最近被访问</span></span>
<span class="line"><span>        cache.put(key, value);</span></span>
<span class="line"><span>        keyList.addLast(key);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // get操作：根据key获取对应的value</span></span>
<span class="line"><span>    public synchronized V get(K key) {</span></span>
<span class="line"><span>        // 如果缓存中存在该key，则将其从keyList中移除，并添加到末尾表示最近被访问</span></span>
<span class="line"><span>        if (cache.containsKey(key)) {</span></span>
<span class="line"><span>            keyList.remove(key);</span></span>
<span class="line"><span>            keyList.addLast(key);</span></span>
<span class="line"><span>            return cache.get(key);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        // 如果缓存中不存在该key，则返回null</span></span>
<span class="line"><span>        return null;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>借助LinkedList来保存key的访问情况，将新的key或者刚刚被访问的key放在末尾，这样在移除的时候，可以从队头开始移除元素。</p>`,15)]])}var s=r(a,[[`render`,o]]);export{i as _pageData,s as default};