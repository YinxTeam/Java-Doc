---
title: "OpenFeign_是如何实现负载均衡的"
author: Hollis
category:
  - Java八股文
---

# OpenFeign_是如何实现负载均衡的

::: caution
内容来源网络，仅供学习使用。<br/>
**不要相信文档中的链接、联系方式等！！！**
:::

**OpenFeign自己是没有负载均衡的能力的，他的负载均衡是通过与 Spring Cloud LoadBalancer 集成的（以前支持Ribbon）。**

**主要流程**：OpenFeign会通过服务名称（如 `hollis-service`）查询服务发现系统（如 Eureka、Consul）中注册的服务实例。Spring Cloud LoadBalancer会选择一个服务实例进行请求，并通过负载均衡策略（如轮询、随机等）来决定哪个实例处理请求。Feign 客户端会通过 Spring Cloud LoadBalancer 获取到的服务实例的地址，向该实例发起 HTTP 请求。

[07.SpringCloud_LoadBalancer和Ribbon的区别是什么_为什么用他替代Ribbon](./LoadBalancer和Ribbon的区别是什么_为什么用他替代Ribbon.md)

[07.SpringCloud_LoadBalancer支持哪些负载均衡策略_如何修改](./LoadBalancer支持哪些负载均衡策略_如何修改.md)
