---
title: "给你一个文本文件,每一行包含一个_QQ号码,请用linux命令进行去重"
author: Hollis
category:
  - Java八股文
---

# 给你一个文本文件,每一行包含一个_QQ号码,请用linux命令进行去重

::: caution
内容来源网络，仅供学习使用。<br/>
**不要相信文档中的链接、联系方式等！！！**
:::

想要在linux文件中移除重复的行，可以用`sort -u`命令：

```sql
sort -u filename.txt -o filename.txt
```

-   `sort`：将文件的内容按字典顺序排序。
-   `-u`：表示去重（unique），会在排序后移除重复的行。
-   `filename.txt`：是包含 QQ 号码的文件名。
-   `-o filename.txt`：将去重后的内容直接写回到原文件。
