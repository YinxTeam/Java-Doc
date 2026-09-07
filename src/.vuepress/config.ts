import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "Java面试帮助文档",
  description: "汇总整理来源网络的 Java 及相关技术面试学习文档",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
