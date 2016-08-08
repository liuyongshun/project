# question 1

### 关于artTemplate的engine。

1. 指定以.html结尾的文件使用的解析引擎。  app.engine(".html", template.__express)；
2. 指定使用html视图引擎。  app.set("view engine", "html")；
3. 访问引擎指定的文件夹views，需要看响应是send还是render。send默认进入（www文件夹找index.html），render默认进入views。

### 实例：
	
	template.config("cache", false)
	//是否启用缓存。
	app.use( express.static( "www" ) )
	app.set("view engine", "html")；
	app.engine(".html", template.__express)；
	app.get("/engine", (req, res) => {
    var data = {
        title: "服务器端模板数据2",
        books: [
            {
                name: "重构-改善既有代码的设计2"
            },
            {
                name: "大话设计模式2"
            }
        ]
    }
	//渲染，呈现视图，第一个参数指定视图文件名，第二参数是携带的数据。
    res.render("page", data)
	});
	
**1.通过127.0.0.1:3000/engine访问，会进入views找.html文件。通过127.0.0.1:3000访问会进入www文件夹找index.html文件。**

**2.console.log('Request URL:', req.originalUrl);可以查看打开的路径是那个。从而判断打开的是views还是www内的文件。**

## addition one

### serialize()

1. serialize() 方法通过序列化表单值，创建 URL 编码文本字符串。

2. 您可以选择一个或多个表单元素（比如 input 及/或 文本框），或者 form 元素本身。

3. 序列化的值可在生成 AJAX 请求时用于 URL 查询字符串中。

	
	
# question 2

### express-middleware：中间件。app.use()

*是一个函数，它可以访问请求对象（request object (req)）, 响应对象（response object (res)）, 和 web 应用中处于请求-响应循环流程中的中间件，一般被命名为 next 的变量。*
    
	var app = express();    
    // 没有挂载路径的中间件，应用的每个请求都会执行该中间件。
    app.use(function (req, res, next) {
		console.log('Time:', Date.now());
		next();
    });
	//下边是挂载路径的情况。凡是有/user/:id的请求都会触发。下边的回调。（该方法会按照流从上到下找到合适的遍执行，会阻断下边的执行。）
	app.use('/user/:id', function (req, res, next) {
		console.log('Request Type:', req.method);
		next();
    });

	
# question 3	

### 127.0.0.1:3000 （注意3000后面没有别的。单单访问3000）。

监听3000端口时。初次加载的页面。

1. 可以是这种方式app.get( "/", callback )指定。如果没有app.use( express.static( "www" ) )。只会发送“success”数据，而不加载页面。即使index.html的form设置为<form action="/" method="GET">。

	### app.js代码：
	
	const express = require( "express" ),
          app = express()
	// app.use( express.static( "www" ) )
	app.get( "/", function( req, res ) {
		console.log( 2 )
		res.send( "success" )
	} )
	app.listen( 3000, function() { 
		console.log( "running" )
	} )
	
	### index.html代码：
	
	<html>
		<head>
			<meta charset="utf-8">
			<meta name="author" content="刘永顺">
			<title></title>
		</head>
		<body>
			<form action="">
				<input type="submit">
			</form>
		</body>
	</html>
	
2. 也可以用指定静态文件的方式app.use(express.static(filename))，静态文件的方式会找到文件内index.html。没有index.html不行。



# question 4

## jQuery.getJSON(url, [data], [callback]);

url:发送请求地址。
data:待发送 Key/value 参数。
callback:载入成功时回调函数。

通过 HTTP GET 请求载入 JSON 数据。
您可以通过使用JSONP形式的回调函数来加载其他网域的JSON数据，如 "myurl?callback=?"。jQuery 将自动替换 ? 为正确的函数名，以执行回调函数。 注意：此行以后的代码将在这个回调函数执行前执行。



# question 5

### express：完整的路由。

**路由是由一个 URI、HTTP 请求（GET、POST等）和若干个句柄组成。结构：app.METHOD(path, [callback...], callback)。---- app 是 express 对象的一个实例， METHOD 是一个 HTTP 请求方法， path 是服务器上的路径， callback 是当路由匹配时要执行的函数。**
### 句柄：
一个句柄是指使用的一个唯一的整数值，即一个4字节(64位程序中为8字节)长的数值，来标识应用程序中的不同对象和同类中的不同的实例。类似指针但不是指针。（路由中的回调函数就是句柄）。
*路由句柄：可以为请求处理提供多个回调函数，其行为类似 中间件*



# question 6

### response响应方法。

    res.download() 	提示下载文件。
	res.end() 	终结响应处理流程。
	res.json() 	发送一个 JSON 格式的响应。
	res.jsonp() 	发送一个支持 JSONP 的 JSON 格式的响应。
	res.redirect() 	重定向请求。
	res.render() 	渲染视图模板。
	res.send() 	发送各种类型的响应。
	res.sendFile 	以八位字节流的形式发送文件。
	res.sendStatus() 	设置响应状态代码，并将其以字符串形式作为响应体的一部分发送。
	

# question 7

### express应用生成器。

**能够帮助自己快速创建express包。一个空的模版*

	step1（步骤）:
	$ npm install express-generator -g
	notice(注意):
	$ express -h
	step2:
	$ express myapp  创建myapp的应用（一个模版文件夹）
	step3:
	$ cd myapp       进入myapp
	$ npm install    安装依赖包
	step4:
	> set DEBUG=myapp & npm start   //windows输入该命令启动。
	

# question 8

### 































	