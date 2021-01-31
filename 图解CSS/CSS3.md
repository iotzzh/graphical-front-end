## 简介
继CSS2之后，CSS3增加了很多新的特性，虽然W3C仍在规范中，但是很多新的CSS3属性已经在很多现代浏览器中得到了支持。

## CSS3边框
在CSS3中，可以创建圆角边框，添加边框阴影，设置边框图片，利用到的属性有：
* border-radius（圆角）
> 语法： border-radius: 1-4 length|% / 1-4 length|%

注意: 每个半径的四个值的顺序是：左上角，右上角，右下角，左下角。如果省略左下角，右上角是相同的。如果省略右下角，左上角是相同的。如果省略右上角，左上角是相同的。

* box-shadow（阴影）
语法
> box-shadow: h-shadow v-shadow blur spread color inset;

注意：boxShadow 属性把**一个或多个**下拉阴影添加到框上。该属性是一个用逗号分隔阴影的列表，每个阴影由 2-4 个长度值、一个可选的颜色值和一个可选的 inset 关键字来规定。省略长度的值是 0。

|  值   | 说明  |
|  ----  | ----  |
|h-shadow|必需的。水平阴影的位置。允许负值|
|v-shadow|必需的。垂直阴影的位置。允许负值|
|blur|可选。模糊距离|
|spread|可选。阴影的大小|
|color|可选。阴影的颜色。在CSS颜色值寻找颜色值的完整列表|
|inset|可选。从外层的阴影（开始时）改变阴影内侧阴影|


* border-image（边框图片）
语法
> border-image: source slice width outset repeat|initial|inherit;

|  值   | 说明  |
|  ----  | ----  |
|border-image-source|必用于指定要用于绘制边框的图像的位置|
|border-image-slice|图像边界向内偏移|
|border-image-width|图像边界的宽度|
|border-image-outset|用于指定在边框外部绘制 border-image-area 的量|
|border-image-repeat|用于设置图像边界是否应重复（repeat）、拉伸（stretch）或铺满（round）。|

###### 实例
<div style="text-align: center"><img src="./asset/CSS3/css3-border.jpg" ></div>

试一试: [http://jsrun.net/q2aKp/edit](http://jsrun.net/q2aKp/edit)

## CSS3背景
CSS3 中包含几个新的背景属性，提供更大背景元素控制。
* background-image(with multiple backgrounds)

* background-size
> 语法：background-size: length|percentage|cover|contain;

 background-size指定背景图像的大小。CSS3以前，背景图像大小由图像的实际大小决定。
 CSS3中可以指定背景图片，让我们重新在不同的环境中指定背景图片的大小。您可以指定像素或百分比大小。
 你指定的大小是相对于父元素的宽度和高度的百分比的大小。
* background-origin

> 语法: background-origin: padding-box|border-box|content-box;

background-origin 属性指定了背景图像的位置区域。
content-box, padding-box,和 border-box区域内可以放置背景图像。

* background-clip

> 语法: background-clip: border-box|padding-box|content-box;

CSS3中background-clip背景剪裁属性是从指定位置开始绘制。

###### 实例
<div style="text-align: center"><img src="./asset/CSS3/CSS3-background.jpg" ></div>

试一试: [http://jsrun.net/i6aKp/edit](http://jsrun.net/i6aKp/edit)

## CSS3 渐变（Gradients）
CSS3 渐变（gradients）可以让你在两个或多个指定的颜色之间显示平稳的过渡。
CSS3渐变分为线性渐变和径向渐变。
线性渐变（Linear Gradients）- 向下/向上/向左/向右/对角方向
径向渐变（Radial Gradients）- 由它们的中心定义

#### 线性渐变
了解Photoshop的朋友都线性渐变应该很不陌生，就是线性的从一种颜色过渡到另一种颜色。
为了创建一个线性渐变，你必须至少定义两种颜色节点。颜色节点即你想要呈现平稳过渡的颜色。同时，你也可以设置一个起点和一个方向（或一个角度）。
> 语法：
background-image: linear-gradient(direction, color-stop1, color-stop2, ...);

线性渐变默认是“从上到下”， 也可以设置“从左到右”、“对角”、“使用角度”、“使用多个颜色节点”、“使用透明度”、“重复的线性渐变”。

###### 实例
<div style="text-align: center"><img src="./asset/CSS3/CSS3-linear-gradient.jpg" ></div>

试一试: [http://jsrun.net/K8aKp/edit](http://jsrun.net/K8aKp/edit)

#### 径向渐变
径向渐变由它的中心定义。
为了创建一个径向渐变，你也必须至少定义两种颜色节点。颜色节点即你想要呈现平稳过渡的颜色。同时，你也可以指定渐变的中心、形状（圆形或椭圆形）、大小。默认情况下，渐变的中心是 center（表示在中心点），渐变的形状是 ellipse（表示椭圆形），渐变的大小是 farthest-corner（表示到最远的角落）。

> 语法
background-image: radial-gradient(shape size at position, start-color, ..., last-color);

径向渐变默认是“颜色节点均匀分布”， 也可以设置“颜色节点不均匀分布”，“设置形状”（circle|ellipse），“重复径向”。
参数说明：
size 参数定义了渐变的大小。它可以有四个值：closest-side、farthest-side、closest-corner、farthest-corner

###### 实例
<div style="text-align: center"><img src="./asset/CSS3/CSS3-radial-gradient.jpg" ></div>

试一试: [http://jsrun.net/i8aKp/edit](http://jsrun.net/i8aKp/edit)

## 
