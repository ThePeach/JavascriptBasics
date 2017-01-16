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


function foo() {
    console.log( this.a );
}

var obj = {
    a: 2,
    foo: foo
};

var bar = obj.foo; // function reference/alias!

var a = "oops, global"; // `a` also property on global object

bar(); // "oops, global"