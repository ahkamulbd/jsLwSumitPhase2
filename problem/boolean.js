// Find out falsy value in an array:

const mixedArr = ['lws', undefined, 'learn with sumit', false, '', 'apple', 40, 'k', true, 0, '0', 'Thanks all', NaN];

const trueArray = mixedArr.filter(function (element) {
    if (element) {
        return true;
    }
    else {
        return false;
    }
});

//console.log(trueArray);

const trueBooleanArray = mixedArr.filter(Boolean);
console.log(trueBooleanArray);