---
title: "a,b都有索引,select_from_table_where_a_=_xx_order_by_b。走哪个索引"
author: Hollis
category:
  - Java八股文
---

# a,b都有索引,select_from_table_where_a_=_xx_order_by_b。走哪个索引

::: caution
内容来源网络，仅供学习使用。<br/>
**不要相信文档中的链接、联系方式等！！！**
:::

不一定。有可能走a的索引，有可能走b的索引。

[08.MySQL_为什么MySQL会选错索引,如何解决](./为什么MySQL会选错索引,如何解决.md)

在上面的文章介绍过，mysql选择索引的时候，有很多考量，包括了基数性、选择性、order by等。优化器会根据成本预估选择一个他认为合适的索引。

如果 `WHERE a = xx` 的过滤条件的选择性较高（即能过滤掉大量行），MySQL 可能优先使用 `a` 的索引来快速定位满足条件的记录。

如果 `WHERE a = xx` 的过滤条件的选择性较低（即 `a = xx` 会匹配大量的记录），而 `ORDER BY b` 对结果的顺序要求较高，MySQL 可能使用 `b` 的索引来避免排序操作。
