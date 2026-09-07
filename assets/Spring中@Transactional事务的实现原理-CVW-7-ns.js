import{a as e,c as t,i as n,n as r,o as i,r as a,s as o,t as s}from"./app-CVL-wmV5.js";import{t as c}from"./plugin-vue_export-helper-BDNMzG2s.js";var l=JSON.parse(`{"path":"/java8gu/06.Spring/Spring%E4%B8%AD@Transactional%E4%BA%8B%E5%8A%A1%E7%9A%84%E5%AE%9E%E7%8E%B0%E5%8E%9F%E7%90%86.html","title":"Spring中@Transactional事务的实现原理","lang":"zh-CN","frontmatter":{"title":"Spring中@Transactional事务的实现原理","author":"Hollis","category":["Java八股文"],"description":"Spring中@Transactional事务的实现原理 警告 内容来源网络，仅供学习使用。 不要相信文档中的链接、联系方式等！！！ Spring的@Transactional事务的核心原理可以概括为 “通过 AOP（面向切面编程）创建代理对象，并在方法调用前后介入事务管理逻辑”。整个实现过程可以分为以下几步： 注解解析：Spring 会在启动时扫描被...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Spring中@Transactional事务的实现原理\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2026-09-07T16:27:23.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hollis\\"}]}"],["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/java8gu/06.Spring/Spring%E4%B8%AD@Transactional%E4%BA%8B%E5%8A%A1%E7%9A%84%E5%AE%9E%E7%8E%B0%E5%8E%9F%E7%90%86.html"}],["meta",{"property":"og:site_name","content":"Java面试帮助文档"}],["meta",{"property":"og:title","content":"Spring中@Transactional事务的实现原理"}],["meta",{"property":"og:description","content":"Spring中@Transactional事务的实现原理 警告 内容来源网络，仅供学习使用。 不要相信文档中的链接、联系方式等！！！ Spring的@Transactional事务的核心原理可以概括为 “通过 AOP（面向切面编程）创建代理对象，并在方法调用前后介入事务管理逻辑”。整个实现过程可以分为以下几步： 注解解析：Spring 会在启动时扫描被..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2026-09-07T16:27:23.000Z"}],["meta",{"property":"article:author","content":"Hollis"}],["meta",{"property":"article:modified_time","content":"2026-09-07T16:27:23.000Z"}]]},"git":{"createdTime":1788798443000,"updatedTime":1788798443000,"contributors":[{"name":"Yinx","username":"Yinx","email":"admin@yinx.eu.cc","commits":1,"url":"https://github.com/Yinx"}]},"readingTime":{"minutes":3.98,"words":1195},"filePathRelative":"java8gu/06.Spring/Spring中@Transactional事务的实现原理.md","autoDesc":true}`),u={name:`Spring中@Transactional事务的实现原理.md`};function d(c,l,u,d,f,p){let m=o(`RouteLink`);return i(),r(`div`,null,[l[1]||=a(`<h1 id="spring中-transactional事务的实现原理" tabindex="-1"><a class="header-anchor" href="#spring中-transactional事务的实现原理"><span>Spring中@Transactional事务的实现原理</span></a></h1><div class="hint-container caution"><p class="hint-container-title">警告</p><p>内容来源网络，仅供学习使用。<br><br><strong>不要相信文档中的链接、联系方式等！！！</strong></p></div><p>Spring的@Transactional事务的核心原理可以概括为 “通过 AOP（面向切面编程）创建代理对象，并在方法调用前后介入事务管理逻辑”。整个实现过程可以分为以下几步：</p><ul><li><p><strong>注解解析</strong>：Spring 会在启动时扫描被 <code>@Transactional</code> 注解标记的类或方法，通过 <code>AnnotationTransactionAttributeSource</code> 类解析注解的属性，并将这些属性传递给事务拦截器。</p></li><li><p><strong>代理创建</strong>：通过 <code>TransactionProxyFactoryBean</code> 为被标注为 <code>@Transactional</code> 的方法创建代理对象。</p></li><li><p><strong>事务拦截</strong>：代理对象会通过 <code>TransactionInterceptor</code> 拦截方法的调用，执行事务的启动、提交或回滚等操作。</p></li><li><p><strong>事务管理</strong>：<code>TransactionInterceptor</code> 调用 <code>PlatformTransactionManager</code> 来启动、提交和回滚事务。</p></li><li><p>如果 <code>@Transactional</code> 方法执行成功，则提交事务</p></li><li><p>如果 <code>@Transactional</code> 方法执行出现异常，则回滚事务</p></li></ul><h3 id="注解解析" tabindex="-1"><a class="header-anchor" href="#注解解析"><span>注解解析</span></a></h3><p>我们想要让一个方法在事务中，只需要在方法上加一个<code>@Transactional</code> 就行了，那么这个注解是起到了怎样的作用呢？</p><p>其实，在 Spring 启动时，它会通过扫描类路径上的所有 Bean，将那些标注了 <code>@Transactional</code> 注解的类或方法标记为事务管理目标。</p><p>SpringTransactionAnnotationParser用来解析 <code>@Transactional</code> 注解中的属性（比如传播行为、隔离级别等），并将这些属性转化为 Spring 管理事务所需的配置。这些解析的结果最终会传递给 <code>TransactionInterceptor</code>，后者负责执行事务的具体操作。</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>protected TransactionAttribute parseTransactionAnnotation(AnnotationAttributes attributes) {</span></span>
<span class="line"><span>		RuleBasedTransactionAttribute rbta = new RuleBasedTransactionAttribute();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 解析传播行为</span></span>
<span class="line"><span>		Propagation propagation = attributes.getEnum(&quot;propagation&quot;);</span></span>
<span class="line"><span>		rbta.setPropagationBehavior(propagation.value());</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    // 解析隔离级别</span></span>
<span class="line"><span>		Isolation isolation = attributes.getEnum(&quot;isolation&quot;);</span></span>
<span class="line"><span>		rbta.setIsolationLevel(isolation.value());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 解析超时时间</span></span>
<span class="line"><span>		rbta.setTimeout(attributes.getNumber(&quot;timeout&quot;).intValue());</span></span>
<span class="line"><span>		String timeoutString = attributes.getString(&quot;timeoutString&quot;);</span></span>
<span class="line"><span>		Assert.isTrue(!StringUtils.hasText(timeoutString) || rbta.getTimeout() &lt; 0,</span></span>
<span class="line"><span>				&quot;Specify &#39;timeout&#39; or &#39;timeoutString&#39;, not both&quot;);</span></span>
<span class="line"><span>		rbta.setTimeoutString(timeoutString);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 解析是否只读</span></span>
<span class="line"><span>		rbta.setReadOnly(attributes.getBoolean(&quot;readOnly&quot;));</span></span>
<span class="line"><span>		rbta.setQualifier(attributes.getString(&quot;value&quot;));</span></span>
<span class="line"><span>		rbta.setLabels(Set.of(attributes.getStringArray(&quot;label&quot;)));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 解析回滚规则</span></span>
<span class="line"><span>		List&lt;RollbackRuleAttribute&gt; rollbackRules = new ArrayList&lt;&gt;();</span></span>
<span class="line"><span>		for (Class&lt;?&gt; rbRule : attributes.getClassArray(&quot;rollbackFor&quot;)) {</span></span>
<span class="line"><span>			rollbackRules.add(new RollbackRuleAttribute(rbRule));</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		for (String rbRule : attributes.getStringArray(&quot;rollbackForClassName&quot;)) {</span></span>
<span class="line"><span>			rollbackRules.add(new RollbackRuleAttribute(rbRule));</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		for (Class&lt;?&gt; rbRule : attributes.getClassArray(&quot;noRollbackFor&quot;)) {</span></span>
<span class="line"><span>			rollbackRules.add(new NoRollbackRuleAttribute(rbRule));</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		for (String rbRule : attributes.getStringArray(&quot;noRollbackForClassName&quot;)) {</span></span>
<span class="line"><span>			rollbackRules.add(new NoRollbackRuleAttribute(rbRule));</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		rbta.setRollbackRules(rollbackRules);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>		return rbta;</span></span>
<span class="line"><span>	}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="代理创建" tabindex="-1"><a class="header-anchor" href="#代理创建"><span>代理创建</span></a></h3><p>Spring容器在启动的过程中，会给使用了<code>@Transactional</code>注解的类创建一个代理对象，后续的所有的事务方法的调用，都会先通过代理对象进行调用（对象内部的自调用(this)调用除外)。</p><p>具体的代理对象的创建过程，直接看AOP的实现原理即可，一样的，因为这里用的就是AOP的机制。</p>`,12),s(`p`,null,[e(m,{to:`/java8gu/06.Spring/%E4%BB%8B%E7%BB%8D%E4%B8%80%E4%B8%8BSpring%E7%9A%84AOP.html#sW21i`},{default:t(()=>[...l[0]||=[n(`06.Spring_介绍一下Spring的AOP`,-1)]]),_:1})]),l[2]||=a(`<p>这个代理对象实际上是使用 JDK 动态代理或 CGLIB 代理生成的，它会拦截对目标对象的调用，决定是否开始事务，方法执行后是否提交或者回滚事务。</p><h3 id="事务拦截-管理" tabindex="-1"><a class="header-anchor" href="#事务拦截-管理"><span>事务拦截&amp;管理</span></a></h3><p>有了代理对象了之后，就需要在事务方法调用的过程中做事务拦截操作。<code>TransactionInterceptor</code> 是 Spring 中事务管理的核心部分，它实现了 <code>MethodInterceptor</code> 接口，负责拦截目标方法的调用。<code>TransactionInterceptor</code> 会在方法执行之前检查事务的相关配置（如传播行为、隔离级别等），并根据这些配置开始、提交或回滚事务。</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>@Override</span></span>
<span class="line"><span>@Nullable</span></span>
<span class="line"><span>public Object invoke(MethodInvocation invocation) throws Throwable {</span></span>
<span class="line"><span>  // 获取目标类</span></span>
<span class="line"><span>  Class&lt;?&gt; targetClass = (invocation.getThis() != null ? AopUtils.getTargetClass(invocation.getThis()) : null);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 关键：在事务中执行</span></span>
<span class="line"><span>  return invokeWithinTransaction(invocation.getMethod(), targetClass, new CoroutinesInvocationCallback() {</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    @Nullable</span></span>
<span class="line"><span>    public Object proceedWithInvocation() throws Throwable {</span></span>
<span class="line"><span>      return invocation.proceed();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public Object getTarget() {</span></span>
<span class="line"><span>      return invocation.getThis();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public Object[] getArguments() {</span></span>
<span class="line"><span>      return invocation.getArguments();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>invokeWithinTransaction是TransactionAspectSupport中的一个方法，这个方法很关键：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>protected Object invokeWithinTransaction(Method method, @Nullable Class&lt;?&gt; targetClass,</span></span>
<span class="line"><span>        final InvocationCallback invocation) throws Throwable {</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    // 1. 获取事务属性（@Transactional配置）</span></span>
<span class="line"><span>    TransactionAttributeSource tas = getTransactionAttributeSource();</span></span>
<span class="line"><span>    final TransactionAttribute txAttr = (tas != null ? </span></span>
<span class="line"><span>        tas.getTransactionAttribute(method, targetClass) : null);</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    // 2. 确定事务管理器</span></span>
<span class="line"><span>    final PlatformTransactionManager ptm = determineTransactionManager(txAttr);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // .... 省略部分代码</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    // 3. 构建方法标识（用于日志等）</span></span>
<span class="line"><span>    final String joinpointIdentification = methodIdentification(method, targetClass, txAttr);</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    // 4. 处理声明式事务</span></span>
<span class="line"><span>    if (txAttr == null || !(ptm instanceof CallbackPreferringPlatformTransactionManager)) {</span></span>
<span class="line"><span>        // 4.1 创建事务（这是关键！）</span></span>
<span class="line"><span>        TransactionInfo txInfo = createTransactionIfNecessary(ptm, txAttr, joinpointIdentification);</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        Object retVal;</span></span>
<span class="line"><span>        try {</span></span>
<span class="line"><span>            // 4.2 执行目标业务方法</span></span>
<span class="line"><span>            retVal = invocation.proceedWithInvocation();</span></span>
<span class="line"><span>        } catch (Throwable ex) {</span></span>
<span class="line"><span>            // 4.3 异常回滚处理</span></span>
<span class="line"><span>            completeTransactionAfterThrowing(txInfo, ex);</span></span>
<span class="line"><span>            throw ex;</span></span>
<span class="line"><span>        } finally {</span></span>
<span class="line"><span>            // 清理事务信息</span></span>
<span class="line"><span>            cleanupTransactionInfo(txInfo);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // ... 省略部分代码</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        // 4.4 提交事务</span></span>
<span class="line"><span>        commitTransactionAfterReturning(txInfo);</span></span>
<span class="line"><span>        return retVal;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    // ... 编程式事务处理</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所以，可以看到，这里其实就是非常核心的事务处理的过程了：</p><p>1、开启事务</p><p>2、执行目标方法</p><p>3、如果执行成功，则提交事务</p><p>4、如果执行过程中出现异常，则回滚事务</p><p>以上，就是Spring中的<code>@Transactional</code> 实现的事务的主要原理。</p>`,12)])}var f=c(u,[[`render`,d]]);export{l as _pageData,f as default};