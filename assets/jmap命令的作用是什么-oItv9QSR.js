import{n as e,o as t,r as n}from"./app-CVL-wmV5.js";import{t as r}from"./plugin-vue_export-helper-BDNMzG2s.js";var i=JSON.parse(`{"path":"/java8gu/47.%E5%85%B6%E4%BB%96/jmap%E5%91%BD%E4%BB%A4%E7%9A%84%E4%BD%9C%E7%94%A8%E6%98%AF%E4%BB%80%E4%B9%88.html","title":"jmap命令的作用是什么","lang":"zh-CN","frontmatter":{"title":"jmap命令的作用是什么","author":"Hollis","category":["Java八股文"],"description":"jmap命令的作用是什么 警告 内容来源网络，仅供学习使用。 不要相信文档中的链接、联系方式等！！！ jmap是JDK自带的工具软件，主要用于打印指定Java进程的内存细节。也就是说可以使用jmap生成Heap Dump。如果程序内存不足或者频繁GC，很有可能存在内存泄露情况，这时候就要借助Java堆Dump查看对象的情况。 堆Dump是反应Java堆...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"jmap命令的作用是什么\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2026-09-07T16:27:23.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hollis\\"}]}"],["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/java8gu/47.%E5%85%B6%E4%BB%96/jmap%E5%91%BD%E4%BB%A4%E7%9A%84%E4%BD%9C%E7%94%A8%E6%98%AF%E4%BB%80%E4%B9%88.html"}],["meta",{"property":"og:site_name","content":"Java面试帮助文档"}],["meta",{"property":"og:title","content":"jmap命令的作用是什么"}],["meta",{"property":"og:description","content":"jmap命令的作用是什么 警告 内容来源网络，仅供学习使用。 不要相信文档中的链接、联系方式等！！！ jmap是JDK自带的工具软件，主要用于打印指定Java进程的内存细节。也就是说可以使用jmap生成Heap Dump。如果程序内存不足或者频繁GC，很有可能存在内存泄露情况，这时候就要借助Java堆Dump查看对象的情况。 堆Dump是反应Java堆..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2026-09-07T16:27:23.000Z"}],["meta",{"property":"article:author","content":"Hollis"}],["meta",{"property":"article:modified_time","content":"2026-09-07T16:27:23.000Z"}]]},"git":{"createdTime":1788798443000,"updatedTime":1788798443000,"contributors":[{"name":"Yinx","username":"Yinx","email":"admin@yinx.eu.cc","commits":1,"url":"https://github.com/Yinx"}]},"readingTime":{"minutes":5.84,"words":1751},"filePathRelative":"java8gu/47.其他/jmap命令的作用是什么.md","autoDesc":true}`),a={name:`jmap命令的作用是什么.md`};function o(r,i,a,o,s,c){return t(),e(`div`,null,[...i[0]||=[n(`<h1 id="jmap命令的作用是什么" tabindex="-1"><a class="header-anchor" href="#jmap命令的作用是什么"><span>jmap命令的作用是什么</span></a></h1><div class="hint-container caution"><p class="hint-container-title">警告</p><p>内容来源网络，仅供学习使用。<br><br><strong>不要相信文档中的链接、联系方式等！！！</strong></p></div><p>jmap是JDK自带的工具软件，主要用于打印指定Java进程的内存细节。也就是说可以使用jmap生成Heap Dump。<strong>如果程序内存不足或者频繁GC，很有可能存在内存泄露情况，这时候就要借助Java堆Dump查看对象的情况。</strong></p><blockquote><p>堆Dump是反应Java堆使用情况的内存镜像，其中主要包括系统信息、虚拟机属性、完整的线程Dump、所有类和对象的状态等。 一般，在内存不足、GC异常等情况下，我们就会怀疑有内存泄露。这个时候我们就可以制作堆Dump来查看具体情况。分析原因。</p></blockquote><p>需要注意：对线程/堆进行Dump时（执行jstack、jmap等命令时），是想要获取线程或者堆在特定时刻的状态和信息。为了确保这些信息的准确性和一致性，JVM在进行Dump时会暂停所有线程。也需要进入安全点才行。</p><h1 id="扩展知识" tabindex="-1"><a class="header-anchor" href="#扩展知识"><span>扩展知识</span></a></h1><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h2><p><strong>用法摘要</strong></p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>Usage:</span></span>
<span class="line"><span>    jmap [option] &lt;pid&gt;</span></span>
<span class="line"><span>        (to connect to running process)</span></span>
<span class="line"><span>    jmap [option] &lt;executable &lt;core&gt;</span></span>
<span class="line"><span>        (to connect to a core file)</span></span>
<span class="line"><span>    jmap [option] [server_id@]&lt;remote server IP or hostname&gt;</span></span>
<span class="line"><span>        (to connect to remote debug server)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>where &lt;option&gt; is one of:</span></span>
<span class="line"><span>    &lt;none&gt;               to print same info as Solaris pmap</span></span>
<span class="line"><span>    -heap                to print java heap summary</span></span>
<span class="line"><span>    -histo[:live]        to print histogram of java object heap; if the &quot;live&quot;</span></span>
<span class="line"><span>                         suboption is specified, only count live objects</span></span>
<span class="line"><span>    -permstat            to print permanent generation statistics</span></span>
<span class="line"><span>    -finalizerinfo       to print information on objects awaiting finalization</span></span>
<span class="line"><span>    -dump:&lt;dump-options&gt; to dump java heap in hprof binary format</span></span>
<span class="line"><span>                         dump-options:</span></span>
<span class="line"><span>                           live         dump only live objects; if not specified,</span></span>
<span class="line"><span>                                        all objects in the heap are dumped.</span></span>
<span class="line"><span>                           format=b     binary format</span></span>
<span class="line"><span>                           file=&lt;file&gt;  dump heap to &lt;file&gt;</span></span>
<span class="line"><span>                         Example: jmap -dump:live,format=b,file=heap.bin &lt;pid&gt;</span></span>
<span class="line"><span>    -F                   force. Use with -dump:&lt;dump-options&gt; &lt;pid&gt; or -histo</span></span>
<span class="line"><span>                         to force a heap dump or histogram when &lt;pid&gt; does not</span></span>
<span class="line"><span>                         respond. The &quot;live&quot; suboption is not supported</span></span>
<span class="line"><span>                         in this mode.</span></span>
<span class="line"><span>    -h | -help           to print this help message</span></span>
<span class="line"><span>    -J&lt;flag&gt;             to pass &lt;flag&gt; directly to the runtime system</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>指定进程号(pid)的进程 jmap [ option ] 指定核心文件 jmap [ option ] 指定远程调试服务器 jmap [ option ] [server-id@]</p><p>参数：</p><ul><li><p>option</p></li><li><p>选项参数是互斥的(不可同时使用)。想要使用选项参数，直接跟在命令名称后即可。</p></li><li><p>pid</p></li><li><p>需要打印配置信息的进程ID。该进程必须是一个Java进程。想要获取运行的Java进程列表，你可以使用jps。</p></li><li><p>executable</p></li><li><p>产生核心dump的Java可执行文件。</p></li><li><p>core</p></li><li><p>需要打印配置信息的核心文件。</p></li><li><p>remote-hostname-or-IP</p></li><li><p>远程调试服务器的(请查看jsadebugd)主机名或IP地址。</p></li><li><p>server-id</p></li><li><p>可选的唯一id，如果相同的远程主机上运行了多台调试服务器，用此选项参数标识服务器。</p></li></ul><p>选项:</p><ul><li><p><code>&lt;no option&gt;</code></p></li><li><p>如果使用不带选项参数的jmap打印共享对象映射，将会打印目标虚拟机中加载的每个共享对象的起始地址、映射大小以及共享对象文件的路径全称。这与Solaris的pmap工具比较相似。</p></li><li><p>-dump:[live,]format=b,file=<code>&lt;filename&gt;</code></p></li><li><p>以hprof二进制格式转储Java堆到指定filename的文件中。live子选项是可选的。如果指定了live子选项，堆中只有活动的对象会被转储。想要浏览heap dump，你可以使用jhat(Java堆分析工具)读取生成的文件。</p></li><li><p>-finalizerinfo</p></li><li><p>打印等待终结的对象信息。</p></li><li><p>-heap</p></li><li><p>打印一个堆的摘要信息，包括使用的GC算法、堆配置信息和generation wise heap usage。</p></li><li><p>-histo[:live]</p></li><li><p>打印堆的柱状图。其中包括每个Java类、对象数量、内存大小(单位：字节)、完全限定的类名。打印的虚拟机内部的类名称将会带有一个&#39;*&#39;前缀。如果指定了live子选项，则只计算活动的对象。</p></li><li><p>-permstat</p></li><li><p>打印Java堆内存的永久保存区域的类加载器的智能统计信息。对于每个类加载器而言，它的名称、活跃度、地址、父类加载器、它所加载的类的数量和大小都会被打印。此外，包含的字符串数量和大小也会被打印。</p></li><li><p>-F</p></li><li><p>强制模式。如果指定的pid没有响应，请使用jmap -dump或jmap -histo选项。此模式下，不支持live子选项。</p></li><li><p>-h</p></li><li><p>打印帮助信息。</p></li><li><p>-help</p></li><li><p>打印帮助信息。</p></li><li><p>-J<code>&lt;flag&gt;</code></p></li><li><p>指定传递给运行jmap的JVM的参数</p></li></ul><h2 id="典型用法" tabindex="-1"><a class="header-anchor" href="#典型用法"><span>典型用法</span></a></h2><p><strong>查看java 堆（heap）使用情况</strong>，执行命令： hollis@hos:~/workspace/design_apaas/apaasweb/control/bin$ jmap -heap 31846</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>Attaching to process ID 31846, please wait...</span></span>
<span class="line"><span>Debugger attached successfully.</span></span>
<span class="line"><span>Server compiler detected.</span></span>
<span class="line"><span>JVM version is 24.71-b01</span></span>
<span class="line"><span></span></span>
<span class="line"><span>using thread-local object allocation.</span></span>
<span class="line"><span>Parallel GC with 4 thread(s)//GC 方式</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Heap Configuration: //堆内存初始化配置</span></span>
<span class="line"><span>   MinHeapFreeRatio = 0 //对应jvm启动参数-XX:MinHeapFreeRatio设置JVM堆最小空闲比率(default 40)</span></span>
<span class="line"><span>   MaxHeapFreeRatio = 100 //对应jvm启动参数 -XX:MaxHeapFreeRatio设置JVM堆最大空闲比率(default 70)</span></span>
<span class="line"><span>   MaxHeapSize      = 2082471936 (1986.0MB) //对应jvm启动参数-XX:MaxHeapSize=设置JVM堆的最大大小</span></span>
<span class="line"><span>   NewSize          = 1310720 (1.25MB)//对应jvm启动参数-XX:NewSize=设置JVM堆的‘新生代’的默认大小</span></span>
<span class="line"><span>   MaxNewSize       = 17592186044415 MB//对应jvm启动参数-XX:MaxNewSize=设置JVM堆的‘新生代’的最大大小</span></span>
<span class="line"><span>   OldSize          = 5439488 (5.1875MB)//对应jvm启动参数-XX:OldSize=&lt;value&gt;:设置JVM堆的‘老生代’的大小</span></span>
<span class="line"><span>   NewRatio         = 2 //对应jvm启动参数-XX:NewRatio=:‘新生代’和‘老生代’的大小比率</span></span>
<span class="line"><span>   SurvivorRatio    = 8 //对应jvm启动参数-XX:SurvivorRatio=设置年轻代中Eden区与Survivor区的大小比值 </span></span>
<span class="line"><span>   PermSize         = 21757952 (20.75MB)  //对应jvm启动参数-XX:PermSize=&lt;value&gt;:设置JVM堆的‘永生代’的初始大小</span></span>
<span class="line"><span>   MaxPermSize      = 85983232 (82.0MB)//对应jvm启动参数-XX:MaxPermSize=&lt;value&gt;:设置JVM堆的‘永生代’的最大大小</span></span>
<span class="line"><span>   G1HeapRegionSize = 0 (0.0MB)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Heap Usage://堆内存使用情况</span></span>
<span class="line"><span>PS Young Generation</span></span>
<span class="line"><span>Eden Space://Eden区内存分布</span></span>
<span class="line"><span>   capacity = 33030144 (31.5MB)//Eden区总容量</span></span>
<span class="line"><span>   used     = 1524040 (1.4534378051757812MB)  //Eden区已使用</span></span>
<span class="line"><span>   free     = 31506104 (30.04656219482422MB)  //Eden区剩余容量</span></span>
<span class="line"><span>   4.614088270399305% used //Eden区使用比率</span></span>
<span class="line"><span>From Space:  //其中一个Survivor区的内存分布</span></span>
<span class="line"><span>   capacity = 5242880 (5.0MB)</span></span>
<span class="line"><span>   used     = 0 (0.0MB)</span></span>
<span class="line"><span>   free     = 5242880 (5.0MB)</span></span>
<span class="line"><span>   0.0% used</span></span>
<span class="line"><span>To Space:  //另一个Survivor区的内存分布</span></span>
<span class="line"><span>   capacity = 5242880 (5.0MB)</span></span>
<span class="line"><span>   used     = 0 (0.0MB)</span></span>
<span class="line"><span>   free     = 5242880 (5.0MB)</span></span>
<span class="line"><span>   0.0% used</span></span>
<span class="line"><span>PS Old Generation //当前的Old区内存分布</span></span>
<span class="line"><span>   capacity = 86507520 (82.5MB)</span></span>
<span class="line"><span>   used     = 0 (0.0MB)</span></span>
<span class="line"><span>   free     = 86507520 (82.5MB)</span></span>
<span class="line"><span>   0.0% used</span></span>
<span class="line"><span>PS Perm Generation//当前的 “永生代” 内存分布</span></span>
<span class="line"><span>   capacity = 22020096 (21.0MB)</span></span>
<span class="line"><span>   used     = 2496528 (2.3808746337890625MB)</span></span>
<span class="line"><span>   free     = 19523568 (18.619125366210938MB)</span></span>
<span class="line"><span>   11.337498256138392% used</span></span>
<span class="line"><span></span></span>
<span class="line"><span>670 interned Strings occupying 43720 bytes.</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>查看堆内存(histogram)中的对象数量及大小</strong>。执行命令： hollis@hos:~/workspace/design_apaas/apaasweb/control/bin$ jmap -histo 3331</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>num     #instances         #bytes  class name</span></span>
<span class="line"><span>编号     个数                字节     类名</span></span>
<span class="line"><span>----------------------------------------------</span></span>
<span class="line"><span>   1:             7        1322080  [I</span></span>
<span class="line"><span>   2:          5603         722368  &lt;methodKlass&gt;</span></span>
<span class="line"><span>   3:          5603         641944  &lt;constMethodKlass&gt;</span></span>
<span class="line"><span>   4:         34022         544352  java.lang.Integer</span></span>
<span class="line"><span>   5:           371         437208  &lt;constantPoolKlass&gt;</span></span>
<span class="line"><span>   6:           336         270624  &lt;constantPoolCacheKlass&gt;</span></span>
<span class="line"><span>   7:           371         253816  &lt;instanceKlassKlass&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>jmap -histo:live 这个命令执行，JVM会先触发gc，然后再统计信息。</p><p><strong>将内存使用的详细情况输出到文件</strong>，执行命令： hollis@hos:~/workspace/design_apaas/apaasweb/control/bin$ jmap -dump:format=b,file=heapDump 6900</p><p>然后用jhat命令可以参看 jhat -port 5000 heapDump 在浏览器中访问：<a href="http://localhost:5000/" target="_blank" rel="noopener noreferrer">http://localhost:5000/</a> 查看详细信息</p>`,22)]])}var s=r(a,[[`render`,o]]);export{i as _pageData,s as default};