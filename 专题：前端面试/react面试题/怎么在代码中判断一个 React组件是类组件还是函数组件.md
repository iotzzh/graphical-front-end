## 怎么在代码中判断一个 React组件是类组件还是函数组件
```javascript
function isClassComponent(component) {
  return (
    typeof component === 'function' &&
    !!component.prototype.isReactComponent
  );
}
```