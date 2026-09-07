import{n as e,o as t,r as n}from"./app-CVL-wmV5.js";import{t as r}from"./plugin-vue_export-helper-BDNMzG2s.js";var i=JSON.parse(`{"path":"/java8gu/02.Java%E5%9F%BA%E7%A1%80/%E4%BB%80%E4%B9%88%E6%98%AF%E5%BA%8F%E5%88%97%E5%8C%96%E4%B8%8E%E5%8F%8D%E5%BA%8F%E5%88%97%E5%8C%96.html","title":"什么是序列化与反序列化","lang":"zh-CN","frontmatter":{"title":"什么是序列化与反序列化","author":"Hollis","category":["Java八股文"],"description":"什么是序列化与反序列化 警告 内容来源网络，仅供学习使用。 不要相信文档中的链接、联系方式等！！！ 在Java中，我们可以通过多种方式来创建对象，并且只要对象没有被回收我们都可以复用该对象。但是，我们创建出来的这些Java对象都是存在于JVM的堆内存中的。只有JVM处于运行状态的时候，这些对象才可能存在。一旦JVM停止运行，这些对象的状态也就随之而丢失...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"什么是序列化与反序列化\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2026-09-07T16:27:23.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hollis\\"}]}"],["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/java8gu/02.Java%E5%9F%BA%E7%A1%80/%E4%BB%80%E4%B9%88%E6%98%AF%E5%BA%8F%E5%88%97%E5%8C%96%E4%B8%8E%E5%8F%8D%E5%BA%8F%E5%88%97%E5%8C%96.html"}],["meta",{"property":"og:site_name","content":"Java面试帮助文档"}],["meta",{"property":"og:title","content":"什么是序列化与反序列化"}],["meta",{"property":"og:description","content":"什么是序列化与反序列化 警告 内容来源网络，仅供学习使用。 不要相信文档中的链接、联系方式等！！！ 在Java中，我们可以通过多种方式来创建对象，并且只要对象没有被回收我们都可以复用该对象。但是，我们创建出来的这些Java对象都是存在于JVM的堆内存中的。只有JVM处于运行状态的时候，这些对象才可能存在。一旦JVM停止运行，这些对象的状态也就随之而丢失..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2026-09-07T16:27:23.000Z"}],["meta",{"property":"article:author","content":"Hollis"}],["meta",{"property":"article:modified_time","content":"2026-09-07T16:27:23.000Z"}]]},"git":{"createdTime":1788798443000,"updatedTime":1788798443000,"contributors":[{"name":"Yinx","username":"Yinx","email":"admin@yinx.eu.cc","commits":1,"url":"https://github.com/Yinx"}]},"readingTime":{"minutes":4,"words":1201},"filePathRelative":"java8gu/02.Java基础/什么是序列化与反序列化.md","autoDesc":true}`),a={name:`什么是序列化与反序列化.md`};function o(r,i,a,o,s,c){return t(),e(`div`,null,[...i[0]||=[n(`<h1 id="什么是序列化与反序列化" tabindex="-1"><a class="header-anchor" href="#什么是序列化与反序列化"><span>什么是序列化与反序列化</span></a></h1><div class="hint-container caution"><p class="hint-container-title">警告</p><p>内容来源网络，仅供学习使用。<br><br><strong>不要相信文档中的链接、联系方式等！！！</strong></p></div><p>在Java中，我们可以通过多种方式来创建对象，并且只要对象没有被回收我们都可以复用该对象。但是，我们创建出来的这些Java对象都是存在于JVM的堆内存中的。只有JVM处于运行状态的时候，这些对象才可能存在。一旦JVM停止运行，这些对象的状态也就随之而丢失了。</p><p>但是在真实的应用场景中，我们需要将这些对象持久化下来，并且能够在需要的时候把对象重新读取出来。Java的对象序列化可以帮助我们实现该功能。</p><p>对象序列化机制（object serialization）是Java语言内建的一种对象持久化方式，<strong>通过对象序列化，可以把对象的状态保存为字节数组，并且可以在有需要的时候将这个字节数组通过反序列化的方式再转换成对象。</strong>对象序列化可以很容易的在JVM中的活动对象和字节数组（流）之间进行转换。</p><p>所以序列化就是把Java对象序列化成字节数组的过程，反序列化就是把字节数组再转换成Java对象的过程。</p><h1 id="扩展知识" tabindex="-1"><a class="header-anchor" href="#扩展知识"><span>扩展知识</span></a></h1><h2 id="如何进行序列化和反序列化" tabindex="-1"><a class="header-anchor" href="#如何进行序列化和反序列化"><span>如何进行序列化和反序列化</span></a></h2><p>在Java中，只要一个类实现了java.io.Serializable接口，那么它就可以被序列化。这里先来一段代码：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>package com.hollis;</span></span>
<span class="line"><span>import java.io.Serializable;</span></span>
<span class="line"><span>import java.util.Date;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Created by hollis on 16/2/2.</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>public class User implements Serializable{</span></span>
<span class="line"><span>    private String name;</span></span>
<span class="line"><span>    private int age;</span></span>
<span class="line"><span>    private Date birthday;</span></span>
<span class="line"><span>    private transient String gender;</span></span>
<span class="line"><span>    private static final long serialVersionUID = -6849794470754667710L;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public String getName() {</span></span>
<span class="line"><span>        return name;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void setName(String name) {</span></span>
<span class="line"><span>        this.name = name;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public int getAge() {</span></span>
<span class="line"><span>        return age;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void setAge(int age) {</span></span>
<span class="line"><span>        this.age = age;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public Date getBirthday() {</span></span>
<span class="line"><span>        return birthday;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void setBirthday(Date birthday) {</span></span>
<span class="line"><span>        this.birthday = birthday;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public String getGender() {</span></span>
<span class="line"><span>        return gender;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void setGender(String gender) {</span></span>
<span class="line"><span>        this.gender = gender;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public String toString() {</span></span>
<span class="line"><span>        return &quot;User{&quot; +</span></span>
<span class="line"><span>                &quot;name=&#39;&quot; + name + &#39;\\&#39;&#39; +</span></span>
<span class="line"><span>                &quot;, age=&quot; + age +</span></span>
<span class="line"><span>                &quot;, gender=&quot; + gender +</span></span>
<span class="line"><span>                &quot;, birthday=&quot; + birthday +</span></span>
<span class="line"><span>                &#39;}&#39;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>code 2 对User进行序列化及反序列化的Demo：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>package com.hollis;</span></span>
<span class="line"><span>import org.apache.commons.io.FileUtils;</span></span>
<span class="line"><span>import org.apache.commons.io.IOUtils;</span></span>
<span class="line"><span>import java.io.*;</span></span>
<span class="line"><span>import java.util.Date;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Created by hollis on 16/2/2.</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>public class SerializableDemo {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        //Initializes The Object</span></span>
<span class="line"><span>        User user = new User();</span></span>
<span class="line"><span>        user.setName(&quot;hollis&quot;);</span></span>
<span class="line"><span>        user.setGender(&quot;male&quot;);</span></span>
<span class="line"><span>        user.setAge(23);</span></span>
<span class="line"><span>        user.setBirthday(new Date());</span></span>
<span class="line"><span>        System.out.println(user);</span></span>
<span class="line"><span></span></span>
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
<span class="line"><span></span></span>
<span class="line"><span>        //Read Obj from File</span></span>
<span class="line"><span>        File file = new File(&quot;tempFile&quot;);</span></span>
<span class="line"><span>        ObjectInputStream ois = null;</span></span>
<span class="line"><span>        try {</span></span>
<span class="line"><span>            ois = new ObjectInputStream(new FileInputStream(file));</span></span>
<span class="line"><span>            User newUser = (User) ois.readObject();</span></span>
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
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>//output </span></span>
<span class="line"><span>//User{name=&#39;hollis&#39;, age=23, gender=male, birthday=Tue Feb 02 17:37:38 CST 2016}</span></span>
<span class="line"><span>//User{name=&#39;hollis&#39;, age=23, gender=null, birthday=Tue Feb 02 17:37:38 CST 2016}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以下几个和序列化&amp;反序列化有关的知识点大家可以重点关注一下：</p><p>1、在Java中，只要一个类实现了java.io.Serializable接口，那么它就可以被序列化。</p><p>2、通过ObjectOutputStream和ObjectInputStream对对象进行序列化及反序列化</p><p>3、虚拟机是否允许反序列化，不仅取决于类路径和功能代码是否一致，一个非常重要的一点是两个类的序列化 ID 是否一致（就是 private static final long serialVersionUID）</p><p>4、序列化并不保存静态变量。</p><p>5、要想将父类对象也序列化，就需要让父类也实现Serializable 接口。</p><p>6、transient 关键字的作用是控制变量的序列化，在变量声明前加上该关键字，可以阻止该变量被序列化到文件中，在被反序列化后，transient 变量的值被设为初始值，如 int 型的是 0，对象型的是 null。</p><p>7、服务器端给客户端发送序列化对象数据，对象中有一些数据是敏感的，比如密码字符串等，希望对该密码字段在序列化时，进行加密，而客户端如果拥有解密的密钥，只有在客户端进行反序列化时，才可以对密码进行读取，这样可以一定程度保证序列化对象的数据安全。</p><h3 id="未实现serializable-可以序列化吗" tabindex="-1"><a class="header-anchor" href="#未实现serializable-可以序列化吗"><span>未实现Serializable，可以序列化吗？</span></a></h3><p>如果使用Java原生的序列化机制（即通过 ObjectOutputStream 和 ObjectInputStream 类），则对象必须实现 Serializable 接口。如果对象没有实现这个接口，尝试原生序列化会抛出 NotSerializableException。</p><p>对于像Jackson、Gson这样的JSON序列化库或用于XML的库（如JAXB），对象不需要实现 Serializable 接口。这些库使用反射机制来访问对象的字段，并将它们转换成JSON或XML格式。在这种情况下，对象的序列化与 Serializable 接口无关。</p><h2 id="java的序列化原理" tabindex="-1"><a class="header-anchor" href="#java的序列化原理"><span>Java的序列化原理</span></a></h2><p><a href="https://yuque.com/hollis666/vzy8n3/mw0tui" target="_blank" rel="noopener noreferrer">✅Java序列化的原理是啥</a></p>`,25)]])}var s=r(a,[[`render`,o]]);export{i as _pageData,s as default};