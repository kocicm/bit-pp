//sortiraj brojeve iz dva niza(koji su prethodno sortirai??) i upisi u treci niz
//github airbnb
// var d= j+a.length;

//zadatak1

function merge(a, b) {
    var c = []; //k

    for (var i = 0; i < a.length; i++) {
        c[i] = a[i];
    }

    for (var j = 0; j < b.length; j++) {
        var d = j + a.length;
        c[d] = b[j];
    }

    return c;
}

var a = [4, 6, 11, 18, 32];
var b = [-1, 7, 13, 15];

console.log(merge(a, b));


//zadatak 2
//proveri da li su nizovi istih duzina i ukrsti ih

var a = [3, 8, 7];
var b = [6, 4, 13];

function mix(a, b) {
    var c = [];
    var d = 2;

    if (a.length != b.length) {
        console.log("nizovi nisu jednaki");
    } else {
        for (var i = 0; i < a.length; i++) {
            c[2 * i] = a[i];
            c[2*i +1] = b[i];
        }
        // for (var j = 0; j < b.length; j++) {
        //     c[2 * j + 1] = b[j];
        // }
    }
    return c
} console.log(mix(a, b));

//zadatak 3 