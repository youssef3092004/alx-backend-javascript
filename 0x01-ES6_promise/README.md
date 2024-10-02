# 0x01. ES6 Promises

## Description
This project covers the basics of ES6 Promises, a powerful feature in JavaScript for handling asynchronous operations.

## Learning Objectives
- Understand the concept of Promises in JavaScript
- Learn how to create and use Promises
- Handle asynchronous operations using `.then()`, `.catch()`, and `.finally()`
- Chain multiple Promises
- Use `Promise.all()` and `Promise.race()`

## Table of Contents
1. [Introduction to Promises](#introduction-to-promises)
2. [Creating Promises](#creating-promises)
3. [Using `.then()`, `.catch()`, and `.finally()`](#using-then-catch-and-finally)
4. [Chaining Promises](#chaining-promises)
5. [Promise Methods](#promise-methods)

## Introduction to Promises
Promises are objects that represent the eventual completion (or failure) of an asynchronous operation and its resulting value.

## Creating Promises
To create a Promise, use the `new Promise` constructor, which takes a function with two arguments: `resolve` and `reject`.

```javascript
const myPromise = new Promise((resolve, reject) => {
    // asynchronous operation
});
```

## Using `.then()`, `.catch()`, and `.finally()`
- `.then()` is used to handle the resolved value of a Promise.
- `.catch()` is used to handle errors.
- `.finally()` is executed regardless of the Promise's outcome.

```javascript
myPromise
    .then(value => {
        // handle success
    })
    .catch(error => {
        // handle error
    })
    .finally(() => {
        // cleanup or final steps
    });
```

## Chaining Promises
Promises can be chained to handle a sequence of asynchronous operations.

```javascript
myPromise
    .then(value => {
        return anotherPromise;
    })
    .then(anotherValue => {
        // handle the next value
    });
```

## Promise Methods
- `Promise.all()`: Waits for all Promises to resolve.
- `Promise.race()`: Resolves or rejects as soon as one of the Promises resolves or rejects.

```javascript
Promise.all([promise1, promise2])
    .then(values => {
        // handle all resolved values
    });

Promise.race([promise1, promise2])
    .then(value => {
        // handle the first resolved value
    });
```

## Resources
- [MDN Web Docs: Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [JavaScript Info: Promises](https://javascript.info/promise)
