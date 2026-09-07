import{n as e,o as t,r as n}from"./app-CVL-wmV5.js";import{t as r}from"./plugin-vue_export-helper-BDNMzG2s.js";var i=JSON.parse(`{"path":"/java8gu/04.Java%E5%B9%B6%E5%8F%91/ForkJoinPool%E5%92%8CThreadPoolExecutor%E5%8C%BA%E5%88%AB%E6%98%AF%E4%BB%80%E4%B9%88.html","title":"ForkJoinPool和ThreadPoolExecutor区别是什么","lang":"zh-CN","frontmatter":{"title":"ForkJoinPool和ThreadPoolExecutor区别是什么","author":"Hollis","category":["Java八股文"],"description":"ForkJoinPool和ThreadPoolExecutor区别是什么 警告 内容来源网络，仅供学习使用。 不要相信文档中的链接、联系方式等！！！ ForkJoinPool和ExecutorService都是Java中常用的线程池的实现，他们主要在实现方式上有一定的区别，所以也就会同时带来的适用场景上面的区别。 首先在实现方式上，ForkJoinPo...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ForkJoinPool和ThreadPoolExecutor区别是什么\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2026-09-07T16:27:23.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hollis\\"}]}"],["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/java8gu/04.Java%E5%B9%B6%E5%8F%91/ForkJoinPool%E5%92%8CThreadPoolExecutor%E5%8C%BA%E5%88%AB%E6%98%AF%E4%BB%80%E4%B9%88.html"}],["meta",{"property":"og:site_name","content":"Java面试帮助文档"}],["meta",{"property":"og:title","content":"ForkJoinPool和ThreadPoolExecutor区别是什么"}],["meta",{"property":"og:description","content":"ForkJoinPool和ThreadPoolExecutor区别是什么 警告 内容来源网络，仅供学习使用。 不要相信文档中的链接、联系方式等！！！ ForkJoinPool和ExecutorService都是Java中常用的线程池的实现，他们主要在实现方式上有一定的区别，所以也就会同时带来的适用场景上面的区别。 首先在实现方式上，ForkJoinPo..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2026-09-07T16:27:23.000Z"}],["meta",{"property":"article:author","content":"Hollis"}],["meta",{"property":"article:modified_time","content":"2026-09-07T16:27:23.000Z"}]]},"git":{"createdTime":1788798443000,"updatedTime":1788798443000,"contributors":[{"name":"Yinx","username":"Yinx","email":"admin@yinx.eu.cc","commits":1,"url":"https://github.com/Yinx"}]},"readingTime":{"minutes":5.23,"words":1568},"filePathRelative":"java8gu/04.Java并发/ForkJoinPool和ThreadPoolExecutor区别是什么.md","autoDesc":true}`),a={name:`ForkJoinPool和ThreadPoolExecutor区别是什么.md`};function o(r,i,a,o,s,c){return t(),e(`div`,null,[...i[0]||=[n(`<h1 id="forkjoinpool和threadpoolexecutor区别是什么" tabindex="-1"><a class="header-anchor" href="#forkjoinpool和threadpoolexecutor区别是什么"><span>ForkJoinPool和ThreadPoolExecutor区别是什么</span></a></h1><div class="hint-container caution"><p class="hint-container-title">警告</p><p>内容来源网络，仅供学习使用。<br><br><strong>不要相信文档中的链接、联系方式等！！！</strong></p></div><p>ForkJoinPool和ExecutorService都是Java中常用的线程池的实现，他们主要在实现方式上有一定的区别，所以也就会同时带来的适用场景上面的区别。</p><p>首先在<strong>实现方式</strong>上，<strong>ForkJoinPool 是基于工作窃取（Work-Stealing）算法实现的线程池</strong>，ForkJoinPool 中每个线程都有自己的工作队列，用于存储待执行的任务。当一个线程执行完自己的任务之后，会从其他线程的工作队列中窃取任务执行，以此来实现任务的动态均衡和线程的利用率最大化。</p><p><strong>ThreadPoolExecutor 是基于任务分配（Task-Assignment）算法实现的线程池</strong>，ThreadPoolExecutor 中线程池中有一个共享的工作队列，所有任务都将提交到这个队列中。线程池中的线程会从队列中获取任务执行，如果队列为空，则线程会等待，直到队列中有任务为止。</p><p>ForkJoinPool 中的任务通常是一些可以分割成多个子任务的任务，例如快速排序。每个任务都可以分成两个或多个子任务，然后由不同的线程来执行这些子任务。在这个过程中，ForkJoinPool 会自动管理任务的执行、分割和合并，从而实现任务的动态分配和最优化执行。</p><figure><img src="/assets/ForkJoinPool%E5%92%8CThreadPoolExecutor%E5%8C%BA%E5%88%AB%E6%98%AF%E4%BB%80%E4%B9%88_-1-DnYMgL0e.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><p>ForkJoinPool 中的工作线程是一种特殊的线程，与普通线程池中的工作线程有所不同。它们会自动地创建和销毁，以及自动地管理线程的数量和调度。这种方式可以降低线程池的管理成本，提高线程的利用率和并行度。</p><p>ThreadPoolExecutor 中线程的创建和销毁是静态的，线程池创建后会预先创建一定数量的线程，根据任务的数量动态调整线程的利用率，不会销毁线程。如果线程长时间处于空闲状态，可能会占用过多的资源。</p><p>在<strong>使用场景</strong>上也有区别，ThreadPoolExecutor <strong>适合处理 IO 密集型或普通 CPU 任务</strong>，如网络请求处理、数据库访问、Web 服务请求调度。尤其是大量独立、不需要拆分的小任务。</p><p>ForkJoinPool <strong>适合于 CPU 密集型、可拆分的并行计算任务，</strong></p><ol><li><strong>大任务分解为小任务</strong>：适用于可以递归分解为更小任务的大型任务。ForkJoinPool 通过分而治之的方式，将大任务拆分为小任务，这些小任务可以并行处理。</li><li><strong>计算密集型任务</strong>：对于需要大量计算且能够并行化的任务，ForkJoinPool 是一个理想的选择。它能够有效利用多核处理器的优势来加速处理过程。</li><li><strong>递归算法的并行化</strong>：适合于可以用递归方法解决的问题，如快速排序、归并排序、图像处理中的分区算法等。</li><li><strong>数据聚合任务</strong>：在处理需要聚合多个数据源结果的任务时（例如，遍历树结构并聚合结果），ForkJoinPool 提供了有效的方式来并行化这一过程。</li></ol><h1 id="扩展知识" tabindex="-1"><a class="header-anchor" href="#扩展知识"><span>扩展知识</span></a></h1><h2 id="为什么completablefuture使用forkjoinpool" tabindex="-1"><a class="header-anchor" href="#为什么completablefuture使用forkjoinpool"><span>为什么CompletableFuture使用ForkJoinPool</span></a></h2><p>CompletableFuture 使用 ForkJoinPool 而不是 ExecutorService 的原因主要是因为它的执行模型和任务分割方式与 ForkJoinPool 更加匹配。</p><p>在 CompletableFuture 中，一个任务可以分割成多个子任务，并且这些子任务之间可以存在依赖关系。而<strong>ForkJoinPool 本身就是一种支持任务分割和合并的线程池实现，能够自动地处理任务的拆分和合并</strong>。而且，<strong>ForkJoinPool 还有一种工作窃取算法，能够自动地调整线程的负载，提高线程的利用率和并行度。</strong></p><p><strong>ForkJoinPool 还有一个特点，就是它的线程池大小是动态调整的。</strong>当任务比较少时，线程池的大小会自动缩小，从而减少了线程的数量和占用的系统资源。当任务比较多时，线程池的大小会自动增加，从而保证任务能够及时地得到执行。</p><p>如果使用 ExecutorService 来执行这些任务，需要手动地创建线程池、任务队列和任务执行策略，并且需要手动地处理任务的拆分和合并，实现起来相对比较复杂。</p><p>因此，ForkJoinPool 更加适合 CompletableFuture 的执行模型。</p><h2 id="forkjoinpool使用示例" tabindex="-1"><a class="header-anchor" href="#forkjoinpool使用示例"><span>ForkJoinPool使用示例</span></a></h2><p>下面是一个使用 ForkJoinPool 实现快排的代码：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-plain"><span class="line"><span>import java.util.concurrent.RecursiveAction;</span></span>
<span class="line"><span>import java.util.concurrent.ForkJoinPool;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class ParallelQuickSort extends RecursiveAction {</span></span>
<span class="line"><span>    private int[] array;</span></span>
<span class="line"><span>    private int left;</span></span>
<span class="line"><span>    private int right;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public ParallelQuickSort(int[] array, int left, int right) {</span></span>
<span class="line"><span>        this.array = array;</span></span>
<span class="line"><span>        this.left = left;</span></span>
<span class="line"><span>        this.right = right;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private int partition(int left, int right) {</span></span>
<span class="line"><span>        int pivot = array[right];</span></span>
<span class="line"><span>        int i = left - 1;</span></span>
<span class="line"><span>        for (int j = left; j &lt; right; j++) {</span></span>
<span class="line"><span>            if (array[j] &lt;= pivot) {</span></span>
<span class="line"><span>                i++;</span></span>
<span class="line"><span>                // Swap array[i] and array[j]</span></span>
<span class="line"><span>                int temp = array[i];</span></span>
<span class="line"><span>                array[i] = array[j];</span></span>
<span class="line"><span>                array[j] = temp;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        // Swap array[i+1] and array[right] (or pivot)</span></span>
<span class="line"><span>        int temp = array[i + 1];</span></span>
<span class="line"><span>        array[i + 1] = array[right];</span></span>
<span class="line"><span>        array[right] = temp;</span></span>
<span class="line"><span>        return i + 1;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    protected void compute() {</span></span>
<span class="line"><span>        if (left &lt; right) {</span></span>
<span class="line"><span>            int partitionIndex = partition(left, right);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // Parallelize the two subtasks</span></span>
<span class="line"><span>            ParallelQuickSort leftTask = new ParallelQuickSort(array, left, partitionIndex - 1);</span></span>
<span class="line"><span>            ParallelQuickSort rightTask = new ParallelQuickSort(array, partitionIndex + 1, right);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            leftTask.fork();</span></span>
<span class="line"><span>            rightTask.fork();</span></span>
<span class="line"><span>            </span></span>
<span class="line"><span>            leftTask.join();</span></span>
<span class="line"><span>            rightTask.join();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static void parallelQuickSort(int[] array) {</span></span>
<span class="line"><span>        ForkJoinPool pool = new ForkJoinPool();</span></span>
<span class="line"><span>        pool.invoke(new ParallelQuickSort(array, 0, array.length - 1));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        int[] array = { 12, 35, 87, 26, 9, 28, 7 };</span></span>
<span class="line"><span>        parallelQuickSort(array);</span></span>
<span class="line"><span>        for (int i : array) {</span></span>
<span class="line"><span>            System.out.print(i + &quot; &quot;);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ParallelQuickSort 类继承自 RecursiveAction。在这个类中，compute 方法实现了快速排序的逻辑，包括分区（partition 方法）和递归调用。对于每个递归调用，它创建了一个新的 ParallelQuickSort 实例，并通过 fork 方法将其提交给 ForkJoinPool 以异步执行。</p><blockquote><p>RecursiveAction 是用于创建没有返回值的递归任务的基类。</p></blockquote><p>这个实现通过将快速排序的左右部分分解为独立的任务来实现并行化。在大数据集上，这可以有效利用多核处理器，从而加快排序过程。然而，对于小数组，传统的快速排序可能更高效，因为并行化引入的额外开销可能不值得。</p>`,25)]])}var s=r(a,[[`render`,o]]);export{i as _pageData,s as default};