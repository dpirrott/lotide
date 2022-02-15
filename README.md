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
