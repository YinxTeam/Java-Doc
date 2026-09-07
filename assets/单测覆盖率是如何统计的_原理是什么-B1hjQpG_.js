import{n as e,o as t,r as n}from"./app-CVL-wmV5.js";import{t as r}from"./plugin-vue_export-helper-BDNMzG2s.js";var i=JSON.parse(`{"path":"/java8gu/34.%E5%8D%95%E5%85%83%E6%B5%8B%E8%AF%95/%E5%8D%95%E6%B5%8B%E8%A6%86%E7%9B%96%E7%8E%87%E6%98%AF%E5%A6%82%E4%BD%95%E7%BB%9F%E8%AE%A1%E7%9A%84_%E5%8E%9F%E7%90%86%E6%98%AF%E4%BB%80%E4%B9%88.html","title":"单测覆盖率是如何统计的_原理是什么","lang":"zh-CN","frontmatter":{"title":"单测覆盖率是如何统计的_原理是什么","author":"Hollis","category":["Java八股文"],"description":"单测覆盖率是如何统计的_原理是什么 警告 内容来源网络，仅供学习使用。 不要相信文档中的链接、联系方式等！！！ 我们在跑单元测试的时候，经常会有一个覆盖率的指标，甚至很多发布过程要求覆盖率一定要达到一定的百分比。 那么，单测覆盖率是如何统计出来的呢？底层的实现原理是什么呢？ 单测覆盖率的统计原理其实是通过字节码插桩实现的， 即在编译时在代码中插入一些特...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"单测覆盖率是如何统计的_原理是什么\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2026-09-07T16:27:23.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hollis\\"}]}"],["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/java8gu/34.%E5%8D%95%E5%85%83%E6%B5%8B%E8%AF%95/%E5%8D%95%E6%B5%8B%E8%A6%86%E7%9B%96%E7%8E%87%E6%98%AF%E5%A6%82%E4%BD%95%E7%BB%9F%E8%AE%A1%E7%9A%84_%E5%8E%9F%E7%90%86%E6%98%AF%E4%BB%80%E4%B9%88.html"}],["meta",{"property":"og:site_name","content":"Java面试帮助文档"}],["meta",{"property":"og:title","content":"单测覆盖率是如何统计的_原理是什么"}],["meta",{"property":"og:description","content":"单测覆盖率是如何统计的_原理是什么 警告 内容来源网络，仅供学习使用。 不要相信文档中的链接、联系方式等！！！ 我们在跑单元测试的时候，经常会有一个覆盖率的指标，甚至很多发布过程要求覆盖率一定要达到一定的百分比。 那么，单测覆盖率是如何统计出来的呢？底层的实现原理是什么呢？ 单测覆盖率的统计原理其实是通过字节码插桩实现的， 即在编译时在代码中插入一些特..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2026-09-07T16:27:23.000Z"}],["meta",{"property":"article:author","content":"Hollis"}],["meta",{"property":"article:modified_time","content":"2026-09-07T16:27:23.000Z"}]]},"git":{"createdTime":1788798443000,"updatedTime":1788798443000,"contributors":[{"name":"Yinx","username":"Yinx","email":"admin@yinx.eu.cc","commits":1,"url":"https://github.com/Yinx"}]},"readingTime":{"minutes":3.45,"words":1034},"filePathRelative":"java8gu/34.单元测试/单测覆盖率是如何统计的_原理是什么.md","autoDesc":true}`),a={name:`单测覆盖率是如何统计的_原理是什么.md`};function o(r,i,a,o,s,c){return t(),e(`div`,null,[...i[0]||=[n(`<h1 id="单测覆盖率是如何统计的-原理是什么" tabindex="-1"><a class="header-anchor" href="#单测覆盖率是如何统计的-原理是什么"><span>单测覆盖率是如何统计的_原理是什么</span></a></h1><div class="hint-container caution"><p class="hint-container-title">警告</p><p>内容来源网络，仅供学习使用。<br><br><strong>不要相信文档中的链接、联系方式等！！！</strong></p></div><p>我们在跑单元测试的时候，经常会有一个覆盖率的指标，甚至很多发布过程要求覆盖率一定要达到一定的百分比。</p><p>那么，单测覆盖率是如何统计出来的呢？底层的实现原理是什么呢？</p><p>单测覆盖率的统计原理其实是通过<strong>字节码插桩</strong>实现的， 即在编译时在代码中插入一些特殊的监控代码，来记录测试执行过程中代码的执行情况，进而得出代码的覆盖情况。这些监控代码可以在运行时记录代码被执行的情况，也可以在编译时生成代码覆盖率报告。</p><p>常见的单测覆盖率统计工具有JaCoCo、Emma、Cobertura等，这些工具可以在编译时或者运行时对代码进行插桩，记录代码的执行情况，并生成覆盖率报告。</p><h1 id="扩展知识" tabindex="-1"><a class="header-anchor" href="#扩展知识"><span>扩展知识</span></a></h1><h2 id="字节码插桩" tabindex="-1"><a class="header-anchor" href="#字节码插桩"><span>字节码插桩</span></a></h2><p>Java字节码插桩技术是指在编译期或运行期，通过修改Java字节码的方式，向代码中插入额外的代码，<strong>它可以在不改变Java源代码的情况下，对Java应用程序的运行时行为进行监控、调试、分析和优化等</strong>。例如实现性能监控、代码覆盖率检测、代码安全扫描等。</p><p>字节码插桩技术通常包括以下几个步骤：</p><ol><li>生成目标类的字节码，这可以通过Java编译器（如javac）或其他工具（如AspectJ）完成。</li><li>解析字节码，识别需要插桩的代码区域（如方法、循环、异常处理等）。</li><li>插入额外的字节码，这些字节码通常是通过编写Java代码来实现的，并通过字节码生成库（如ASM、Javassist等）生成对应的字节码。</li><li>将修改后的字节码重新写回到磁盘或内存中，以便后续使用。</li></ol><p>假设我们需要对一个Java方法进行性能监控，我们可以在方法的入口和出口处分别插入计时器，来统计方法的执行时间。这可以通过以下代码实现：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>public class Monitor {</span></span>
<span class="line"><span>    public static void start() {</span></span>
<span class="line"><span>        long startTime = System.nanoTime();</span></span>
<span class="line"><span>        // 将起始时间记录到ThreadLocal中，以便在方法返回时进行计算</span></span>
<span class="line"><span>        ThreadLocalHolder.set(&quot;startTime&quot;, startTime);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static void end() {</span></span>
<span class="line"><span>        long endTime = System.nanoTime();</span></span>
<span class="line"><span>        // 获取起始时间</span></span>
<span class="line"><span>        long startTime = (long) ThreadLocalHolder.get(&quot;startTime&quot;);</span></span>
<span class="line"><span>        // 计算方法执行时间</span></span>
<span class="line"><span>        long elapsedTime = endTime - startTime;</span></span>
<span class="line"><span>        System.out.println(&quot;Method execution time: &quot; + elapsedTime + &quot;ns&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class Example {</span></span>
<span class="line"><span>    public void method() {</span></span>
<span class="line"><span>        Monitor.start();</span></span>
<span class="line"><span>        // 执行方法逻辑</span></span>
<span class="line"><span>        Monitor.end();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是，如果需要对多个方法进行性能监控，就需要在每个方法中分别插入Monitor.start()和Monitor.end()，这样会导致代码重复，可读性差，并且容易漏掉一些方法。这时，我们就可以使用字节码插桩技术，在编译期或者运行期，自动向每个方法的入口和出口处插入Monitor.start()和Monitor.end()，来实现代码的统一性和可维护性。</p><p>具体实现可以使用字节码生成库ASM或Javassist来实现，这里以ASM为例。下面的代码演示了如何使用ASM对Example类进行字节码插桩：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>import org.objectweb.asm.ClassReader;</span></span>
<span class="line"><span>import org.objectweb.asm.ClassVisitor;</span></span>
<span class="line"><span>import org.objectweb.asm.ClassWriter;</span></span>
<span class="line"><span>import org.objectweb.asm.MethodVisitor;</span></span>
<span class="line"><span>import org.objectweb.asm.Opcodes;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import java.io.IOException;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class MonitorTransformer implements Opcodes {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static byte[] transform(byte[] classBytes) throws IOException {</span></span>
<span class="line"><span>        ClassReader reader = new ClassReader(classBytes);</span></span>
<span class="line"><span>        ClassWriter writer = new ClassWriter(ClassWriter.COMPUTE_MAXS | ClassWriter.COMPUTE_FRAMES);</span></span>
<span class="line"><span>        ClassVisitor visitor = new ClassVisitor(Opcodes.ASM5, writer) {</span></span>
<span class="line"><span>            @Override</span></span>
<span class="line"><span>            public MethodVisitor visitMethod(int access, String name, String desc, String signature, String[] exceptions) {</span></span>
<span class="line"><span>                MethodVisitor mv = super.visitMethod(access, name, desc, signature, exceptions);</span></span>
<span class="line"><span>                // 只为指定方法添加字节码插桩</span></span>
<span class="line"><span>                if (&quot;method&quot;.equals(name) &amp;&amp; &quot;()V&quot;.equals(desc)) {</span></span>
<span class="line"><span>                    mv = new MethodVisitor(Opcodes.ASM5, mv) {</span></span>
<span class="line"><span>                        @Override</span></span>
<span class="line"><span>                        public void visitCode() {</span></span>
<span class="line"><span>                            super.visitCode();</span></span>
<span class="line"><span>                            // 在方法执行之前插入字节码</span></span>
<span class="line"><span>                            mv.visitMethodInsn(INVOKESTATIC, &quot;Monitor&quot;, &quot;start&quot;, &quot;()V&quot;, false);</span></span>
<span class="line"><span>                        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                        @Override</span></span>
<span class="line"><span>                        public void visitInsn(int opcode) {</span></span>
<span class="line"><span>                            // 在方法返回之前插入字节码</span></span>
<span class="line"><span>                            if (opcode == RETURN) {</span></span>
<span class="line"><span>                                mv.visitMethodInsn(INVOKESTATIC, &quot;Monitor&quot;, &quot;end&quot;, &quot;()V&quot;, false);</span></span>
<span class="line"><span>                            }</span></span>
<span class="line"><span>                            super.visitInsn(opcode);</span></span>
<span class="line"><span>                        }</span></span>
<span class="line"><span>                    };</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>                return mv;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        };</span></span>
<span class="line"><span>        reader.accept(visitor, ClassReader.EXPAND_FRAMES);</span></span>
<span class="line"><span>        return writer.toByteArray();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16)]])}var s=r(a,[[`render`,o]]);export{i as _pageData,s as default};