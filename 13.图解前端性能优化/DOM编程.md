尽管DOM是个与语言无关的API，它在浏览器中的接口却是用JS实现的。浏览器中通常会把DOM和JS独立实现。也就是有独立的渲染引擎和JS引擎。两个独立的功能只要通过接口链接就有性能消耗。（比喻：两座岛屿，之间使用收费桥梁连接）

遍历数组比遍历集合快，因此如果先将集合元素拷贝到数组中，那么访问它的属性会更快。

当遍历一个集合时，第一优化原则是把集合存储在局部变量中，并把length缓存在循环外部。

## 重排/重绘
浏览器下载完页面中的所有组件-HTML/JS/css/图片之后会解析生成两个内部数据结构：
DOM树：表示页面结构（HTML）
渲染树：表示DOM节点如何显示（CSS）

当DOM的变化影响了元素的几何属性（宽/高），浏览器需要重新计算元素的几何属性，同样其他元素的几何属性和位置也会收到影响。浏览器会使渲染树中受到影响的部分失效，并重新构造渲染树。这个过程称为“重排(reflow)”。完成重排后，浏览器会重新绘制受影响的部分到屏幕中，该过程成为“重绘(repaint)”。

#### 重排发生在何时
1. 添加/删除可见的DOM元素
2. 元素位置改变
3. 元素尺寸改变(包括：外边距/内边距/边框厚度/宽度/高度等属性)
4. 内容改变：例如：文本改变或图片被另一个不同尺寸的图片替代
5. 页面渲染器初始化
6. 浏览器窗口尺寸改变

有些改变会触发整个页面的重排：例如当滚动条出现时

批量修改dom，不要一点一点修改

一个减少重排的方法是通过改变display属性，临时从文档中移除，然后再恢复它。
另一种减少重排的办法是，在文档之外创建并更新文档片段，然后把它附加到原始列表中。文档片段是个轻量级的document对象，它的设计初衷就是为了完成这类任务 - 更新和移动节点。

## 让元素脱离动画流
1. 使用绝对位置定位页面上的动画元素，将其脱离文档流

## 事件委托
每绑定以恶事件处理器都是有代价的，它要么是加重了页面负担（更多的标签或JS代码），要么是增加了运行期的执行时间。需要访问和修改的DOM元素越多，应用程序也就越慢，特别是事件绑定通常发生在onload时，此时对每一个富交互应用的网页来说都是一个拥堵的时刻。

## 总结
1. 最小化DOM访问次数，尽可能在JS端处理
2. 如果需要多次访问某个DOM节点，请使用局部变量存储它的引用
3. 小心处理HTML集合，因为它实时联系着底层文档。把集合的长度缓存到一个变量中，并在迭代中使用它。如果需要经常操作集合，建议把它拷贝到一个数组中。
4. 如果可能的话，使用速度更快的API，比如querySelectorAll()和firstElementChild。
5. 要留意重排和重绘，批量修改样式时，“离线”操作DOM树，使用缓存，并减少访问布局信息的次数。
6. 动画中使用绝对定位，使用拖放代理。
7. 使用事件委托来减少事件处理器的数量。