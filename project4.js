(function () {
    test = 5;

    if (false) {
        var test = 3;
    } else {
        console.log(one(test));
    }

    function one(value) {
        return value + 1;
    }
}());
// 
// output: 6