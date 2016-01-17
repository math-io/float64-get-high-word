'use strict';

// MODULES //

var isLittleEndian = require( 'utils-is-little-endian' );


// INDICES //

var HIGH;
if ( isLittleEndian ) {
	HIGH = 1; // second index
} else {
	HIGH = 0; // first index
}


// EXPORTS //

module.exports = HIGH;
