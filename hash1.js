const {
    Image
} = require( 'image-js' );



async function execute() {
    let image = await Image.load( '200989.jpg' );
    let grey = image
        .grey() // convert the image to greyscale.
        .resize( {
            width: 8,
            height: 8
        } ) // resize the image, forcing a width of 8 pixels & height of 8 pixels.
    return grey.save( 'scaled.png' );
}


var arr = 321;


//0= black   128= Mid gray   255= white
async function hash(){
    let image = await Image.load( 'scaled.png' );

    var car = image.getMatrix( 0 );
    var imageMatrix = image.getPixelsArray();
    console.log( imageMatrix );

    //Mean of the image matrix
    const arrSum = array =>
        array.reduce(
            ( sum, num ) => sum + ( Array.isArray( num ) ? arrSum( num ) : num * 1 ), 0 );
    mean = ( arrSum( imageMatrix ) / 64 );



    //Declaring a new empty array
    let fruits = new Array( 64 );

    for ( i = 0; i < imageMatrix.length; i++ ) {
        if ( imageMatrix[ i ] < mean )
            fruits[ i ] = 0;
        else if ( imageMatrix[ i ] >= mean )
            fruits[ i ] = 1;
    }
    console.log( fruits ); 




    var x = fruits.toString();
    var out = ( x.replace( /,/g, '' ) );

    console.log( out );

    
}

(async () => {
         console.log(x = await hash())
        return x;
})()   
//console.log( out );



//execute().catch( console.error );

