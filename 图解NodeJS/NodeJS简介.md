## 是什么
NodeJS是一个程序，用来运行JS的。
Node.js 是一个事件驱动 I/O 服务端 JavaScript 环境，基于 Google 的 V8 引擎，V8 引擎执行 Javascript 的速度非常快，性能非常好。
NodeJS就是js的运行时，就像java的jvm，和C#的CLR。

node下载地址：https://nodejs.org/en/

###### 注：
Firefox 具有 SpiderMonkey
Safari 具有 JavaScriptCore（也称为 Nitro）
Edge 最初基于 Chakra，现在 V8 引擎重建。

## 管理Node版本的工具
nvm/nvm-windows
nvm-windows下载地址：https://github.com/coreybutler/nvm-windows/releases

## JS在浏览器中，与在Node中的区别：
不能使用DOM/BOM API，额外添加了NodeJS提供的API。
#### 浏览器中的JS
核心：ECMAScript
Web API: DOM、BOM、AJAX、Storage、console、定时器、alert/confirm....

#### NodeJS中的JS
核心：ECMAScript
Node API: fs、url、http、util、console、定时器、path.....

NodeJS中的顶级对象为global，也可以使用globalThis访问顶级对象。（globalThis ES2020）

在有了ES的基础之上，只需要了解下Node提供的API即可，参考地址（v18）：
https://nodejs.org/dist/latest-v18.x/docs/api/

目前有五十几个module，接下来就一个一个module进行尝试。
Assertion testing
Asynchronous context tracking
Async hooks
Buffer
C++ addons
C/C++ addons with Node-API
C++ embedder API
Child processes
Cluster
Command-line options
Console
Corepack
Crypto
Debugger
Deprecated APIs
Diagnostics Channel
DNS
Domain
Errors
Events
File system
Globals
HTTP
HTTP/2
HTTPS
Inspector
Internationalization
Modules: CommonJS modules
Modules: ECMAScript modules
Modules: node:module API
Modules: Packages
Net
OS
Path
Performance hooks
Permissions
Process
Punycode
Query strings
Readline
REPL
Report
Stream
String decoder
Test runner
Timers
TLS/SSL
Trace events
TTY
UDP/datagram
URL
Utilities
V8
VM
WASI
Web Crypto API
Web Streams API
Worker threads
Zlib
