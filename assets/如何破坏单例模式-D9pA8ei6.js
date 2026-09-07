import{a as e,c as t,i as n,n as r,o as i,r as a,s as o,t as s}from"./app-CVL-wmV5.js";import{t as c}from"./plugin-vue_export-helper-BDNMzG2s.js";var l=JSON.parse(`{"path":"/java8gu/33.%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/%E5%A6%82%E4%BD%95%E7%A0%B4%E5%9D%8F%E5%8D%95%E4%BE%8B%E6%A8%A1%E5%BC%8F.html","title":"如何破坏单例模式","lang":"zh-CN","frontmatter":{"title":"如何破坏单例模式","author":"Hollis","category":["Java八股文"],"description":"如何破坏单例模式 警告 内容来源网络，仅供学习使用。 不要相信文档中的链接、联系方式等！！！ 单例模式主要是通过把一个类的构造方法私有化，来避免重复创建多个对象的。那么，想要破坏单例，只要想办法能够执行到这个私有的构造方法就行了。 一般来说做法有使用反射及使用反序列化都可以破坏单例。 扩展知识 我们先通过双重校验锁的方式创建一个单例，后文会通过反射及反...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"如何破坏单例模式\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2026-09-07T18:14:30.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hollis\\"}]}"],["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/java8gu/33.%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/%E5%A6%82%E4%BD%95%E7%A0%B4%E5%9D%8F%E5%8D%95%E4%BE%8B%E6%A8%A1%E5%BC%8F.html"}],["meta",{"property":"og:site_name","content":"Java面试帮助文档"}],["meta",{"property":"og:title","content":"如何破坏单例模式"}],["meta",{"property":"og:description","content":"如何破坏单例模式 警告 内容来源网络，仅供学习使用。 不要相信文档中的链接、联系方式等！！！ 单例模式主要是通过把一个类的构造方法私有化，来避免重复创建多个对象的。那么，想要破坏单例，只要想办法能够执行到这个私有的构造方法就行了。 一般来说做法有使用反射及使用反序列化都可以破坏单例。 扩展知识 我们先通过双重校验锁的方式创建一个单例，后文会通过反射及反..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2026-09-07T18:14:30.000Z"}],["meta",{"property":"article:author","content":"Hollis"}],["meta",{"property":"article:modified_time","content":"2026-09-07T18:14:30.000Z"}]]},"git":{"createdTime":1788798443000,"updatedTime":1788804870000,"contributors":[{"name":"Yinx","username":"Yinx","email":"admin@yinx.eu.cc","commits":2,"url":"https://github.com/Yinx"}]},"readingTime":{"minutes":5.81,"words":1742},"filePathRelative":"java8gu/33.设计模式/如何破坏单例模式.md","autoDesc":true}`),u={name:`如何破坏单例模式.md`};function d(c,l,u,d,f,p){let m=o(`RouteLink`);return i(),r(`div`,null,[l[1]||=a(`<h1 id="如何破坏单例模式" tabindex="-1"><a class="header-anchor" href="#如何破坏单例模式"><span>如何破坏单例模式</span></a></h1><div class="hint-container caution"><p class="hint-container-title">警告</p><p>内容来源网络，仅供学习使用。<br><br><strong>不要相信文档中的链接、联系方式等！！！</strong></p></div><p>单例模式主要是通过把一个类的构造方法私有化，来避免重复创建多个对象的。那么，想要破坏单例，只要想办法能够执行到这个私有的构造方法就行了。</p><p>一般来说做法有使用反射及使用反序列化都可以破坏单例。</p><h1 id="扩展知识" tabindex="-1"><a class="header-anchor" href="#扩展知识"><span>扩展知识</span></a></h1><p>我们先通过双重校验锁的方式创建一个单例，后文会通过反射及反序列化的方式尝试破坏这个单例。</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>package com.hollis;</span></span>
<span class="line"><span>import java.io.Serializable;</span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Created by hollis on 16/2/5.</span></span>
<span class="line"><span> * 使用双重校验锁方式实现单例</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>public class Singleton implements Serializable{</span></span>
<span class="line"><span>    private volatile static Singleton singleton;</span></span>
<span class="line"><span>    private Singleton (){}</span></span>
<span class="line"><span>    public static Singleton getSingleton() {</span></span>
<span class="line"><span>        if (singleton == null) {</span></span>
<span class="line"><span>            synchronized (Singleton.class) {</span></span>
<span class="line"><span>                if (singleton == null) {</span></span>
<span class="line"><span>                    singleton = new Singleton();</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return singleton;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="反射破坏单例" tabindex="-1"><a class="header-anchor" href="#反射破坏单例"><span>反射破坏单例</span></a></h2><p>我们尝试通过反射技术，来破坏单例：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>Singleton singleton1 = Singleton.getSingleton();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//通过反射获取到构造函数</span></span>
<span class="line"><span>Constructor&lt;Singleton&gt; constructor = Singleton.class.getDeclaredConstructor();</span></span>
<span class="line"><span>//将构造函数设置为可访问类型</span></span>
<span class="line"><span>constructor.setAccessible(true);</span></span>
<span class="line"><span>//调用构造函数的newInstance创建一个对象</span></span>
<span class="line"><span>Singleton singleton2 = constructor.newInstance();</span></span>
<span class="line"><span>//判断反射创建的对象和之前的对象是不是同一个对象</span></span>
<span class="line"><span>System.out.println(s1 == s2);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上代码，输出结果为false，也就是说通过反射技术，我们给单例对象创建出来了一个&quot;兄弟&quot;。</p><blockquote><p>setAccessible(true)，使得反射对象在使用时应该取消 Java 语言访问检查，使得私有的构造函数能够被访问。</p></blockquote><h2 id="反序列化破坏单例" tabindex="-1"><a class="header-anchor" href="#反序列化破坏单例"><span>反序列化破坏单例</span></a></h2><p>我们尝试通过序列化+反序列化来破坏一下单例：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>package com.hollis;</span></span>
<span class="line"><span>import java.io.*;</span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Created by hollis on 16/2/5.</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>public class SerializableDemo1 {</span></span>
<span class="line"><span>    //为了便于理解，忽略关闭流操作及删除文件操作。真正编码时千万不要忘记</span></span>
<span class="line"><span>    //Exception直接抛出</span></span>
<span class="line"><span>    public static void main(String[] args) throws IOException, ClassNotFoundException {</span></span>
<span class="line"><span>        //Write Obj to file</span></span>
<span class="line"><span>        ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream(&quot;tempFile&quot;));</span></span>
<span class="line"><span>        oos.writeObject(Singleton.getSingleton());</span></span>
<span class="line"><span>        //Read Obj from file</span></span>
<span class="line"><span>        File file = new File(&quot;tempFile&quot;);</span></span>
<span class="line"><span>        ObjectInputStream ois =  new ObjectInputStream(new FileInputStream(file));</span></span>
<span class="line"><span>        Singleton newInstance = (Singleton) ois.readObject();</span></span>
<span class="line"><span>        //判断是否是同一个对象</span></span>
<span class="line"><span>        System.out.println(newInstance == Singleton.getSingleton());</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>//false</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结构为false，说明：</p><blockquote><p>通过对Singleton的序列化与反序列化得到的对象是一个新的对象，这就破坏了Singleton的单例性。</p></blockquote><p>这里，在介绍如何解决这个问题之前，我们先来深入分析一下，为什么会这样？在反序列化的过程中到底发生了什么。</p><h3 id="objectinputstream" tabindex="-1"><a class="header-anchor" href="#objectinputstream"><span>ObjectInputStream</span></a></h3><p>对象的序列化过程通过ObjectOutputStream和ObjectInputStream来实现的，那么带着刚刚的问题，分析一下ObjectInputStream 的<code>readObject</code> 方法执行情况到底是怎样的。</p><p>为了节省篇幅，这里给出ObjectInputStream的<code>readObject</code>的调用栈：</p><figure><img src="/assets/640-be2pDa3b.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>这里看一下重点代码，<code>readOrdinaryObject</code>方法的代码片段： code 3</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>private Object readOrdinaryObject(boolean unshared)</span></span>
<span class="line"><span>        throws IOException</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        //此处省略部分代码</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        Object obj;</span></span>
<span class="line"><span>        try {</span></span>
<span class="line"><span>            obj = desc.isInstantiable() ? desc.newInstance() : null;</span></span>
<span class="line"><span>        } catch (Exception ex) {</span></span>
<span class="line"><span>            throw (IOException) new InvalidClassException(</span></span>
<span class="line"><span>                desc.forClass().getName(),</span></span>
<span class="line"><span>                &quot;unable to create instance&quot;).initCause(ex);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        //此处省略部分代码</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if (obj != null &amp;&amp;</span></span>
<span class="line"><span>            handles.lookupException(passHandle) == null &amp;&amp;</span></span>
<span class="line"><span>            desc.hasReadResolveMethod())</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            Object rep = desc.invokeReadResolve(obj);</span></span>
<span class="line"><span>            if (unshared &amp;&amp; rep.getClass().isArray()) {</span></span>
<span class="line"><span>                rep = cloneArray(rep);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            if (rep != obj) {</span></span>
<span class="line"><span>                handles.setObject(passHandle, obj = rep);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return obj;</span></span>
<span class="line"><span>    }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>code 3 中主要贴出两部分代码。先分析第一部分：</p><p>code 3.1</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>Object obj;</span></span>
<span class="line"><span>try {</span></span>
<span class="line"><span>    obj = desc.isInstantiable() ? desc.newInstance() : null;</span></span>
<span class="line"><span>} catch (Exception ex) {</span></span>
<span class="line"><span>    throw (IOException) new InvalidClassException(desc.forClass().getName(),&quot;unable to create instance&quot;).initCause(ex);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里创建的这个obj对象，就是本方法要返回的对象，也可以暂时理解为是ObjectInputStream的<code>readObject</code>返回的对象。</p><figure><img src="/assets/641-mbKdSsil.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><code>isInstantiable</code>：如果一个serializable/externalizable的类可以在运行时被实例化，那么该方法就返回true。针对serializable和externalizable我会在其他文章中介绍。</p><p><code>desc.newInstance</code>：该方法通过反射的方式新建一个对象。</p></blockquote><p>然后看一下<code>newInstance</code>的源码：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>public T newInstance(Object ... initargs)</span></span>
<span class="line"><span>    throws InstantiationException, IllegalAccessException,</span></span>
<span class="line"><span>           IllegalArgumentException, InvocationTargetException</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    if (!override) {</span></span>
<span class="line"><span>        if (!Reflection.quickCheckMemberAccess(clazz, modifiers)) {</span></span>
<span class="line"><span>            Class&lt;?&gt; caller = Reflection.getCallerClass();</span></span>
<span class="line"><span>            checkAccess(caller, clazz, null, modifiers);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    if ((clazz.getModifiers() &amp; Modifier.ENUM) != 0)</span></span>
<span class="line"><span>        throw new IllegalArgumentException(&quot;Cannot reflectively create enum objects&quot;);</span></span>
<span class="line"><span>    ConstructorAccessor ca = constructorAccessor;   // read volatile</span></span>
<span class="line"><span>    if (ca == null) {</span></span>
<span class="line"><span>        ca = acquireConstructorAccessor();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    @SuppressWarnings(&quot;unchecked&quot;)</span></span>
<span class="line"><span>    T inst = (T) ca.newInstance(initargs);</span></span>
<span class="line"><span>    return inst;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中关键的就是<code>T inst = (T) ca.newInstance(initargs);</code>这一步，这里实现的话在BootstrapConstructorAccessorImpl中，实现如下：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>public Object newInstance(Object[] args)</span></span>
<span class="line"><span>    throws IllegalArgumentException, InvocationTargetException</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    try {</span></span>
<span class="line"><span>        return UnsafeFieldAccessorImpl.unsafe.</span></span>
<span class="line"><span>            allocateInstance(constructor.getDeclaringClass());</span></span>
<span class="line"><span>    } catch (InstantiationException e) {</span></span>
<span class="line"><span>        throw new InvocationTargetException(e);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，<strong>这里通过Java 的 Unsafe 机制来创建对象的，而不是通过调用构造函数。</strong>这意味着即使类的构造函数是私有的，反序列化仍然可以创建该类的实例，因为它不依赖于常规的构造过程。</p>`,35),s(`p`,null,[e(m,{to:`/java8gu/04.Java%E5%B9%B6%E5%8F%91/%E4%BB%80%E4%B9%88%E6%98%AFUnsafe.html`},{default:t(()=>[...l[0]||=[n(`04.Java并发_什么是Unsafe`,-1)]]),_:1})]),l[2]||=a(`<p>所以。到目前为止，也就可以解释，为什么序列化可以破坏单例了？</p><blockquote><p>答：序列化会通过Unsafe直接分配内存的方式来创建一个新的对象。</p></blockquote><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2><p>在涉及到序列化的场景时，要格外注意他对单例的破坏。</p><h2 id="如何避免单例被破坏" tabindex="-1"><a class="header-anchor" href="#如何避免单例被破坏"><span>如何避免单例被破坏</span></a></h2><h3 id="避免反射破坏单例" tabindex="-1"><a class="header-anchor" href="#避免反射破坏单例"><span>避免反射破坏单例</span></a></h3><p>反射是调用默认的构造函数创建出来的，只需要我们改造下构造函数，使其在反射调用的时候识别出来对象是不是被创建过就行了：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>private Singleton() {</span></span>
<span class="line"><span>    if (singleton != null){        </span></span>
<span class="line"><span>    throw new RuntimeException(&quot;单例对象只能创建一次... &quot;);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="" tabindex="-1"><a class="header-anchor" href="#"><span></span></a></h3><h3 id="避免反序列化破坏单例" tabindex="-1"><a class="header-anchor" href="#避免反序列化破坏单例"><span>避免反序列化破坏单例</span></a></h3><p>解决反序列化的破坏单例，只需要我们自定义反序列化的策略就行了，就是说我们不要让他走默认逻辑一直调用到Unsafe创建对象，而是我们干预他的这个过程，干预方式就是在Singleton类中定义<code>readResolve</code>，这样就可以解决该问题：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>package com.hollis;</span></span>
<span class="line"><span>import java.io.Serializable;</span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Created by hollis on 16/2/5.</span></span>
<span class="line"><span> * 使用双重校验锁方式实现单例</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>public class Singleton implements Serializable{</span></span>
<span class="line"><span>    private volatile static Singleton singleton;</span></span>
<span class="line"><span>    private Singleton (){}</span></span>
<span class="line"><span>    public static Singleton getSingleton() {</span></span>
<span class="line"><span>        if (singleton == null) {</span></span>
<span class="line"><span>            synchronized (Singleton.class) {</span></span>
<span class="line"><span>                if (singleton == null) {</span></span>
<span class="line"><span>                    singleton = new Singleton();</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return singleton;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private Object readResolve() {</span></span>
<span class="line"><span>        return singleton;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>还是运行以下测试类：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>package com.hollis;</span></span>
<span class="line"><span>import java.io.*;</span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Created by hollis on 16/2/5.</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>public class SerializableDemo1 {</span></span>
<span class="line"><span>    //为了便于理解，忽略关闭流操作及删除文件操作。真正编码时千万不要忘记</span></span>
<span class="line"><span>    //Exception直接抛出</span></span>
<span class="line"><span>    public static void main(String[] args) throws IOException, ClassNotFoundException {</span></span>
<span class="line"><span>        //Write Obj to file</span></span>
<span class="line"><span>        ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream(&quot;tempFile&quot;));</span></span>
<span class="line"><span>        oos.writeObject(Singleton.getSingleton());</span></span>
<span class="line"><span>        //Read Obj from file</span></span>
<span class="line"><span>        File file = new File(&quot;tempFile&quot;);</span></span>
<span class="line"><span>        ObjectInputStream ois =  new ObjectInputStream(new FileInputStream(file));</span></span>
<span class="line"><span>        Singleton newInstance = (Singleton) ois.readObject();</span></span>
<span class="line"><span>        //判断是否是同一个对象</span></span>
<span class="line"><span>        System.out.println(newInstance == Singleton.getSingleton());</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>//true</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>本次输出结果为true。具体原理，我们回过头继续分析code 3中的第二段代码:</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>if (obj != null &amp;&amp;</span></span>
<span class="line"><span>            handles.lookupException(passHandle) == null &amp;&amp;</span></span>
<span class="line"><span>            desc.hasReadResolveMethod())</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            Object rep = desc.invokeReadResolve(obj);</span></span>
<span class="line"><span>            if (unshared &amp;&amp; rep.getClass().isArray()) {</span></span>
<span class="line"><span>                rep = cloneArray(rep);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            if (rep != obj) {</span></span>
<span class="line"><span>                handles.setObject(passHandle, obj = rep);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>hasReadResolveMethod</code>:如果实现了serializable 或者 externalizable接口的类中包含<code>readResolve</code>则返回true</p><p><code>invokeReadResolve</code>:通过反射的方式调用要被反序列化的类的readResolve方法。</p><p>所以，原理也就清楚了，只要在Singleton中定义readResolve方法，并在该方法中指定要返回的对象的生成策略，就可以防止单例被破坏。</p>`,19)])}var f=c(u,[[`render`,d]]);export{l as _pageData,f as default};