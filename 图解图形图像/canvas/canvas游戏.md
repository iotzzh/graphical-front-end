游戏其实就是在动画的基础上添加了控制，也就是添加键盘和鼠标的事件监听。添加事件的方法前面已经学过，添加键盘事件和普通节点对象的键盘事件相同，只是canvas中的鼠标事件需要做一些处理。
#### 鼠标事件
在鼠标事件中，鼠标指针所处位置的坐标是非常重要的属性，鼠标事件中只能获取相对于屏幕左上角和相对浏览器文档左上角的坐标，而canvas中使用的是自己的坐标系，因此需要将获取的坐标转换为canvas中的坐标。在转换之前，首先获取canvas在浏览器中的位置，可以通过getBoundingClientRect方法获取。例如下面的方法将浏览器中的坐标转换为canvas中的坐标：
```javascript
        function convertToCanvas(canvas, x, y){
            var canvasElement = canvas.getBoundingClientRect();
            return {
                x: (x - canvasElement.left) * (canvas.width / canvasElement.width),
                y: (y - canvasElement.top) * (canvas.height / canvasElement.height)
            };
        }

```

转换逻辑：
* 先使用鼠标事件中相对于浏览器文档的坐标减去canvas左上角的坐标
* 然后进行相应的缩放

示例：
点中圆中5分，没点中扣3分。
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <canvas id='c2d' width="300" height="300">浏览器不支持canvas</canvas>
    <script>
        const canvas = document.getElementById('c2d');
        
        function convertToCanvas(canvas, x, y){
            var canvasElement = canvas.getBoundingClientRect();
            return {
                x: (x - canvasElement.left) * (canvas.width / canvasElement.width),
                y: (y - canvasElement.top) * (canvas.height / canvasElement.height)
            };
        }
        
        if (canvas.getContext) {
            let ctx = canvas.getContext('2d');

            let path, scoreArea = {w:300, h:50};
            function drawObj(){
                const offsetX = 0, offsetY = scoreArea.h;
                
                ctx.save();
                ctx.clearRect(offsetX, offsetY, 300,300);

                const r = 30;
                const x = r + offsetX + Math.round(Math.random() * (canvas.width - 2 * r - offsetX));
                const y = r + offsetY + Math.round(Math.random() * (canvas.height - 2 * r -offsetY));

                path = new Path2D();
                path.arc(x,y,r,0,2*Math.PI);
                ctx.stroke(path);
            }

            window.setInterval(drawObj, 2000);

            let score = 3;

            function drawScore(isTrue){
                score += isTrue ? 5 : -3;

                ctx.save();
                ctx.fillStyle = 'red';
                ctx.clearRect(0,0,scoreArea.w, scoreArea.h);
                ctx.fillText('得分：' + score, 30,30);
                ctx.restore();
            }

            drawScore(false);

            canvas.onclick = function(event){
                const p = convertToCanvas(canvas, event.pageX, event.pageY);
                drawScore(ctx.isPointInPath(path,p.x,p.y));
            }

        }
    </script>
</body>

</html>

```
![](https://upload-images.jianshu.io/upload_images/2789632-8b2703200006b4e9.gif?imageMogr2/auto-orient/strip)
