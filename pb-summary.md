# question 1
## 关于artTemplate的engine。

1. 指定以.html结尾的文件使用的解析引擎。  app.engine(".html", template.__express)；
2. 指定使用html视图引擎。  app.set("view engine", "html")；
3. 访问引擎指定的文件夹，需要看请求指定的路径。

### 实例：

	template.config("cache", false)
	//是否启用缓存。
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
    res.render("page", data)
	})
**通过127.0.0.1:3000/engine访问，127.0.0.1:3000不可访问。服务端会去views文件夹下找所需文件。而不是直接引用同级目录下的文件**

## addition one

### 判断读取views文件夹的内容，还是读取www文件夹的内容。

1. 在使用express模块，渲染的页面默认情况下会在一个叫views文件夹中找。
	代码：	 
    res.render("page", data)；
	//渲染，呈现视图，第一个参数指定视图文件名，第二参数是携带的数据

## addition two

### serialize()
1. serialize() 方法通过序列化表单值，创建 URL 编码文本字符串。
2. 您可以选择一个或多个表单元素（比如 input 及/或 文本框），或者 form 元素本身。
3. 序列化的值可在生成 AJAX 请求时用于 URL 查询字符串中。

	
	
# question 2

## express-middleware：中间件。app.use()

*是一个函数，它可以访问请求对象（request object (req)）, 响应对象（response object (res)）, 和 web 应用中处于请求-响应循环流程中的中间件，一般被命名为 next 的变量。*
    
	var app = express();    
    // 没有挂载路径的中间件，应用的每个请求都会执行该中间件。
    app.use(function (req, res, next) {
    console.log('Time:', Date.now());
    next();
    });


	
# question 3	

## 127.0.0.1:3000 （注意3000后面没有别的。单单访问3000）。

监听3000端口时。初次加载的页面。

1. 可以是这种方式app.get( "/", callback )指定。app.get属于哪个html，就加载哪个。
2. 也可以用指定静态文件的方式app.use(express.static(filename))，静态文件的方式会找到文件内index.html。没有index.html不行。



# question 4

## jQuery.getJSON(url, [data], [callback]);

url:发送请求地址。
data:待发送 Key/value 参数。
callback:载入成功时回调函数。

通过 HTTP GET 请求载入 JSON 数据。
您可以通过使用JSONP形式的回调函数来加载其他网域的JSON数据，如 "myurl?callback=?"。jQuery 将自动替换 ? 为正确的函数名，以执行回调函数。 注意：此行以后的代码将在这个回调函数执行前执行。



# question 5

