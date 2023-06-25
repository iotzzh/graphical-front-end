String 对象用于处理文本（字符串）。
###### 语法
```
var txt = new String("string");
或者更简单方式：
var txt = "string";
```
#### String 对象属性
constructor:对创建该对象的函数的引用。
length:返回字符串的长度。
prototype:允许您向对象添加属性和方法。

#### String 方法
* charAt():返回在指定位置的字符。
* charCodeAt(): 返回在指定的位置的字符的 Unicode 编码。
* concat()：连接两个或更多字符串，并返回新的字符串。
* indexOf()： 返回某个指定的字符串值在字符串中首次出现的位置。
* lastIndexOf()：从后向前搜索字符串，并从起始位置（0）开始计算返回字符串最后出现的位置。
* localeCompare()：用本地特定的顺序来比较两个字符串。
* match()：查找找到一个或多个正则表达式的匹配。
* replace()：替换与正则表达式匹配的子串
* search()：检索与正则表达式相匹配的值
* slice()：提取字符串的片断，并在新的字符串中返回被提取的部分。
* split()：把字符串分割为子字符串数组。
* substr()：从起始索引号提取字符串中指定数目的字符。
* substring()：提取字符串中两个指定的索引号之间的字符。
* toLocaleLowerCase()：根据主机的语言环境把字符串转换为小写，只有几种语言（如土耳其语）具有地方特有的大小写映射。
* toLocaleUpperCase()：据主机的语言环境把字符串转换为大写，只有几种语言（如土耳其语）具有地方特有的大小写映射。
* toLowerCase()：把字符串转换为小写。
* toString()：返回字符串。
* toUpperCase()：把字符串转换为大写。
* valueOf()：返回指定字符串对象的原始值。

代码示例：
```
let str = new String( "This is string" );
console.log("str.constructor is:" + str.constructor) //str.constructor is:function String() { [native code] }

console.log("Length " + str.length)  // 输出 14

// string 方法
// charAt():charAt(pos: number): string;
console.log(str.charAt(1)); // h

//charCodeAt():charCodeAt(index: number): number;
console.log(str.charCodeAt(0)); // 84

// concat():concat(...strings: string[]): string;
console.log(str.concat(' and concat.')); // This is string and concat.

// indexOf():indexOf(searchString: string, position?: number): number;
console.log(str.indexOf('i')); // 2

// lastIndexOf():lastIndexOf(searchString: string, position?: number): number;
console.log(str.lastIndexOf('i')); // 11

// localeCompare():localeCompare(that: string, locales?: string | string[], options?: Intl.CollatorOptions): number;
console.log(str.localeCompare('This is string')); // 0
console.log(str.localeCompare('This')); // 1

// match():match(matcher: { [Symbol.match](string: string): RegExpMatchArray | null; }): RegExpMatchArray | null;
console.log(str.match(/is/g)); // [ 'is', 'is' ]

// replace():replace(searchValue: { [Symbol.replace](string: string, replaceValue: string): string; }, replaceValue: string): string;
const re = /(\w+)\s(\w+)/; 
const newstr = str.replace(re, "$2, $1"); 
console.log(newstr); // is, This string

// search():search(searcher: { [Symbol.search](string: string): number; }): number;
const reg1 = /this/gi;
const reg2 = /thisnotserarch/gi;
console.log(str.search(reg1)); // 0
console.log(str.search(reg2)); // -1

// slice():slice(start?: number, end?: number): string;
console.log(str.slice(0, 3)); // Thi

// split():split(splitter: { [Symbol.split](string: string, limit?: number): string[]; }, limit?: number): string[];
console.log(str.split('is', 10)); //  [ 'Th', ' ', ' string' ]
console.log(str.split('is', 1)); //  [ 'Th']

// substr():substr(from: number, length?: number): string;
console.log(str.substr(0, 6)); // This i

// substring():substring(start: number, end?: number): string;
console.log(str.substring(0, 6)); // This i

// toLocaleLowerCase():toLocaleLowerCase(locales?: string | string[]): string;
console.log(str.toLocaleLowerCase()); // this is string

// toLocaleUpperCase():toLocaleUpperCase(locales?: string | string[]): string;
console.log(str.toLocaleUpperCase()); // THIS IS STRING

// toLowerCase():toLowerCase(): string;
console.log(str.toLowerCase()); // this is string

// toString():toString(radix?: number): string;
console.log(new Number(5).toString()); // 5

// toUpperCase():toUpperCase(): string;
console.log(str.toUpperCase()) // THIS IS STRING

// valueOf():valueOf(): string;
console.log(str.valueOf()); // This is string
```
