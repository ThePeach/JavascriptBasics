// // EX 3: fix the function so that its array's function will output the right msg
// var farray = [ 'first', 'fecond', 'fhird' ];
//
//
//
//
// function outputter(array) {
//     var a = [], i, msg;
//
//     for (i = 0; i < array.length; i++) {
//         msg = array[i];
//
//         a[i] = dan(msg);
//
//     }
//     return a;
// }
//
// function dan(a) {
//     // var msg2 = msg;
//
//     return function () {
//         console.log(a);
//     }
// }
//
// var fout = outputter(farray);
//
//
// fout[0]();
// fout[1]();
// fout[2]();




// function foo(a) {
//     console.log( a + b );
// }
//
// var b = 2;
//
// foo( 2 );


// console.log(b);
//
// var b = 2;


// function foo(a) {
//     console.log( a + b );
//     // b = a;
// }
//
// foo( 2 );

// function foo(a) {
//
//     var b = a * 2;
//
//     function bar(c) {
//         console.log( a, b, c );
//     }
//
//     bar(b * 3);
// }
//
// foo( 2 );


// function foo(str, a) {
//     eval( str ); // cheating!
//     console.log( a, b );
// }
//
// var b = 2;
//
// foo( "var b = 3;", 1 );


// function hello() {
//     var num;
//
//     for (var i=0; i<3; ++i)
//     {
//         num = i;
//         // console.log(num);
//
//         setTimeout(function() { console.log(num); }, 1000);
//     }
//     console.log('finished');
// }
//
// hello();


// for (var i=0; i<3; ++i)
// {
//     // variables introduced in this statement
//     // are scoped to the block containing it.
//     let num = i;
//     setTimeout(function() { console.log(num); }, 10);
// }

// for (let i=0; i<3; ++i)
// {
//     setTimeout(function() { console.log(i); }, 10);
// }

// for (var i=0; i<3; ++i)
// {
//     // object members introduced in this statement
//     // are scoped to the block following it.
//     with ({num: i})
//     {
//         setTimeout(function() { console.log(num); }, 10);
//     }
// }

// function wait(message) {
//
//     setTimeout( function timer(){
//         console.log( message );
//     }, 1000 );
//
//     console.log('end of function');
// }
//
// wait( "Hello, closure!" );

// for (var i=1; i<=5; i++) {
//
//     setTimeout( function timer(){
//         console.log( i );
//     }, i*1000 );
//
//     console.log('end iteration');
// }
//
// console.log('end loop');

// for (var i=1; i<=5; i++) {
//     (function(){
//         setTimeout( function timer(){
//             console.log( i );
//         }, i*1000 );
//     })();
// }

// for (var i=1; i<=5; i++) {
//
//     (function(){
//         var j = i;
//         setTimeout( function timer(){ console.log( j );}, j*1000 );
//     })();
//
// }



// for (var i=1; i<=5; i++) {
//
//     (function(j){
//
//         setTimeout( function timer(){
//             console.log( j );
//         }, j*1000 );
//
//     })( i );
// }

// for (var i=1; i<=5; i++) {
//     let j = i; // yay, block-scope for closure!
//     setTimeout( function timer(){
//         console.log( j );
//     }, j*1000 );
// }


// for (let i=1; i<=5; i++) {
//     setTimeout( function timer(){
//         console.log( i );
//     }, i*1000 );
// }
//
// console.log('end for');


function foo() {
    var something = "cool";
    var another = [1, 2, 3];

    function doSomething() {
        console.log( something );
    }

    function doAnother() {
        console.log( another.join( " ! " ) );
    }
}