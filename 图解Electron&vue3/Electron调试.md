## Debugging in vs code
Add a file .vscode/launch.json with the following configuration
```json
{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "compounds": [
    {
      "name": "Debug App",
      "preLaunchTask": "Before Debug",
      "configurations": [
        "Debug Main Process",
        "Debug Renderer Process"
      ],
      "presentation": {
        "hidden": false,
        "group": "",
        "order": 1
      },
      "stopAll": true
    }
  ],
  "configurations": [
    {
      "name": "Debug Main Process",
      "type": "pwa-node",
      "request": "launch",
      "runtimeExecutable": "${workspaceRoot}/node_modules/.bin/electron",
      "windows": {
        "runtimeExecutable": "${workspaceRoot}/node_modules/.bin/electron.cmd"
      },
      "runtimeArgs": [
        "--remote-debugging-port=9229",
        "."
      ],
      "envFile": "${workspaceFolder}/.vscode/.debug.env"
    },
    {
      "name": "Debug Renderer Process",
      "port": 9229,
      "request": "attach",
      "type": "pwa-chrome",
      "timeout": 60000
    },
  ]
}
```

然后就可以打断点进行调试了。



## 其他方式
自行研究
```
npm install -g node-gyp
```

参考地址：
https://www.electronjs.org/zh/docs/latest/tutorial/debugging-vscode
https://www.w3cschool.cn/electronmanual/u59k1qkp.html