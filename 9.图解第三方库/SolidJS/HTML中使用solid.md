
## 参考地址
https://www.solidjs.com/guides/getting-started#%E4%B8%8D%E4%BD%BF%E7%94%A8%E6%9E%84%E5%BB%BA%E5%B7%A5%E5%85%B7

https://www.skypack.dev/

## 注意事项
表达式必须始终包裹在 getter 函数中，否则它们将不会是响应式的

#### 示例
```javascript
html` <h1>Hello ${first() + " " + last()}</h1> `; // NOT WORK

html` <h1>Hello ${() => first() + " " + last()}</h1> `; // WORK
```

## 渲染函数
html、h