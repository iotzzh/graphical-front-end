## 安装python(如果已经安装，无需重复安装)
地址: https://www.python.org/downloads/

## 安装sqlite3
```npm install sqlite3 --save-dev```

## 打开数据库
```javascript
const sqlite3 = require('sqlite3');  // 引入 sqlite3 模块
const path = require('path');  // 引入路径处理模块

const dbName = path.join(__dirname, 'data.db');  // 获取当前运行目录下的 data.db 文件
// 打开数据库
const db = new sqlite3.Database(dbName, err => {
  if (err !== null) console.log(err);  // 输出错误信息
});
```