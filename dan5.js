"use strict"
var a = -5;
var b = 0;
var c = 17;

if (a <= b && b <= c) { console.log(a, b, c); }
else if (a <= c && c <= b) { console.log(a, c, b); }
else if (b <= a && a <= c) { console.log(b, a, c); }
else if (b <= c && c <= a) { console.log(b, c, a); }
else if (c <= a && a <= b) { console.log(c, a, b); }
else if (c <= b && b <= a) { console.log(c, b, a); }


if (a > b && a > c) {

    if (c < b) {
        //c, b
        console.log(c, b, a);
    }
    else {
        //b, c
    }
    //a

}

if (b > c && b > a) {



    //b
}