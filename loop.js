const { Image } = require('image-js');

async function execute() {
    let image = await Image.load('IMG-20190906-WA0031.jpg');
    let grey = image
    .grey() // convert the image to greyscale.
    .resize({ width: 8,height: 8 }) // resize the image, forcing a width of 200 pixels. The height is computed automatically to preserve the aspect ratio.
    return grey.save('scaled.png');
}


execute().catch(console.error);

let N = 3;
function add(J,K,L)
{
    let i,j;
    for(i=0;i<3;i++)
    {
        for(j=0;j<3;j++)
        {
            C[i][j] = J[i][j] + K[i][j];
        }
    }
}

let J = [ [1, 1, 1],
[2, 2, 2],
[3, 3, 3]];

let K = [ [1, 1, 1],
[2, 2, 2],
[3, 3, 3]]; 

let C = new Array(3);
for ( let k = 0; k < N; k++ )
    for(j = 0;j < N;j++)
        C[ k ] = new Array( N );

add(J,K);

console.log( "Result matrix is" );
for ( i = 0; i < N; i++ ) {
  for ( j = 0; j < N; j++ )
    console.log( C[ i ][ j ] + '');
  console.log('\n')  
}

let sum = 0;

for(i=0;i<N;i++)
{
    for(j=0;j<N;j++)
    {
        sum =sum+C[i][j];
    }
}

let num_of_ele=i*j;
let mean = sum/num_of_ele;

console.log("Mean of the matrix is: "  + mean);

for(i=0;i<N;i++)
{
    for(j=0;j<N;j++)
    {
        if(C[i][j]<mean)
            C[i][j]=0;
        else if(C[i][j]>=mean)
            C[i][j]=1;
    }
}

console.log("Element after convertong to binary:");

for(i=0;i<N;i++)
{
    console.log("\n");
    for(j=0;j<N;j++)
    {
        console.log(C[i][j] + "\t");
    }
}