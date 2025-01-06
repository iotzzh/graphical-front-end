数组对象是使用单独的变量名来存储一系列的值。
TypeScript 声明数组的语法格式如下所示：
```typescript
var array_name[:datatype];        //声明 
array_name = [val1,val2,valn..]   //初始化
```
或者直接在声明时初始化：
```typescript
var array_name[:data type] = [val1,val2…valn]
```
示例：
```typescript
var nums: Number = [2, 4,6,8];
```
整个数组结构如下所示：
![](https://upload-images.jianshu.io/upload_images/2789632-3ae62b887bdd43db.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### Array 对象
我们也可以使用 Array 对象创建数组。
Array 对象的构造函数接受以下两种值：
* 表示数组大小的数值。
* 初始化的数组列表，元素使用逗号分隔值。

代码示例：
```typescript
var arr_names:number[] = new Array(4)  
 
for(var i = 0; i<arr_names.length; i++) { 
        arr_names[i] = i * 2 
        console.log(arr_names[i]) 
}
```
#### 数组解构
我们也可以把数组元素赋值给变量，如下所示：
```typescript
var arr:number[] = [12,13] 
var[x,y] = arr // 将数组的两个元素赋值给变量 x 和 y
console.log(x) // 12
console.log(y) // 13
```

#### 数组迭代
我们可以使用 for 语句来循环输出数组的各个元素：
```typescript
var j:any; 
var nums:number[] = [1001,1002,1003,1004] 
 
for(j in nums) { 
    console.log(nums[j]) 
}
```
#### 多维数组
一个数组的元素可以是另外一个数组，这样就构成了多维数组（Multi-dimensional Array）。
最简单的多维数组是二维数组，定义方式如下：
```typescript
var arr_name:datatype[][]=[ [val1,val2,val3],[v1,v2,v3] ]
```
```typescript
var multi:number[][] = [[1,2,3],[23,24,25]]  
console.log(multi[0][0]) 
console.log(multi[0][1]) 
console.log(multi[0][2]) 
console.log(multi[1][0]) 
console.log(multi[1][1]) 
console.log(multi[1][2])
```

#### 数组方法
* concat()：连接两个或更多的数组，并返回结果。
* every()：检测数值元素的每个元素是否都符合条件。
* filter()： 检测数值元素，并返回符合条件所有元素的数组。
* forEach()： 数组每个元素都执行一次回调函数。
* indexOf()： 搜索数组中的元素，并返回它所在的位置。如果搜索不到，返回值 -1，代表没有此项。
* join()： 把数组的所有元素放入一个字符串。
* lastIndexOf()： 返回一个指定的字符串值最后出现的位置，在一个字符串中的指定位置从后向前搜索。
* map()： 通过指定函数处理数组的每个元素，并返回处理后的数组。
* pop()：删除数组的最后一个元素并返回删除的元素。
* push()：向数组的末尾添加一个或更多元素，并返回新的长度。
* reduce()：将数组元素计算为一个值（从左到右）。
* reduceRight()：将数组元素计算为一个值（从右到左）。
* reverse()：反转数组的元素顺序。
* shift()：删除并返回数组的第一个元素。
* slice()：选取数组的的一部分，并返回一个新数组。
* some()：检测数组元素中是否有元素符合指定条件。
* sort()：对数组的元素进行排序。
* splice()：从数组中添加或删除元素。
* toString()： 把数组转换为字符串，并返回结果。
* unshift()：向数组的开头添加一个或更多元素，并返回新的长度。

代码示例：
```typescript
let arr1 = ['a', 'b'];
let arr2 = ['c', 'd'];

// concat():concat(...items: ConcatArray<T>[]): T[];
console.log(arr1.concat(arr2)); // [ 'a', 'b', 'c', 'd' ]

// every():every(callbackfn: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean;
console.log(arr1.every(x => x === 'a')); // false

// some()：some(callbackfn: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean;
console.log(arr2.some(x => x === 'c')); // true

// filter()： filter(callbackfn: (value: T, index: number, array: T[]) => unknown, thisArg?: any): T[];
console.log(arr1.filter(x => x !== 'a')); // [ 'b' ]

// forEach(): forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
arr1.forEach(x => console.log(x)); // a/nb

// map()：map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];
console.log(arr1.map(x => {console.log(x); return `${x}${x}`})); // a/nb/n[ 'aa', 'bb' ]

// indexOf()：indexOf(searchElement: T, fromIndex?: number): number;
console.log(arr1.indexOf('a')); // 0

// lastIndexOf()：lastIndexOf(searchElement: T, fromIndex?: number): number;
console.log(arr1.lastIndexOf('a', 0)); // 0

// pop()：pop(): T | undefined;
console.log(arr1.pop()); // b
console.log(arr1); // ['a']

// push()：push(...items: T[]): number;
console.log(arr1.push('b')); // 2
console.log(arr1); // ['a', 'b']

// reduce():
//reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T;
//reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T;
console.log(arr1.concat(arr2).reduce((x,y) => x+y));// abcd

//reduceRight():
//reduceRight(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T;
//reduceRight(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T;
console.log(arr1.concat(arr2).reduceRight((x,y) => x+y));// dcba

// reverse():reverse(): T[];
console.log(arr1.reverse());// [ 'b', 'a' ]

// sort()：sort(compareFn?: (a: T, b: T) => number): this;
console.log(arr2.reverse().sort());// [ 'c', 'd' ]
console.log(arr2.sort((a,b) => b < a ? 1 : 0)); // [ 'c', 'd' ]

// shift()：shift(): T | undefined;
console.log(arr1.shift()); // b
console.log(arr1); // [ 'a' ]

// unshift()：
console.log(arr1.unshift('c')); // 4
console.log(arr1); // [ 'c', 'a', 'b', 'a' ]

// slice()：slice(start?: number, end?: number): T[];
console.log(arr2.slice(0,1)); // [ 'c' ]

// splice()：
// splice(start: number, deleteCount?: number): T[];
// splice(start: number, deleteCount: number, ...items: T[]): T[];
console.log(arr1); // [ 'a' ]
console.log(arr1.splice(2,0,'b', 'a')); // []
console.log(arr1); // [ 'a', 'b', 'a' ]

//join()：join(separator?: string): string;
console.log(arr1.join('-'));

// toString()： toString(): string;
console.log(arr1.toString()); // a,b,a

```