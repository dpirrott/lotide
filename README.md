# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @dpirrotta/lotide`

**Require it:**

`const _ = require('@dpirrotta/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* "assertArraysEqual": Makes use of eqArrays to give a pass/fail statement depending on arrays being equal.
* "assertEqual": returns true if values are strict-equal to eachother (===).
* "eqArrays": returns true if arrays are identical.
* "head": returns the head of an array.
* "middle": returns the middle value of an array, if it's an even array, it will return the 2 middle values
* "tail": returns every value but the first value of the array.
* "countLetters": returns a count of all letters in string (spaces/symbols ignored)
* "countOnly": Counts only strings that have been given a value of true
* "eqObjects": Returns true if two objects are identical, can handle nested objects through recursion
* "findKey": searches through a nested object to find key matching first value which satisfies a callback function, returns key
* "findKeyByValue": searches through object to find value, then returns corresponding key
* "flatten": compresses nested arrays down to a linear array, assuming only one level of array nesting
* "index": Wildcard function that takes in a few of the functions mentioned above, and exports them from this one source. Doesn't include all functions, just for learning purposes a few were added.
* "letterPositions": Takes a string in, generates a callback function which will return the position of a letter that's passed in as a parameter.
* "map": Setup a function that will apply a method to every element of an array, similar to the actual map function.
* "takeUntil": A function that will keep taking in elements until a specified condition is met, then it stops there.
* "without": A function that takes in two parameters, a source and itemsToRemove, and returns source without any items from itemsToRemove.
