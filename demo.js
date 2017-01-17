// function baz() {
//     // call-stack is: `baz`
//     // so, our call-site is in the global scope
//
//     console.log( "baz" );
//     bar(); // <-- call-site for `bar`
// }
//
// function bar() {
//     // call-stack is: `baz` -> `bar`
//     // so, our call-site is in `baz`
//
//     console.log( "bar" );
//     foo(); // <-- call-site for `foo`
// }
//
// function foo() {
//     debugger;
//     // call-stack is: `baz` -> `bar` -> `foo`
//     // so, our call-site is in `bar`
//
//     console.log( "foo" );
// }
//
// baz(); // <-- call-site for `baz`


// function foo() {
//     console.log( this.a );
// }
//
// var obj = {
//     a: 2,
//     foo: foo
// };
//
// obj.foo(); // 2

// function foo() {
//     console.log( this.a );
// }
//
// var obj2 = {
//     a: 42,
//     foo: foo
// };
//
// var obj1 = {
//     a: 2,
//     obj2: obj2
// };
//
// obj1.obj2.foo(); // 42


// function foo(something) {
//     console.log( this.a, something );
//     return this.a + something;
// }
//
// var obj = {
//     a: 2
// };
//
// var bar = function() {
//     return foo.apply( obj, arguments );
// };
//
// var b = bar( 3 ); // 2 3
// console.log( b ); // 5


// function foo(something) {
//     console.log( this.a, something );
//     return this.a + something;
// }
//
// // simple `bind` helper
// function bind(fn, obj) {
//     return function() {
//         return fn.apply( obj, arguments );
//     };
// }
//
// var obj = {
//     a: 2
// };
//
// var bar = bind( foo, obj );
//
// var b = bar( 3 ); // 2 3
// console.log( b ); // 5


// function foo() {
//     console.log( this.a );
// }
//
// var obj = {
//     a: 2
// };
//
// var bar = function() {
//     foo.call( obj );
// };
//
// bar(); // 2
// setTimeout( bar, 100 ); // 2
//
// // `bar` hard binds `foo`'s `this` to `obj`
// // so that it cannot be overriden
// bar.call( global ); // 2


// function foo(something) {
//     console.log( this.a, something );
//     return this.a + something;
// }
//
// var obj = {
//     a: 2
// };
//
// var bar = function() {
//     return foo.apply( obj, arguments );
// };
//
// var b = bar( 3 ); // 2 3
// console.log( b ); // 5

//
// function foo(something) {
//     console.log( this.a, something );
//     return this.a + something;
// }
//
// // simple `bind` helper
// function bind(fn, obj) {
//     return function() {
//         return fn.apply( obj, arguments );
//     };
// }
//
// var obj = {
//     a: 2
// };
//
// var bar = bind( foo, obj );
//
// var b = bar( 3 ); // 2 3
// console.log( b ); // 5

// function foo(b) {
//     this.a = b;
// }
//
// var bar = new foo( 2 );
//
// console.log( bar.a ); // 2

function foo() {
    console.log( this.a );
}

var obj1 = {
    a: 2,
    foo: foo
};

var obj2 = {
    a: 3,
    foo: foo
};

obj1.foo(); // 2
obj2.foo(); // 3

obj1.foo.call( obj2 ); // 3
obj2.foo.call( obj1 ); // 2