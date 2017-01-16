// EX 3: fix the function so that its array's function will output the right msg
var farray = [ 'first', 'fecond', 'fhird' ];




function outputter(array) {
    var a = [], i, msg;

    for (i = 0; i < array.length; i++) {
        msg = array[i];

        a[i] = dan(msg);

    }
    return a;
}

function dan(a) {
    // var msg2 = msg;

    return function () {
        console.log(a);
    }
}

var fout = outputter(farray);


fout[0]();
fout[1]();
fout[2]();