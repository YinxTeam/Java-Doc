import{n as e,o as t,r as n}from"./app-CVL-wmV5.js";import{t as r}from"./plugin-vue_export-helper-BDNMzG2s.js";var i=JSON.parse(`{"path":"/java8gu/24.%E9%AB%98%E5%B9%B6%E5%8F%91/%E4%BB%80%E4%B9%88%E6%98%AF%E8%87%AA%E9%80%82%E5%BA%94%E9%99%90%E6%B5%81.html","title":"什么是自适应限流","lang":"zh-CN","frontmatter":{"title":"什么是自适应限流","author":"Hollis","category":["Java八股文"],"description":"什么是自适应限流 警告 内容来源网络，仅供学习使用。 不要相信文档中的链接、联系方式等！！！ 所谓自适应限流，就是限流器结合服务器实例的Load、CPU、内存、接口的RT、QP、并发线程数等指标，进行的一种自适应的流控策略。即通过监控这些指标的变化，来动态的调整限流，来达到保证系统稳定性的目的。 这种思想也有很多其他的应用，比如自适应扩容，也是根据机器...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"什么是自适应限流\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2026-09-07T16:27:23.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hollis\\"}]}"],["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/java8gu/24.%E9%AB%98%E5%B9%B6%E5%8F%91/%E4%BB%80%E4%B9%88%E6%98%AF%E8%87%AA%E9%80%82%E5%BA%94%E9%99%90%E6%B5%81.html"}],["meta",{"property":"og:site_name","content":"Java面试帮助文档"}],["meta",{"property":"og:title","content":"什么是自适应限流"}],["meta",{"property":"og:description","content":"什么是自适应限流 警告 内容来源网络，仅供学习使用。 不要相信文档中的链接、联系方式等！！！ 所谓自适应限流，就是限流器结合服务器实例的Load、CPU、内存、接口的RT、QP、并发线程数等指标，进行的一种自适应的流控策略。即通过监控这些指标的变化，来动态的调整限流，来达到保证系统稳定性的目的。 这种思想也有很多其他的应用，比如自适应扩容，也是根据机器..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2026-09-07T16:27:23.000Z"}],["meta",{"property":"article:author","content":"Hollis"}],["meta",{"property":"article:modified_time","content":"2026-09-07T16:27:23.000Z"}]]},"git":{"createdTime":1788798443000,"updatedTime":1788798443000,"contributors":[{"name":"Yinx","username":"Yinx","email":"admin@yinx.eu.cc","commits":1,"url":"https://github.com/Yinx"}]},"readingTime":{"minutes":2.86,"words":857},"filePathRelative":"java8gu/24.高并发/什么是自适应限流.md","autoDesc":true}`),a={name:`什么是自适应限流.md`};function o(r,i,a,o,s,c){return t(),e(`div`,null,[...i[0]||=[n(`<h1 id="什么是自适应限流" tabindex="-1"><a class="header-anchor" href="#什么是自适应限流"><span>什么是自适应限流</span></a></h1><div class="hint-container caution"><p class="hint-container-title">警告</p><p>内容来源网络，仅供学习使用。<br><br><strong>不要相信文档中的链接、联系方式等！！！</strong></p></div><p>所谓自适应限流，就是限流器结合服务器实例的Load、CPU、内存、接口的RT、QP、并发线程数等指标，进行的一种自适应的流控策略。即通过监控这些指标的变化，来动态的调整限流，来达到保证系统稳定性的目的。</p><p>这种思想也有很多其他的应用，比如自适应扩容，也是根据机器的Load，CPU等情况，进行动态的扩容等。</p><p>其实主要就是要给系统定义一个基线，或者水位，一旦这些指标达到了水位之上，比如CPU利用率超过60%，那么就开启自适应限流，通过限流的方式来保护系统不被打垮。</p><p>著名的Sentinel限流框架就支持自适应限流，目前他支持以下的阈值类型：</p><ul><li>Load（仅对 Linux/Unix-like 机器生效）：当系统 load1 超过阈值，且系统当前的并发线程数超过系统容量时才会触发系统保护。系统容量由系统的 maxQps * minRt 计算得出。设定参考值一般是 CPU cores * 2.5。</li><li>CPU usage（1.5.0+ 版本）：当系统 CPU 使用率超过阈值即触发系统保护（取值范围 0.0-1.0）。</li><li>RT：当单台机器上所有入口流量的平均 RT 达到阈值即触发系统保护，单位是毫秒。</li><li>线程数：当单台机器上所有入口流量的并发线程数达到阈值即触发系统保护。</li><li>入口 QPS：当单台机器上所有入口流量的 QPS 达到阈值即触发系统保护。</li></ul><p>以下是Sentinel给的一个自适应限流的示例，供参考：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>/*</span></span>
<span class="line"><span> * Copyright 1999-2018 Alibaba Group Holding Ltd.</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> * Licensed under the Apache License, Version 2.0 (the &quot;License&quot;);</span></span>
<span class="line"><span> * you may not use this file except in compliance with the License.</span></span>
<span class="line"><span> * You may obtain a copy of the License at</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> *      http://www.apache.org/licenses/LICENSE-2.0</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> * Unless required by applicable law or agreed to in writing, software</span></span>
<span class="line"><span> * distributed under the License is distributed on an &quot;AS IS&quot; BASIS,</span></span>
<span class="line"><span> * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.</span></span>
<span class="line"><span> * See the License for the specific language governing permissions and</span></span>
<span class="line"><span> * limitations under the License.</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>package com.alibaba.csp.sentinel.demo.system;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import java.util.ArrayList;</span></span>
<span class="line"><span>import java.util.Collections;</span></span>
<span class="line"><span>import java.util.List;</span></span>
<span class="line"><span>import java.util.concurrent.TimeUnit;</span></span>
<span class="line"><span>import java.util.concurrent.atomic.AtomicInteger;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import com.alibaba.csp.sentinel.util.TimeUtil;</span></span>
<span class="line"><span>import com.alibaba.csp.sentinel.Entry;</span></span>
<span class="line"><span>import com.alibaba.csp.sentinel.EntryType;</span></span>
<span class="line"><span>import com.alibaba.csp.sentinel.SphU;</span></span>
<span class="line"><span>import com.alibaba.csp.sentinel.slots.block.BlockException;</span></span>
<span class="line"><span>import com.alibaba.csp.sentinel.slots.system.SystemRule;</span></span>
<span class="line"><span>import com.alibaba.csp.sentinel.slots.system.SystemRuleManager;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * @author jialiang.linjl</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>public class SystemGuardDemo {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private static AtomicInteger pass = new AtomicInteger();</span></span>
<span class="line"><span>    private static AtomicInteger block = new AtomicInteger();</span></span>
<span class="line"><span>    private static AtomicInteger total = new AtomicInteger();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private static volatile boolean stop = false;</span></span>
<span class="line"><span>    private static final int threadCount = 100;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private static int seconds = 60 + 40;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static void main(String[] args) throws Exception {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        tick();</span></span>
<span class="line"><span>        initSystemRule();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        for (int i = 0; i &lt; threadCount; i++) {</span></span>
<span class="line"><span>            Thread entryThread = new Thread(new Runnable() {</span></span>
<span class="line"><span>                @Override</span></span>
<span class="line"><span>                public void run() {</span></span>
<span class="line"><span>                    while (true) {</span></span>
<span class="line"><span>                        Entry entry = null;</span></span>
<span class="line"><span>                        try {</span></span>
<span class="line"><span>                            entry = SphU.entry(&quot;methodA&quot;, EntryType.IN);</span></span>
<span class="line"><span>                            pass.incrementAndGet();</span></span>
<span class="line"><span>                            try {</span></span>
<span class="line"><span>                                TimeUnit.MILLISECONDS.sleep(20);</span></span>
<span class="line"><span>                            } catch (InterruptedException e) {</span></span>
<span class="line"><span>                                // ignore</span></span>
<span class="line"><span>                            }</span></span>
<span class="line"><span>                        } catch (BlockException e1) {</span></span>
<span class="line"><span>                            block.incrementAndGet();</span></span>
<span class="line"><span>                            try {</span></span>
<span class="line"><span>                                TimeUnit.MILLISECONDS.sleep(20);</span></span>
<span class="line"><span>                            } catch (InterruptedException e) {</span></span>
<span class="line"><span>                                // ignore</span></span>
<span class="line"><span>                            }</span></span>
<span class="line"><span>                        } catch (Exception e2) {</span></span>
<span class="line"><span>                            // biz exception</span></span>
<span class="line"><span>                        } finally {</span></span>
<span class="line"><span>                            total.incrementAndGet();</span></span>
<span class="line"><span>                            if (entry != null) {</span></span>
<span class="line"><span>                                entry.exit();</span></span>
<span class="line"><span>                            }</span></span>
<span class="line"><span>                        }</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            });</span></span>
<span class="line"><span>            entryThread.setName(&quot;working-thread&quot;);</span></span>
<span class="line"><span>            entryThread.start();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private static void initSystemRule() {</span></span>
<span class="line"><span>        SystemRule rule = new SystemRule();</span></span>
<span class="line"><span>        // max load is 3</span></span>
<span class="line"><span>        rule.setHighestSystemLoad(3.0);</span></span>
<span class="line"><span>        // max cpu usage is 60%</span></span>
<span class="line"><span>        rule.setHighestCpuUsage(0.6);</span></span>
<span class="line"><span>        // max avg rt of all request is 10 ms</span></span>
<span class="line"><span>        rule.setAvgRt(10);</span></span>
<span class="line"><span>        // max total qps is 20</span></span>
<span class="line"><span>        rule.setQps(20);</span></span>
<span class="line"><span>        // max parallel working thread is 10</span></span>
<span class="line"><span>        rule.setMaxThread(10);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        SystemRuleManager.loadRules(Collections.singletonList(rule));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private static void tick() {</span></span>
<span class="line"><span>        Thread timer = new Thread(new TimerTask());</span></span>
<span class="line"><span>        timer.setName(&quot;sentinel-timer-task&quot;);</span></span>
<span class="line"><span>        timer.start();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    static class TimerTask implements Runnable {</span></span>
<span class="line"><span>        @Override</span></span>
<span class="line"><span>        public void run() {</span></span>
<span class="line"><span>            System.out.println(&quot;begin to statistic!!!&quot;);</span></span>
<span class="line"><span>            long oldTotal = 0;</span></span>
<span class="line"><span>            long oldPass = 0;</span></span>
<span class="line"><span>            long oldBlock = 0;</span></span>
<span class="line"><span>            while (!stop) {</span></span>
<span class="line"><span>                try {</span></span>
<span class="line"><span>                    TimeUnit.SECONDS.sleep(1);</span></span>
<span class="line"><span>                } catch (InterruptedException e) {</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>                long globalTotal = total.get();</span></span>
<span class="line"><span>                long oneSecondTotal = globalTotal - oldTotal;</span></span>
<span class="line"><span>                oldTotal = globalTotal;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                long globalPass = pass.get();</span></span>
<span class="line"><span>                long oneSecondPass = globalPass - oldPass;</span></span>
<span class="line"><span>                oldPass = globalPass;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                long globalBlock = block.get();</span></span>
<span class="line"><span>                long oneSecondBlock = globalBlock - oldBlock;</span></span>
<span class="line"><span>                oldBlock = globalBlock;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                System.out.println(seconds + &quot;, &quot; + TimeUtil.currentTimeMillis() + &quot;, total:&quot;</span></span>
<span class="line"><span>                    + oneSecondTotal + &quot;, pass:&quot;</span></span>
<span class="line"><span>                    + oneSecondPass + &quot;, block:&quot; + oneSecondBlock);</span></span>
<span class="line"><span>                if (seconds-- &lt;= 0) {</span></span>
<span class="line"><span>                    stop = true;</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            System.exit(0);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9)]])}var s=r(a,[[`render`,o]]);export{i as _pageData,s as default};