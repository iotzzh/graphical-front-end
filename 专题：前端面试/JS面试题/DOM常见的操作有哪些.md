# DOM常见的操作有哪些

## 创建节点

### 创建元素
``` document.createElement("div") ```

### 创建文本节点
```document.createTextNode("content") ```

### 创建文档碎片
``` document.createDocumentFragment() ```

### 创建属性
``` document.createAttribute('custom') ```

## 获取节点
querySelector、querySelectorAll

## 更新节点
replaceChild、replaceChildren
innerHTML、innerText、textContent、style

## 添加节点
innerHTML、appendChild、insertBefore、setAttribute

## 删除节点
removeChild()
这里也可以使用空节点替换的方式