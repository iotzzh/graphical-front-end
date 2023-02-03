乾坤：https://qiankun.umijs.org/zh/guide#%E4%BB%80%E4%B9%88%E6%98%AF%E5%BE%AE%E5%89%8D%E7%AB%AF
microapp: https://zeroing.jd.com/docs.html#/
garfish: https://www.garfishjs.org/guide/
无界：https://wujie-micro.github.io/doc/

几种微前端方案探究：https://segmentfault.com/a/1190000039088868

NET6分布式/微服务开发框架： https://aspdotnetcore.net/


使用场景：如果你的团队成员多、项目类型多，并且想将其打造成「内聚的单个产品」
iframe：iframe在所有微前端方案中是最稳定的、上手难度最低的，但它有一些无法解决的问题，例如性能低、通信复杂、双滚动条、弹窗无法全局覆盖，它的成长性不高，
只适合简单的页面渲染。
sigle-spa： single-spa太过于基础，对原有项目的改造过多，成本太高；
阿里：乾坤，star: 13.9k, watching: 234, 1.8korks
京东: microapp，star: 3.8k, watching: 46, 407korks, 正式版还未提出
字节：garfish，star: 1.8k, watching: 23, 206korks
腾讯：无界，star: 2k, watching: 21, 261korks，很少有人问津，不做过多了解

几个大平台的微服务框架一直在不断的更新发展。

目前使用多个微前端框架并进行对比的并不多(对比资料不多)，可能每一个都能满足当下需求，而且上手难度与后期扩展可能不太容易。所以如果需要了解各家所长/所短，还需每一个都践行下~
阿里：乾坤 -> 字节：garfish -> 京东: microapp