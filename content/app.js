const express = require( "express" ),
      bodyParser = require( "body-parser" ),
      template = require( "art-template" ),
      cookieParser = require( "cookie-parser" ),
      fs = require( "fs" ),
      app = express();

app.use( bodyParser.urlencoded( { extended: true } ) );
app.use( cookieParser() );
app.use( express.static( "public" ) );
app.engine( ".html", template.__express );
app.set( "view engine", "html" );


// 启动static
// app.get( "/",function( req, res ) {
//     var data = {
//         title: "hello everyone"
//     }
//     res.send( data );
// } );
// 启动views
app.post( "/",function( req, res ) {
    var data = {
        title: "hello everyone"
    }
    res.render( "home-login", data );
} );


// 注册
app.post( "/data/register", function( req, res ) {    
    fs.exists( "data", function( exists ){
        if( exists ) {
            var fileName = "data/user_msg.txt";
            fs.exists( fileName, function( exists ) {
                if( exists ) {
                    send( "用户存在！！！" );
                }else {
                    fs.appendFile( fileName, JSON.stringify( req.body ), function( err ) {
                        if ( err ) {
                            send( "系统错误" );
                        }
                        else {
                            send( "注册成功" );
                        }
                    } );
                };
            } );
        }else{
            fs.mkdir('data', function( err ) {
                if ( err ) {
                    send( "系统错误" );
                }else {
                    // var fileName = "data/user_msg.txt";
                    // fs.exists( fileName, function ( exists ) {
                    //     if( exists ) {
                    //         send( "用户存在！！！" );
                    //     }else {
                            fs.appendFile( fileName, JSON.stringify( req.body ), function( err ) {
                                if ( err ) {
                                    send( "系统错误" );
                                }
                                else {
                                    send( "注册成功" );
                                }
                            } );
                    //     };
                    // } );
                };
            } );
        };
    } );
} );


app.listen( 3000, function() {
    console.log( "启动服务。。。。。。。。。。。" );
} );