import{n as e,o as t,r as n}from"./app-CVL-wmV5.js";import{t as r}from"./plugin-vue_export-helper-BDNMzG2s.js";var i=JSON.parse(`{"path":"/java8gu/02.Java%E5%9F%BA%E7%A1%80/serialVersionUID_%E6%9C%89%E4%BD%95%E7%94%A8%E9%80%94_%E5%A6%82%E6%9E%9C%E6%B2%A1%E5%AE%9A%E4%B9%89%E4%BC%9A%E6%9C%89%E4%BB%80%E4%B9%88%E9%97%AE%E9%A2%98.html","title":"serialVersionUID_有何用途_如果没定义会有什么问题","lang":"zh-CN","frontmatter":{"title":"serialVersionUID_有何用途_如果没定义会有什么问题","author":"Hollis","category":["Java八股文"],"description":"序列化是将对象的状态信息转换为可存储或传输的形式的过程。我们都知道，Java对象是保存在JVM的堆内存中的，也就是说，如果JVM堆不存在了，那么对象也就跟着消失了。 而序列化提供了一种方案，可以让你在即使JVM停机的情况下也能把对象保存下来的方案。就像我们平时用的U盘一样。 把Java对象序列化成可存储或传输的形式（如二进制流），比如保存在文件中。这样...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"serialVersionUID_有何用途_如果没定义会有什么问题\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2026-09-07T16:27:23.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hollis\\"}]}"],["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/java8gu/02.Java%E5%9F%BA%E7%A1%80/serialVersionUID_%E6%9C%89%E4%BD%95%E7%94%A8%E9%80%94_%E5%A6%82%E6%9E%9C%E6%B2%A1%E5%AE%9A%E4%B9%89%E4%BC%9A%E6%9C%89%E4%BB%80%E4%B9%88%E9%97%AE%E9%A2%98.html"}],["meta",{"property":"og:site_name","content":"Java面试帮助文档"}],["meta",{"property":"og:title","content":"serialVersionUID_有何用途_如果没定义会有什么问题"}],["meta",{"property":"og:description","content":"序列化是将对象的状态信息转换为可存储或传输的形式的过程。我们都知道，Java对象是保存在JVM的堆内存中的，也就是说，如果JVM堆不存在了，那么对象也就跟着消失了。 而序列化提供了一种方案，可以让你在即使JVM停机的情况下也能把对象保存下来的方案。就像我们平时用的U盘一样。 把Java对象序列化成可存储或传输的形式（如二进制流），比如保存在文件中。这样..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2026-09-07T16:27:23.000Z"}],["meta",{"property":"article:author","content":"Hollis"}],["meta",{"property":"article:modified_time","content":"2026-09-07T16:27:23.000Z"}]]},"git":{"createdTime":1788798443000,"updatedTime":1788798443000,"contributors":[{"name":"Yinx","username":"Yinx","email":"admin@yinx.eu.cc","commits":1,"url":"https://github.com/Yinx"}]},"readingTime":{"minutes":4.24,"words":1271},"filePathRelative":"java8gu/02.Java基础/serialVersionUID_有何用途_如果没定义会有什么问题.md","autoDesc":true}`),a={name:`serialVersionUID_有何用途_如果没定义会有什么问题.md`};function o(r,i,a,o,s,c){return t(),e(`div`,null,[...i[0]||=[n(`<p>序列化是将对象的状态信息转换为可存储或传输的形式的过程。我们都知道，Java对象是保存在JVM的堆内存中的，也就是说，如果JVM堆不存在了，那么对象也就跟着消失了。</p><p>而序列化提供了一种方案，可以让你在即使JVM停机的情况下也能把对象保存下来的方案。就像我们平时用的U盘一样。</p><p>把Java对象序列化成可存储或传输的形式（如二进制流），比如保存在文件中。这样，当再次需要这个对象的时候，从文件中读取出二进制流，再从二进制流中反序列化出对象。</p><p>但是，<strong>虚拟机是否允许反序列化，不仅取决于类路径和功能代码是否一致，一个非常重要的一点是两个类的序列化 ID 是否一致，即serialVersionUID要求一致。</strong></p><p>在进行反序列化时，JVM会把传来的字节流中的serialVersionUID与本地相应实体类的serialVersionUID进行比较，如果相同就认为是一致的，可以进行反序列化，否则就会出现序列化版本不一致的异常，即是InvalidCastException。这样做是为了保证安全，因为文件存储中的内容可能被篡改。</p><p>当实现java.io.Serializable接口的类没有显式地定义一个serialVersionUID变量时候，Java序列化机制会根据编译的Class自动生成一个serialVersionUID作序列化版本比较用，这种情况下，如果Class文件没有发生变化，就算再编译多次，serialVersionUID也不会变化的。但是，如果发生了变化，那么这个文件对应的serialVersionUID也就会发生变化。</p><p>基于以上原理，如果我们一个类实现了Serializable接口，但是没有定义serialVersionUID，然后序列化。在序列化之后，由于某些原因，我们对该类做了变更，重新启动应用后，我们相对之前序列化过的对象进行反序列化的话就会报错。</p><h1 id="serialversionuid-有何用途-如果没定义会有什么问题" tabindex="-1"><a class="header-anchor" href="#serialversionuid-有何用途-如果没定义会有什么问题"><span>serialVersionUID_有何用途_如果没定义会有什么问题</span></a></h1><div class="hint-container caution"><p class="hint-container-title">警告</p><p>内容来源网络，仅供学习使用。<br><br><strong>不要相信文档中的链接、联系方式等！！！</strong></p></div><h2 id="改了会怎么样" tabindex="-1"><a class="header-anchor" href="#改了会怎么样"><span>改了会怎么样</span></a></h2><p>我们举个例子吧，看看如果serialVersionUID被修改了会发生什么？</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>public class SerializableDemo1 {</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        //Initializes The Object</span></span>
<span class="line"><span>        User1 user = new User1();</span></span>
<span class="line"><span>        user.setName(&quot;hollis&quot;);</span></span>
<span class="line"><span>        //Write Obj to File</span></span>
<span class="line"><span>        ObjectOutputStream oos = null;</span></span>
<span class="line"><span>        try {</span></span>
<span class="line"><span>            oos = new ObjectOutputStream(new FileOutputStream(&quot;tempFile&quot;));</span></span>
<span class="line"><span>            oos.writeObject(user);</span></span>
<span class="line"><span>        } catch (IOException e) {</span></span>
<span class="line"><span>            e.printStackTrace();</span></span>
<span class="line"><span>        } finally {</span></span>
<span class="line"><span>            IOUtils.closeQuietly(oos);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class User1 implements Serializable {</span></span>
<span class="line"><span>    private static final long serialVersionUID = 1L;</span></span>
<span class="line"><span>    private String name;</span></span>
<span class="line"><span>    public String getName() {</span></span>
<span class="line"><span>        return name;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    public void setName(String name) {</span></span>
<span class="line"><span>        this.name = name;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span> }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们先执行以上代码，把一个User1对象写入到文件中。然后我们修改一下User1类，把serialVersionUID的值改为2L。</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>class User1 implements Serializable {</span></span>
<span class="line"><span>    private static final long serialVersionUID = 2L;</span></span>
<span class="line"><span>    private String name;</span></span>
<span class="line"><span>    public String getName() {</span></span>
<span class="line"><span>        return name;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    public void setName(String name) {</span></span>
<span class="line"><span>        this.name = name;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后执行以下代码，把文件中的对象反序列化出来：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>public class SerializableDemo2 {</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        //Read Obj from File</span></span>
<span class="line"><span>        File file = new File(&quot;tempFile&quot;);</span></span>
<span class="line"><span>        ObjectInputStream ois = null;</span></span>
<span class="line"><span>        try {</span></span>
<span class="line"><span>            ois = new ObjectInputStream(new FileInputStream(file));</span></span>
<span class="line"><span>            User1 newUser = (User1) ois.readObject();</span></span>
<span class="line"><span>            System.out.println(newUser);</span></span>
<span class="line"><span>        } catch (IOException e) {</span></span>
<span class="line"><span>            e.printStackTrace();</span></span>
<span class="line"><span>        } catch (ClassNotFoundException e) {</span></span>
<span class="line"><span>            e.printStackTrace();</span></span>
<span class="line"><span>        } finally {</span></span>
<span class="line"><span>            IOUtils.closeQuietly(ois);</span></span>
<span class="line"><span>            try {</span></span>
<span class="line"><span>                FileUtils.forceDelete(file);</span></span>
<span class="line"><span>            } catch (IOException e) {</span></span>
<span class="line"><span>                e.printStackTrace();</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行结果如下：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>java.io.InvalidClassException: com.hollis.User1; local class incompatible: stream classdesc serialVersionUID = 1, local class serialVersionUID = 2</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>可以发现，以上代码抛出了一个java.io.InvalidClassException，并且指出serialVersionUID不一致。</p><p>这是因为，在进行反序列化时，JVM会把传来的字节流中的serialVersionUID与本地相应实体类的serialVersionUID进行比较，如果相同就认为是一致的，可以进行反序列化，否则就会出现序列化版本不一致的异常，即是InvalidClassException。</p><h2 id="为什么要明确定一个serialversionuid" tabindex="-1"><a class="header-anchor" href="#为什么要明确定一个serialversionuid"><span>为什么要明确定一个serialVersionUID</span></a></h2><p>如果我们没有在类中明确的定义一个serialVersionUID的话，看看会发生什么。</p><p>尝试修改上面的demo代码，先使用以下类定义一个对象，该类中不定义serialVersionUID，将其写入文件。</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>class User1 implements Serializable {</span></span>
<span class="line"><span>    private String name;</span></span>
<span class="line"><span>    public String getName() {</span></span>
<span class="line"><span>        return name;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    public void setName(String name) {</span></span>
<span class="line"><span>        this.name = name;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span> }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后我们修改User1类，向其中增加一个属性。在尝试将其从文件中读取出来，并进行反序列化。</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>class User1 implements Serializable {</span></span>
<span class="line"><span>    private String name;</span></span>
<span class="line"><span>    private int age;</span></span>
<span class="line"><span>    public String getName() {</span></span>
<span class="line"><span>        return name;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    public void setName(String name) {</span></span>
<span class="line"><span>        this.name = name;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    public int getAge() {</span></span>
<span class="line"><span>        return age;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    public void setAge(int age) {</span></span>
<span class="line"><span>        this.age = age;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span> }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行结果： java.io.InvalidClassException: com.hollis.User1; local class incompatible: stream classdesc serialVersionUID = -2986778152837257883, local class serialVersionUID = 7961728318907695402</p><p>同样，抛出了InvalidClassException，并且指出两个serialVersionUID不同，分别是-2986778152837257883和7961728318907695402。</p><p>从这里可以看出，系统自己添加了一个serialVersionUID。</p><p>所以，一旦类实现了Serializable，就建议明确的定义一个serialVersionUID。不然在修改类的时候，就会发生异常。</p><p>serialVersionUID有两种显示的生成方式：<br> 一是默认的1L，比如：private static final long serialVersionUID = 1L;<br> 二是根据类名、接口名、成员方法及属性等来生成一个64位的哈希字段，比如：<br> private static final long serialVersionUID = xxxxL;</p>`,31)]])}var s=r(a,[[`render`,o]]);export{i as _pageData,s as default};