在JS中，function可以说是最核心的内容了。**它本身是一种对象，另外，它还可以创建对象， 而且可以对对象操作**
###### function的作用：
1. 作为对象来管理其中的属性
2. 作为方法处理具体业务
3. 创建对象

#### 一、创建function
###### 1. 函数声明， 结构如下：
```javascript
function 函数名（参数）{函数体}
```
举例：
```javascript
function say (what){console.log(`say ${what}`)}
say('hello'); // output:say hello
```
###### 2.函数表达式， 结构如下：
```javascript
var 变量名 = function(参数){函数体}
```
举例：
```javascript
var say = function(what){console.log(`sya ${what}`);}
say('hello'); // output: say  hello
```

###### 其实，通过函数声明方式创建函数时，JS在背后自动帮用户做了这件事，它首先创建了函数对象，然后又创建了跟函数名同名的变量，并将创建出来的函数赋值给了这个变量。即：
```javascript
function F(a){}
var f = F;
```
###### 通过函数表达式来创建其实道理也差不多，不同之处在于它会创建一个匿名函数，然后再赋值给定义的变量。即：
```javascript
var anonymous = function (b) {}
var anony = anonymous;
```
#### 二、用作对象
JS中的函数本身也还是对象，是对象就可以有自己的属性。
举例：
```javascript
function func() {};
func.val = 'go';
func.logVal = function(){
  console.log(this.val);
}

func.logVal(); // output: "go"
```

#### 三、处理业务(功能)
相关概念：
* JS是弱类型语言
* JS的变量使用var关键字来定义，当然ES6提出了使用let, const可以用来定义变量。
* **var 定义的变量的作用域，这种变量的作用域是function级的**。
* 严格模式（strict model）: ES5种引入了严格模式，严格模式下的JS程序需要比非严格模式下的程序更加规范，对语法有了比较严格的要求。
* == 与===： ==比较转换后的值是否相等，===比较如果类型不同就会返回false。
* for-in语句：可以便利对象的**属性**， 准确的来说是便利对象中可以遍历的属性。
* for-of语句： 它可以直接获取属性的值。
* try-catch-finally语句： catch(error)中的error有两个属性： error.name, error.message。
* typeof语句：语法：typeof 变量，ES2015的返回值一共有7种： undefined、function、object、boolean、number、string、symbol；
* null和数组类型都是object,因为努力了本身也是一个对象，而数组可以包含其他任何类型的元素，它并不是底层对象，所以它们没有自己独有的类型；、
* 只要有名字但是没有赋值的变量都是undefined类型。
* instanceof 语句：instanceof语句比typeof语句更进了一步，可以判断一个对象是不是某种类型的实例。instanceof语句的返回值未布尔类型，表示判断是否正确。
举例：
```javascript
function testFunc () {
  try{
    var a = 'hello';
    if(typeof a === 'string'){
      console.log(a);
    }else{
      console.log('a is not string');
    }
  }catch(error){
    console.log(error.name);    console.log(error.name);
    console.log(error.message);
    
  }finally{
    console.log('final');
  }
}

testFunc(); // output: "hello" "final"
```

#### 四、创建对象
对于一个function类型的对象，使用new便是对象，不使用便是函数。**一般是对象的话，首字母大写，方法首字母小写**。
举例：
```javascript
function F(){
  this.v = 1;
}
var obj = new F();
console.log(obj.v); // output: 1
```

###### 注意：
在使用function创建对象时需要注意一种特殊的情况，当function的函数体返回一个对象类型时，使用new关键字创建的对象就是返回的对象而不是function所对应的对象。
举例：
```javascript
function F() {}
function Car(color){
  this.color = color;
  return new F();
}

var car = new Car('red');
console.log(car.color); // undefined
console.log(car instanceof Car); // false
console.log(car instanceof F); // true
```

###### prototype属性与继承
* 基于对象的ES语言根本没有类的概念，当然也就不存在基于类的那种继承方式，但是它可以通过prototype属性类达到类似与继承的效果。
* prototype是ES中function类型对象的一个特殊的属性。**每个function类型的对象都有prototype属性**，prototype属性的值是object类型的对象。
* function创建的实例对象在调用属性时，会首先在自己的属性中查找，如果找不到就会去function的prototype属性对象中查找。但是，创建的对象只是可以调用prototype中的属性。但是并不会实际拥有那些属性，也不可以对它们进行修改（修改操作会在实例对象中添加一个同名的属性）。当创建的实例对象定义了同名的属性后就会覆盖prototype中的属性，但是原来的prototype中的属性并不会发生变化，而且当创建出来的对象删除了添加的属性后，原来的prototype中的属性还可以继续调用。
举例：
```javascript
function Car(color){
  this.color = color;
}

Car.prototype.logColor = function(){
  console.log("prototype: " + this.color);
}
var car = new Car('red');
car.logColor(); //"prototype: red"

car.logColor = function(){
  console.log("property: " + this.color);
}

car.logColor(); // "property: red"

delete car.logColor;

car.logColor(); // "prototype: red"
```

