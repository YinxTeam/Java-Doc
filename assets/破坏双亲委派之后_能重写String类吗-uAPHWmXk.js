import{a as e,c as t,i as n,n as r,o as i,r as a,s as o,t as s}from"./app-CVL-wmV5.js";import{t as c}from"./plugin-vue_export-helper-BDNMzG2s.js";var l=JSON.parse(`{"path":"/java8gu/05.JVM/%E7%A0%B4%E5%9D%8F%E5%8F%8C%E4%BA%B2%E5%A7%94%E6%B4%BE%E4%B9%8B%E5%90%8E_%E8%83%BD%E9%87%8D%E5%86%99String%E7%B1%BB%E5%90%97.html","title":"破坏双亲委派之后,能重写String类吗","lang":"zh-CN","frontmatter":{"title":"破坏双亲委派之后,能重写String类吗","author":"Hollis","category":["Java八股文"],"description":"破坏双亲委派之后,能重写String类吗 警告 内容来源网络，仅供学习使用。 不要相信文档中的链接、联系方式等！！！ Java通过双亲委派模型保证了java核心包中的类不会被破坏，但破坏双亲委派能够脱离加载范围的限制，增强第三方组件的能力。 但是我们虽然可以通过破坏双亲委派屏蔽Bootstrap ClassLoader，但无法重写java.包下的类，如...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"破坏双亲委派之后,能重写String类吗\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2026-09-07T16:27:23.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hollis\\"}]}"],["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/java8gu/05.JVM/%E7%A0%B4%E5%9D%8F%E5%8F%8C%E4%BA%B2%E5%A7%94%E6%B4%BE%E4%B9%8B%E5%90%8E_%E8%83%BD%E9%87%8D%E5%86%99String%E7%B1%BB%E5%90%97.html"}],["meta",{"property":"og:site_name","content":"Java面试帮助文档"}],["meta",{"property":"og:title","content":"破坏双亲委派之后,能重写String类吗"}],["meta",{"property":"og:description","content":"破坏双亲委派之后,能重写String类吗 警告 内容来源网络，仅供学习使用。 不要相信文档中的链接、联系方式等！！！ Java通过双亲委派模型保证了java核心包中的类不会被破坏，但破坏双亲委派能够脱离加载范围的限制，增强第三方组件的能力。 但是我们虽然可以通过破坏双亲委派屏蔽Bootstrap ClassLoader，但无法重写java.包下的类，如..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2026-09-07T16:27:23.000Z"}],["meta",{"property":"article:author","content":"Hollis"}],["meta",{"property":"article:modified_time","content":"2026-09-07T16:27:23.000Z"}]]},"git":{"createdTime":1788798443000,"updatedTime":1788798443000,"contributors":[{"name":"Yinx","username":"Yinx","email":"admin@yinx.eu.cc","commits":1,"url":"https://github.com/Yinx"}]},"readingTime":{"minutes":2.58,"words":775},"filePathRelative":"java8gu/05.JVM/破坏双亲委派之后,能重写String类吗.md","autoDesc":true}`),u={name:`破坏双亲委派之后,能重写String类吗.md`};function d(c,l,u,d,f,p){let m=o(`RouteLink`);return i(),r(`div`,null,[l[1]||=s(`h1`,{id:`破坏双亲委派之后-能重写string类吗`,tabindex:`-1`},[s(`a`,{class:`header-anchor`,href:`#破坏双亲委派之后-能重写string类吗`},[s(`span`,null,`破坏双亲委派之后,能重写String类吗`)])],-1),l[2]||=s(`div`,{class:`hint-container caution`},[s(`p`,{class:`hint-container-title`},`警告`),s(`p`,null,[n(`内容来源网络，仅供学习使用。`),s(`br`),s(`br`),s(`strong`,null,`不要相信文档中的链接、联系方式等！！！`)])],-1),l[3]||=s(`p`,null,`Java通过双亲委派模型保证了java核心包中的类不会被破坏，但破坏双亲委派能够脱离加载范围的限制，增强第三方组件的能力。`,-1),s(`p`,null,[e(m,{to:`/java8gu/05.JVM/%E4%BB%80%E4%B9%88%E6%98%AF%E5%8F%8C%E4%BA%B2%E5%A7%94%E6%B4%BE_%E5%A6%82%E4%BD%95%E7%A0%B4%E5%9D%8F.html`},{default:t(()=>[...l[0]||=[n(`05.JVM_什么是双亲委派_如何破坏`,-1)]]),_:1})]),l[4]||=a(`<p>但是我们虽然可以通过破坏双亲委派屏蔽Bootstrap ClassLoader，但无法重写<code>java.</code>包下的类，如<code>java.lang.String</code>。</p><p>我们知道，要破坏双亲委派模型是需要<code>extends ClassLoader</code>并重写其中的<code>loadClass()</code>和<code>findClass()</code>方法。</p><p>之所以无法替换<code>java.</code>包的类，主要原因是即使我们破坏双亲委派模型，依然需要调用父类中（<code>java.lang.ClassLoader.java</code>）的<code>defineClass()</code>方法来把字节流转换为一个JVM识别的class。而<code>defineClass()</code>方法中通过<code>preDefineClass()</code>方法限制了类全限定名不能以<code>java.</code>开头。</p><p>如下代码所示：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>//将字节流转换成jvm可识别的java类</span></span>
<span class="line"><span>  protected final Class&lt;?&gt; defineClass(String name, byte[] b, int off, int len,</span></span>
<span class="line"><span>                                         ProtectionDomain protectionDomain)</span></span>
<span class="line"><span>        throws ClassFormatError</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        protectionDomain = preDefineClass(name, protectionDomain);//检查类全限定名是否有效</span></span>
<span class="line"><span>        String source = defineClassSourceLocation(protectionDomain);</span></span>
<span class="line"><span>        Class&lt;?&gt; c = defineClass1(name, b, off, len, protectionDomain, source);//调用本地方法，执行字节流转JVM类的逻辑。</span></span>
<span class="line"><span>        postDefineClass(c, protectionDomain);</span></span>
<span class="line"><span>        return c;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//检查类名的有效性</span></span>
<span class="line"><span> private ProtectionDomain preDefineClass(String name,</span></span>
<span class="line"><span>                                            ProtectionDomain pd)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        if (!checkName(name))</span></span>
<span class="line"><span>            throw new NoClassDefFoundError(&quot;IllegalName: &quot; + name);</span></span>
<span class="line"><span>        if ((name != null) &amp;&amp; name.startsWith(&quot;java.&quot;)) { //禁止替换以java.开头的类文件</span></span>
<span class="line"><span>            throw new SecurityException</span></span>
<span class="line"><span>                (&quot;Prohibited package name: &quot; +</span></span>
<span class="line"><span>                 name.substring(0, name.lastIndexOf(&#39;.&#39;)));</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        if (pd == null) {</span></span>
<span class="line"><span>            pd = defaultDomain;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if (name != null) checkCerts(name, pd.getCodeSource());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return pd;</span></span>
<span class="line"><span>    }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，<code>defineClassX</code>三兄弟是三个本地方法，用于不同参数长度的方法调用。</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span> private native Class&lt;?&gt; defineClass0(String name, byte[] b, int off, int len,</span></span>
<span class="line"><span>                                         ProtectionDomain pd);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private native Class&lt;?&gt; defineClass1(String name, byte[] b, int off, int len,</span></span>
<span class="line"><span>                                         ProtectionDomain pd, String source);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private native Class&lt;?&gt; defineClass2(String name, java.nio.ByteBuffer b,</span></span>
<span class="line"><span>                                         int off, int len, ProtectionDomain pd,</span></span>
<span class="line"><span>                                         String source);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对应到JDK源码中分别为：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>JNIEXPORT jclass JNICALL</span></span>
<span class="line"><span>Java_java_lang_ClassLoader_defineClass0(JNIEnv *env,</span></span>
<span class="line"><span>                                        jobject loader,</span></span>
<span class="line"><span>                                        jstring name,</span></span>
<span class="line"><span>                                        jbyteArray data,</span></span>
<span class="line"><span>                                        jint offset,</span></span>
<span class="line"><span>                                        jint length,</span></span>
<span class="line"><span>                                        jobject pd)</span></span>
<span class="line"><span>                                        </span></span>
<span class="line"><span>JNIEXPORT jclass JNICALL</span></span>
<span class="line"><span>Java_java_lang_ClassLoader_defineClass1(JNIEnv *env,</span></span>
<span class="line"><span>                                        jobject loader,</span></span>
<span class="line"><span>                                        jstring name,</span></span>
<span class="line"><span>                                        jbyteArray data,</span></span>
<span class="line"><span>                                        jint offset,</span></span>
<span class="line"><span>                                        jint length,</span></span>
<span class="line"><span>                                        jobject pd,</span></span>
<span class="line"><span>                                        jstring source)</span></span>
<span class="line"><span>                                    </span></span>
<span class="line"><span>JNIEXPORT jclass JNICALL</span></span>
<span class="line"><span>Java_java_lang_ClassLoader_defineClass2(JNIEnv *env,</span></span>
<span class="line"><span>                                        jobject loader,</span></span>
<span class="line"><span>                                        jstring name,</span></span>
<span class="line"><span>                                        jobject data,</span></span>
<span class="line"><span>                                        jint offset,</span></span>
<span class="line"><span>                                        jint length,</span></span>
<span class="line"><span>                                        jobject pd,</span></span>
<span class="line"><span>                                        jstring source)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这三个C++方法会调用到<code>SystemDictionary::resolve_from_stream</code>检查全限定名是否包含<code>java.</code></p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>klassOop SystemDictionary::resolve_from_stream(Symbol* class_name,</span></span>
<span class="line"><span>                                               Handle class_loader,</span></span>
<span class="line"><span>                                               Handle protection_domain,</span></span>
<span class="line"><span>                                               ClassFileStream* st,</span></span>
<span class="line"><span>                                               bool verify,</span></span>
<span class="line"><span>                                               TRAPS) {</span></span>
<span class="line"><span> ...//省略无关代码，以下是并检查全限定名，若包含java.，则抛出异常。</span></span>
<span class="line"><span> const char* pkg = &quot;java/&quot;;</span></span>
<span class="line"><span>  if (!HAS_PENDING_EXCEPTION &amp;&amp;</span></span>
<span class="line"><span>      !class_loader.is_null() &amp;&amp;</span></span>
<span class="line"><span>      parsed_name != NULL &amp;&amp;</span></span>
<span class="line"><span>      !strncmp((const char*)parsed_name-&gt;bytes(), pkg, strlen(pkg))) {</span></span>
<span class="line"><span>    ResourceMark rm(THREAD);</span></span>
<span class="line"><span>    char* name = parsed_name-&gt;as_C_string();</span></span>
<span class="line"><span>    char* index = strrchr(name, &#39;/&#39;);</span></span>
<span class="line"><span>    *index = &#39;\\0&#39;;</span></span>
<span class="line"><span>    while ((index = strchr(name, &#39;/&#39;)) != NULL) {</span></span>
<span class="line"><span>      *index = &#39;.&#39;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    const char* fmt = &quot;Prohibited package name: %s&quot;;</span></span>
<span class="line"><span>    size_t len = strlen(fmt) + strlen(name);</span></span>
<span class="line"><span>    char* message = NEW_RESOURCE_ARRAY(char, len);</span></span>
<span class="line"><span>    jio_snprintf(message, len, fmt, name);</span></span>
<span class="line"><span>    Exceptions::_throw_msg(THREAD_AND_LOCATION,</span></span>
<span class="line"><span>      vmSymbols::java_lang_SecurityException(), message);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是，如果破坏双亲委派的时候自己将字节流转换为一个jvm可识别的class，那确实绕过<code>defineClass()</code>中的校验全限定名的逻辑，也就可以改写<code>java.lang.String</code>，并加载到JVM中。</p>`,12)])}var f=c(u,[[`render`,d]]);export{l as _pageData,f as default};