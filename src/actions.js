
const { INCREMENT_COUNT } = require( './constants' )

module.exports = {
    incrementCount: ( ) => ( {
        type: INCREMENT_COUNT
    } )
}
