'use strict';

var floor = require( 'math-floor' );
var pow = require( 'math-power' );
var highWord = require( './../lib' );

var frac;
var exp;
var w;
var x;
var i;

for ( i = 0; i < 100; i++ ) {
	frac = Math.random() * 10;
	exp = -floor( Math.random()*324 );
	x = frac * pow( 10, exp );
	w = highWord( x );
	console.log( 'x: %d. high word: %d.', x, w );
}
