# 说说地址栏输入 URL 敲下回车后发生了什么?

* 输入url （查看是否存在缓存，有缓存直接渲染）
* url解析
* DNS解析
* 建立连接（三次握手）
* http请求(客户端)
* 服务器响应
* 关闭连接
* 客户端得到资源后（可缓存）
* 浏览器渲染，解析html/css/js


#### 图解
<img src="../../1.图解前端基础入门概览/URL到界面显示.vsdx" />