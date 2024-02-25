## HTML技巧
### 1. loading=lazy 属性
性能优化。您可以使用该loading=lazy属性来推迟图像的加载，直到用户滚动到它们为止。
```html
<img src='image.jpg' loading='lazy' alt='Alternative Text'> 
```

### 2. 电子邮件、电话和短信链接：
```html
<a href="mailto:{email}?subject={subject}&body={content}">
    Send us an email
</a>

<a href="tel:{phone}">
    Call us
</a>

<a href="sms:{phone}?body={content}">
    Send us a message
</a>         
```

### 3. 有序列表start属性。
###### 使用该start属性更改有序列表的起点。
```html
<ol start="11">
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
    <li>Python</li>
    <li>Go</li>
</ol>
```

## 4. meter 元素
您可以使用该```<meter>```元素来显示数量。不需要 JavaScript/CSS。
```html
<label for="value1">Low</label>
<meter id="value1" min="0" max="100" low="30" high="75" optimum="80" value="25"></meter>

<label for="value2">Medium</label>
<meter id="value2" min="0" max="100" low="30" high="75" optimum="80" value="50"></meter>

<label for="value3">High</label>
<meter id="value3" min="0" max="100" low="30" high="75" optimum="80" value="80"></meter>
```
###### 展示如下：
<label for="value1">Low</label>
<meter id="value1" min="0" max="100" low="30" high="75" optimum="80" value="25"></meter>

<label for="value2">Medium</label>
<meter id="value2" min="0" max="100" low="30" high="75" optimum="80" value="50"></meter>

<label for="value3">High</label>
<meter id="value3" min="0" max="100" low="30" high="75" optimum="80" value="80"></meter>


## 5. HTML 原生搜索
```html
<div class="wrapper">
    <h1>
        Native HTML Search
    </h1>
  
    <input list="items">
  
    <datalist id="items">
        <option value="Marko Denic">
        <option value="FreeCodeCamp">
        <option value="FreeCodeTools">
        <option value="Web Development">
        <option value="Web Developer">
    </datalist>
</div>
```

## 6. 字段集元素
您可以使用该```<fieldset>```元素对```<label>```Web 表单中的多个控件和标签 ( )进行分组。
```html
<form>
    <fieldset>
        <legend>Choose your favorite language</legend>

        <input type="radio" id="javascript" name="language">
        <label for="javascript">JavaScript</label><br/>

        <input type="radio" id="python" name="language">
        <label for="python">Python</label><br/>

        <input type="radio" id="java" name="language">
        <label for="java">Java</label>
    </fieldset>
</form>
```

## 7. Window.opener

打开target="_blank"的页面允许新页面访问原始页面window.opener。这可能会对安全和性能产生影响。包括rel="noopener"或rel="noreferrer"可以防止这种情况发生。

```html
<a href="https://markodenic.com/" target="_blank" rel="noopener">
    Marko's website
</a>           
```

## 8. 基本元素
如果要在新选项卡中打开文档中的所有链接，可以使用```<base>```element：

```html
<head>
    <base target="_blank">
</head>
<!-- This link will open in a new tab. -->
<div class="wrapper">
    This link will be opened in a new tab: &nbsp;
    <a href="https://freecodetools.org/">
        Free Code Tools
    </a>

    <p>
        Read more: <br>
        <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base">
            MDN Documentation
        </a>
    </p>
</div>
```

## 9. Favicon 缓存破坏
想要刷新您网站的图标，您可以通过添加?v=2到文件名来强制浏览器下载新版本。
这在生产中特别有用，可以确保用户获得新版本。

```html
<link rel="icon" href="/favicon.ico?v=2" />           
```    

## 10.拼写检查属性
使用该spellcheck属性来定义是否检查元素的拼写错误。

```html
<label for="input1">spellcheck="true"</label>
<input type="text" id="input1" spellcheck="true">

<label for="input2">spellcheck="false"</label>
<input type="text" id="input2" spellcheck="false">
```

## 11. 原生 HTML 滑块
您可以使用它 ```<input type="range">``` 来创建滑块。

```html
<label for="volume">Volume: </label>
<input type="range" id="volume" name="volume" min="0" max="20">

<label for="result">Your choice: </label>
<input type="number" id="result" name="result">
```

## 12. HTML 手风琴
您可以使用该details元素来创建 HTML 手风琴。

```html
<div class="wrapper">
    <details>
        <summary>
            Click me to see more details
        </summary>

        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eum perferendis eius. Adipisci velit et similique earum quas illo odio rerum optio, quis, expedita assumenda enim dicta aliquam porro maxime minima sed a ullam, aspernatur corporis.
        </p>
    </details>
</div>
```

## 13.mark标签
您可以使用```<mark>```标签来突显文本。

## 14.download属性
您可以使用download链接中的属性来下载文件，而不是导航到该文件。

```html
<a href='path/to/file' download>
    Download
</a>           
```

## 15. 性能提示
使用.webp图像格式缩小图像并提高网站的性能。

```html
<picture>
    <!-- load .webp image if supported -->
    <source srcset="logo.webp" type="image/webp">
  
    <!-- 
        Fallback if `.webp` images or <picture> tag 
	not supported by the browser.
    -->
    <img src="logo.png" alt="logo">
</picture>           
```    

## 16.视频缩略图
使用该poster属性指定在视频下载时或在用户点击播放按钮之前显示的图像。

```html
<video poster="path/to/image">           
```

## 17.输入 type="search"
将type="search"用于您的搜索输入，您将白嫖“清除”按钮。

```html
<form>
    <label for="text">Input Type Text</label>
    <input type="text" id="text" name="text">
    
    <label for="search">Input Type Search</label>
    <input type="search" id="search" name="search">
</form>           
```

## 参考文章
https://markodenic.com/html-tips/
https://juejin.cn/post/6975148293990907934

## 关于我
* 一个推崇全栈开发的前端开发人员
* 如果你想找我聊聊，可以添加我的 - 微信: itrzzh
<div style="text-align: center"><img src="../images/微信号.png" style="max-height: 200px;width: auto;"></div>

* 如果你想及时订阅我的发布文章或者获取资料，可以关注我的 - 公众号：全栈道
<div style="text-align: center"><img src="../images/公众号.jpg" style="max-height: 200px;width: auto;"></div>

* 如果你想让我帮忙改简历、获取知识手册、学习面试资料、学习路线等，请加入我的 - 知识星球：全栈道
<div style="text-align: center"><img src="../images/星球.jpg" style="max-height: 200px;width: auto;"></div>

* 个人网站：https://www.iotzzh.com
* B站：https://space.bilibili.com/285025688
* 抖音/快手：全栈道
* github：https://github.com/iotzzh
* gitee: https://gitee.com/iotzzh

## 捐赠鼓励
开源不易，如果《全栈道》对你有些帮助，可以请作者喝杯咖啡，算是对开源做出的一点点鼓励吧！
<div style="text-align: center"><img src="../images/打赏.jpg" style="max-height: 200px;width: auto;"></div>