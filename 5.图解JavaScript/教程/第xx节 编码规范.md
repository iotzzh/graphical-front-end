函数：

命名规则：

获取：getXXX

计算：calcXXX

创建：createXXX

检查：checkXXX

改变：changeXXX

删除：deleteXXX

添加：addXXX

保存：saveXXX

提交：submitXXX

0. 语句可以加分号，可以不加，不加的情况下，由解析器确定语句在哪里结尾。
1. 语句结尾加分号，省略分号可能会出问题；
2. 语句结尾加分号，有助于某些情况下提升性能。

3. 即使一条语句，也推荐使用代码块。
```javascript
// NOT GOOD
if (true)
    console.log('hello world');

// GOOD
if (true) {
    console.log('hello world');
}
```