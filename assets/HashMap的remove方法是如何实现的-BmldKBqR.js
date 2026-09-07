import{n as e,o as t,r as n}from"./app-CVL-wmV5.js";import{t as r}from"./plugin-vue_export-helper-BDNMzG2s.js";var i=JSON.parse(`{"path":"/java8gu/03.%E9%9B%86%E5%90%88%E7%B1%BB/HashMap%E7%9A%84remove%E6%96%B9%E6%B3%95%E6%98%AF%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0%E7%9A%84.html","title":"HashMap的remove方法是如何实现的","lang":"zh-CN","frontmatter":{"title":"HashMap的remove方法是如何实现的","author":"Hollis","category":["Java八股文"],"description":"HashMap的remove方法是如何实现的 警告 内容来源网络，仅供学习使用。 不要相信文档中的链接、联系方式等！！！ 扩展知识 下面是JDK 1.8中HashMap的remove方法的简要实现过程： 首先，remove方法会计算键的哈希值，并通过哈希值计算出在数组中的索引位置。 如果该位置上的元素为空，说明没有找到对应的键值对，直接返回null。 ...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"HashMap的remove方法是如何实现的\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2026-09-07T16:27:23.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hollis\\"}]}"],["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/java8gu/03.%E9%9B%86%E5%90%88%E7%B1%BB/HashMap%E7%9A%84remove%E6%96%B9%E6%B3%95%E6%98%AF%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0%E7%9A%84.html"}],["meta",{"property":"og:site_name","content":"Java面试帮助文档"}],["meta",{"property":"og:title","content":"HashMap的remove方法是如何实现的"}],["meta",{"property":"og:description","content":"HashMap的remove方法是如何实现的 警告 内容来源网络，仅供学习使用。 不要相信文档中的链接、联系方式等！！！ 扩展知识 下面是JDK 1.8中HashMap的remove方法的简要实现过程： 首先，remove方法会计算键的哈希值，并通过哈希值计算出在数组中的索引位置。 如果该位置上的元素为空，说明没有找到对应的键值对，直接返回null。 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2026-09-07T16:27:23.000Z"}],["meta",{"property":"article:author","content":"Hollis"}],["meta",{"property":"article:modified_time","content":"2026-09-07T16:27:23.000Z"}]]},"git":{"createdTime":1788798443000,"updatedTime":1788798443000,"contributors":[{"name":"Yinx","username":"Yinx","email":"admin@yinx.eu.cc","commits":1,"url":"https://github.com/Yinx"}]},"readingTime":{"minutes":3.64,"words":1093},"filePathRelative":"java8gu/03.集合类/HashMap的remove方法是如何实现的.md","autoDesc":true}`),a={name:`HashMap的remove方法是如何实现的.md`};function o(r,i,a,o,s,c){return t(),e(`div`,null,[...i[0]||=[n(`<h1 id="hashmap的remove方法是如何实现的" tabindex="-1"><a class="header-anchor" href="#hashmap的remove方法是如何实现的"><span>HashMap的remove方法是如何实现的</span></a></h1><div class="hint-container caution"><p class="hint-container-title">警告</p><p>内容来源网络，仅供学习使用。<br><br><strong>不要相信文档中的链接、联系方式等！！！</strong></p></div><h1 id="扩展知识" tabindex="-1"><a class="header-anchor" href="#扩展知识"><span>扩展知识</span></a></h1><p>下面是JDK 1.8中HashMap的remove方法的简要实现过程：</p><ol><li>首先，remove方法会计算键的哈希值，并通过哈希值计算出在数组中的索引位置。</li><li>如果该位置上的元素为空，说明没有找到对应的键值对，直接返回null。</li><li>如果该位置上的元素不为空，检查是否与当前键相等，如果相等，那么将该键值对删除，并返回该键值对的值。</li><li>如果该位置上的元素不为空，但也与当前键不相等，那么就需要在链表或红黑树中继续查找。</li><li>遍历链表或者红黑树，查找与当前键相等的键值对，找到则将该键值对删除，并返回该键值对的值，否则返回null。</li></ol><h2 id="源码解读" tabindex="-1"><a class="header-anchor" href="#源码解读"><span>源码解读</span></a></h2><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>public V remove(Object key) {</span></span>
<span class="line"><span>  Node&lt;K, V&gt; e;</span></span>
<span class="line"><span>  return (e = removeNode(hash(key), key, null, false, true)) == null ?</span></span>
<span class="line"><span>  null : e.value;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重点还是来看下 removeNode 方法：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>  /**</span></span>
<span class="line"><span>     * Implements Map.remove and related methods.</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @param hash       hash 值</span></span>
<span class="line"><span>     * @param key        key 值</span></span>
<span class="line"><span>     * @param value      value 值</span></span>
<span class="line"><span>     * @param matchValue 是否需要值匹配 false 表示不需要</span></span>
<span class="line"><span>     * @param movable    不用管</span></span>
<span class="line"><span>     * @return the node, or null if none</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    final Node&lt;K, V&gt; removeNode(int hash, Object key, Object value, boolean matchValue, boolean movable) {</span></span>
<span class="line"><span>        //当前HashMap 中的散列表的引用</span></span>
<span class="line"><span>        Node&lt;K, V&gt;[] tab;</span></span>
<span class="line"><span>        //p：表示当前的Node元素</span></span>
<span class="line"><span>        Node&lt;K, V&gt; p;</span></span>
<span class="line"><span>        // n：table 的长度</span></span>
<span class="line"><span>        // index：桶的下标位置</span></span>
<span class="line"><span>        int n, index;</span></span>
<span class="line"><span>        //(tab = table) != null &amp;&amp; (n = tab.length) &gt; 0 条件成立，说明table不为空（table 为空就没必要执行了）</span></span>
<span class="line"><span>        // p = tab[index = (n - 1) &amp; hash]) != null 将定位到的捅位的元素赋值给 p ，并判断定位到的元素不为空</span></span>
<span class="line"><span>        if ((tab = table) != null &amp;&amp; (n = tab.length) &gt; 0 &amp;&amp; (p = tab[index = (n - 1) &amp; hash]) != null) {</span></span>
<span class="line"><span>            //进到 if 里面来了，说明已经定位到元素了</span></span>
<span class="line"><span>            //node：保存查找到的结果</span></span>
<span class="line"><span>            //e：表示当前元素的下一个元素</span></span>
<span class="line"><span>            Node&lt;K, V&gt; node = null, e;</span></span>
<span class="line"><span>            K k;</span></span>
<span class="line"><span>            V v;</span></span>
<span class="line"><span>            // 该条件如果成立，说明当前的元素就是要找的结果（这是最简单的情况，这个是很好理解的）</span></span>
<span class="line"><span>            if (p.hash == hash &amp;&amp; ((k = p.key) == key || (key != null &amp;&amp; key.equals(k)))) {</span></span>
<span class="line"><span>                node = p;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            //到这一步，如果 (e = p.next) != null 说明该捅位找到的元素可能是链表或者是树，需要继续判断</span></span>
<span class="line"><span>            else if ((e = p.next) != null) {</span></span>
<span class="line"><span>                //树，不考虑</span></span>
<span class="line"><span>                if (p instanceof TreeNode) {</span></span>
<span class="line"><span>                    node = ((TreeNode&lt;K, V&gt;) p).getTreeNode(hash, key);</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>                //处理链表的情况</span></span>
<span class="line"><span>                else {</span></span>
<span class="line"><span>                    do {</span></span>
<span class="line"><span>                        //如果条件成立，说明已经匹配到了元素，直接将查找到的元素赋值给 node，并跳出循环（总体还是很好理解的）</span></span>
<span class="line"><span>                        if (e.hash == hash &amp;&amp; ((k = e.key) == key || (key != null &amp;&amp; key.equals(k)))) {</span></span>
<span class="line"><span>                            node = e;</span></span>
<span class="line"><span>                            break;</span></span>
<span class="line"><span>                        }</span></span>
<span class="line"><span>                        //将正在遍历的当前的临时元素 e 赋值给 p</span></span>
<span class="line"><span>                        p = e;</span></span>
<span class="line"><span>                    } while ((e = e.next) != null);</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            // node != null 说明匹配到了元素</span></span>
<span class="line"><span>            //matchValue为false ，所以!matchValue  = true，后面的条件直接不用看了</span></span>
<span class="line"><span>            if (node != null &amp;&amp; (!matchValue || (v = node.value) == value || (value != null &amp;&amp; value.equals(v)))) {</span></span>
<span class="line"><span>                //树，不考虑</span></span>
<span class="line"><span>                if (node instanceof TreeNode) {</span></span>
<span class="line"><span>                    ((TreeNode&lt;K, V&gt;) node).removeTreeNode(this, tab, movable);</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>                // 这种情况是上面的最简单的情况</span></span>
<span class="line"><span>                else if (node == p) {</span></span>
<span class="line"><span>                    //直接将当前节点的下一个节点放在当前的桶位置（注意不是下一个桶位置，是该桶位置的下一个节点）</span></span>
<span class="line"><span>                    tab[index] = node.next;</span></span>
<span class="line"><span>                } else {</span></span>
<span class="line"><span>                    //说明定位到的元素不是该桶位置的头元素了，那直接进行一个简单的链表的操作即可</span></span>
<span class="line"><span>                    p.next = node.next;</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>                //移除和添加都属于结构的修改，需要同步自增 modCount 的值</span></span>
<span class="line"><span>                ++modCount;</span></span>
<span class="line"><span>                //table 中的元素个数减 1</span></span>
<span class="line"><span>                --size;</span></span>
<span class="line"><span>                //啥也没做，不用管</span></span>
<span class="line"><span>                afterNodeRemoval(node);</span></span>
<span class="line"><span>                //返回被移除的节点元素</span></span>
<span class="line"><span>                return node;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        //没有匹配到返回null 即可</span></span>
<span class="line"><span>        return null;</span></span>
<span class="line"><span>    }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我想对你说的话都在注释里面了，亲一定要好好看哦。</p><p>另外 remove 还有一个方法是key 和 value 都需要匹配上才移除</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span> public boolean remove(Object key, Object value) {</span></span>
<span class="line"><span>        return removeNode(hash(key), key, value, true, true) != null;</span></span>
<span class="line"><span>    }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个关键点就是这句话</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>//  (!matchValue || (v = node.value) == value || (value != null &amp;&amp; value.equals(v)))</span></span>
<span class="line"><span>//matchValue = true，所以 !matchValue = false,所以此时必须保证后面的值是true 才执行真正的 remove 操作</span></span>
<span class="line"><span>if (node != null &amp;&amp; (!matchValue || (v = node.value) == value || (value != null &amp;&amp; value.equals(v)))) {</span></span>
<span class="line"><span>  }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14)]])}var s=r(a,[[`render`,o]]);export{i as _pageData,s as default};