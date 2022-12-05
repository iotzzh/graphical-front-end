JS 时面向对象的语言，或者说它本身就是一个大对象，就像一个大箱子里面装着很多大盒子，每个大盒子里面都装着小盒子....那么最顶层的箱子是什么呢？这个对象在 ES 标准中叫做 Global 对象。ES 标准中规定 Global 对象要在进入执行环境前就已创建，它是所有对象的根对象，其他对下个你都是它的属性或者属性的属性。
**这里的 Global 是表示功能的词，不代表具体的对象名。**事实上并不一定存在 Global 对象，但是每个具体的宿主环境都需要有一个 Global 对象，例如，浏览器中的 window 对象就是 Global 对象，所有其他对象都是 window 对象的属性或其属性的属性。例如，Stirng，Number，Boolean，Array，RegExp 等对象都是 window 的属性，就连 Object 和 Function 也是 window 的属性对象。
可利用：console.log(Object.getOwnPropertyNames(window));
查看 widow 包含的属性，亲测包含 1131 个(2022.12.05)，有些可能并没有什么意义，但是多为有意义的属性。
![](https://upload-images.jianshu.io/upload_images/2789632-e84a44f8aa2d9a7a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### Window 对象的特殊性

浏览器的 Global 对象 window 是使用 Window 对象创建出来的，Window 对象是 function 类型，window 对象是 obejct 类型。用于创建 window 对象的 Window 对象跟我们自定义的 function 对象之间存在一些差别。

- 不可以创建对象：我们自己创建的 function 对象可以使用 new 关键字来创建相应的 object 类型实例对象，但是 Window 对象不可以用于创建对象。
- 不可以作为方法调用：Window 也不可以作为方法来调用，也就是说，在程序中直接调用 Window()也是不可以的，并且这种用法也没有实际意义。
- 变量就是属性：在最外层定义的变量也叫做全局变量，与在 function 中定义的其他变量存在很大的区别。在最外层定义的变量会自动称为 window 对象的属性，而在普通 function 中变量和实例对象的属性是完全没有关系的两类数据。
  代码示例：

```
var v = 1;

// 通过修改this的属性可以改变全局变量的值
this.v = 2;
console.log(v); // 2

// 通过修改全局变量的值也可以修改window对象同名属性的值
v = 3;
console.log(window.v); // 3

// 我们自定义方法中变量和实例对象的属性是相互独立的
function Obj(){
	var v = 2;
	this.v = 5;
	console.log(v);	// 2
	console.log(this.v); // 5
}

new Obj(); // 2
```

从上面的示例中可以看出，最外层定义的变量和 this 的属性及 window 的同名属性都是同一个，可以相互操作。但是，在我们自定义的 function 函数体内变量和属性之间存在严格区分，不可以相互调用。

###### 另外，window 对象本身也是自己的一个属性

可利用语句查看：console.log(Object.getOwnPropertyNames(window));
![](https://upload-images.jianshu.io/upload_images/2789632-22a587fb1d40feaa.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
