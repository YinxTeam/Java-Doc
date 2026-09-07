import{n as e,o as t,r as n}from"./app-CVL-wmV5.js";import{t as r}from"./plugin-vue_export-helper-BDNMzG2s.js";var i=JSON.parse(`{"path":"/java8gu/50.%E9%A1%B9%E7%9B%AE%E9%9A%BE%E7%82%B9_%E4%BA%AE%E7%82%B9/%E5%9F%BA%E4%BA%8EToken%E6%A0%A1%E9%AA%8C%E9%81%BF%E5%85%8D%E8%AE%A2%E5%8D%95%E9%87%8D%E5%A4%8D%E6%8F%90%E4%BA%A4.html","title":"基于Token校验避免订单重复提交","lang":"zh-CN","frontmatter":{"title":"基于Token校验避免订单重复提交","author":"Hollis","category":["Java八股文"],"description":"基于Token校验避免订单重复提交 警告 内容来源网络，仅供学习使用。 不要相信文档中的链接、联系方式等！！！ （本方案来自我的数藏项目，相关视频讲解及完整项目代码，在项目课中均有讲解） 在很多秒杀场景中，用户为了能下单成功，会频繁的点击下单按钮，这时候如果没有做好控制的话，就可能会给一个用户创建重复订单。 那么，我们如何防止这个问题呢？ 其实有一个好...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"基于Token校验避免订单重复提交\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2026-09-07T16:27:23.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hollis\\"}]}"],["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/java8gu/50.%E9%A1%B9%E7%9B%AE%E9%9A%BE%E7%82%B9_%E4%BA%AE%E7%82%B9/%E5%9F%BA%E4%BA%8EToken%E6%A0%A1%E9%AA%8C%E9%81%BF%E5%85%8D%E8%AE%A2%E5%8D%95%E9%87%8D%E5%A4%8D%E6%8F%90%E4%BA%A4.html"}],["meta",{"property":"og:site_name","content":"Java面试帮助文档"}],["meta",{"property":"og:title","content":"基于Token校验避免订单重复提交"}],["meta",{"property":"og:description","content":"基于Token校验避免订单重复提交 警告 内容来源网络，仅供学习使用。 不要相信文档中的链接、联系方式等！！！ （本方案来自我的数藏项目，相关视频讲解及完整项目代码，在项目课中均有讲解） 在很多秒杀场景中，用户为了能下单成功，会频繁的点击下单按钮，这时候如果没有做好控制的话，就可能会给一个用户创建重复订单。 那么，我们如何防止这个问题呢？ 其实有一个好..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2026-09-07T16:27:23.000Z"}],["meta",{"property":"article:author","content":"Hollis"}],["meta",{"property":"article:modified_time","content":"2026-09-07T16:27:23.000Z"}]]},"git":{"createdTime":1788798443000,"updatedTime":1788798443000,"contributors":[{"name":"Yinx","username":"Yinx","email":"admin@yinx.eu.cc","commits":1,"url":"https://github.com/Yinx"}]},"readingTime":{"minutes":3.24,"words":973},"filePathRelative":"java8gu/50.项目难点&亮点/基于Token校验避免订单重复提交.md","autoDesc":true}`),a={name:`基于Token校验避免订单重复提交.md`};function o(r,i,a,o,s,c){return t(),e(`div`,null,[...i[0]||=[n(`<h1 id="基于token校验避免订单重复提交" tabindex="-1"><a class="header-anchor" href="#基于token校验避免订单重复提交"><span>基于Token校验避免订单重复提交</span></a></h1><div class="hint-container caution"><p class="hint-container-title">警告</p><p>内容来源网络，仅供学习使用。<br><br><strong>不要相信文档中的链接、联系方式等！！！</strong></p></div><h3 id="本方案来自我的数藏项目-相关视频讲解及完整项目代码-在项目课中均有讲解" tabindex="-1"><a class="header-anchor" href="#本方案来自我的数藏项目-相关视频讲解及完整项目代码-在项目课中均有讲解"><span>（本方案来自我的<a href="https://www.yuque.com/hollis666/vzy8n3/dgolk0cckpb94sia" target="_blank" rel="noopener noreferrer">数藏项目</a>，相关视频讲解及完整项目代码，在项目课中均有讲解）</span></a></h3><p>在很多秒杀场景中，用户为了能下单成功，会频繁的点击下单按钮，这时候如果没有做好控制的话，就可能会给一个用户创建重复订单。</p><p>那么，我们如何防止这个问题呢？</p><p>其实有一个好办法，那就是用户在下单的时候，带一个 token 过来，我们校验这个 token 的有效性，如果 token 有效，则允许下单，如果无效，则不允许用户下单。</p><p>这里的 token 也不是 sa-token（单点登录框架） 发放的，而是我们自己实现的一个发放和存储，以及后续的校验，都是我们自己做的。</p><figure><img src="/assets/%E5%9F%BA%E4%BA%8EToken%E6%A0%A1%E9%AA%8C%E9%81%BF%E5%85%8D%E8%AE%A2%E5%8D%95%E9%87%8D%E5%A4%8D%E6%8F%90%E4%BA%A4-1-vu3Akdjc.svg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>那么，这个 token 是如何发放和校验的的呢？</p><p>token 的发放比较简单，我们定义一个 controller，在下单页面渲染的时候从接口中获取一下就行了。</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>/**</span></span>
<span class="line"><span> * @author hollis</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>@Slf4j</span></span>
<span class="line"><span>@RequiredArgsConstructor</span></span>
<span class="line"><span>@RestController</span></span>
<span class="line"><span>@RequestMapping(&quot;token&quot;)</span></span>
<span class="line"><span>public class TokenController {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private static final String TOKEN_PREFIX = &quot;token:&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private RedisTemplate redisTemplate;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @GetMapping(&quot;/get&quot;)</span></span>
<span class="line"><span>    public Result&lt;String&gt; get(@NotBlank String scene) {</span></span>
<span class="line"><span>        if (StpUtil.isLogin()) {</span></span>
<span class="line"><span>            String token = UUID.randomUUID().toString();</span></span>
<span class="line"><span>            redisTemplate.opsForValue().set(TOKEN_PREFIX + scene + CACHE_KEY_SEPARATOR + token, &quot;token&quot;, 30, TimeUnit.MINUTES);</span></span>
<span class="line"><span>            return Result.success(TOKEN_PREFIX + scene + CACHE_KEY_SEPARATOR + token);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        throw new AuthException(AuthErrorCode.USER_NOT_LOGIN);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上，就是一个 token 获取的接口，通过用户传入的scene ，我们生产了一个 token 并把它存储在 redis 中。并返回给前端。</p><p>前端在拿到这个 token 后，需要再下单接口中把这个 token 带过来，然后我们在后端判断一下他的有效性。 token 的校验我们是通过Filter 实现的，这样做更加通用一些。</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>/**</span></span>
<span class="line"><span> * @author Hollis</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>public class TokenFilter implements Filter {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private static final Logger logger = LoggerFactory.getLogger(TokenFilter.class);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private RedissonClient redissonClient;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public TokenFilter(RedissonClient redissonClient) {</span></span>
<span class="line"><span>        this.redissonClient = redissonClient;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void init(FilterConfig filterConfig) throws ServletException {</span></span>
<span class="line"><span>        // 过滤器初始化，可选实现</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {</span></span>
<span class="line"><span>        HttpServletRequest httpRequest = (HttpServletRequest) request;</span></span>
<span class="line"><span>        HttpServletResponse httpResponse = (HttpServletResponse) response;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 从请求头中获取Token</span></span>
<span class="line"><span>        String token = httpRequest.getHeader(&quot;Authorization&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if (token == null) {</span></span>
<span class="line"><span>            httpResponse.setStatus(HttpServletResponse.SC_UNAUTHORIZED);</span></span>
<span class="line"><span>            httpResponse.getWriter().write(&quot;No Token Found ...&quot;);</span></span>
<span class="line"><span>            logger.error(&quot;no token found in header , pls check!&quot;);</span></span>
<span class="line"><span>            return;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 校验Token的有效性</span></span>
<span class="line"><span>        boolean isValid = checkTokenValidity(token);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if (!isValid) {</span></span>
<span class="line"><span>            httpResponse.setStatus(HttpServletResponse.SC_UNAUTHORIZED);</span></span>
<span class="line"><span>            httpResponse.getWriter().write(&quot;Invalid or expired token&quot;);</span></span>
<span class="line"><span>              logger.error(&quot;token validate failed , pls check!&quot;);</span></span>
<span class="line"><span>            return;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // Token有效，继续执行其他过滤器链</span></span>
<span class="line"><span>        chain.doFilter(request, response);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private boolean checkTokenValidity(String token) {</span></span>
<span class="line"><span>        String luaScript = &quot;&quot;&quot;</span></span>
<span class="line"><span>                local value = redis.call(&#39;GET&#39;, KEYS[1])</span></span>
<span class="line"><span>                redis.call(&#39;DEL&#39;, KEYS[1])</span></span>
<span class="line"><span>                return value&quot;&quot;&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 6.2.3以上可以直接使用GETDEL命令</span></span>
<span class="line"><span>        // String value = (String) redisTemplate.opsForValue().getAndDelete(token);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        Object result = redissonClient.getScript().eval(RScript.Mode.READ_WRITE,</span></span>
<span class="line"><span>                luaScript,</span></span>
<span class="line"><span>                RScript.ReturnType.VALUE,</span></span>
<span class="line"><span>                Arrays.asList(token));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return result != null;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void destroy() {</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>主要实现在doFilter方法中，主要是判断请求中是否携带了 token，如果携带了，通过 redis 校验 token 是否有效，如果有效，则把这个 token 删除，并且放过请求。如果无效，则直接拒绝请求。</p><p>这里的token 校验及移除，我们是通过 lua 脚本实现的，保证原子性。</p><p>有了这个 filter 之后，我们需要让他能够生效，则需要以下配置：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>/**</span></span>
<span class="line"><span> * @author Hollis</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>@AutoConfiguration</span></span>
<span class="line"><span>@ConditionalOnWebApplication</span></span>
<span class="line"><span>public class WebConfiguration implements WebMvcConfigurer {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Bean</span></span>
<span class="line"><span>    @ConditionalOnMissingBean</span></span>
<span class="line"><span>    GlobalWebExceptionHandler globalWebExceptionHandler() {</span></span>
<span class="line"><span>        return new GlobalWebExceptionHandler();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    @Bean</span></span>
<span class="line"><span>    public FilterRegistrationBean&lt;TokenFilter&gt; tokenFilter(RedissonClient redissonClient) {</span></span>
<span class="line"><span>        FilterRegistrationBean&lt;TokenFilter&gt; registrationBean = new FilterRegistrationBean&lt;&gt;();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        registrationBean.setFilter(new TokenFilter(redissonClient));</span></span>
<span class="line"><span>        registrationBean.addUrlPatterns(&quot;/trade/buy&quot;);</span></span>
<span class="line"><span>        registrationBean.setOrder(10);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return registrationBean;</span></span>
<span class="line"><span>    }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里，我们并不是给所有的页面都加这个 token 的校验，其实很多接口是不需要的，所以我们只需要通过registrationBean.addUrlPatterns(&quot;/trade/buy&quot;);设置上我们需要校验的路径就行了。</p><h3 id="本项目亮点来自我的数藏项目文档中的最佳实践部分-更多项目亮点难点-50-更详细的落地方案和讲解-可以在项目课中和我们一起学" tabindex="-1"><a class="header-anchor" href="#本项目亮点来自我的数藏项目文档中的最佳实践部分-更多项目亮点难点-50-更详细的落地方案和讲解-可以在项目课中和我们一起学"><span>（本项目亮点来自我的<a href="https://www.yuque.com/hollis666/vzy8n3/dgolk0cckpb94sia" target="_blank" rel="noopener noreferrer">数藏项目</a>文档中的最佳实践部分，更多项目亮点难点（50+），更详细的落地方案和讲解，可以在项目课中和我们一起学）</span></a></h3>`,20)]])}var s=r(a,[[`render`,o]]);export{i as _pageData,s as default};