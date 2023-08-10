## 官网
https://www.solidjs.com

## 常用API
```javascript
// Signal 是最简单的 primitive。它们包含值，以及 get 和 set 函数，因此我们可以在读取和写入的时候进行拦截
const [count, setCount] = createSignal(0);

// Effect 是读取 Signal 的封装函数，并且会在依赖的 Signal 值发生变化时重新执行。这对于创建诸如渲染之类副作用很有用。
createEffect(() => console.log("The latest count is", count()));

// Memo 是缓存的派生值。
// 它们有着 Signal 和 Effect 相同的属性。Memo 跟踪自己的 Signal，仅在这些 Signal 发生变化时重新执行，并且本身是可跟踪的 Signal。
const fullName = createMemo(() => `${firstName()} ${lastName()}`);
```

## 生命周期
onMount、onCleanup、onError