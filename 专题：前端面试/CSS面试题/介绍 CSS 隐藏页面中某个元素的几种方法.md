# 介绍 CSS 隐藏页面中某个元素的几种方法

1. ## display: none（移出文档流）

2. ## opacity: 0 （仍在文档流中，当作用于其上的事件(如点击)仍有效）

3. ## visibility: hidden （仍在文档流中，**但作用于其上的事件(如点击)无效**）

4. ## content-visibility  （移出文档流，但是再次显示时消耗性能低）

5. ## 绝对定位于当前页面的不可见位置```position: absolute;top: -9000px;left: -9000px;```

6. ## 字体大小设置为 0/宽高设置为0

