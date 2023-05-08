## 前端npm镜像切换工具

## 问题记录
#### 问题1：Must use import to load ES Module
```cmd
nrm ls
internal/modules/cjs/loader.js:1085
      throw new ERR_REQUIRE_ESM(filename, parentPath, packageJsonPath);
      ^

Error [ERR_REQUIRE_ESM]: Must use import to load ES Module:
```
###### 解决方案
npm install -g nrm open@8.4.2 --save
###### 参考地址
https://juejin.cn/post/7212960463730819127