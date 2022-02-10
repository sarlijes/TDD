## Prerequisites

You'll need a recent [Node.js](https://nodejs.org/) version. Then download this project's dependencies with:

    npm install

## Developing

Run tests once

    npm run test

Run tests continuously

    npm run autotest

Code reformat

    npm run format

## Work load
| |Hours   |
|---|---|
|Planning & repo setup, linter|0.25|
|Helper function for getting the count of living neighbors of a cell|1.5|
|RLE|0.25|
|RLE|1.25|
|RLE reader + parser|1.5|
|Gameplay logic for ticking|2|
|Gameplay logic to utilize existing functions (1:40)|1.75|
|UI|---|
|?|---|
|total|??|

## Plan

[x] implement helper for getting the living neighbor count (+ isValid that uses it)
[x] Investigate RLE format & how to utilize it in the tests
[x] tests + reading the RLE file into a 2-dim array
[x] actual gameplay, inc. iterations
[x] tests + logic to for a function that takes input: 
    parsed file (2-dim array)
    iteration count
and calls play(arr, iterations)
and returns the new arr as encoded
[] UI