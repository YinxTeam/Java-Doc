---
title: "where条件的顺序影响使用索引吗"
author: Hollis
category:
  - Java八股文
---

# where条件的顺序影响使用索引吗

::: caution
内容来源网络，仅供学习使用。<br/>
**不要相信文档中的链接、联系方式等！！！**
:::

假如有一个联合索引，（a,b），那么如下两个SQL的性能有差别么？

```java
SELECT * FROM my_table WHERE a = 'value' AND b = 'value2';
SELECT * FROM my_table WHERE b = 'value2' AND a = 'value';
```

其实是没啥影响的，**也就是说WHERE 子句后面多个字段的先后顺序通常不会影响查询的结果**。MySQL查询的WHERE子句只是用来过滤满足指定条件的行，而不涉及字段之间的顺序。

因为有查询优化器的存在，字段的先后顺序并不重要，不信的话可以explain看一下上面两个SQL的执行计划，都是可以命中(a,b)的联合索引的。
