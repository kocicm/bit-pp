function maxNum(arr) {
    var max = arr[0]
      
    for (var index = 0; index < arr.length; index++) {
        if (typeof arr[index] != "number") {
            delete arr[index];
     }
        else if (arr[index] > max) {
            max = arr[index]

        }

    } return max

}

console.log(maxNum([1, 5, 7, 8, 'carape', 41, 2]));

///////////

