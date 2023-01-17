多数浏览器使用单一进程来处理用户界面(UI)刷新和Javascript脚本执行，所以同一时刻只能做一件事情。JS执行过程耗时越久，浏览器等待响应的时间就越长。

```<script>```标签每次出现，都霸道地让页面等待脚本的解析和执行。无论当前的JS代码是内嵌的还是包含在外链文件中，页面的下载和渲染都必须停下来等待脚本执行完成。

在使用src属性加载JS的过程中，浏览器必须先花时间下载外链文件的代码（可并行下载，不同浏览器默认并行数不同），然后解释执行，在这个过程中，页面渲染和用户交互是完全被阻塞的。

###### 推荐
将所有的```<script>```标签尽可能放到```<body```标签的底部，以尽量减少对整个页面下载的影响。（将脚本放在底部）

#### 组织脚本
由于每个```<script></script>```标签初始下载时都会阻塞页面渲染，所以减少页面包含的```<script></script>```标签数量有助于改善这一情况。包括外链/内嵌脚本。

#### 无阻塞脚本
async/defer, 并行下载，async：加载完成后执行；defer: 等待页面完成后执行（onload之前）。

###### XMLHttpRequest请求添加

#### 动态脚本
```javascript
var script = document.createElement('script');

script.type = 'text/javascript';
script.src = 'xxxx.js';
script.onload = function () {};

document.body.appendChild(script);
```

#### 推荐无阻塞模式
1. 先添加动态加载所需的代码
2. 加载初始化页面所需的剩下代码

css文件是并行下载的，不会阻塞页面的其他进程。

###### LABjs允许使用wait()方法来指定哪些文件需要等待其他文件。

## 总结
1. ```<script></script>```尽可能放到页面底部
2. 合并脚本
3. 无阻塞下载: defer属性/动态创建并执行/XMLHttpRequest下载注入