var x = 0;
var sum = 0;

for (x; x < 1000; x++) {
    if (x % 3 == 0 && x % 5 == 0) {
        sum = sum + x;
    }
}
console.log(sum);


var arr = ['1', 'A', 'B', "c", "r", true, NaN, undefined]
n = arr.length
d = ""

for (x = 0; x < n; x++) {
    d += arr[x];
}

console.log(d);

var x = 0
var k = 0
var s = 0
for (x = 0; x < 21; x++) {
    k = x * x
    s = s + k

}
console.log(s)


var a = [6, 5, 7, 19, 11, 18, 5, 11, 10];
var min = a[0]
var position = 0

var i;

for (i = 1; i < a.length; i++) {
    if (a[i] <= min) {
        min = a[i];
        position = i+1;
    }

}
console.log(min + " is on the position " + position)

