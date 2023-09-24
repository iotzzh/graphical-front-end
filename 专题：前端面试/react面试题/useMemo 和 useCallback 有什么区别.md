## useMemo 和 useCallback 有什么区别

在 React 中，useMemo 和 useCallback 都是用来优化性能的钩子函数，但它们的用途和作用稍有不同。

1. useMemo: useMemo 的主要作用是在组件重新渲染时，用来缓存计算结果，以避免不必要的重复计算。它接收两个参数：一个回调函数和一个依赖数组。回调函数用于进行计算，而依赖数组用于指定在数组中列出的依赖项发生变化时，才重新计算并返回新的值，否则会返回上一次缓存的值。
```javascript
const memoizedValue = useMemo(() => {
  // 进行耗时的计算
  return someValue;
}, [dependency1, dependency2]);
```
在上面的示例中，只有当 dependency1 或者 dependency2 发生变化时，useMemo 才会重新计算并返回新的值，否则会复用之前的值

2. useCallback: useCallback 的作用是在组件重新渲染时，返回一个记忆化的回调函数，以避免不必要的函数重新创建。它也接收两个参数：一个回调函数和一个依赖数组。当依赖项发生变化时，会返回一个新的回调函数，否则会复用之前的回调函数。
```javascript
const memoizedCallback = useCallback(() => {
  // 处理事件的回调函数
}, [dependency1, dependency2]);
```
在这个示例中，只有当 dependency1 或者 dependency2 发生变化时，useCallback 才会返回一个新的回调函数，否则会返回之前的回调函数。

#### 总结区别：
* useMemo 主要用于缓存计算结果，适用于任何需要缓存值的场景。
* useCallback 主要用于缓存回调函数，适用于需要传递给子组件的事件处理函数，以避免不必要的重新渲染。

另外，在大多数情况下，你不必在每个函数组件中都使用 useMemo 或 useCallback。

只有当你在性能测试中发现了性能问题，或者在特定情况下需要优化函数的创建和计算时，再考虑使用这些钩子。