# Hoisting


# Releases


## Release0:

1. What is the output?
```js
(function () {
    var test = 5;

    if (false) {
        test = 7;
    } else {
        console.log(test + 2);
    }
}());

<!-- **output: 7** -->


```

2. What is the output? Is `test` global?
```
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

// TEST IS A GLOBAL VARIABLE
<!-- **output:7** -->
<!-- **output:3** -->
<!-- **output:10** -->
<!-- **output:2.5** -->
<!-- **output:1** -->


```

3. What is the output? Will it error and break? Is `test` defined?
```js
(function () {
    if (false) {
        var test = 3;
    } else {
        console.log(test + 2);
    }
}());

// TEST IS NOT DEFINED 
<!-- **output: NAN ** -->

```

4. What is the output? Is `one` defined? Will it error? Or is it one of these digits: 3, 4, 5, or 6?

```js
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

// Here test is declared and <-- **one()** --> one is a function calling test as its value and assigned to "value=test" by the <-- funtion one(value) -->
<!-- **output:6** -->

```
