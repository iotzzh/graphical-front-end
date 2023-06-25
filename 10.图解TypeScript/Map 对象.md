Map 对象保存键值对，并且能够记住键的原始插入顺序。
任何值(对象或者原始值) 都可以作为一个键或一个值。
Map 是 ES6 中引入的一种新的数据结构，可以参考 [ES6 Map 与 Set](https://www.runoob.com/w3cnote/es6-map-set.html)。

#### 创建map
```
let myMap = new Map();
```
or
```
let myMap = new Map([
        ["key1", "value1"],
        ["key2", "value2"]
]);
```
#### Map 相关的函数与属性：
* map.clear(): 移除 Map 对象的所有键/值对 。
* map.set(): 设置键值对，返回该 Map 对象。
* map.get(): 返回键对应的值，如果不存在，则返回 undefined。
* map.has(): 返回一个布尔值，用于判断 Map 中是否包含键对应的值。
* map.delete(): 删除 Map 中的元素，删除成功返回 true，失败返回 false。
* map.size: 返回 Map 对象键/值对的数量。
* map.keys(): 返回一个 Iterator 对象， 包含了 Map 对象中每个元素的键 。
* map.values(): 返回一个新的Iterator对象，包含了Map对象中每个元素的值 。

代码示例：
```
// interface Map<K, V> {
//     clear(): void;
//     delete(key: K): boolean;
//     forEach(callbackfn: (value: V, key: K, map: Map<K, V>) => void, thisArg?: any): void;
//     get(key: K): V | undefined;
//     has(key: K): boolean;
//     set(key: K, value: V): this;
//     readonly size: number;
// }

// interface MapConstructor {
//     new(): Map<any, any>;
//     new<K, V>(entries?: readonly (readonly [K, V])[] | null): Map<K, V>;
//     readonly prototype: Map<any, any>;
// }
// declare var Map: MapConstructor;

let myMap = new Map();

// 设置值
myMap.set('name', 'zzh');
myMap.set('height', '172');
myMap.set('age', '18');

// 获取值
console.log(myMap.get('name')); // zzh

// 判断是否包含某个key
console.log(myMap.has('name')); // true

console.log(myMap.keys()); //[Map Iterator] { 'name', 'height', 'age' }

console.log(myMap.values()); // [Map Iterator] { 'zzh', '172', '18' }

console.log(myMap.size); // 3

// zzh:name
// 172:height
// 18:age
myMap.forEach((key, value) => console.log(`${key}:${value}`));

myMap.delete('height');

// zzh:name
// 18:age
myMap.forEach((key, value) => console.log(`${key}:${value}`));

myMap.clear();

// 无输出
myMap.forEach((key, value) => console.log(`${key}:${value}`));

```