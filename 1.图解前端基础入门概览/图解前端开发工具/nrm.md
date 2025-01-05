## 前端npm镜像切换工具

## NRM问题记录
### 问题1 Must use import to load ES Module
```cmd
nrm ls
internal/modules/cjs/loader.js:1085
      throw new ERR_REQUIRE_ESM(filename, parentPath, packageJsonPath);
      ^

Error [ERR_REQUIRE_ESM]: Must use import to load ES Module:
```
#### 解决方案
npm install -g nrm open@8.4.2 --save

npm install Pana/nrm -g

#### 参考地址
https://juejin.cn/post/7212960463730819127

### 问题2 node 18.15.0安装nrm报错
报错信息：Error [ERR_REQUIRE_ESM]: require() of ES Module
```
Error [ERR_REQUIRE_ESM]: require() of ES Module C:\Users\zhangzhonghua.HS921593\AppData\Roaming\nvm\v18.15.0\node_modules\nrm\node_modules\open\index.js from C:\Users\zhangzhonghua.HS921593\AppData\Roaming\nvm\v18.15.0\node_modules\nrm\cli.js not supported.
Instead change the require of index.js in C:\Users\zhangzhonghua.HS921593\AppData\Roaming\nvm\v18.15.0\node_modules\nrm\cli.js to a dynamic import() which is available in all CommonJS modules.
    at Object.<anonymous> (C:\Users\zhangzhonghua.HS921593\AppData\Roaming\nvm\v18.15.0\node_modules\nrm\cli.js:9:14) {
  code: 'ERR_REQUIRE_ESM'
}

Node.js v18.15.0
```

#### 解决方案
npm install -g nrm open@8.4.2 --save
npm install Pana/nrm -g
https://blog.csdn.net/liuxin_hello/article/details/127801953

