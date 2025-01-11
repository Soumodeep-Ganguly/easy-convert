# Easy Unit Converter

![npm version](https://badge.fury.io/js/easy-unit-converter.svg) ![license](https://img.shields.io/badge/license-MIT-green.svg)

[![NPM](https://nodei.co/npm/easy-unit-converter.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/easy-unit-converter/)


### Introduction

A simple and efficient unit conversion tool to seamlessly convert between various units of measurement. Whether you're working with length, weight, area or computer storage, easy-unit-converter offers an easy-to-use solution for all your conversion needs. With support for both standard and custom units, this tool makes unit conversion straightforward and accessible for developers and non-developers alike.

For now it supports:

- Length (distance)
- Mass (weight)
- Area
- Computer storage

### Installation:

`npm install --save easy-unit-converter`

### Test:

`npm run test`

or

`npm test`

### Example:

```
const { convert } = require('easy-unit-converter');

// ------------- OR -----------------

import { convert } from "easy-unit-converter";

// You can use the unit name
console.log(convert(1000, "meter").to("kilometer")) // 1

// You can also use the abbreviation of the unit
console.log(convert(1000, "m").to("km")) // 1

// You can get the unit in decimal values
console.log(convert(1000, "meter").to("kilometer", 2)) // 1.00
```


### Supported units :

#### Distance

Unit         | Abbreviation
------------ | :------------:
mil          |  mil
inch         |   in
foot         |   ft
yard         |   yd
mile         |   mi
capefoot     |   cp
rod          |   rd
angstrom     |   A
nanometer    |   n
micron       |   µ
millimeter   |   mm
centimeter   |   cm
meter        |   m
kilometer    |   km
light-year   |   ly
light-day    |   ld
light-hour   |   lh
light-minute |   lm
light-second |   ls

#### Weight

Unit                    | Abbreviation
----------------------- | :------------:
carat (metric)          |     ct
point (metric)          |     pt
gram                    |     g
kilogram                |     kg
megagram                |     Mg
milligram               |     mg
ounce                   |     oz
pound                   |     lb
stone                   |     st
ton                     |     t

#### Area

Unit              | Abbreviation
----------------- | :----------:
square inch       |   in2
square foot       |   ft2
square yard       |   yd2
square mile       |   mi2
acre              |   ac
hectare           |   ha
square millimeter |  mm2
square centimeter |  cm2
square meter      |   m2
square kilometer  |   km2

#### Computer storage

Unit      | Abbreviation
--------- | :-----------:
bit       |   b
kilobit   |   kb
megabit   |   Mb
gigabit   |   Gb
terabit   |   Tb
petabit   |   Pb
exabit    |   Eb
zettabit  |   Zb
yottabit  |   Yb
nibble    | nibble
byte      |   B
kilobyte  |   kB
megabyte  |   MB
gigabyte  |   GB
terabyte  |   TB
petabyte  |   PB
exabyte   |   EB
zettabyte |   ZB
yottabyte |   YB


