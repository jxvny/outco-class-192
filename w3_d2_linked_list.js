/*
 *  Homework - Linked List
 */

/*
 *
 *  ListNode class
 *
 *  Prompt:    Create a ListNode class
 *             The ListNode class should contain the following properties:
 *
 *                 value:   {Integer} (initially null)
 *                  next:   {ListNode} (initially null)
 *
 *               Example:   input: let sample1 = new ListNode(1)
 *                          sample1.value     // 1
 *                          sample1.next      // null
 *
 *               Example:   input: let sample2 = new ListNode()
 *                          sample2.value     // null
 *                          sample2.next      // null
 *
 *
 *  LinkedList class
 *
 *  Prompt:     Create a LinkedList class
 *              The LinkedList class should contain the following properties:
 *
 *                length:   {Integer}
 *                  head:   {ListNode}
 *                  tail:   {ListNode}
 *
 *              The LinkedList class should also contain the following methods:
 *
 *                append:   A method that appends a value to the end of the
 *                          LinkedList.
 *
 *                          Input:     value {Integer}
 *                          Output:    {undefined}
 *
 *                insert:   A method that inserts an integer value at a set
 *                          index in the LinkedList (assume head index is 0).
 *
 *                          Input:     value {Integer}
 *                          Input:     index {Integer}
 *                          Output:    {undefined}
 *
 *                delete:   A method that removes a node at a specified index.
 *
 *                          Input:     index {Integer}
 *                          Output:    {undefined}
 *
 *              contains:   A method that checks to see if a value is contained
 *                          in the list.
 *
 *                          Input:     value {Integer}
 *                          Output:    {Boolean}
 *
 */

'use strict';

class ListNode {
    constructor(value) {
        // YOUR WORK HERE
        constructor(value = null) {
            this.value = value;
            this.next = null;
        }
    }
}


class LinkedList {
    constructor() {
        // YOUR WORK HERE
        constructor() {
            this.length = 0;
            this.head = null;
            this.tail = null;

        }

        // Time Complexity: O(1)
        // Auxiliary Space Complexity: O(1)
        append(value) {
            // YOUR WORK HERE
            const newNode = new ListNode(value);
            this.tail.next = newNode;
        }

        // Time Complexity: O(n)
        // Auxiliary Space Complexity: O(1)
        insert(value, index) {
            // YOUR WORK HERE
            const newNode = new ListNode(value);
            let curr = this.head;
            for (let i = 0; i < index - 1; i++) {
                curr = curr.next;
            }
            curr.next = newNode;
        }
        this.length++;
    }

}

// Time Complexity: O(n)
// Auxiliary Space Complexity: O(1)

delete (index) {
    // YOUR WORK HERE
    let curr = this.head;
    for (let i = 0; i < index - 1; i++) {
        curr = curr.next;
    }
    curr.next = curr.next.next;
}

// Time Complexity: O(n)
// Auxiliary Space Complexity:O(1)
contains(value) {
    // YOUR WORK HERE
    let curr = this.head;
    while (curr !== null) {
        if (curr.value === value) {
            return true;
        }
        curr = curr.next;
    }
    return false;
}



////////////////////////////////////////////////////////////
///////////////  DO NOT TOUCH TEST BELOW!!!  ///////////////
////////////////////////////////////////////////////////////


console.log('ListNode Class');
let testCount = [0, 0];

assert(testCount, 'able to create an instance', () => {
    let node = new ListNode();
    return typeof node === 'object';
});

assert(testCount, 'has value property', () => {
    let node = new ListNode();
    return node.hasOwnProperty('value');
});

assert(testCount, 'has next property', () => {
    let node = new ListNode();
    return node.hasOwnProperty('next');
});

assert(testCount, 'has default value set to null', () => {
    let node = new ListNode();
    return node.value === null;
});

assert(testCount, 'able to assign a value upon instantiation', () => {
    let node = new ListNode(5);
    return node.value === 5;
});

assert(testCount, 'able to reassign a value', () => {
    let node = new ListNode();
    node.value = 5;
    return node.value === 5;
});

assert(testCount, 'able to point to another node', () => {
    let node1 = new ListNode(5);
    let node2 = new ListNode(10);
    node1.next = node2;
    return node1.next.value === 10;
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');



console.log('LinkedList Class');
testCount = [0, 0];

assert(testCount, 'able to create an instance', () => {
    let linkedList = new LinkedList();
    return typeof linkedList === 'object';
});

assert(testCount, 'has head property', () => {
    let linkedList = new LinkedList();
    return linkedList.hasOwnProperty('head');
});

assert(testCount, 'has tail property', () => {
    let linkedList = new LinkedList();
    return linkedList.hasOwnProperty('tail');
});

assert(testCount, 'has length property', () => {
    let linkedList = new LinkedList();
    return linkedList.hasOwnProperty('length');
});

assert(testCount, 'default head set to null', () => {
    let linkedList = new LinkedList();
    return linkedList.head === null;
});

assert(testCount, 'default tail set to null', () => {
    let linkedList = new LinkedList();
    return linkedList.tail === null;
});

assert(testCount, 'default length set to zero', () => {
    let linkedList = new LinkedList();
    return linkedList.length === 0;
});
console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');



console.log('LinkedList Insert Method');
testCount = [0, 0];

assert(testCount, 'has insert method', () => {
    let linkedList = new LinkedList();
    return Object.prototype.toString.apply(linkedList.insert) === '[object Function]';
});

assert(testCount, 'able to insert a node into empty linked list', () => {
    let linkedList = new LinkedList();
    linkedList.insert(5, 0);
    return linkedList.length === 1 &&
        linkedList.head.value === 5 &&
        linkedList.tail.value === 5;
});

assert(testCount, 'able to insert a node after another node', () => {
    let linkedList = new LinkedList();
    linkedList.insert(5, 0);
    linkedList.insert(10, 1);
    return linkedList.length === 2 &&
        linkedList.head.value === 5 &&
        linkedList.tail.value === 10;
});

assert(testCount, 'able to insert a node before another node', () => {
    let linkedList = new LinkedList();
    linkedList.insert(5, 0);
    linkedList.insert(10, 0);
    return linkedList.length === 2 &&
        linkedList.head.value === 10 &&
        linkedList.tail.value === 5;
});

assert(testCount, 'able to insert a node in between two nodes', () => {
    let linkedList = new LinkedList();
    linkedList.insert(5, 0);
    linkedList.insert(10, 1);
    linkedList.insert(7, 1);
    return linkedList.length === 3 &&
        linkedList.head.value === 5 &&
        linkedList.tail.value === 10 &&
        linkedList.head.next.value === 7;
});

assert(testCount, 'does not insert a node if index is out of bounds linked list', () => {
    let linkedList = new LinkedList();
    linkedList.insert(5, -1);
    linkedList.insert(10, 3);
    return linkedList.length === 0 &&
        linkedList.head === null &&
        linkedList.tail === null;
});
console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');



console.log('LinkedList Append Method');
testCount = [0, 0];

assert(testCount, 'has append method', () => {
    let linkedList = new LinkedList();
    return Object.prototype.toString.apply(linkedList.append) === '[object Function]';
});

assert(testCount, 'able to append a node into empty linked list', () => {
    let linkedList = new LinkedList();
    linkedList.append(5);
    return linkedList.length === 1 &&
        linkedList.head.value === 5 &&
        linkedList.tail.value === 5;
});

assert(testCount, 'able to append a second node', () => {
    let linkedList = new LinkedList();
    linkedList.append(5);
    linkedList.append(10);
    return linkedList.length === 2 &&
        linkedList.head.value === 5 &&
        linkedList.tail.value === 10;
});

assert(testCount, 'able to append a third node', () => {
    let linkedList = new LinkedList();
    linkedList.append(5);
    linkedList.append(10);
    linkedList.append(15);
    return linkedList.length === 3 &&
        linkedList.head.value === 5 &&
        linkedList.tail.value === 15;
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');



console.log('LinkedList Delete Method');
testCount = [0, 0];

assert(testCount, 'has delete method', () => {
    let linkedList = new LinkedList();
    return Object.prototype.toString.apply(linkedList.delete) === '[object Function]';
});

assert(testCount, 'able to delete a node from the head', () => {
    let linkedList = new LinkedList();
    linkedList.append(5);
    linkedList.append(10);
    linkedList.delete(0);
    return linkedList.length === 1 && linkedList.head.value === 10;
});

assert(testCount, 'able to delete a node from the tail', () => {
    let linkedList = new LinkedList();
    linkedList.append(5);
    linkedList.append(10);
    linkedList.delete(1);
    return linkedList.length === 1 && linkedList.tail.value === 5;
});

assert(testCount, 'able to delete a node in between two nodes', () => {
    let linkedList = new LinkedList();
    linkedList.append(5);
    linkedList.append(10);
    linkedList.append(15);
    linkedList.delete(1);
    return linkedList.length === 2 && linkedList.head.value === 5 &&
        linkedList.tail.value === 15;
});

assert(testCount, 'able to delete the only node in a linked list', () => {
    let linkedList = new LinkedList();
    linkedList.append(5);
    linkedList.delete(0);
    return linkedList.length === 0 && linkedList.head === null &&
        linkedList.tail === null;
});

assert(testCount, 'does not delete a node when the index is out of bounds', () => {
    let linkedList = new LinkedList();
    linkedList.append(5);
    linkedList.delete(-1);
    linkedList.delete(2);
    return linkedList.length === 1 && linkedList.head.value === 5 &&
        linkedList.tail.value === 5;
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');



console.log('LinkedList Contains Method');
testCount = [0, 0];

assert(testCount, 'has contains method', () => {
    let linkedList = new LinkedList();
    return Object.prototype.toString.apply(linkedList.contains) === '[object Function]';
});

assert(testCount, 'returns true if linked list contains value', () => {
    let linkedList = new LinkedList();
    linkedList.append(5);
    linkedList.append(10);
    linkedList.append(15);
    return linkedList.contains(15) === true;
});

assert(testCount, 'returns false if linked list does not contains value', () => {
    let linkedList = new LinkedList();
    linkedList.append(5);
    linkedList.append(10);
    linkedList.append(15);
    return linkedList.contains(8) === false;
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1]);


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
