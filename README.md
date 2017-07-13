packbits
========

An implementation of the [PackBits](https://en.wikipedia.org/wiki/PackBits) algorithm.


### Installation

    npm install packbits

### Usage

    var packbits = require('packbits');

Encode or decode a string of hex bytes with or without separating spaces.

#### encode

    packbits.encode('AA AA AA 80 00 2A AA AA AA AA 80 00 2A 22 AA AA AA AA AA AA AA AA AA AA');
    //-> FEAA0280002AFDAA0380002A22F7AA

#### decode

    packbits.decode('FE AA 02 80 00 2A FD AA 03 80 00 2A 22 F7 AA');
    //-> AAAAAA80002AAAAAAAAA80002A22AAAAAAAAAAAAAAAAAAAA

### Examples

See examples/ directory

