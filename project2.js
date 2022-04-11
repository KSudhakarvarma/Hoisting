(function () {
    test = 5;

    if (false) {
        var test;
    } else {
        console.log(test + 2);
        console.log(test - 2);
        console.log(test * 2);
        console.log(test / 2);
        console.log(test % 2);
    }
}());

//output for the below test is : 
// console.log(test + 2);
// console.log(test - 2);
// console.log(test * 2);
// console.log(test / 2);
// console.log(test % 2);

// so, by this we can say test is a global variable.
