// function vowelCount(inputString) {
//     var vowelList = 'aeiouAEIOU';
//     var vowelCount = 0

//     for (var x = 0; x < inputString.length; x++) {
//         if (vowelList.indexOf(inputString[x]) !== -1) {
//             vowelCount += 1;
//         }
//     }
//     return vowelCount;
// }
// console.log(vowelCount("The quick brown fox"));


function vowelCount(inputString) {
    var vowelList = 'aeiouAEIOU';
    var vowelCount = 0;




}

////// zadatak 3
function rotate(arr, k) {

    var narr = [];
    for (i = 0; i < arr.length - k; i++) {

        narr[i] = arr[i + k];
    }

    for (j = arr.length - k; j < arr.length; j++) {
        var m = k + j - arr.length;
        narr[j] = arr[m];
    }

    return narr;
}
console.log(rotate([1, 2, 3, 4, 5, 6], 3))

////zadatak 4
var a
var b = ""
function numToArr(a) {
    if (typeof (a) == "number") {
        for (i = a.length - 1; i >= 0; i--) {

            var b = a % 10
        } string = + b

    }
    return string
}

console.log(numToArr(552))




var num = 123456;
var digits = num.toString().split('');
console.log(digits);



var arr = []
var b = 1
function table() {
    for (i = 0; i < 12; i++) {
        arr[i] = (i + b)

        return arr
    }
    console.log(table)





























var c
var f

function convert(c) {
    f = c * 1.8 + 32
    return f
}
console.log(convert(100))



