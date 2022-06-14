#### 问题描述
在js中，假设主线程执行需要1min，里面有个异步setTimeout，延迟1s中执行，那么，这个setTimeout里面的方法在什么时候执行。

#### 解答
###### 在运行到setTimeout后的1s中执行setTimeout内方法。
注：该问题是考察对异步的理解，因为JavaScript的执行环境是单线程的，方法本应按照一定的顺序的执行，那么异步在这里是应该在主线程完成后执行，还是会阻塞主线程，待完成后再进行主线程的方法。
###### 验证
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      function main() {
        console.log('1: ' + new Date());

        setTimeout(() => {
          console.log('2: ' + new Date());
        }, 5000);

        // 这里停顿5s
        sleep(console.log('3: ' + new Date()), 5000);
      }

      main();

      function sleep(duration) {
        return new Promise((resolve) => {
          setTimeout(resolve, duration);
        });
      }
    </script>
  </body>
</html>
```

运行结果：
```
1: Tue Jun 14 2022 23:23:21 GMT+0800 (中国标准时间)
3: Tue Jun 14 2022 23:23:21 GMT+0800 (中国标准时间)
2: Tue Jun 14 2022 23:23:26 GMT+0800 (中国标准时间)
```

