import{n as e,o as t,r as n}from"./app-CVL-wmV5.js";import{t as r}from"./plugin-vue_export-helper-BDNMzG2s.js";var i=JSON.parse(`{"path":"/java8gu/09.MyBatis/MyBatis-Plus%E7%9A%84%E5%88%86%E9%A1%B5%E5%8E%9F%E7%90%86%E6%98%AF%E4%BB%80%E4%B9%88.html","title":"MyBatis-Plus的分页原理是什么","lang":"zh-CN","frontmatter":{"title":"MyBatis-Plus的分页原理是什么","author":"Hollis","category":["Java八股文"],"description":"MyBatis-Plus的分页原理是什么 警告 内容来源网络，仅供学习使用。 不要相信文档中的链接、联系方式等！！！ MyBatis-Plus支持分页插件——PaginationInnerInterceptor PaginationInnerInterceptor采用的是物理分页方式，物理分页是在数据库中进行分页，即直接在SQL语句中加入LIMIT语句...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MyBatis-Plus的分页原理是什么\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2026-09-07T16:27:23.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hollis\\"}]}"],["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/java8gu/09.MyBatis/MyBatis-Plus%E7%9A%84%E5%88%86%E9%A1%B5%E5%8E%9F%E7%90%86%E6%98%AF%E4%BB%80%E4%B9%88.html"}],["meta",{"property":"og:site_name","content":"Java面试帮助文档"}],["meta",{"property":"og:title","content":"MyBatis-Plus的分页原理是什么"}],["meta",{"property":"og:description","content":"MyBatis-Plus的分页原理是什么 警告 内容来源网络，仅供学习使用。 不要相信文档中的链接、联系方式等！！！ MyBatis-Plus支持分页插件——PaginationInnerInterceptor PaginationInnerInterceptor采用的是物理分页方式，物理分页是在数据库中进行分页，即直接在SQL语句中加入LIMIT语句..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2026-09-07T16:27:23.000Z"}],["meta",{"property":"article:author","content":"Hollis"}],["meta",{"property":"article:modified_time","content":"2026-09-07T16:27:23.000Z"}]]},"git":{"createdTime":1788798443000,"updatedTime":1788798443000,"contributors":[{"name":"Yinx","username":"Yinx","email":"admin@yinx.eu.cc","commits":1,"url":"https://github.com/Yinx"}]},"readingTime":{"minutes":2.99,"words":898},"filePathRelative":"java8gu/09.MyBatis/MyBatis-Plus的分页原理是什么.md","autoDesc":true}`),a={name:`MyBatis-Plus的分页原理是什么.md`};function o(r,i,a,o,s,c){return t(),e(`div`,null,[...i[0]||=[n(`<h1 id="mybatis-plus的分页原理是什么" tabindex="-1"><a class="header-anchor" href="#mybatis-plus的分页原理是什么"><span>MyBatis-Plus的分页原理是什么</span></a></h1><div class="hint-container caution"><p class="hint-container-title">警告</p><p>内容来源网络，仅供学习使用。<br><br><strong>不要相信文档中的链接、联系方式等！！！</strong></p></div><p><strong>MyBatis-Plus支持分页插件——PaginationInnerInterceptor</strong></p><p><strong>PaginationInnerInterceptor采用的是物理分页方式，物理分页是在数据库中进行分页，即直接在SQL语句中加入LIMIT语句，只查询所需的部分数据。</strong></p><p>物理分页的优点是可以减少内存占用，减轻数据库的负载，缺点是无法对结果进行任意操作，比如说在分页过程中做二次过滤、字段映射、json解析等。</p><p><a href="https://github.com/baomidou/mybatis-plus/blob/3.0/mybatis-plus-extension/src/main/java/com/baomidou/mybatisplus/extension/plugins/inner/PaginationInnerInterceptor.java" target="_blank" rel="noopener noreferrer"><strong>PaginationInnerInterceptor</strong></a>这个分页插件就会自动拦截所有的SQL查询请求，计算分页查询的起始位置和记录数，并在SQL语句中加入LIMIT语句。</p><p>核心的操作在beforeQuery中：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span></span></span>
<span class="line"><span>@Override</span></span>
<span class="line"><span>public void beforeQuery(Executor executor, MappedStatement ms, Object parameter, RowBounds rowBounds, ResultHandler resultHandler, BoundSql boundSql) throws SQLException {</span></span>
<span class="line"><span>    IPage&lt;?&gt; page = ParameterUtils.findPage(parameter).orElse(null);</span></span>
<span class="line"><span>    if (null == page) {</span></span>
<span class="line"><span>        return;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 处理 orderBy 拼接</span></span>
<span class="line"><span>    boolean addOrdered = false;</span></span>
<span class="line"><span>    String buildSql = boundSql.getSql();</span></span>
<span class="line"><span>    List&lt;OrderItem&gt; orders = page.orders();</span></span>
<span class="line"><span>    if (CollectionUtils.isNotEmpty(orders)) {</span></span>
<span class="line"><span>        addOrdered = true;</span></span>
<span class="line"><span>        buildSql = this.concatOrderBy(buildSql, orders);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // size 小于 0 且不限制返回值则不构造分页sql</span></span>
<span class="line"><span>    Long _limit = page.maxLimit() != null ? page.maxLimit() : maxLimit;</span></span>
<span class="line"><span>    if (page.getSize() &lt; 0 &amp;&amp; null == _limit) {</span></span>
<span class="line"><span>        if (addOrdered) {</span></span>
<span class="line"><span>            PluginUtils.mpBoundSql(boundSql).sql(buildSql);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    handlerLimit(page, _limit);</span></span>
<span class="line"><span>    IDialect dialect = findIDialect(executor);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    final Configuration configuration = ms.getConfiguration();</span></span>
<span class="line"><span>    DialectModel model = dialect.buildPaginationSql(buildSql, page.offset(), page.getSize());</span></span>
<span class="line"><span>    PluginUtils.MPBoundSql mpBoundSql = PluginUtils.mpBoundSql(boundSql);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    List&lt;ParameterMapping&gt; mappings = mpBoundSql.parameterMappings();</span></span>
<span class="line"><span>    Map&lt;String, Object&gt; additionalParameter = mpBoundSql.additionalParameters();</span></span>
<span class="line"><span>    model.consumers(mappings, configuration, additionalParameter);</span></span>
<span class="line"><span>    mpBoundSql.sql(model.getDialectSql());</span></span>
<span class="line"><span>    mpBoundSql.parameterMappings(mappings);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中比较关键的就是第31行，buildPaginationSql方法。这里不同的数据库有不同的实现，我们看一下MySQL的实现：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>public class MySqlDialect implements IDialect {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public DialectModel buildPaginationSql(String originalSql, long offset, long limit) {</span></span>
<span class="line"><span>        StringBuilder sql = new StringBuilder(originalSql).append(&quot; LIMIT &quot;).append(FIRST_MARK);</span></span>
<span class="line"><span>        if (offset != 0L) {</span></span>
<span class="line"><span>            sql.append(StringPool.COMMA).append(SECOND_MARK);</span></span>
<span class="line"><span>            return new DialectModel(sql.toString(), offset, limit).setConsumerChain();</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            return new DialectModel(sql.toString(), limit).setConsumer(true);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这段代码就比较好理解了，其实就是在原来的SQL后面拼上<code>LIMIT ?,?</code> ，这样在后续执行的过程中，就可以把offerset和limit赋值给这两个占位符，实现分页查询了。</p><h1 id="扩展知识" tabindex="-1"><a class="header-anchor" href="#扩展知识"><span>扩展知识</span></a></h1><h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h2><p>使用mybatis-plus实现分页，挺简单的，参考以下步骤：</p><p><strong>添加分页插件</strong>：首先，在 MyBatis-Plus 的配置中添加分页插件，在 Spring Boot 应用中，可以这样配置：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>@Configuration</span></span>
<span class="line"><span>@MapperScan(&quot;scan.your.mapper.package&quot;)</span></span>
<span class="line"><span>public class MybatisPlusConfig {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 添加分页插件</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    @Bean</span></span>
<span class="line"><span>    public MybatisPlusInterceptor mybatisPlusInterceptor() {</span></span>
<span class="line"><span>        MybatisPlusInterceptor interceptor = new MybatisPlusInterceptor();</span></span>
<span class="line"><span>        interceptor.addInnerInterceptor(new PaginationInnerInterceptor(DbType.MYSQL));//如果配置多个插件,切记分页最后添加</span></span>
<span class="line"><span>        return interceptor;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编写 Mapper 接口</strong>：定义一个 Mapper 接口，用于执行数据库操作。这个接口不需要特别指定分页相关的方法，MyBatis-Plus 会自动处理。</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>public interface UserMapper extends BaseMapper&lt;User&gt; {</span></span>
<span class="line"><span>    // 这里可以添加其他数据库操作的方法</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>执行分页查询</strong>：在服务层或者控制器层，使用 MyBatis-Plus 提供的 Page 类来执行分页查询。例如，要查询第 1 页的数据，每页显示 10 条记录，可以这样写：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>@Autowired</span></span>
<span class="line"><span>private UserMapper userMapper;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public IPage&lt;User&gt; selectUserPage(int currentPage, int pageSize) {</span></span>
<span class="line"><span>    Page&lt;User&gt; page = new Page&lt;&gt;(currentPage, pageSize);</span></span>
<span class="line"><span>    IPage&lt;User&gt; userPage = userMapper.selectPage(page, null);</span></span>
<span class="line"><span>    return userPage;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>selectPage 方法是 MyBatis-Plus 提供的内置方法，用于执行分页查询。null 作为第二个参数表示没有查询条件，即查询所有记录。</p><p>selectPage 方法返回的 IPage 对象包含了分页信息（如当前页码、总页数、每页记录数、总记录数等）和查询结果。</p><p>总页数、总记录数等的统计是在PaginationInnerInterceptor的willDoQuery方法中实现的，具体大家自行看下代码就可以了，比较容易理解，这里就不展开了。</p>`,23)]])}var s=r(a,[[`render`,o]]);export{i as _pageData,s as default};