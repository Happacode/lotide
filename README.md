# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @happacode/lotide`

**Require it:**

`const _ = require('@happacode/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(assertArraysEqual)`: function that asserts if two arrays are equals
* `function2(assertEqual)`: function that asserts if two values are equals
* `function3(assertObjectsEqual)`: function that asserts if two objects are equals
* `function4(countLetters)`: function that returns counts of each letter of a string 
* `function5(countOnly)`: function that takes items and returns counts for a specific subset of those items 
* `function6(eqArrays)`: function that compares two arrays 
* `function7(eqObjects)`: function that compares two objects 
* `function8(findKey)`: function that scans the object and return the first key for which the callback returns a truthy value 
* `function9(findKeyByValue)`: function that searches for a key on an object where its value matches a given value 
* `function10(head)`:  function that retrieves the first element from the array 
* `function11(letterPositions)`:  function that returns all the indices in the string where each character is found 
* `function12(map)`:  function that creates a new array with the results of calling a provided function on every element in the calling array 
* `function13(middle)`:  function that returns the middle element of an array 
* `function14(tail)`:  function that retrieves every element except the head (first element) of the array 
* `function15(takeUntil)`:  function that returns a slice of the array with elements taken from the beginning 
* `function16(without)`:  function that removes elements from an array  
* `function17(index)`:  index object of all exported utility functions 
 
