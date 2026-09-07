import{n as e,o as t,r as n,t as r}from"./app-CVL-wmV5.js";import{t as i}from"./plugin-vue_export-helper-BDNMzG2s.js";var a=JSON.parse(`{"path":"/java8gu/36.%E7%BA%BF%E4%B8%8A%E9%97%AE%E9%A2%98%E6%8E%92%E6%9F%A5/%E9%A2%91%E7%B9%81FullGC%E9%97%AE%E9%A2%98%E6%8E%92%E6%9F%A5.html","title":"频繁FullGC问题排查","lang":"zh-CN","frontmatter":{"title":"频繁FullGC问题排查","author":"Hollis","category":["Java八股文"],"description":"频繁FullGC问题排查 警告 内容来源网络，仅供学习使用。 不要相信文档中的链接、联系方式等！！！ 问题发现 通过监控工平台，查看到定价集群存在少量FullGC的情况，FullGC对于程序员来说其实是不能忍的，于是开始排查。 image.pngimage.png 监控提示是MetaSpace发生fullGC，Metaspace中的类需要满足什么条件才...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"频繁FullGC问题排查\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2026-09-07T16:27:23.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hollis\\"}]}"],["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/java8gu/36.%E7%BA%BF%E4%B8%8A%E9%97%AE%E9%A2%98%E6%8E%92%E6%9F%A5/%E9%A2%91%E7%B9%81FullGC%E9%97%AE%E9%A2%98%E6%8E%92%E6%9F%A5.html"}],["meta",{"property":"og:site_name","content":"Java面试帮助文档"}],["meta",{"property":"og:title","content":"频繁FullGC问题排查"}],["meta",{"property":"og:description","content":"频繁FullGC问题排查 警告 内容来源网络，仅供学习使用。 不要相信文档中的链接、联系方式等！！！ 问题发现 通过监控工平台，查看到定价集群存在少量FullGC的情况，FullGC对于程序员来说其实是不能忍的，于是开始排查。 image.pngimage.png 监控提示是MetaSpace发生fullGC，Metaspace中的类需要满足什么条件才..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2026-09-07T16:27:23.000Z"}],["meta",{"property":"article:author","content":"Hollis"}],["meta",{"property":"article:modified_time","content":"2026-09-07T16:27:23.000Z"}]]},"git":{"createdTime":1788798443000,"updatedTime":1788798443000,"contributors":[{"name":"Yinx","username":"Yinx","email":"admin@yinx.eu.cc","commits":1,"url":"https://github.com/Yinx"}]},"readingTime":{"minutes":4.37,"words":1311},"filePathRelative":"java8gu/36.线上问题排查/频繁FullGC问题排查.md","autoDesc":true}`),o={name:`频繁FullGC问题排查.md`};function s(i,a,o,s,c,l){return t(),e(`div`,null,[...a[0]||=[n(`<h1 id="频繁fullgc问题排查" tabindex="-1"><a class="header-anchor" href="#频繁fullgc问题排查"><span>频繁FullGC问题排查</span></a></h1><div class="hint-container caution"><p class="hint-container-title">警告</p><p>内容来源网络，仅供学习使用。<br><br><strong>不要相信文档中的链接、联系方式等！！！</strong></p></div><h3 id="问题发现" tabindex="-1"><a class="header-anchor" href="#问题发现"><span>问题发现</span></a></h3><p>通过监控工平台，查看到定价集群存在少量FullGC的情况，FullGC对于程序员来说其实是不能忍的，于是开始排查。</p><figure><img src="/assets/%E9%A2%91%E7%B9%81FullGC%E9%97%AE%E9%A2%98%E6%8E%92%E6%9F%A5-1-Betm_NMt.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><p>监控提示是MetaSpace发生fullGC，Metaspace中的类需要满足什么条件才能够被当成垃圾被卸载回收？</p><p>条件还是比较严苛的，需同时满足如下三个条件的类才会被卸载：</p><ol><li>该类所有的实例都已经被回收；</li><li>加载该类的ClassLoader已经被回收；</li><li>该类对应的java.lang.Class对象没有任何地方被引用。</li></ol><h3 id="问题定位" tabindex="-1"><a class="header-anchor" href="#问题定位"><span>问题定位</span></a></h3><p>初步推测是有不停的动态创建类的过程，且有类未被回收；后来考虑到定价中存在轻量的表达式引擎AviatorEvaluator，会存在此过程；</p><p>于是dump出metaspace和heap</p><figure><img src="/assets/%E9%A2%91%E7%B9%81FullGC%E9%97%AE%E9%A2%98%E6%8E%92%E6%9F%A5-2-CESTX2jm.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><figure><img src="/assets/%E9%A2%91%E7%B9%81FullGC%E9%97%AE%E9%A2%98%E6%8E%92%E6%9F%A5-3-DH8EPD8h.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><p>可以看到，存在非常多的Scrip_\${timestamp}_\${idx}类型的类</p><p>重复加载的类中，Top都是关于lambda表达式的</p><p>且指向了com.googlecode.aviator包 - 表达式引擎</p><p>找到了我的代码：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>/**</span></span>
<span class="line"><span> * 表达式处理工具类</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> * @author Hollis</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>public class ExpressionUtil {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static AviatorEvaluatorInstance aviatorEvaluator = AviatorEvaluator.getInstance();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    static {</span></span>
<span class="line"><span>        aviatorEvaluator.setOption(Options.ALWAYS_PARSE_FLOATING_POINT_NUMBER_INTO_DECIMAL, true);</span></span>
<span class="line"><span>        aviatorEvaluator.setOption(Options.ALWAYS_PARSE_INTEGRAL_NUMBER_INTO_DECIMAL, true);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static boolean verify(String expression, Map&lt;String, Object&gt; params) {</span></span>
<span class="line"><span>        return (Boolean)aviatorEvaluator.compile(expression).execute(params);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 表达式计算</span></span>
<span class="line"><span>     * @param expression 表达式</span></span>
<span class="line"><span>     * @param params 需要替换的表达式参数</span></span>
<span class="line"><span>     * @return calculate result</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    public static BigDecimal calculate(String expression, Map&lt;String, Object&gt; params) {</span></span>
<span class="line"><span>        BigDecimal result = (BigDecimal)aviatorEvaluator.compile(expression).execute(params);</span></span>
<span class="line"><span>        return result.setScale(6, RoundingMode.HALF_UP);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span>   * Compile a text expression to Expression Object without caching</span></span>
<span class="line"><span>   *</span></span>
<span class="line"><span>   * @param expression</span></span>
<span class="line"><span>   * @return</span></span>
<span class="line"><span>   */</span></span>
<span class="line"><span>public Expression compile(final String expression) {</span></span>
<span class="line"><span>  return compile(expression, false);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>可以看到，我们在使用表达式引擎时，默认是无缓存的模式进行编译的。</li><li>AviatorEvaluatorInstance实例初始化时，会生成一个AviatorClassLoader类加载器</li></ul><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>public final class AviatorEvaluatorInstance {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  private volatile AviatorClassLoader aviatorClassLoader = initAviatorClassLoader();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  private AviatorClassLoader initAviatorClassLoader() {</span></span>
<span class="line"><span>    return AccessController.doPrivileged(new PrivilegedAction&lt;AviatorClassLoader&gt;() {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      @Override</span></span>
<span class="line"><span>      public AviatorClassLoader run() {</span></span>
<span class="line"><span>        return new AviatorClassLoader(AviatorEvaluatorInstance.class.getClassLoader());</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  ...   </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>编译过程主要分为如下几步</p></li><li><p>文法分析</p></li><li><p>初始化编码生成器</p></li><li><p>语法解析器生成</p></li><li><p>语法解析，实例化Class，最终的 Expression 对象</p></li></ul><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>/**</span></span>
<span class="line"><span>  * 编译过程</span></span>
<span class="line"><span>**/</span></span>
<span class="line"><span>private Expression innerCompile(final String expression, final String sourceFile,</span></span>
<span class="line"><span>                                final boolean cached) {</span></span>
<span class="line"><span>    // 文法分析</span></span>
<span class="line"><span>    ExpressionLexer lexer = new ExpressionLexer(this, expression);</span></span>
<span class="line"><span>    // 初始化编码生成器</span></span>
<span class="line"><span>    CodeGenerator codeGenerator = newCodeGenerator(sourceFile, cached);</span></span>
<span class="line"><span>    // 语法解析器生成</span></span>
<span class="line"><span>    ExpressionParser parser = new ExpressionParser(this, lexer, codeGenerator);</span></span>
<span class="line"><span>    // 语法解析，实例化Class，最终的 Expression 对象</span></span>
<span class="line"><span>    Expression exp = parser.parse();</span></span>
<span class="line"><span>    if (getOptionValue(Options.TRACE_EVAL).bool) {</span></span>
<span class="line"><span>        ((BaseExpression) exp).setExpression(expression);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return exp;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>直接看编码生成器的初始化阶段</p></li><li><p>首先，获取AviatorClassLoader类型的类加载器</p></li><li><p>初始化OptimizeCodeGenerator的编码生成器</p></li><li><p>类型为ASMCodeGenerator</p></li><li><p>classLoader=AviatorClassLoader</p></li><li><p>className=&quot;Script_&quot; + System.currentTimeMillis() + &quot;_&quot; + CLASS_COUNTER.getAndIncrement(); - 与metaspace区的类信息吻合</p></li></ul><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>// 初始化编码生成器</span></span>
<span class="line"><span>public CodeGenerator newCodeGenerator(final String sourceFile, final boolean cached) {</span></span>
<span class="line"><span>    AviatorClassLoader classLoader = getAviatorClassLoader(cached);</span></span>
<span class="line"><span>    return newCodeGenerator(classLoader, sourceFile);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span>   * Returns classloader</span></span>
<span class="line"><span>   *</span></span>
<span class="line"><span>   * @return</span></span>
<span class="line"><span>   */</span></span>
<span class="line"><span>public AviatorClassLoader getAviatorClassLoader(final boolean cached) {</span></span>
<span class="line"><span>    if (cached) {</span></span>
<span class="line"><span>        return this.aviatorClassLoader;</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>        return new AviatorClassLoader(this.getClass().getClassLoader());</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span>   * Returns CodeGenerator</span></span>
<span class="line"><span>   *</span></span>
<span class="line"><span>   * @return</span></span>
<span class="line"><span>   */</span></span>
<span class="line"><span>public CodeGenerator newCodeGenerator(final AviatorClassLoader classLoader,</span></span>
<span class="line"><span>                                      final String sourceFile) {</span></span>
<span class="line"><span>    switch (getOptimizeLevel()) {</span></span>
<span class="line"><span>        case AviatorEvaluator.COMPILE:</span></span>
<span class="line"><span>            ASMCodeGenerator asmCodeGenerator =</span></span>
<span class="line"><span>                new ASMCodeGenerator(this, sourceFile, classLoader, this.traceOutputStream);</span></span>
<span class="line"><span>            asmCodeGenerator.start();</span></span>
<span class="line"><span>            return asmCodeGenerator;</span></span>
<span class="line"><span>        case AviatorEvaluator.EVAL:</span></span>
<span class="line"><span>            // 默认走EVAL</span></span>
<span class="line"><span>            return new OptimizeCodeGenerator(this, sourceFile, classLoader, this.traceOutputStream);</span></span>
<span class="line"><span>        default:</span></span>
<span class="line"><span>            throw new IllegalArgumentException(&quot;Unknow option &quot; + getOptimizeLevel());</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public OptimizeCodeGenerator(final AviatorEvaluatorInstance instance, final String sourceFile,</span></span>
<span class="line"><span>                             final ClassLoader classLoader, final OutputStream traceOutStream) {</span></span>
<span class="line"><span>    this.instance = instance;</span></span>
<span class="line"><span>    this.sourceFile = sourceFile;</span></span>
<span class="line"><span>    this.codeGen = new ASMCodeGenerator(instance, sourceFile, (AviatorClassLoader) classLoader,</span></span>
<span class="line"><span>                                        traceOutStream);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 编码生成器，会创建一个匿名的类</span></span>
<span class="line"><span>public ASMCodeGenerator(final AviatorEvaluatorInstance instance, final String sourceFile,</span></span>
<span class="line"><span>      final AviatorClassLoader classLoader, final OutputStream traceOut) {</span></span>
<span class="line"><span>    this.classLoader = classLoader;</span></span>
<span class="line"><span>    this.instance = instance;</span></span>
<span class="line"><span>    this.compileEnv = new Env();</span></span>
<span class="line"><span>    this.sourceFile = sourceFile;</span></span>
<span class="line"><span>    this.compileEnv.setInstance(this.instance);</span></span>
<span class="line"><span>    // Generate inner class name</span></span>
<span class="line"><span>    this.className = &quot;Script_&quot; + System.currentTimeMillis() + &quot;_&quot; + CLASS_COUNTER.getAndIncrement();</span></span>
<span class="line"><span>    // Auto compute frames</span></span>
<span class="line"><span>    this.classWriter = new ClassWriter(ClassWriter.COMPUTE_FRAMES);</span></span>
<span class="line"><span>    // if (trace) {</span></span>
<span class="line"><span>    // this.traceClassVisitor = new TraceClassVisitor(this.clazzWriter, new PrintWriter(traceOut));</span></span>
<span class="line"><span>    // this.classWriter = new CheckClassAdapter(this.traceClassVisitor);</span></span>
<span class="line"><span>    // } else {</span></span>
<span class="line"><span>    // this.classWriter = new CheckClassAdapter(this.clazzWriter);</span></span>
<span class="line"><span>    // }</span></span>
<span class="line"><span>    visitClass();</span></span>
<span class="line"><span>  }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>语法解析器生成</p></li><li><p>引用编码生成器</p></li><li><p>设置解析器，编码生成器引用this</p></li></ul><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>  public ExpressionParser(final AviatorEvaluatorInstance instance, final ExpressionLexer lexer,</span></span>
<span class="line"><span>      final CodeGenerator codeGenerator) {</span></span>
<span class="line"><span>    super();</span></span>
<span class="line"><span>    this.scope = new ScopeInfo(0, 0, 0, 0, false, new ArrayDeque&lt;DepthState&gt;());</span></span>
<span class="line"><span>    this.instance = instance;</span></span>
<span class="line"><span>    this.captureFuncArgs = instance.getOptionValue(Options.CAPTURE_FUNCTION_ARGS).bool;</span></span>
<span class="line"><span>    this.lexer = lexer;</span></span>
<span class="line"><span>    this.lookhead = this.lexer.scan();</span></span>
<span class="line"><span>    if (this.lookhead != null) {</span></span>
<span class="line"><span>      this.parsedTokens++;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    this.featureSet = this.instance.getOptionValue(Options.FEATURE_SET).featureSet;</span></span>
<span class="line"><span>    if (this.lookhead == null) {</span></span>
<span class="line"><span>      reportSyntaxError(&quot;blank script&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 引用编码生成器</span></span>
<span class="line"><span>    setCodeGenerator(codeGenerator);</span></span>
<span class="line"><span>    // 设置解析器，编码生成器引用this</span></span>
<span class="line"><span>    getCodeGeneratorWithTimes().setParser(this);</span></span>
<span class="line"><span>  }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>语法解析</p></li><li><p>实例化ClassExpression类型的对象后返回</p></li></ul><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>  public Expression parse(final boolean reportErrorIfNotEOF) {</span></span>
<span class="line"><span>    StatementType statementType = statements();</span></span>
<span class="line"><span>    if (this.lookhead != null &amp;&amp; reportErrorIfNotEOF) {</span></span>
<span class="line"><span>      if (statementType == StatementType.Ternary) {</span></span>
<span class="line"><span>        reportSyntaxError(&quot;unexpect token &#39;&quot; + currentTokenLexeme()</span></span>
<span class="line"><span>            + &quot;&#39;, maybe forget to insert &#39;;&#39; to complete last expression &quot;);</span></span>
<span class="line"><span>      } else {</span></span>
<span class="line"><span>        reportSyntaxError(&quot;unexpect token &#39;&quot; + currentTokenLexeme() + &quot;&#39;&quot;);</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 实例化</span></span>
<span class="line"><span>    return getCodeGeneratorWithTimes().getResult(true);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  @Override</span></span>
<span class="line"><span>  public Expression getResult(final boolean unboxObject) {</span></span>
<span class="line"><span>    end(unboxObject);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    byte[] bytes = this.classWriter.toByteArray();</span></span>
<span class="line"><span>    try {</span></span>
<span class="line"><span>      Class&lt;?&gt; defineClass =</span></span>
<span class="line"><span>          ClassDefiner.defineClass(this.className, Expression.class, bytes, this.classLoader);</span></span>
<span class="line"><span>      Constructor&lt;?&gt; constructor =</span></span>
<span class="line"><span>          defineClass.getConstructor(AviatorEvaluatorInstance.class, List.class, SymbolTable.class);</span></span>
<span class="line"><span>      ClassExpression exp = (ClassExpression) constructor.newInstance(this.instance,</span></span>
<span class="line"><span>          new ArrayList&lt;String&gt;(this.varTokens.keySet()), this.symbolTable);</span></span>
<span class="line"><span>      exp.setLambdaBootstraps(this.lambdaBootstraps);</span></span>
<span class="line"><span>      exp.setFuncsArgs(this.funcsArgs);</span></span>
<span class="line"><span>      return exp;</span></span>
<span class="line"><span>    } catch (ExpressionRuntimeException e) {</span></span>
<span class="line"><span>      throw e;</span></span>
<span class="line"><span>    } catch (Throwable e) {</span></span>
<span class="line"><span>      if (e.getCause() instanceof ExpressionRuntimeException) {</span></span>
<span class="line"><span>        throw (ExpressionRuntimeException) e.getCause();</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      throw new CompileExpressionErrorException(&quot;define class error&quot;, e);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结论就是，<strong>无缓存情况下，每次编译表达式都会生成一个AviatorClassLoader类加载器+一个匿名的Express类型的class，metaspace的空间会逐步占满</strong></p><figure><img src="/assets/%E9%A2%91%E7%B9%81FullGC%E9%97%AE%E9%A2%98%E6%8E%92%E6%9F%A5-4-DI6ZAWbX.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><h3 id="问题解决" tabindex="-1"><a class="header-anchor" href="#问题解决"><span>问题解决</span></a></h3><p>解决思路就是官方支持使用缓存的方式。在github上也有人提到过类似的问题。</p><figure><img src="/assets/%E9%A2%91%E7%B9%81FullGC%E9%97%AE%E9%A2%98%E6%8E%92%E6%9F%A5-5-BNvuicLE.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><ul><li><p>使用cacheKey的缓存方案</p></li><li><p>public Expression compile(final String cacheKey, final String expression, final boolean cached)</p></li></ul><figure><img src="/assets/%E9%A2%91%E7%B9%81FullGC%E9%97%AE%E9%A2%98%E6%8E%92%E6%9F%A5-6-Cy2Ellvr.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure>`,35),r(`ul`,null,[r(`li`,null,[r(`p`,null,`key组装规则`)]),r(`li`,{method:``},[r(`p`,null,"${product}_${priceBaseDTO.code}_${simpleName}_$")])],-1),r(`figure`,null,[r(`img`,{src:`/assets/%E9%A2%91%E7%B9%81FullGC%E9%97%AE%E9%A2%98%E6%8E%92%E6%9F%A5-7-BKPQ0hLN.png`,alt:`image.png`,tabindex:`0`,loading:`lazy`}),r(`figcaption`,null,`image.png`)],-1),r(`h2`,{id:`​`,tabindex:`-1`},[r(`a`,{class:`header-anchor`,href:`#​`},[r(`span`,null,`​`)])],-1)]])}var c=i(o,[[`render`,s]]);export{a as _pageData,c as default};