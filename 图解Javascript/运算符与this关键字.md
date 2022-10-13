## JS运算符
* 赋值运算符（Assignment operators）
* 比较运算符（Comparison operators）
* 算数运算符（Arithmetic operators）
* 位运算符（Bitwise operators）
* 逻辑运算符（Logical operators）
* 字符串运算符（String operators）
* 条件（三元）运算符（Conditional operator）
* 逗号运算符（Comma operator）
* 一元运算符（Unary operators）
* 关系运算符（Relational operator）

具体可参考MDN:https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_Operators

## 常用运算符
#### 三元运算符
```const value = xxx ? 取值1 : 取值2```

#### 逻辑空赋值运算符 (x ??= y)
```javascript
const a = { duration: 50 };

a.duration ??= 10;
console.log(a.duration);
// expected output: 50

a.speed ??= 25;
console.log(a.speed);// expected output: 25
 ```

#### 空值合并运算符(??)
```javascript
const foo = null ?? 'default string';
console.log(foo);
// expected output: "default string"
 ```



#### 点运算符
点运算符可用来操作对象的属性。这里的操作可以分为获取和赋值两种类型。在赋值的情况下，如果对象原来没有所操作的属性则会添加，如果有则会修改其值。
代码示例：
```javascript
var person = { name: 'zzh' };

person.age = 18;

console.log(person.name); // zzh
person.name = 'David';
console.log(person.name); // David
 ```

#### this的含义：
使用记忆口诀：“谁直接调用方法，this就指向谁”。
代码示例：
```javascript
var color = 'red';

function Obj () {
	var color = 'balck';
}

Obj.color = 'green';
Obj.prototype.logColor = function () {
	console.log(this.color);
}

var o = new Obj();
o.color = 'blue';
o.logColor(); // blue
```
例子中一个有4个color， 一个是全局变量，一个是Obj的局部变量，一个是Obj的属性，还有一个是Obj创建的实例对象o的属性。logColor方法是Obj的prototype中的方法属性，其中打印了this.color的值。在调用o.logColor()时，这里使用使用对象o中的color属性，也就是blue,这是因为logColor方法是被o对象直接调用的。

#### 关联方法后的this
代码示例：
```javascript
function logColor() {
	console.log(this.color);
}

function Obj () {}
var o = new Obj();

Obj.color = 'red';
o.color = 'blud';

Obj.logColor = logColor;
o.logColor = logColor;

Obj.logColor(); // red
o.logColor(); // blue
```
谁调用方法this就指向谁！！！

#### 内部函数中的this
代码示例：
```javascript
var v = 1;
function Program () {
	var v = 2;
	this.v = 3;
}

Program.prototype.logV = function () {
	function innerLog () {
		console.log(this.v);
	}
	innerLog();
}

var pro = new Program();

pro.logV();  // 1
```
若希望打印出Program的this.v 即3， 有三种处理方法：
方法一：
```javascript
Program.prototype.logV = function () {
	var instance = this;
	function innerLog () {
		console.log(instance.v);
	}
	innerLog();
}
```
方法二：
```javascript
Program.prototype.logV = function () {
	function innerLog () {
		console.log(this.v);
	}
	this.innerLog = innerLog;
	this.innerLog();
}
```
方法三：
```javascript
Program.prototype.logV = function () {
	function innerLog (v) {
		console.log(v);
	}
	innerLog(this.v);
}
```

#### 对象的属性不可以继承
属性不可以继承指的是，如果对象有多个层次，那么父子对象里的属性不可以相互继承和调用。
代码示例：
```javascript
function logV() {
	console.log(this.v);
}

var obj = {v: 1};
obj.sonObj = {};

obj.logV = logV;
obj.sonObj.logV = logV;

obj.logV(); // 1
obj.sonObj.logV(); // undefined
```
之所以为undefined, 也是this的一种应用，此时obj.sonObj并没有定义属性v且没有继承ovj的v，所以打印其结果为undefined. 


## 注意
**由于this问题很是麻烦，所以出现了箭头函数。箭头函数：在哪定义，this就是指向当前对象。所以当存在this问题时，尽可能的使用箭头的函数。**

