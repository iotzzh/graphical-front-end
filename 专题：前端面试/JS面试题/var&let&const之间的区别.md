## var&let&const之间的区别

* 变量提升 
    var 声明的变量存在变量提升，即变量可以在声明之前调用，值为undefined
    let和const不存在变量提升，即它们所声明的变量一定要在声明后使用，否则报错

* 暂时性死区 
    var不存在暂时性死区
    let和const存在暂时性死区，只有等到声明变量的那一行代码出现，才可以获取和使用该变量

* 块级作用域, 函数作用域
    var不存在块级作用域, let和const存在块级作用域
    var可以看作函数作用域

* 重复声明
    var允许重复声明变量
    let和const在同一作用域不允许重复声明变量

* 修改声明的变量
    var和let可以
    const声明一个只读的常量。一旦声明，常量的值就不能改变
    
* 使用
    能用const的情况尽量使用const，其他情况下大多数使用let，避免使用var