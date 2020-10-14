在学习一门新的知识之前，我们需要先知道，它是什么，为什么使用，和怎么使用，也就是常说的3W（what， why，how）。
## CSS是什么？
CSS全称为Cascading Style Sheets，中文翻译为“层叠样式表”，简称CSS样式表，是一种用来表现HTML或XML等文件样式的计算机语言，是一种标准的样式表语言，用于描述网页的表示，即布局和格式。

由于网页是由HTML结构组成的，所有通过"是什么"我们可以猜测到"为什么"，即CSS与HTML的关系。
## 为什么使用CSS？
在《图解HTML》的学习中让我们知道，HTML可以搭建出网页的骨架，虽然也具有一些样式的属性，但都是极其简单的。如果我们想画出一张漂亮的网页，那么我们就离不开CSS的配合。它具有对网页的布局、颜色、背景、宽度、高度、字体进行控制，让网页按您的美工设计布局的更加美观漂亮。
对比如下：
<div style="text-align: center"><img src="./asset/CSS简介/img/cssInAction.gif" ></div>

## CSS如何使用
在使用前，我们需要了解下CSS使用的使用规则，即语法。
```HTML
选择器 { 属性1：属性值； 属性2：属性值}
```

既然已经知道了CSS的基础语法，我们看看它的如何配合HTML或者说HTML是如何使用CSS让自身变得更加美丽动人的。

CSS可以通过四种方式添加到HTML中
* 内联样式：在HTML元素中使用`style`属性
* 内部样式表： 在HTML文档头部`<head>`区域使用`<style>`元素来包含CSS
* 外部引用：使用外部CSS文件
* @import url():使用@import指令（一种at规则）（要注意的是，@import指令必须出现在样式表中其他样式之前，否则@import引用的样式表不会被加载）

示例：
index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        @import url("./import.css");
    </style>
    <link rel="stylesheet" href="./index.css">
    <style>
        .internal-style {
            font-style: italic; color:burlywood;
        }
    </style>
</head>
<body>
    <div style="font-style: italic; color: blueviolet;">内联样式- 在HTML元素中使用"style" 属性</div>
    <div class="internal-style">内部样式表 -在HTML文档头部</div>
    <div class="external-style">外部引用 - 使用外部 CSS 文件</div>
    <div class="import">测试import方法引入</div>
</body>
</html>
```

import.css
```css
.import{ color: blue; }
```

index.css
```css
.external-style { 
    font-style: italic; 
    color: red;
}
```
<div style="text-align: center"><img src="./asset/CSS简介/img/CSS引入.jpg" ></div>

由上，我们已经对CSS的3w有了一个简单的认知。显然，CSS并不仅此，接下来，文章会从选择器、字体、框模型、背景与边框、定位等逐步了解CSS的工作原理及提供的API。