import{a as e,c as t,i as n,n as r,o as i,r as a,s as o,t as s}from"./app-CVL-wmV5.js";import{t as c}from"./plugin-vue_export-helper-BDNMzG2s.js";var l=JSON.parse(`{"path":"/java8gu/50.%E9%A1%B9%E7%9B%AE%E9%9A%BE%E7%82%B9_%E4%BA%AE%E7%82%B9/%E5%9F%BA%E4%BA%8EEasyExcel_%E7%BA%BF%E7%A8%8B%E6%B1%A0%E8%A7%A3%E5%86%B3POI%E6%96%87%E4%BB%B6%E5%AF%BC%E5%87%BA%E6%97%B6%E7%9A%84%E5%86%85%E5%AD%98%E6%BA%A2%E5%87%BA%E5%8F%8A%E8%B6%85%E6%97%B6%E9%97%AE%E9%A2%98.html","title":"基于EasyExcel+线程池解决POI文件导出时的内存溢出及超时问题","lang":"zh-CN","frontmatter":{"title":"基于EasyExcel+线程池解决POI文件导出时的内存溢出及超时问题","author":"Hollis","category":["Java八股文"],"description":"基于EasyExcel+线程池解决POI文件导出时的内存溢出及超时问题 警告 内容来源网络，仅供学习使用。 不要相信文档中的链接、联系方式等！！！ 背景 在一个后台管理功能中，需要导出Excel，但是当处理大数据量的Excel文件导出时，常用的Apache POI库可能因其内存占用较高而导致内存溢出问题。同时，数据处理过程可能非常耗时，导致用户等待时间...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"基于EasyExcel+线程池解决POI文件导出时的内存溢出及超时问题\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2026-09-07T16:27:23.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hollis\\"}]}"],["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/java8gu/50.%E9%A1%B9%E7%9B%AE%E9%9A%BE%E7%82%B9_%E4%BA%AE%E7%82%B9/%E5%9F%BA%E4%BA%8EEasyExcel_%E7%BA%BF%E7%A8%8B%E6%B1%A0%E8%A7%A3%E5%86%B3POI%E6%96%87%E4%BB%B6%E5%AF%BC%E5%87%BA%E6%97%B6%E7%9A%84%E5%86%85%E5%AD%98%E6%BA%A2%E5%87%BA%E5%8F%8A%E8%B6%85%E6%97%B6%E9%97%AE%E9%A2%98.html"}],["meta",{"property":"og:site_name","content":"Java面试帮助文档"}],["meta",{"property":"og:title","content":"基于EasyExcel+线程池解决POI文件导出时的内存溢出及超时问题"}],["meta",{"property":"og:description","content":"基于EasyExcel+线程池解决POI文件导出时的内存溢出及超时问题 警告 内容来源网络，仅供学习使用。 不要相信文档中的链接、联系方式等！！！ 背景 在一个后台管理功能中，需要导出Excel，但是当处理大数据量的Excel文件导出时，常用的Apache POI库可能因其内存占用较高而导致内存溢出问题。同时，数据处理过程可能非常耗时，导致用户等待时间..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2026-09-07T16:27:23.000Z"}],["meta",{"property":"article:author","content":"Hollis"}],["meta",{"property":"article:modified_time","content":"2026-09-07T16:27:23.000Z"}]]},"git":{"createdTime":1788798443000,"updatedTime":1788798443000,"contributors":[{"name":"Yinx","username":"Yinx","email":"admin@yinx.eu.cc","commits":1,"url":"https://github.com/Yinx"}]},"readingTime":{"minutes":3.38,"words":1013},"filePathRelative":"java8gu/50.项目难点&亮点/基于EasyExcel+线程池解决POI文件导出时的内存溢出及超时问题.md","autoDesc":true}`),u={name:`基于EasyExcel+线程池解决POI文件导出时的内存溢出及超时问题.md`};function d(c,l,u,d,f,p){let m=o(`RouteLink`);return i(),r(`div`,null,[l[3]||=a(`<h1 id="基于easyexcel-线程池解决poi文件导出时的内存溢出及超时问题" tabindex="-1"><a class="header-anchor" href="#基于easyexcel-线程池解决poi文件导出时的内存溢出及超时问题"><span>基于EasyExcel+线程池解决POI文件导出时的内存溢出及超时问题</span></a></h1><div class="hint-container caution"><p class="hint-container-title">警告</p><p>内容来源网络，仅供学习使用。<br><br><strong>不要相信文档中的链接、联系方式等！！！</strong></p></div><h3 id="背景" tabindex="-1"><a class="header-anchor" href="#背景"><span>背景</span></a></h3><p>在一个后台管理功能中，需要导出Excel，但是当处理大数据量的Excel文件导出时，常用的Apache POI库可能因其内存占用较高而导致内存溢出问题。同时，数据处理过程可能非常耗时，导致用户等待时间过长或请求超时。为解决这些问题，采用了基于 EasyExcel 和线程池的解决方案。</p>`,4),s(`p`,null,[e(m,{to:`/java8gu/36.%E7%BA%BF%E4%B8%8A%E9%97%AE%E9%A2%98%E6%8E%92%E6%9F%A5/POI%E5%AF%BC%E8%87%B4%E5%86%85%E5%AD%98%E6%BA%A2%E5%87%BA%E6%8E%92%E6%9F%A5.html`},{default:t(()=>[...l[0]||=[n(`36.线上问题排查_POI导致内存溢出排查`,-1)]]),_:1})]),l[4]||=a(`<h3 id="技术选型" tabindex="-1"><a class="header-anchor" href="#技术选型"><span>技术选型</span></a></h3><p>Excel的导出很多种方案，包括了POI、EasyExcel还有Hutool中也有类似的功能。在市面上，用的最多的还是POI和EasyExcel，而在处理大文件这方面，EasyExcel更加适合一些。</p><p>在文件导出过程中，用异步的方式进行，用户不需要在页面一直等待。异步文件生成之后，把文件上传到云存储中，再通知用户去下载即可。</p><p>这里云存储选择阿里云的OSS，线程池异步处理采用@Async</p><p>用户通知这里就是用Spring Mail进行邮件发送即可。</p><h3 id="具体实现" tabindex="-1"><a class="header-anchor" href="#具体实现"><span>具体实现</span></a></h3><p>入口是一个Controller，主要接收用户的文件导出请求。</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>@RestController</span></span>
<span class="line"><span>@RequestMapping(&quot;/export&quot;)</span></span>
<span class="line"><span>public class DataExportController {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private ExcelExportService exportService;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @GetMapping(&quot;/data&quot;)</span></span>
<span class="line"><span>    public ResponseEntity&lt;String&gt; exportData() {</span></span>
<span class="line"><span>        List&lt;DataModel&gt; data = fetchData();</span></span>
<span class="line"><span>        String fileUrl = exportService.exportDataAsync(data);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return ResponseEntity.ok(&quot;导出任务开始，文件生成后会通知您下载链接&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private List&lt;DataModel&gt; fetchData() {</span></span>
<span class="line"><span>        // 获取需要导出的数据</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里做了一些简化，比如筛选条件、以及具体的获取数据部分我都省略了，大家可以根据自己的业务情况来实现。</p><p>下面是导出服务的具体实现:</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>@Service</span></span>
<span class="line"><span>public class ExcelExportService {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Async(&quot;exportExecutor&quot;)</span></span>
<span class="line"><span>    public String exportDataAsync(List&lt;DataModel&gt; data) {</span></span>
<span class="line"><span>        // 生成 Excel 文件并获取 InputStream</span></span>
<span class="line"><span>        InputStream fileContent = generateExcelFile(data);</span></span>
<span class="line"><span>        String fileName = &quot;data_&quot; + System.currentTimeMillis() + &quot;.xlsx&quot;;</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        // 上传到 OSS</span></span>
<span class="line"><span>        String fileUrl = ossService.uploadFile(fileName, fileContent);</span></span>
<span class="line"><span>        // 发送邮件</span></span>
<span class="line"><span>        emailService.sendEmail(data.getUserEmail(), &quot;文件导出通知&quot;, &quot;您的文件已导出，下载链接: &quot; + fileUrl);</span></span>
<span class="line"><span>        return fileUrl;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   private InputStream generateExcelFile(List&lt;DataModel&gt; data) {</span></span>
<span class="line"><span>        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();</span></span>
<span class="line"><span>        try {</span></span>
<span class="line"><span>            ExcelWriterBuilder writerBuilder = EasyExcel.write(outputStream, DataModel.class);</span></span>
<span class="line"><span>            writerBuilder.sheet(&quot;Data&quot;).doWrite(data);</span></span>
<span class="line"><span>        } catch (Exception e) {</span></span>
<span class="line"><span>            // 处理异常</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return new ByteArrayInputStream(outputStream.toByteArray());</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // DataModel 类定义</span></span>
<span class="line"><span>    public static class DataModel {</span></span>
<span class="line"><span>        //省略参数及setter/getter</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里面用到了@Async来实现一个异步处理，这里主要干了三件事：</p><ul><li>使用EasyExcel生成文件</li><li>OSS上传生成后的文件</li><li>给用户发邮件通知下载地址</li></ul><p>这里为了用到真正的线程池，制定了一个自定义的exportExecutor，实现如下:</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>@Configuration</span></span>
<span class="line"><span>@EnableAsync</span></span>
<span class="line"><span>public class AsyncExecutorConfig {</span></span>
<span class="line"><span>    @Bean(&quot;exportExecutor&quot;)</span></span>
<span class="line"><span>    public Executor exportExecutor() {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        ThreadFactory namedThreadFactory = new ThreadFactoryBuilder()</span></span>
<span class="line"><span>                .setNameFormat(&quot;registerSuccessExecutor-%d&quot;).build();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        ExecutorService executorService = new ThreadPoolExecutor(10, 20,</span></span>
<span class="line"><span>                0L, TimeUnit.MILLISECONDS,</span></span>
<span class="line"><span>                new LinkedBlockingQueue&lt;Runnable&gt;(1024), namedThreadFactory, new ThreadPoolExecutor.AbortPolicy());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return executorService;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>OSS上传服务部分代码实现如下，依赖阿里云OSS的API进行文件上传：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>import com.aliyun.oss.OSS;</span></span>
<span class="line"><span>import com.aliyun.oss.OSSClientBuilder;</span></span>
<span class="line"><span>import com.aliyun.oss.model.PutObjectRequest;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import java.io.InputStream;</span></span>
<span class="line"><span>import java.net.URL;</span></span>
<span class="line"><span>import java.util.Date;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class OssService {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private String endpoint = &quot;&lt;OSS_ENDPOINT&gt;&quot;;</span></span>
<span class="line"><span>    private String accessKeyId = &quot;&lt;ACCESS_KEY_ID&gt;&quot;;</span></span>
<span class="line"><span>    private String accessKeySecret = &quot;&lt;ACCESS_KEY_SECRET&gt;&quot;;</span></span>
<span class="line"><span>    private String bucketName = &quot;&lt;BUCKET_NAME&gt;&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public String uploadFile(String fileName, InputStream fileContent) {</span></span>
<span class="line"><span>        OSS ossClient = new OSSClientBuilder().build(endpoint, accessKeyId, accessKeySecret);</span></span>
<span class="line"><span>        try {</span></span>
<span class="line"><span>            ossClient.putObject(new PutObjectRequest(bucketName, fileName, fileContent));</span></span>
<span class="line"><span>            // 设置URL过期时间为1小时</span></span>
<span class="line"><span>            Date expiration = new Date(System.currentTimeMillis() + 3600 * 1000);</span></span>
<span class="line"><span>            URL url = ossClient.generatePresignedUrl(bucketName, fileName, expiration);</span></span>
<span class="line"><span>            return url.toString();</span></span>
<span class="line"><span>        } finally {</span></span>
<span class="line"><span>            if (ossClient != null) {</span></span>
<span class="line"><span>                ossClient.shutdown();</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>邮件发送部分实现：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>import org.springframework.beans.factory.annotation.Autowired;</span></span>
<span class="line"><span>import org.springframework.mail.javamail.JavaMailSender;</span></span>
<span class="line"><span>import org.springframework.mail.SimpleMailMessage;</span></span>
<span class="line"><span>import org.springframework.stereotype.Service;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Service</span></span>
<span class="line"><span>public class EmailNotificationService {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private JavaMailSender mailSender;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void sendEmail(String toAddress, String subject, String body) {</span></span>
<span class="line"><span>        SimpleMailMessage message = new SimpleMailMessage();</span></span>
<span class="line"><span>        message.setFrom(&quot;noreply@example.com&quot;);</span></span>
<span class="line"><span>        message.setTo(toAddress);</span></span>
<span class="line"><span>        message.setSubject(subject);</span></span>
<span class="line"><span>        message.setText(body);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        mailSender.send(message);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>还需要一些额外的Spring Mail的配置，配置到<strong>application.properties</strong>：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>spring.mail.host=smtp.example.com</span></span>
<span class="line"><span>spring.mail.port=587</span></span>
<span class="line"><span>spring.mail.username=user@example.com</span></span>
<span class="line"><span>spring.mail.password=yourpassword</span></span>
<span class="line"><span>spring.mail.properties.mail.smtp.auth=true</span></span>
<span class="line"><span>spring.mail.properties.mail.smtp.starttls.enable=true</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="学习资料" tabindex="-1"><a class="header-anchor" href="#学习资料"><span>学习资料</span></a></h3>`,22),s(`p`,null,[e(m,{to:`/java8gu/28.%E6%96%87%E4%BB%B6%E5%A4%84%E7%90%86/POI%E7%9A%84%E5%A6%82%E4%BD%95%E5%81%9A%E5%A4%A7%E6%96%87%E4%BB%B6%E7%9A%84%E5%86%99%E5%85%A5.html`},{default:t(()=>[...l[1]||=[n(`28.文件处理_POI的如何做大文件的写入`,-1)]]),_:1})]),s(`p`,null,[e(m,{to:`/java8gu/06.Spring/%E4%B8%BA%E4%BB%80%E4%B9%88%E4%B8%8D%E5%BB%BA%E8%AE%AE%E7%9B%B4%E6%8E%A5%E4%BD%BF%E7%94%A8Spring%E7%9A%84@Async.html`},{default:t(()=>[...l[2]||=[n(`06.Spring_为什么不建议直接使用Spring的@Async`,-1)]]),_:1})])])}var f=c(u,[[`render`,d]]);export{l as _pageData,f as default};