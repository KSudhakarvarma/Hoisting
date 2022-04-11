(function () {
    var test = 5;

    if (false) {
        test = 7;
    } else {
        console.log(test + 2);
    }
}());
//  output is:  7