## 什么是 DOCTYPE， 有何作用？
### 答：
1. htm中的doctype是document type (文档类型) 的缩写，
2. 严格意义上，它不是一个HTML标签，只是一个用于告诉浏览器当前HTMl版本的声明。
3. 如果不指定，浏览器会开启兼容模式，不仅降低效率还可能会存在问题（怪异模式）

#### HTML4声明方式
```html	
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">
```

#### HTML声明方式
```html
<!DOCTYPE html>
```

#### DTD简单了解下
https://tools.city/q-and-a/igty8zve

## src 和 href 的区别
### 相同点
src和href都是HTML中特定元素的属性，都可以用来引入外部的资源。

### 不同点
* src：全称source，它通常用于img、video、audio、script元素，通过src指向请求外部资源的来源地址，指向的内容会嵌入到文档中当前标签所在位置，在请求src资源时，它会将资源下载并应用到文档内，比如说：js脚本、img图片、frame等元素。**当浏览器解析到该元素时，会暂停其它资源下载，**直到将该资源加载、编译、执行完毕。这也是为什么将js脚本放在底部而不是头部的原因。

* href：全称hyper reference，意味着超链接，指向网络资源，**当浏览器识别到它指向的⽂件时，就会并⾏下载资源，不会停⽌对当前⽂档的处理，**通常用于a、link元素。


##  img上 title 与 alt
* alt：全称alternate，切换的意思，如果无法显示图像，浏览器将显示alt指定的内容
* title：当鼠标移动到元素上时显示title的内容

区别：
一般当鼠标滑动到元素身上的时候显示title，而alt是img标签特有的属性，是图片内容的等价描述，用于图片无法加载时显示，这样用户还能看到关于丢失了什么东西的一些信息，相对来说比较友好。
