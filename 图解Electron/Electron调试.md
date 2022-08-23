## Debugging in vs code
Add a file .vscode/launch.json with the following configuration
```
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Debug Main Process",
      "type": "node",
      "request": "launch",
      "cwd": "${workspaceFolder}",
      "runtimeExecutable": "${workspaceFolder}/node_modules/.bin/electron",
      "windows": {
        "runtimeExecutable": "${workspaceFolder}/node_modules/.bin/electron.cmd"
      },
      "args" : ["."],
      "outputCapture": "std"
    }
  ]
}
```

然后就可以打断点进行调试了。


```
npm install -g node-gyp

```

参考地址：
https://www.electronjs.org/zh/docs/latest/tutorial/debugging-vscode
https://www.w3cschool.cn/electronmanual/u59k1qkp.html