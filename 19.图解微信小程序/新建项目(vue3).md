# uni-app + vue3 + pinia + TS项目搭建

## 准备条件
vs code、git、微信开发者工具最新稳定版、node（16.17.0）、nvm、nrm

## 搭建项目
#### 新建项目（vue3+TS）（命令下载失败，直接从gitlab下载：https://gitee.com/dcloud/uni-preset-vue/repository/archive/vite-ts.zip）
由于使用HbuilderX新建项目只能新建默认版本，所以尽可能使用命令行去创建。具体参考地址：https://uniapp.dcloud.net.cn/quickstart-cli.html
```cmd
npx degit dcloudio/uni-preset-vue#vite-ts my-vue3-project
```

#### 规范约束（代码规范，提交规范）
eslint、primitter、ts、husky

#### assets（资源文件：图标/图片/文字等）
#### utils （里面放置常用工具）
#### locales（语言切换)
#### constants（全局数据：枚举数据、常量）
#### styles（UI组件选择，公共样式，覆盖组件的全局样式，scss）
#### layout（项目布局框架）
#### components （全局公共组件）
#### router（路由）
#### api（数据请求管理） 
#### mock（mock数据，方便前端开发）
#### stores （数据持久管理，刷新不消失）
#### environment（部署后的环境控制）
#### 配置文件（打包文件相关配置）

## 参考地址
#### 新建项目
https://blog.csdn.net/weixin_42401447/article/details/124429761
https://juejin.cn/post/7120138192267214856
https://juejin.cn/post/7120138192267214856


