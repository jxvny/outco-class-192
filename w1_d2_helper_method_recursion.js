/*
 *  Homework - Helper Method Recursion
 *
 *  Solve the following problems using helper method recursion.
 */

'use strict';


/*
 * 1a. What is the term when the recursive call invokes itself more than once.
 *
 */


/*
 * 1b. List the steps involved to build a Helper Method Recursion algorithm.

Define a main function that will handle the original inputs and call the helper function.
Define a helper function that will handle the recursion and any additional parameters needed for recursion.
Identify the base case and return the base case value.
Identify the recursive case and break down the problem into smaller pieces, passing those pieces into the recursive function as arguments.
Update the helper function to include the calculation of the final result using the result of the recursive calls.
Return the final result from the main function.
 */


/*
 * 1c. Should the recursive case or base case typically be tackled first?
 *
 * typically the easiest part and defines the route the solution will follow
 */


/*
 * 2a. Print each item in an array in order
 *
 * Input:   arr {Array}
 * Output:  {undefined}
 *
 * Example: printArray([1,2,3]) =>
 *          1
 *          2
 *          3
 */
function printArray(arr) {
    // YOUR WORK HERE
    function traverseArray(arr, i) {
        if (i === arr.length) {
            return;
        }
        console.log(arr[i]);
        traverseArray(arr, i + 1);
    }
    traverseArray(arr, 0);
}




/*
 * 2b. Print each item in an array backwards
 *
 * Input:   arr {Array}
 * Output:  {undefined}
 *
 * Example: printReverse([1,2,3]) =>
 *          3
 *          2
 *          1
 */
function printReverse(arr) {
    // YOUR WORK HERE
    function helper(i) {
        if (i < 0) return;
        console.log(arr[i]);
        helper(i - 1);
    }
    helper(arr.length - 1);
}






/*
 * 2c. Reverse a string
 *
 * Input:   str {String}
 * Output:  {String}
 *
 * Example: reverseString('hello') => 'olleh'
 */
function reverseString(str) {
    // YOUR WORK HERE
    let reversedStr = '';

    function reverseHelper(idx) {
        if (idx < 0) {
            return;
        }
        reversedStr += str[idx];
        reverseHelper(idx - 1);
    }

    reverseHelper(str.length - 1);
    return reversedStr;
}



/*
 * 2d. Given an array of integers, create an array of two-item arrays
 *
 * Input:   arr {Array}
 * Output:  {Array}
 *
 * Example: arrayPairs([1, 2, 3, 4, 5, 6])  =>    [[1,2], [3,4], [5,6]]
 * Example: arrayPairs([1, 2, 3, 4, 5])     =>    [[1,2], [3,4], [5, undefined]]
 */
function arrayPairs(arr) {
    // YOUR WORK HERE
    const pairs = [];

    function createPair(a, b) {
        return [a, b];
    }

    function pairElements(start) {
        // Base case: if the start index is at the end of the array or there is only one element left
        if (start >= arr.length || start === arr.length - 1) {
            // Check if there is an odd number of elements in the array
            if (arr.length % 2 === 1) {
                // Add an array with the last element and undefined
                pairs.push(createPair(arr[arr.length - 1], undefined));
            }
            return;
        }

        // Recursive case: create a pair of elements and add it to the pairs array
        pairs.push(createPair(arr[start], arr[start + 1]));
        // Call pairElements recursively with the next starting index
        pairElements(start + 2);
    }

    pairElements(0);

    return pairs;
}


/*
 * 2e. Flatten a nested array
 *
 * Input:   arr {Array}
 * Output:  {Array}
 *
 * Example: flatten([1, [2, 3, [4]], 5, [[6]]]) => [1, 2, 3, 4, 5, 6]
 */
function flatten(arr) {
    // YOUR WORK HERE
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result = result.concat(flatten(arr[i]));
        } else {
            result.push(arr[i]);
        }
    }
    return result;
}


/*
 * 2f. Given a base and an exponent, create a function to find the power
 *
 * Input:   base {Integer}
 * Input:   exponent {Integer}
 * Output:  {Integer}
 *
 * Example: power(3, 4) => 81
 *
 * 1 --> 3 --> 9 --> 27 --> 81
 */
function power(base, exponent) {
    // YOUR WORK HERE
    function powerHelper(base, exponent, result) {
        if (exponent === 0) {
            return result;
        }
        return powerHelper(base, exponent - 1, result * base);
    }

    return powerHelper(base, exponent, 1);
}


/*
 * 2g. Merge two sorted arrays
 *
 * Input:   arr1 {Array}
 * Input:   arr2 {Array}
 * Output:  Array
 *
 * Example: merge([1, 4, 7], [2, 3, 6, 9]) => [1, 2, 3, 4, 6, 7, 9]
 */
function merge(arr1, arr2) {
    // YOUR WORK HERE
    const result = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }

    return result;
}



}





////////////////////////////////////////////////////////////
///////////////  DO NOT TOUCH TEST BELOW!!!  ///////////////
////////////////////////////////////////////////////////////


let testCount;

console.log('printArray tests');
testCount = [0, 0];

assert(testCount, 'able to print the elements of [1, 2, 3] forwards', () => {
    let record = captureLog(printArray, [1, 2, 3]);
    return record.length === 3 && record[0] === 1 &&
        record[1] === 2 && record[2] === 3;
});

assert(testCount, 'does not print for an empty array', () => {
    let record = captureLog(printArray, []);
    return record.length === 0;
});

assert(testCount, 'able to print a single element array [5]', () => {
    let record = captureLog(printArray, [5]);
    return record.length === 1 && record[0] === 5;
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');


console.log('printReverse tests');
testCount = [0, 0];

assert(testCount, 'able to print the elements of [1, 2, 3] backwards', () => {
    let record = captureLog(printReverse, [1, 2, 3]);
    return record.length === 3 && record[0] === 3 &&
        record[1] === 2 && record[2] === 1;
});

assert(testCount, 'does not print for an empty array', () => {
    let record = captureLog(printReverse, []);
    return record.length === 0;
});

assert(testCount, 'able to print a single element array [5]', () => {
    let record = captureLog(printReverse, [5]);
    return record.length === 1 && record[0] === 5;
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');


console.log('reverseString tests');
testCount = [0, 0];

assert(testCount, 'able to reverse string \'hello\'', () => {
    let test = reverseString('hello');
    return test === 'olleh';
});

assert(testCount, 'able to return an empty string for empty string input', () => {
    let test = reverseString('');
    return test === '';
});

assert(testCount, 'able to return the same character for a single-character input string', () => {
    let test = reverseString('b');
    return test === 'b';
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');


console.log('arrayPairs tests');
testCount = [0, 0];

assert(testCount, 'should return [[1, 2],[3, 4],[5, 6]] output for [1, 2, 3, 4, 5, 6] input', () => {
    let test = arrayPairs([1, 2, 3, 4, 5, 6]);
    return test.length === 3 &&
        test[0][0] === 1 && test[0][1] === 2 &&
        test[1][0] === 3 && test[1][1] === 4 &&
        test[2][0] === 5 && test[2][1] === 6;
});

assert(testCount, 'should return [[1, 2],[3, 4],[5, undefined]] output for [1, 2, 3, 4, 5] input', () => {
    let test = arrayPairs([1, 2, 3, 4, 5]);
    return test.length === 3 &&
        test[0][0] === 1 && test[0][1] === 2 &&
        test[1][0] === 3 && test[1][1] === 4 &&
        test[2][0] === 5 && test[2][1] === undefined;
});

assert(testCount, 'should return [] output for [] input', () => {
    let test = arrayPairs([]);
    return test.length === 0;
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');


console.log('flatten tests');
testCount = [0, 0];

assert(testCount, 'should return [1, 2, 3, 4, 5, 6] output for [1, [2, 3, [4]], 5, [[6]]] input', () => {
    let test = flatten([1, [2, 3, [4]], 5, [[6]]]);
    return test.length === 6 &&
        test[0] === 1 && test[1] === 2 &&
        test[2] === 3 && test[3] === 4 &&
        test[4] === 5 && test[5] === 6;
});

assert(testCount, 'should return [] output for [] input', () => {
    let test = flatten([]);
    return test.length === 0;
});

assert(testCount, 'should return [1, 2, 3, 4, 5, 6] output for [1, [2, 3, [4], []], [], 5, [[], [6]]] input (note the empty arrays)', () => {
    let test = flatten([1, [2, 3, [4], []], [], 5, [[], [6]]]);
    return test.length === 6 &&
        test[0] === 1 && test[1] === 2 &&
        test[2] === 3 && test[3] === 4 &&
        test[4] === 5 && test[5] === 6;
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');


console.log('power tests');
testCount = [0, 0];

assert(testCount, 'should return 81 for 3 to the 4th power', () => {
    let test = power(3, 4);
    return test === 81;
});

assert(testCount, 'should return 1 for 5 to the 0th power', () => {
    let test = power(5, 0);
    return test === 1;
});

assert(testCount, 'should return 1 for 1 to the 100th power', () => {
    let test = power(1, 100);
    return test === 1;
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');


console.log('merge tests');
testCount = [0, 0];

assert(testCount, 'should return [1, 2, 3, 4, 6, 7, 9] when merging [1, 4, 7] and [2, 3, 6, 9]' +
    ' and [2, 3, 6, 9]', () => {
        let test = merge([1, 4, 7], [2, 3, 6, 9]);
        return test.length === 7 && test[0] === 1 &&
            test[1] === 2 && test[2] === 3 &&
            test[3] === 4 && test[4] === 6 &&
            test[5] === 7 && test[6] === 9;
    });

assert(testCount, 'should handle inputs when left argument is empty array', () => {
    let test = merge([], [2, 3, 6, 9]);
    return test.length === 4 &&
        test[0] === 2 && test[1] === 3 &&
        test[2] === 6 && test[3] === 9;
});

assert(testCount, 'should handle inputs when right argument is empty array', () => {
    let test = merge([1, 4, 7], []);
    return test.length === 3 && test[0] === 1 &&
        test[1] === 4 && test[2] === 7;
});

assert(testCount, 'should handle two empty arrays as inputs', () => {
    let test = merge([], []);
    return test.length === 0;
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');


// captures all elements that were printed to the console
//
// input: method {Function} - function to execute
// input: {Array} - parameters for the function
// output: {Array} - array of all the captured logs
function captureLog(method, ...params) {
    let record = [];
    const log = console.log;
    console.log = (...args) => {
        record = record.concat(...args);
    };
    method(...params);
    console.log = log;
    return record;
}


// custom assert function to handle tests
// input: count {Array} - keeps track out how many tests pass and how many total
//        in the form of a two item array i.e., [0, 0]
// input: name {String} - describes the test
// input: test {Function} - performs a set of operations and returns a boolean
//        indicating if test passed
// output: {undefined}
function assert(count, name, test) {
    if (!count || !Array.isArray(count) || count.length !== 2) {
        count = [0, '*'];
    } else {
        count[1]++;
    }

    let pass = 'false';
    let errMsg = null;
    try {
        if (test()) {
            pass = ' true';
            count[0]++;
        }
    } catch (e) {
        errMsg = e;
    }
    console.log('  ' + (count[1] + ')   ').slice(0, 5) + pass + ' : ' + name);
    if (errMsg !== null) {
        console.log('       ' + errMsg + '\n');
    }
}
