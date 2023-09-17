# JavaScript 中的类型转换机制

常见的类型转换有： 强制转换（显示转换）、自动转换（隐式转换）

## 显示转换
常见方法：Number()、parseInt()、String()、Boolean()

## 隐式转换（JS在这里坑很多，注意防范）
常见场景：
    · 比较运算（==、!=、>、<）、if、while需要布尔值地方
    · 算术运算（+、-、*、/、%）

#### 自动转换为布尔值
undefined、null、false、+0、-0、NaN、""： 均为false，其他为true

#### 自动转换成字符串
```javascript
'5' + 1 // '51'
'5' + true // "5true"
'5' + false // "5false"
'5' + {} // "5[object Object]"
'5' + [] // "5"
'5' + function (){} // "5function (){}"
'5' + undefined // "5undefined"
'5' + null // "5null"
```

#### 自动转换成数值
```javascript
'5' - '2' // 3
'5' * '2' // 10
true - 1  // 0
false - 1 // -1
'1' - 1   // 0
'5' * []    // 0
false / '5' // 0
'abc' - 1   // NaN
null + 1 // 1
undefined + 1 // NaN
```