![](./assets/W3C%20DOM是什么.png)

![](./assets/HTML%20DOM.png)

## DOM 概述

### 什么是 DOM？

DOM 是一项 W3C (World Wide Web Consortium) 标准。
DOM 定义了访问文档的标准：
“W3C 文档对象模型（DOM）是中立于平台和语言的接口，它允许程序和脚本动态地访问、更新文档的内容、结构和样式。”
W3C DOM 标准被分为 3 个不同的部分：

- Core DOM - 所有文档类型的标准模型
- XML DOM - XML 文档的标准模型
- HTML DOM - HTML 文档的标准模型

### 什么是 HTML DOM？

HTML DOM 是 HTML 的标准对象模型和编程接口。它定义了：

- 作为对象的 HTML 元素
- 所有 HTML 元素的属性
- 访问所有 HTML 元素的方法
- 所有 HTML 元素的事件

###### 换言之：HTML DOM 是关于如何获取、更改、添加或删除 HTML 元素的标准。

### DOM 和 JavaScript

DOM 不是一个编程语言,但没有 DOM，JavaScript 语言不会有任何网页,XML 页面以及涉及到的元素的概念或模型；在文档中的每个元素-包括整个文档都是文档对象模型(DOM)的一部分，因此他们可以使用 DOM 和一个脚本语言(JavaScript)来访问和处理
开始的时候，JavaScript 和 DOM 是交织在一起的，但它们最终演变成了两个独立的实体。JavaScript 可以访问和操作存储在 DOM 中的内容，因此我们可以写成这个近似的等式：
API (web 或 XML 页面) = DOM + JS (脚本语言)

### 节点

DOM 的最小组成单位叫做节点（node）。文档的树形结构（DOM 树），就是由各种不同类型的节点组成。每个节点可以看作是文档树的一片叶子。

节点的类型有七种。

Document：整个文档树的顶层节点
DocumentType：doctype 标签（比如`<!DOCTYPE html>`）
Element：网页的各种 HTML 标签（比如`<body>、<a>`等）
Attribute：网页元素的属性（比如 `class="right"`）
Text：标签之间或标签包含的文本
Comment：注释
DocumentFragment：文档的片段
浏览器提供一个原生的节点对象 Node，上面这七种节点都继承了 Node，因此具有一些共同的属性和方法。

### 节点树

一个文档的所有节点，按照所在的层级，可以抽象成一种树状结构。这种树状结构就是 DOM 树。它有一个顶层节点，下一层都是顶层节点的子节点，然后子节点又有自己的子节点，就这样层层衍生出一个金字塔结构，倒过来就像一棵树。

浏览器原生提供 document 节点，代表整个文档。

```javascript
document
// 整个文档树
```

文档的第一层只有一个节点，就是 HTML 网页的第一个标签<html>，它构成了树结构的根节点（root node），其他 HTML 标签节点都是它的下级节点。

除了根节点，其他节点都有三种层级关系。

> 父节点关系（parentNode）：直接的那个上级节点
> 子节点关系（childNodes）：直接的下级节点
> 同级节点关系（sibling）：拥有同一个父节点的节点

DOM 提供操作接口，用来获取这三种关系的节点。比如，子节点接口包括 firstChild（第一个子节点）和 lastChild（最后一个子节点）等属性，同级节点接口包括 nextSibling（紧邻在后的那个同级节点）和 previousSibling（紧邻在前的那个同级节点）属性。

## DOM 核心

### Node

在 DOM 中文档的结构是以节点来表示的，所有的元素（对象）都叫做节点。节点有很多类型，总的节点对象叫做 Node，Node 下面具体分为 10 个子类型，子类型中的 CharacterData 对象又进行细分。
![HTML DOM Tree 实例](https://upload-images.jianshu.io/upload_images/2789632-5700a02cd89dc3e3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
在 DOM 中，文档的所有组成部分都叫做 Node(节点)，例如 HTML 文件中的 html、body、图片、文字、各种标签、以及标签的属性等。
Node 的不同类型节点是通过 NodeType 来区分的。NodeType 是 Node 接口对象的属性，共有 12 个值：
![Node的属性](https://upload-images.jianshu.io/upload_images/2789632-0f2a9ccdc128d765.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
Node 接口是多个节点类型的父接口，起始定义所有节点通用的属性（包括方法属性），这些属性主要可以分为三大类：属性类、判断类和操作类。
浏览器会根据加载的 HTML 文件自动生成相应的 DOM 对象，这样就可以在 JS 中对其进行操作，而 Node 就是所有这些生成的 DOM 对象的总接口，换句话说，浏览器生成的所有 DOM 对象都将包含 Node 中的所有属性。

#### 1.属性类属性

Node 的属性类属性又可以分为两种类型，一种是可读写的，另一种是只读的。
可读写属性主要又三个：nodeValue、textContent 和 userData。其中，nodeValue 表示节点的值，例如：Text 节点的 nodeValue 就是节点本身的值。textContent 表示节点所包含的文本内容，例如 div 节点中所有子节点的文本内容就是 div 的 textContent。userData 是我们可以自己在节点上设置的值，使用 userData 就相当于将节点看成一个普通对象，然后度 iqi 属性进行操作。对 userData 的操作是使用 serUserData 和 getUserData 两个方法进行的，但是，这两个方法大部分浏览器现在还不支持。
代码实例：

```html
<body>
    <div id="a">this is a text box.<div>inner box</div></div>
    <script>
        var div_a = document.getElementById("a");
        console.log(div_a.firstChild.nodeValue); // this is a text box.
        console.log(div_a.textContent); // this is a text box.inner box

        div_a.setUserData("userData", {name: 'zzh', sex: 'male'});
        console.log(JSON.stringify(div_a.getUserData("userData")));
    </script>
</body>
```

![测试结果](https://upload-images.jianshu.io/upload_images/2789632-9c5dd6285c631285.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
Node 的只读属性主要包括以下几个：

- nodeType: 节点类型
- nodeName: 节点名称
- attributes: 节点包含的属性节点的集合
- parentNode: 节点的父节点
- childNodes: 节点的所有子节点集合
- firstChild: 节点的第一个子节点
- lastChild: 节点的最后一个子节点
- previousSibling: 节点的前一个节点
- nextSiblind： 节点的后一个节点
- ownerDocument： 节点所在的文档

#### 2.判断类属性

- node.isEqualNode(arg): 判断两个节点是否相等，参数为 Node 类型
- node.isSameNode(other): 判断是否为同一个节点，参数为 Node 类型
- node.isSupported(feature, version): 判断是否支持某个特性
- node.hasChildNodes(): 判断是否包含子节点
- node.hasAttributes(): 判断是否包含属性
- node.compareDocumentPosition(otherNode): 判断两个节点的相互位置关系，参数为另一个节点

#### 3.操作类属性

Node 的操作类属性主要包括 6 个方法属性：

- node.appendChild(newChild)： 添加子节点
- node.cloneNode(deep): 克隆节点
- node.insertBefore(newChild, refChild): 在指定子节点前插入子节点
- node.removeChild(oldChild): 移除子节点
- node.replaceChild(newChild, oldChild):替换子节点
- node.normalize(): 规范化文档（主要是合并相邻 Text 节点）

## Element

Element 节点就是在文档中使用的标签，例如 html、body、div 等标签都是 Element 类型的节点。Element 节点主要包含 tagName、attribute、attributeNode 属性和 getElementsByTagName 方法。
attribute 表示节点的属性值，attributeNode 表示属性节点本省，它们都有相应的查询，获取，设置和删除的方法：

- hasAttribute(name): 判断是否包含指定名称的节点属性
- getAttribute(name): 获取节点属性的值
- setAttribute(name,value): 设置节点属性的值
- removeAttribute(name): 删除指定名称的节点属性
- getAttributeNode(name): 按名称获取指定属性节点
- setAttributeNode(newAttr): 设置新属性节点
- removeAttributeNode(oldAttr): 删除属性节点

## Attr

Attr 节点是表示属性类型的节点，也就是我们常用的标签中的属性，一共包括以下 6 个属性：

- name: 属性名
- value： 属性值
- ownerElement: 属性所在的 Element 节点
- spcified: 属性是否被指定，如果显示设定了，则返回 true, 如果使用的是默认值，则返回 false
- isId： 是否为 Id 属性，这是 DOM3 中新增的属性，浏览器支持得并不友好，只有 Safari 可以返回正确得结果。
- schemaTypeInfo: 命名空间相关，主要用于 XML

## Text

Text 节点是表示文本类型得节点，也就是我们平时直接使用得问题。它并不是直接继承得 Node 接口，而是继承自 CharacterData 接口，CharacterData 接口继承自 Node 接口：

### Character

Character 接口一共包含 7 个属性：

- appendData(arg): 在尾部添加数据
- insertData(offset, arg): 在指定位置插入数据
- deleteData(offset, count): 删除指定位置得数据
- replaceData(offset, count, arg): 替换指定位置的数据
- substringData(offset, count): 截取指定位置的数据

### Text

Text 节点本身有一个 wholeText 属性和三个方法属性:

- wholeText: 表示于 Text 节点相邻的所有 Text 节点组成的文本
- replaceWholeText: // 不被支持
- isElementContentWitespace： // 不被支持
- splitText： 用于在指定位置将 Text 节点分为两个 Text 节点，参数为分割位置

## Comment

Comment 节点表示注释类型的节点，继承 CharacterData，没有自己的属性

## Document

Document 节点并不是直接在 Html 文件中存在的节点，它代表整个文档，所有其他节点，都在它之下，它包含的属性：

- adoptNode(source): 将另外一个文档中的节点添加到当前文档
- importNode(importedNode, deep): 引入节点
- createAttribute(name): 创建属性节点
- createComent(data): 创建注释节点
- createDocumentFragment(): 创建 DocumentFragment 节点
- createElement(tagName): 创建 Element 节点
- createTextNode(data): 创建 Text 节点
- renameNode(node, namespanceURI, newName): 修改节点名称
- getElementById(id): 使用 Id 获取 Element 节点
- getElementByTagName(TagName)： 按照标签名获取所有节点
- doctype： 文档类型 DocumentType
- documentElement: 获取 Element 根节点，例如：html
- inputEncoding: 编码方式
- implementation: 获取 DOMImplementation
- strictErroChecking: 是否强强制进行错误检查，可读写

## DocumentFragment

DocumentFragment 节点表示 Document 片段节点，它是轻量级的 Document，继承自 Node，没有自己的属性。它的作用就是一个容器，当选哟插入多个节点时，为了避免频繁的操作 DOM，可以先使用 DocumentFragment，之后再插入到 DOM 中。

## 异常对象

![](https://upload-images.jianshu.io/upload_images/2789632-1b41095d48f5263b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 辅助对象

- DOMImplementation：独立于文档的接口，检查是否支持指定版本的特性，获取指定版本，创建 DocumentType，创建 Document。
- NamedNodeMap：获取包含节点的数量，按名称获取指定节点，将指定节点添加到 Map 中，删除指定名称的节点，按序号获取节点。
- NodeList：与 NamedNodeMap 类似，不同之处在于 NodeList 包含的节点是有顺序的。

## DOM 中的 HTML 标准

虽然 HTML 中的接口数量非常多，但是结构很简单。首先是 HTMLDocument 和 HTMLElement，这两个接口分别继承自 Core 标准中 Document 和 Element，它们在原来的基础上添加了 HTML 特有的属性。然后是两个 Collection: HTMLCollection 和 HTMLOptionsCollection。
![HTML子标准的整体结构](https://upload-images.jianshu.io/upload_images/2789632-b3fa61a41bcab598.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### HTMLCollection

HTMLCollection 用于表示 HTML 中相同类型节点的集合。例如：所有的 div，所有的 img，所有的 span 等等。
HTMLCollection 接口只有三个属性：

- length: 包含节点的个数
- item（index）: 按索引获取节点
- namedItem（name）： 按名称获取节点。
  代码示例：

html

```html
<div id='div1'>a</div>
<div id='div2' name='two'>b</div>
```

js

```javascript
var divCollection = document.getElementsByTagName('div');
console.log(divCollection instanceof HTMLCollection);
console.log(divCollection.length);
console.log(divCollection.item(0).textContent);
console.log(divCollection.namedItem('two').textContent);
```

![测试结果](https://upload-images.jianshu.io/upload_images/2789632-446ba77db8bd614f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### HTMLOptionsCollection

HTMLOptionsCollection 和 HTMLCollection 接口类似，专门用来保存 Select 标签中 Option 标签所对应的 HTMLOptionElement 类型节点的集合。它比 HTMLCollection 接口多一个 setLength（length）方法，用来指定 Option 节点的个数，其他方面和 HTMLCollection 接口完全相同。

### HTMLDocument

HTMLDocument 继承自 Core 子标准中的 Document 接口，用于表示 HTML 中的文档。HTMLDocument 在 Document 的基础上增加了 5 个方法属性，3 个读写属性和 8 个只读属性。

#### 方法属性

- open（）： 打开一个流
- close（）： 关闭 open 方法打开的流，并显示写入的数据
- write（text）：写入数据。之前用到的一次，就是后台编辑好的页面，通过接口传递给前端一个文本数据，由于还需要加载对应服务的一些资源，就利用此方法，写入的 iframe 中。
- writeIn(text):写入数据，结尾换行
- getElementByName(name): 按照 name 属性获取节点，返回值为 NodeList 类型。

#### 读写属性

- body: body 节点
- cookie: 当前文档的所有 cookie
- title: 文档的标题，字符串类型，而不是 title 节点

#### 只读属性

- domain： 当前文档的域名
- URL： 当前文档的 url
- referrer: 当前文档的前一个页面的 url
- anchors: 当前文档的所有锚点（a 标签）
- forms： 当前文档的所有表单
- images: 当前文档中的所有图片
- links： 当前文档的所有链接，包括所有带 href 的 area 标签和 a 标签
- applets： 当前文档的所有 applet

#### HTMLElement

HTMLElement 继承自 Core 的 Element 接口，新增了 5 个属性：

- className:即 class 属性，因为 class 时 ES 的关键词，故使用 className
- id： id
- lang： language
- dir： direction
- title： 节点的标题，它的作用时当鼠标停留在某个节点上时弹出相应的提示信息。

## DOM 事件

事件就是用来完成“当...时做...”的功能，也就是起监听作用。事件给我们提供了一个跟文档对象进行沟通的接口。
事件主要由三部分组成：事件的目标（EventTarget）、事件监听器（EventListener）和事件本身（Event）。事件的目标可以理解为事件的主人，也就是谁的事件，在 DOM 中就是各种 Node 节点；DOM 中的事件监听器可以理解为处理事件的函数；事件就是当事件目标（EventTarget）上特定的事件发生之后发送给事件监听器的信息。

### 事件流

Events 子标准中规定事件的传递首先从最外层节点（Document）开始，然后逐层向内部传播，一直传到最内层节点之后再逐层往外返回。整个传播流程可以 分为两个过程和三个阶段：

### 两个过程分别叫做：捕获过程和冒泡过程

捕获过程时从外向内传播的过程，冒泡过程则是从内向外的过程

### 三个阶段分别叫做： 捕获阶段，目标阶段和冒泡阶段

捕获阶段和冒泡阶段分别对应的时捕获过程和冒泡过程，目标阶段指的时事件传递到最内层节点时的阶段。

### DOM 标准中默认的事件处理是在冒泡过程中进行的！

![](https://upload-images.jianshu.io/upload_images/2789632-236aa4d7d2286131.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### EventTarget

EventTarget 指事件的目标（主人），即各种不同的节点，DOM 中的节点都可以用作 EventTarget。EventTarget 中共有三个方法属性，如下所示。

- addEventListener(type, listener, capture): 给节点添加监听器，即事件处理程序
- removeEventListener(type, listener, capture): 删除节点相应的监听器
- dispatchEvent(event): 发布事件

其中，type 指的是要监听的事件类型，listener 就是要添加或删除的事件监听器 EventListener，一般包含一个 event 参数的处理方法，capture 为布尔类型，表示是否使用捕获过程，默认值为 false。
代码示例：

```html
<body style="width: 100%; height: 888px">
    <script>
        const body = document.querySelector('body');
        // 设置capture 为true， 则先执行window的监听事件，再执行body的监听事件
        window.addEventListener('click', function(){console.log('window click!')}, true);
        body.addEventListener('click', function(){console.log('body click!')});
    </script>
</body>
```

![测试结果](https://upload-images.jianshu.io/upload_images/2789632-ffab6b099ea484a1.gif?imageMogr2/auto-orient/strip)

### EventListener

EventListener 是事件监听器接口，用于对接到的事件具体执行处理。其中只有一个方法 handleEvent(event)用于具体处理事件。EventListener 接口在实际使用中就是一个包含 Event 参数的方法。

### Event

Event 是事件接口，用来包含事件中的信息，例如事件所在的事件目标、事件类型。如果是单及事件，那么还会包含鼠标单击时的坐标信息等，事件监听器函数在处理事件时都会接收到一个 Event 参数。
Event 是总的事件接口，DOM2 中共有 4 种具体的事件类型，分别是 UIEvents、MouseEvents、MutationEvents 和 HTMLEvents。可以使用 DOMImplementation 的 hasFeature 方法来判断浏览器是否支持某种类型事件，调用时第一个参数传入要检查的事件类型，第二个参数传入 2.0 就可以了。
![事件类型的继承关系](https://upload-images.jianshu.io/upload_images/2789632-666994258d9c75de.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### Event 接口

Event 接口时所有事件类型的总接口，因此 Event 中的属性在所有的事件中都可以使用。Event 包含 7 个只读属性、3 个方法属性和 3 个常量属性：

- type： 事件类型，例如 click、load 等
- target： 事件目标，即直接发出事件的节点
- currentTarget： 当前目标，指的是在捕获或者冒泡过程中处理事件时的当前节点
- eventPhase： 事件所处的阶段
- cancelable： 事件是否可以被取消
- timeStamp： 事件创建事件
- stopPropagation（）： 停止事件流传播
- preventDefault（）： 阻止默认操作，例如，submit 事件提交表单、a 标签的 click 事件打开链接等
- initEvent(type, canBubble, cancelable): 初始化属性
- CAPTURE_PHASE = 1: 捕获阶段
- AT_TARGET = 2: 目标阶段
- BUBBLING_PHASE=3:冒泡阶段

其中，最后三个属性为常量属性，用于表示 eventPhase 属性的接口。
Event 中的 stopPropagation 方法用来停止事件流的传播，无论在哪个阶段，只要在事件处理方法中调用了事件的 stopPropagation 方法事件流，就不再接着向下传播了。
Event 中的 preventDefault 方法用来阻止当前节点执行默认操作，但它并不会终止事件流传播，当事件的 cancelbale 为 false 时，preventDefault 方法将不起作用。

### UIEvents 事件

UIEvents 事件对应 UIEvents 接口。UIEvents 继承自 Event 接口，在 Event 接口的基础上增加了两个只读属性和一个方法属性。只读属性时 view 和 detail，分别表示视图和详细信息，view 为 Views 子标准中的 AbstractView 类型，在浏览器中一般就是 window 对象；detail 为整数类型，表示事件的相关信息，所表示的内容跟具体事件相关。新增的方法为 initEvent, 它在原来的 initEvent 方法上添加了两个自己的属性，它的作用是新建 UIEvent 类型的事件，调用语法如下：

```
event.initEvent(type, canBubble, cancelable, view, detail);
```

![UIEvents事件的三种类型](https://upload-images.jianshu.io/upload_images/2789632-0e8523960a4a2e22.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
表中是否可冒泡和是否可取消分别对应 canBubble 和 cancelable 两个属性。

### MouseEvents 事件

MouseEvents 事件对应 MouseEvents 接口。MouseEvent 继承自 UIEvent 接口，它在 UIEvent 的基础上新增加了 10 个只读属性和一个方法属性。
![](https://upload-images.jianshu.io/upload_images/2789632-5a09dd093aba3877.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 10 个只读属性如下:

- screenX: 单击位置以屏幕左上角为原点的横坐标
- screenY: 单击位置以屏幕左上角为原点的纵坐标
- clientX: 单击位置以浏览器内容区域左上角为原点的横坐标
- clientY: 单击位置以浏览器内如区域左上角为原点的纵坐标
- ctrlKey: 布尔类型，表示点击鼠标时是否按了 Ctrl 键
- shiftKey: 布尔类型，表示单击鼠标时是否按了 Shift 键
- altKey： 布尔类型，表示单击鼠标时是否按了 Alt 键
- metaKey: 布尔类型，表示单击鼠标时是否按了 Meta 键，Meta 键在普通的键盘上是没有的
- button: 鼠标的哪个健被单击了，0 表示左键，1 表示中键，2 表示右键
- relatedTarget： 与事件相关联的节点，主要用于 mouseover 与 mouseout 事件。

MouseEvent 接口中新增的方法为 initMouseEvent，它在原来 initUIEnent 方法上将新增的 10 个属性加到参数中，它的作用是创建 MouseEvent 类型的事件，调用语法如下：
event.initMouseEvent(type,canBubble,cancelable,view,detail,.....);

### MouseEvents 事件的类型

- click： 单击
- mousedown: 按下鼠标
- mouseup：松开鼠标
- mouseover： 鼠标进入
- mousemove: 鼠标移动
- mouseout： 鼠标移出

### MutationEvents 事件

MutationEvents 事件对应 MutationEvent 接口。Mutation 接口继承自 Event 接口，它在原来的基础上添加了 5 个只读属性、一个方法属性和 3 个常量属性。
######5 个只读属性

- relatedNode: 相关节点
- prevValue： 之前的值
- newValue： 新值
- attrName：属性名
- attrChange： 属性变化类型

### 事件类型

- DOMAttrModified
- DOMAttributeNameChanged
- DOMCharacterDataModified
- DOMElementNameChanged
- DOMNodeInserted
- DOMNodeInsertedIntoDocument
- DOMNodeRemoved
- DOMNodeRemovedFromDocument
- DOMSubtreeModified

### HTMLEvents 事件

HTMLEvents 事件没有自己单独的接口，也就是说，它直接使用 Event 接口。HTMLEvents 事件共有 12 种类型，如下：
![HTMLEvents事件的类型](https://upload-images.jianshu.io/upload_images/2789632-c17941113259a58c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## DOM0 级事件

Events 子标准实在 DOM2 种才加入的。其实，在 DOM 标准发布之前浏览器种就已经可以使用事件了，此类型事件一般叫做 DOM0 级事件。
DOM0 级事件是通过节点的属性来实现的，属性的名称为“on+事件名”的格式，其中，事件名的首字母不需要大写，例如，onclick、onload、onfocus 等。DOM0 级事件的添加有两种方式，一种是直接作为属性写在标签中，另一种是在脚本中通过节点对象的属性 来添加。
代码示例：

```html
<body onload="listener(event);">
    <div id='a'>excellib</div>
    <script>
        function listener(event){
            console.log(event.type);
        }
        var div = document.getElementById('a');
        div.onclick = listener;
    </script>
</body>
```

![测试结果](https://upload-images.jianshu.io/upload_images/2789632-eb0623dbcee85366.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
