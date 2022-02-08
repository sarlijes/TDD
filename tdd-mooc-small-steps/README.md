# [TDD MOOC](https://tdd.mooc.fi): Small, safe steps

This project contains exercises for [TDD MOOC's Exercise 2 (Small, safe steps)](https://tdd.mooc.fi/exercises#exercise-2-small-safe-steps).

First attempt for a solution available [here](https://github.com/sarlijes/TDD/blob/1-refactor/tdd-mooc-small-steps/src/prices.mjs) - note the feature branch - implemented by first creating parallel `if` logic depending on the type of the date (by using `instanceof`) and removing the original logic after converting to new `Temporal.PlainDate` class.


[Commits of first attempt](https://github.com/sarlijes/TDD/commits/1-refactor/tdd-mooc-small-steps)

[Commits of second attempt](https://github.com/sarlijes/TDD/commits/2-refactor/tdd-mooc-small-steps)

Technologies:

[JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) (ES6/ECMAScript 2015)

[Mocha](https://mochajs.org/) testing framework

[Chai](https://www.chaijs.com/) assertions

---

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
---
## Work load
|Hours   |
|---|
|3.00|
---

_This exercise is part of the [TDD MOOC](https://tdd-mooc.luontola.fi/) at the University of Helsinki, brought to you
by [Esko Luontola](https://twitter.com/EskoLuontola) and [Nitor](https://nitor.com/)._