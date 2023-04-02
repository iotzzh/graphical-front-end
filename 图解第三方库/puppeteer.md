参考地址：
https://juejin.cn/post/6929695866940817416

参考代码
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  <style>
	* {
		margin: 0px;
		padding: 0px;
	}
  </style>
</head>

<body>
<table class="table-container">
  <!-- 每页固定头部 -->
  <thead class="table-header" style="background: #999;
    flex: 0 0 auto;">
    <tr class="table-row">
      <th class="table-row-item">
        <div class="page-header-wrapper">
          <header class="page-header">
            <div class="left">
              <div class="logo-wrapper">
                <div class="user-name">页头</div>
				<div class="user-name">页头</div>
				<div class="user-name">页头</div>
				<div class="user-name">页头</div>
				<div class="user-name">页头</div>
				<div class="user-name">页头</div>
				<span class=""pageNumber""></span> of <span class=""totalPages""></span>
              </div>
            </div>
          </header>
        </div>
      </th>
    </tr>
  </thead>

  <!-- 包裹段落容器 -->
  <tbody class="table-body">
    <tr class="table-row">
      <td class="table-row-item">
        <div class="container">
          <!-- 此处放置页面内容 -->
		  <div>测试</div>
		  		  <div>测试</div>		  <div>测试</div>
				  		  <div>测试</div>
						  		  <div>测试</div>
								  		  <div>测试</div>		  <div>测试</div>
										  		  <div>测试</div>
												  		 
			<div>测试</div>
			<div>测试</div>
			<div>测试</div><div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div><div>测试</div><div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div><div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div><div>测试</div><div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div><div>测试</div><div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
						<div>测试</div>
			<div>测试</div>
			<div>测试</div><div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div><div>测试</div><div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div><div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div><div>测试</div><div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div><div>测试</div><div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
						<div>测试</div>
			<div>测试</div>
			<div>测试</div><div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div><div>测试</div><div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div><div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div><div>测试</div><div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div><div>测试</div><div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
						<div>测试</div>
			<div>测试</div>
			<div>测试</div><div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div><div>测试</div><div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div><div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div><div>测试</div><div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div><div>测试</div><div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
						<div>测试</div>
			<div>测试</div>
			<div>测试</div><div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div><div>测试</div><div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div><div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div><div>测试</div><div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div><div>测试</div><div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
						<div>测试</div>
			<div>测试</div>
			<div>测试</div><div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div><div>测试</div><div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div><div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div><div>测试</div><div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div><div>测试</div><div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
						<div>测试</div>
			<div>测试</div>
			<div>测试</div><div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div><div>测试</div><div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div><div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div><div>测试</div><div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div><div>测试</div><div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
						<div>测试</div>
			<div>测试</div>
			<div>测试</div><div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div><div>测试</div><div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div><div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div><div>测试</div><div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div><div>测试</div><div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
						<div>测试</div>
			<div>测试</div>
			<div>测试</div><div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div><div>测试</div><div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div><div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div><div>测试</div><div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div><div>测试</div><div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
						<div>测试</div>
			<div>测试</div>
			<div>测试</div><div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div><div>测试</div><div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div><div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div><div>测试</div><div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div><div>测试</div><div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
						<div>测试</div>
			<div>测试</div>
			<div>测试</div><div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div><div>测试</div><div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div><div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div><div>测试</div><div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div><div>测试</div><div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
						<div>测试</div>
			<div>测试</div>
			<div>测试</div><div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div><div>测试</div><div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div><div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div><div>测试</div><div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div><div>测试</div><div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
						<div>测试</div>
			<div>测试</div>
			<div>测试</div><div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div><div>测试</div><div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div><div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div><div>测试</div><div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div><div>测试</div><div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div><div>测试</div>			<div>测试</div>
			<div>测试</div>
			<div>测试</div><div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div><div>测试</div><div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div><div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div><div>测试</div><div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div><div>测试</div><div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
        </div>
      </td>
    </tr>
  </tbody>

  <!-- 每页固定尾部 -->
  <tfoot class="table-footer">
    <tr class="table-row">
      <td class="table-row-item">
        <div class="page-footer">页尾</div>
      </td>
    </tr>
  </tfoot>
</table>
</body>

</html>
```