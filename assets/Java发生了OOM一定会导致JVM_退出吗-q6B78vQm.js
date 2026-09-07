import{a as e,c as t,i as n,n as r,o as i,r as a,s as o,t as s}from"./app-CVL-wmV5.js";import{t as c}from"./plugin-vue_export-helper-BDNMzG2s.js";var l=JSON.parse(`{"path":"/java8gu/05.JVM/Java%E5%8F%91%E7%94%9F%E4%BA%86OOM%E4%B8%80%E5%AE%9A%E4%BC%9A%E5%AF%BC%E8%87%B4JVM_%E9%80%80%E5%87%BA%E5%90%97.html","title":"Java发生了OOM一定会导致JVM_退出吗","lang":"zh-CN","frontmatter":{"title":"Java发生了OOM一定会导致JVM_退出吗","author":"Hollis","category":["Java八股文"],"description":"Java发生了OOM一定会导致JVM_退出吗 警告 内容来源网络，仅供学习使用。 不要相信文档中的链接、联系方式等！！！ 我们在Java中遇到的比较严重的问题应该就是OutOfMemoryError，StackOverflowError等这些问题了，那么，如果遇到这些问题，JVM一定会退出吗？ 我们知道，JVM是一个操作系统的进程，而在Linux和其他...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java发生了OOM一定会导致JVM_退出吗\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2026-09-07T16:27:23.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hollis\\"}]}"],["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/java8gu/05.JVM/Java%E5%8F%91%E7%94%9F%E4%BA%86OOM%E4%B8%80%E5%AE%9A%E4%BC%9A%E5%AF%BC%E8%87%B4JVM_%E9%80%80%E5%87%BA%E5%90%97.html"}],["meta",{"property":"og:site_name","content":"Java面试帮助文档"}],["meta",{"property":"og:title","content":"Java发生了OOM一定会导致JVM_退出吗"}],["meta",{"property":"og:description","content":"Java发生了OOM一定会导致JVM_退出吗 警告 内容来源网络，仅供学习使用。 不要相信文档中的链接、联系方式等！！！ 我们在Java中遇到的比较严重的问题应该就是OutOfMemoryError，StackOverflowError等这些问题了，那么，如果遇到这些问题，JVM一定会退出吗？ 我们知道，JVM是一个操作系统的进程，而在Linux和其他..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2026-09-07T16:27:23.000Z"}],["meta",{"property":"article:author","content":"Hollis"}],["meta",{"property":"article:modified_time","content":"2026-09-07T16:27:23.000Z"}]]},"git":{"createdTime":1788798443000,"updatedTime":1788798443000,"contributors":[{"name":"Yinx","username":"Yinx","email":"admin@yinx.eu.cc","commits":1,"url":"https://github.com/Yinx"}]},"readingTime":{"minutes":7.93,"words":2379},"filePathRelative":"java8gu/05.JVM/Java发生了OOM一定会导致JVM_退出吗.md","autoDesc":true}`),u={name:`Java发生了OOM一定会导致JVM_退出吗.md`};function d(c,l,u,d,f,p){let m=o(`RouteLink`);return i(),r(`div`,null,[l[1]||=a(`<h1 id="java发生了oom一定会导致jvm-退出吗" tabindex="-1"><a class="header-anchor" href="#java发生了oom一定会导致jvm-退出吗"><span>Java发生了OOM一定会导致JVM_退出吗</span></a></h1><div class="hint-container caution"><p class="hint-container-title">警告</p><p>内容来源网络，仅供学习使用。<br><br><strong>不要相信文档中的链接、联系方式等！！！</strong></p></div><p><strong>我们在Java中遇到的比较严重的问题应该就是OutOfMemoryError，StackOverflowError等这些问题了，那么，如果遇到这些问题，JVM一定会退出吗？</strong></p><p>我们知道，JVM是一个操作系统的进程，而在Linux和其他类Unix操作系统中，当一个进程在执行非法内存访问时，如访问未分配给它的内存或者访问超出其允许范围的内存时，操作系统会向该程序发送SIGSEGV信号（“段错误”（Segmentation Fault）），若进程没有注册信号处理函数会直接退出，并产生<code>Segment Fault</code>错误提示。</p><p>而我们熟知的OutOfMemoryError，StackOverflowError就是<code>Segment Fault</code>的具体情况，不过，JVM被设计成能够容忍和隔离单个线程出现问题，当一个线程崩溃时，JVM会尝试将问题限定在该线程内，而不会影响其他线程或整个应用程序。</p><p><strong>也就是说，即使我们的线程执行过程中，发生了OutOfMemoryError，StackOverflowError等这些问题了，也并不代表JVM就一定要立即退出或者崩溃。</strong></p>`,6),s(`p`,null,[e(m,{to:`/java8gu/05.JVM/%E4%BB%80%E4%B9%88%E6%83%85%E5%86%B5%E4%BC%9A%E5%AF%BC%E8%87%B4JVM%E9%80%80%E5%87%BA.html`},{default:t(()=>[...l[0]||=[n(`05.JVM_什么情况会导致JVM退出`,-1)]]),_:1})]),l[2]||=a(`<p>主要是因为，OutOfMemoryError，StackOverflowError等这些我们看到的ERROR，已经是JVM在注册了SIGSEGV信号处理函数之后，经过自己的处理之后抛给我们的错误了。（这部分源码在文末）</p><p><strong>而OutOfMemoryError，StackOverflowError等这些错误抛给我们之后，其实都是可以被catch的，如果被catch掉之后，程序还是可以正常执行，而不会崩溃退出的。</strong></p><p>所以说，Java中的所有线程的崩溃，包括主线程、子线程，并不是说一定就会导致JVM直接崩溃的。</p><p>不过，有些JVM参数配置可能会在遇到OOM时导致JVM终止。例如，-XX:OnOutOfMemoryError=&quot;<code>&lt;cmd args&gt;</code>; <code>&lt;cmd args&gt;</code>&quot; 参数允许用户指定在遇到OOM错误时要执行的命令，这些命令可以包括终止JVM的命令。</p><p>如：<code>XX:OnOutOfMemoryError=&quot;kill -9 %p&quot;</code></p><h2 id="扩展知识" tabindex="-1"><a class="header-anchor" href="#扩展知识"><span>扩展知识</span></a></h2><h2 id="linux为何会对访问内存错误发出异常信号" tabindex="-1"><a class="header-anchor" href="#linux为何会对访问内存错误发出异常信号"><span>Linux为何会对访问内存错误发出异常信号？</span></a></h2><p>Linux通过MMU（内存管理单元）将物理内存转换为虚拟内存，确保每个进程能看到的地址空间都是相同的，并且是自己进程独享的。</p><p>32位下每个进程可访问从0到4G内存（用户空间3G，内核1G）。但实际上物理内存是所有进程共享的，所以内核需要有能力防止进程随意破坏不属于自己的内存空间。</p><p>使用C语言执行如下代码：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>int main(int argc,char **argv){</span></span>
<span class="line"><span>    int *p =(int *)0xC0000FEE; </span></span>
<span class="line"><span>    *p = 1024;</span></span>
<span class="line"><span>    return 0;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上代码由于非法向进程的内核地址空间<code>0xC0000FEE</code>处写入数据1024，操作系统会为该进程发出SIGSEGV的信号，由于我们没有实现信号处理函数，所以进程会默认被系统杀死，并向控制台输出<code>Segment Fault</code>错误。</p><h2 id="进程、主线程、子线程的关系" tabindex="-1"><a class="header-anchor" href="#进程、主线程、子线程的关系"><span>进程、主线程、子线程的关系</span></a></h2><p>在Linux下通过fork函数创建进程，fork创建进程时会将调用者（父进程）的页表、文件系统、打开文件句柄等信息复制一份，这是一个成本较大的操作，所以引入线程。</p><p>Linux的线程也是通过fork函数实现，其入参与进程略有不同（CLONE_VM | CLONE_FS | CLONE_FILES | CLONE_SIGHAND），这样使得所有子线程与进程共享页表、文件系统、打开句柄等信息，降低fork系统调用的成本。</p><p>进程和线程在Linux内核中都被抽象为一个task_struct的结构体，其中包括了页表、栈信息、文件描述符等很多信息，其中tgid保存了线程组id，如果tgid为pid则是所谓的主线程，而所有子线程tgid就是子线程的pid。本质上主线程和子线程没有任何区别（都是进程fork出来的，共享的信息都一样）。</p><p>我们看到线程的fork参数中有一个CLONE_SIGHAND，代表线程与进程共享信号处理函数。所以<strong>JVM内部在启动时注册的信号处理函数，会被所有线程复用。JVM注册的信号处理函数会抛出各种Error和Exception，但不会结束JVM进程。这样子线程崩溃了，也不会影响JVM中的其他线程。</strong></p><h2 id="jvm都处理了哪些异常信号" tabindex="-1"><a class="header-anchor" href="#jvm都处理了哪些异常信号"><span>JVM都处理了哪些异常信号？</span></a></h2><p>除了上面提到的SIGSEGV信号，JVM还注册了如下信号处理函数：</p><table><thead><tr><th>信号值</th><th>信号名称</th><th>作用</th></tr></thead><tbody><tr><td>11</td><td>SIGSEGV</td><td>试图访问未分配给自己的内存，或试图往没有写权限的内存地址写数据</td></tr><tr><td>13</td><td>SIGPIPE</td><td>管道破裂。这个信号通常在进程间通信产生，比如采用 FIFO (管道) 通信的两个进程，读管道没打开或者意外终止就往管道写，写进程会收到 SIGPIPE 信号。此外用 Socket 通信的两个进程，写进程在写 Socket 的时候，读进程已经终止。</td></tr><tr><td>7</td><td>SIGBUS</td><td>非法地址，包括内存地址对齐 (alignment) 出错。比如访问一个四个字长的整数，但其地址不是 4 的倍数。它与 SIGSEGV 的区别在于后者是由于对合法存储地址的非法访问触发的 (如访问不属于自己存储空间或只读存储空间)。</td></tr><tr><td>4</td><td>SIGILL</td><td>执行了非法指令。通常是因为可执行文件本身出现错误，或者试图执行数据段. 堆栈溢出时也有可能产生这个信号。</td></tr><tr><td>8</td><td>SIGFPE</td><td>在发生致命的算术运算错误时发出。不仅包括浮点运算错误，还包括溢出及除数为 0 等其它所有的算术的错误。</td></tr><tr><td>25</td><td>SIGXFSZ</td><td>当进程企图扩大文件以至于超过文件大小资源限制。</td></tr></tbody></table><p>JVM拦截这些信号的目的有三个：</p><ol><li>将异常转换成Error、Exception等信息抛给用户，如：StackOverFlowError、OutOfMemoryError、NullPointException等。</li><li>在对系统产生致命错误之前做一些保护性动作。</li><li>防止操作系统杀死JVM进程。</li></ol><p>对于其他未注册信号处理函数的异常信号，JVM会退出，并生成<code>hs_err_pid_xxx.log</code> crash文件用于分析异常。</p><h2 id="talk-is-cheap-show-me-the-code" tabindex="-1"><a class="header-anchor" href="#talk-is-cheap-show-me-the-code"><span>talk is cheap，show me the code</span></a></h2><p>最后我们从JVM的入口点向下查找注册信号处理函数的代码，由于篇幅原因省略无关代码，以下为jdk8-b08的源码，不同jdk版本信号处理逻辑略有不同。</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>// jdk/jdk/src/share/bin/main.c</span></span>
<span class="line"><span>int</span></span>
<span class="line"><span>main(int argc, char ** argv)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    int margc;</span></span>
<span class="line"><span>    char** margv;</span></span>
<span class="line"><span>    const jboolean const_javaw = JNI_FALSE;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    margc = argc;</span></span>
<span class="line"><span>    margv = argv;</span></span>
<span class="line"><span>#endif /* JAVAW */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// JLT_Launch函数开始初始化JVM虚拟机</span></span>
<span class="line"><span>    return JLI_Launch(margc, margv,</span></span>
<span class="line"><span>                   sizeof(const_jargs) / sizeof(char *), </span></span>
<span class="line"><span>                   ...);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>// jdk/jdk/src/share/bin/java.c</span></span>
<span class="line"><span>int</span></span>
<span class="line"><span>JLI_Launch(int argc, char ** argv,              /* main argc, argc */</span></span>
<span class="line"><span>        int jargc, const char** jargv,          /* java args */</span></span>
<span class="line"><span>      ...</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span> //省略无关代码..</span></span>
<span class="line"><span>    if (!LoadJavaVM(jvmpath, &amp;ifn)) { //加载JVM虚拟机</span></span>
<span class="line"><span>        return(6);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span> // ...</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>// jdk/hotspot/src/os/posix/launcher/java_md.c</span></span>
<span class="line"><span>jboolean</span></span>
<span class="line"><span>LoadJavaVM(const char *jvmpath, InvocationFunctions *ifn)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    //省略无关代码..</span></span>
<span class="line"><span>    //通过动态加载lib库的形式创建JVM</span></span>
<span class="line"><span>    ifn-&gt;CreateJavaVM = (CreateJavaVM_t)</span></span>
<span class="line"><span>      dlsym(libjvm, &quot;JNI_CreateJavaVM&quot;);</span></span>
<span class="line"><span>    // ...</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>// jdk/hotspot/src/share/vm/prims/jni.cpp</span></span>
<span class="line"><span>_JNI_IMPORT_OR_EXPORT_ jint JNICALL JNI_CreateJavaVM(JavaVM **vm, void **penv, void *args) {</span></span>
<span class="line"><span>  HS_DTRACE_PROBE3(hotspot_jni, CreateJavaVM__entry, vm, penv, args);</span></span>
<span class="line"><span>    //省略无关代码..</span></span>
<span class="line"><span>      result = Threads::create_vm((JavaVMInitArgs*) args, &amp;can_try_again); //创建JVM线程</span></span>
<span class="line"><span>    //...</span></span>
<span class="line"><span> }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span> // jdk/hotspot/src/share/vm/runtime/thread.cpp</span></span>
<span class="line"><span> jint Threads::create_vm(JavaVMInitArgs* args, bool* canTryAgain) {</span></span>
<span class="line"><span>  //省略无关代码..</span></span>
<span class="line"><span>  // Initialize the os module after parsing the args</span></span>
<span class="line"><span>  jint os_init_2_result = os::init_2(); //调用与操作系统有关的init_2方法，不同操作系统实现略有不同</span></span>
<span class="line"><span>  //...</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>// jdk/hotspot/src/os/linux/vm/os_linux.cpp</span></span>
<span class="line"><span>jint os::init_2(void)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    //省略无关代码..</span></span>
<span class="line"><span>    Linux::signal_sets_init(); //初始化信号集</span></span>
<span class="line"><span>    Linux::install_signal_handlers(); //注册信号处理函数，这里是重点</span></span>
<span class="line"><span>    //...</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void os::Linux::install_signal_handlers() {</span></span>
<span class="line"><span>  if (!signal_handlers_are_installed) {</span></span>
<span class="line"><span>    signal_handlers_are_installed = true;</span></span>
<span class="line"><span>    //省略无关代码..</span></span>
<span class="line"><span>    //以下是注册上面表格中列出的信号</span></span>
<span class="line"><span>    set_signal_handler(SIGSEGV, true);</span></span>
<span class="line"><span>    set_signal_handler(SIGPIPE, true);</span></span>
<span class="line"><span>    set_signal_handler(SIGBUS, true);</span></span>
<span class="line"><span>    set_signal_handler(SIGILL, true);</span></span>
<span class="line"><span>    set_signal_handler(SIGFPE, true);</span></span>
<span class="line"><span>    set_signal_handler(SIGXFSZ, true);</span></span>
<span class="line"><span>   //...</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>void os::Linux::set_signal_handler(int sig, bool set_installed) {</span></span>
<span class="line"><span> //省略无关代码..</span></span>
<span class="line"><span>  struct sigaction sigAct;</span></span>
<span class="line"><span>  sigfillset(&amp;(sigAct.sa_mask));</span></span>
<span class="line"><span>  sigAct.sa_handler = SIG_DFL;</span></span>
<span class="line"><span>  if (!set_installed) {</span></span>
<span class="line"><span>    sigAct.sa_flags = SA_SIGINFO|SA_RESTART;</span></span>
<span class="line"><span>  } else {</span></span>
<span class="line"><span>    sigAct.sa_sigaction = signalHandler; //注册信号处理函数，这里是重点</span></span>
<span class="line"><span>    sigAct.sa_flags = SA_SIGINFO|SA_RESTART;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>    //...</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>extern &quot;C&quot; JNIEXPORT int</span></span>
<span class="line"><span>JVM_handle_linux_signal(int signo, siginfo_t* siginfo,</span></span>
<span class="line"><span>                        void* ucontext, int abort_if_unrecognized); //声明信号处理逻辑，由外部文件导入</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void signalHandler(int sig, siginfo_t* info, void* uc) {</span></span>
<span class="line"><span>  assert(info != NULL &amp;&amp; uc != NULL, &quot;it must be old kernel&quot;);</span></span>
<span class="line"><span>  JVM_handle_linux_signal(sig, info, uc, true); //执行信号处理逻辑</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>// jdk/hotspot/src/os_cpu/linux_x86/vm/os_linux_x86.cpp</span></span>
<span class="line"><span>extern &quot;C&quot; JNIEXPORT int</span></span>
<span class="line"><span>JVM_handle_linux_signal(int sig,</span></span>
<span class="line"><span>                        siginfo_t* info,</span></span>
<span class="line"><span>                        void* ucVoid,</span></span>
<span class="line"><span>                        int abort_if_unrecognized) {</span></span>
<span class="line"><span>    //这个函数包含了最终被信号处理函数拦截执行的逻辑，比较长，这里摘出栈溢出、打印crash文件的代码</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    //以下是StackOverFlowError的异常处理流程，这里可以看到JVM会根据当前栈空间范围和线程类型thread_state()为用户代码创建的线程，抛出StackOverFlowError</span></span>
<span class="line"><span>    if (sig == SIGSEGV) {</span></span>
<span class="line"><span>      address addr = (address) info-&gt;si_addr;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      // check if fault address is within thread stack</span></span>
<span class="line"><span>      if (addr &lt; thread-&gt;stack_base() &amp;&amp;</span></span>
<span class="line"><span>          addr &gt;= thread-&gt;stack_base() - thread-&gt;stack_size()) {</span></span>
<span class="line"><span>        // stack overflow</span></span>
<span class="line"><span>        if (thread-&gt;in_stack_yellow_zone(addr)) {</span></span>
<span class="line"><span>          thread-&gt;disable_stack_yellow_zone();</span></span>
<span class="line"><span>          if (thread-&gt;thread_state() == _thread_in_Java) {</span></span>
<span class="line"><span>            // Throw a stack overflow exception.  Guard pages will be reenabled</span></span>
<span class="line"><span>            // while unwinding the stack.</span></span>
<span class="line"><span>            stub = SharedRuntime::continuation_for_implicit_exception(thread, pc, SharedRuntime::STACK_OVERFLOW);</span></span>
<span class="line"><span>          } else {</span></span>
<span class="line"><span>            // Thread was in the vm or native code.  Return and try to finish.</span></span>
<span class="line"><span>            return 1;</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>        }  //省略其他分支</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    //...</span></span>
<span class="line"><span>    //上面省略很多代码，在函数最后会打crash文件hs_err_pid_xxx.log</span></span>
<span class="line"><span>    VMError err(t, sig, pc, info, ucVoid);</span></span>
<span class="line"><span>    err.report_and_die();</span></span>
<span class="line"><span>  }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,32)])}var f=c(u,[[`render`,d]]);export{l as _pageData,f as default};