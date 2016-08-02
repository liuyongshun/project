$( "form" ).submit( function( ev ){
    ev.preventDefault();    

    var pass = $( ":password" ).map( function(){
        return $( this ).val()
    } );    

    if( pass[ 0 ] == pass[ 1 ] ){
        var data = $( this ).serialize();        
        $.post( "/data/register", data, function( res ) {
                    location.href = "home-login";
        } );
    }else{
        $( ".text" ).css( "color","red" )text( "两次密码不正确" );
    }
} );