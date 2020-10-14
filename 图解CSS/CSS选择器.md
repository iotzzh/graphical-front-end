在CSS简介一节中，我们了解到，CSS的语法如下：
```HTML
选择器 { 属性1：属性值； 属性2：属性值}
```
那么有哪些选择器可以使用呢？
* 上下文选择符：基于祖先或同胞元素选择一个元素
* ID和类选择符：基于id和class属性的值选择元素
* 属性选择符：基于属性的有无和特征选择元素

## 上下文选择符
#### 基于祖先
语法
```css
祖先标签 子标签 {声明}
```
或
```css
祖先标签 ... 父标签 子标签 {声明}
```
这里的祖先标签可以是子标签的父标签，也可以是子标签的任何一个上级标签。
示例：
```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        article h3 { color: red; }
        article section p {color: blue;}
    </style>
</head>
<body>
    <article>
        <header>
            <h3>Header</h3>
        </header>
        <section>
            <p>文章段落</p>
        </section>
        <footer>
            <span>
                Footer
            </span>
        </footer>
    </article>
</body>
```
<div style="text-align: center"><img src="./asset/选择器/img/基于祖先选择.jpg"></div>

###### 子选择符>
语法：
```css
父标签>子标签
```
此时父标签必须包裹着子标签，也就是子标签的父元素只能是父标签。
示例：
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        article>h3 { color: red; }
        article>section>p {color: blue;}
    </style>
</head>
<body>
    <article>
        <header>
            <h3>Header</h3>
        </header>
        <section>
            <p>文章段落</p>
        </section>
        <footer>
            <span>
                Footer
            </span>
        </footer>
    </article>
</body>
</html>

```

<div style="text-align: center"><img src="./asset/选择器/img/子选择符.jpg"></div>
该示例只是在基于父标签选择符的示例上加了子选择符，跨级选择的header中的还h3就不起作用了。

###### 紧邻同胞选择符+
语法：
```css
标签1 + 标签2
```
标签2必须紧跟在其同胞标签1的后面。
示例：
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        header+section { color: red; }  /*起作用*/
        header+footer {color: blue;} /*不起作用*/
    </style>
</head>
<body>
    <article>
        <header>
            <h3>Header</h3>
        </header>
        <section>
            <p>文章段落</p>
        </section>
        <footer>
            <span>
                Footer
            </span>
        </footer>
    </article>
</body>
</html>
```
<div style="text-align: center"><img src="./asset/选择器/img/紧邻同胞选择符.jpg"></div>


###### 一般同胞选择符~
语法：
```css
标签1~标签2
```
标签2必须跟（不一定紧跟）在其同胞标签1后面。
示例：
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        header~section { color: red; }  /*起作用*/
        header~footer {color: blue;} /*起作用*/
    </style>
</head>
<body>
    <article>
        <header>
            <h3>Header</h3>
        </header>
        <section>
            <p>文章段落</p>
        </section>
        <footer>
            <span>
                Footer
            </span>
        </footer>
    </article>
</body>
</html>
```
<div style="text-align: center"><img src="./asset/选择器/img/一般同胞选择符.jpg"></div>

###### 通用选择符*
*是一个通配符，匹配任何元素
示例：
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        * { color: red; } 
        footer * {color: blue;} /* 覆盖上面的样式*/
    </style>
</head>
<body>
    <article>
        <header>
            <h3>Header</h3>
        </header>
        <section>
            <p>文章段落</p>
        </section>
        <footer>
            <span>
                Footer
            </span>
        </footer>
    </article>
</body>
</html>
```
<div style="text-align: center"><img src="./asset/选择器/img/一般同胞选择符.jpg"></div>

## ID和类选择符
ID和类为我们选择元素提供了另一套手段，利用它们可以不用考虑文档的层次结构。只要在HTML标记中为元素添加了id和class属性，就可以在CSS选择符中使用ID和类名，直接选中文档中特定的区域。
###### 注意
> id和clss不能以数字或特殊符号开头。id具有唯一性，一篇HTML文档不能具有相同命名的id。

#### class属性
常规 语法：
```css
.类名{声明}
```
标签带类选择符，语法：
```css
标签.类名{声明}
```
多类选择符，语法：
```css
.类名1 .类名2{声明}
```
示例：
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .header{color: red;}  /*常规*/
        div.footer{ color: blue;} /*标签带类选择符*/
        .body.content{color:darkred}  /*多类选择符*/
    </style>
</head>
<body>
    <div class="article">
        <div class="header">文本头部</div>
        <div class="body content">文本内容</div>
        <div class="footer">文本尾部</div>
    </div>
</body>
</html>
```
<div style="text-align: center"><img src="./asset/选择器/img/class选择符.jpg"></div>

#### id属性
id与class类似，id选择符使用“#”选择。
常规 语法：
```css
#id{声明}
```
标签带id选择符，语法：
```css
标签#id{声明}
```
示例：
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        #header{color: red;}  /*常规*/
        div#body{ color: blue;} /*标签带类选择符*/
    </style>
</head>
<body>
    <div id="article">
        <div id="header">文本头部</div>
        <div id="body">文本内容</div>
        <div id="footer">文本尾部</div>
    </div>
</body>
</html>
```
<div style="text-align: center"><img src="./asset/选择器/img/id选择符.jpg"></div>
从上面的示例中可以看出，class和id还是有很多相似的地方，那么该如何选择呢？
###### id 还是 class？
个人观点：**能不用就都不用，使用上下文选择符。如果为了调整样式使用class，为了操作数据，配合JavaScript使用id。**

## 属性选择符
语法：
```css
标签名[属性名]
```
或
```
标签名[属性名="属性值"]
```
示例：
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div[title] {color: red;}
        div[title="footer"] {color: blue;} /*覆盖上面的样式*/
    </style>
</head>
<body>
    <div title="header">header</div>
    <div title="body">body</div>
    <div title="footer">footer</div>
</body>
</html>
```
<div style="text-align: center"><img src="./asset/选择器/img/属性选择符.jpg"></div>