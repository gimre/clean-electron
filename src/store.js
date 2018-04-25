
const { combineReducers, createStore } = require( 'redux' )
const { INCREMENT_COUNT } = require( './constants' )

const count = ( state = 0, action ) => {
    switch( action.type ) {
        case INCREMENT_COUNT:
            return state + 1
        default:
            return state
    }
}

module.exports = createStore( combineReducers( {
    count
} ) )
